import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ANIMALS = [
  { id: "alligator", name: "Alligator", emoji: "🐊", color: "#4a7c59", sound: "SNAP!" },
  { id: "frog", name: "Frog", emoji: "🐸", color: "#5b8c3e", sound: "RIBBIT!" },
  { id: "turtle", name: "Turtle", emoji: "🐢", color: "#2d8a6e", sound: "..." },
  { id: "snake", name: "Snake", emoji: "🐍", color: "#7a8b3a", sound: "HISSS!" },
  { id: "heron", name: "Heron", emoji: "🦩", color: "#c2707b", sound: "SQUAWK!" },
  { id: "fish", name: "Fish", emoji: "🐟", color: "#3d8b9e", sound: "SPLASH!" },
  { id: "dragonfly", name: "Dragonfly", emoji: "🪰", color: "#5a9ebd", sound: "BUZZ!" },
  { id: "duck", name: "Duck", emoji: "🦆", color: "#b8953a", sound: "QUACK!" },
  { id: "beaver", name: "Beaver", emoji: "🦫", color: "#8b6340", sound: "CHOMP!" },
  { id: "flamingo", name: "Flamingo", emoji: "🦩", color: "#d4789c", sound: "HONK!" },
];

const GRID_COLS = 5;
const GRID_ROWS = 2;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generatePositions() {
  const positions = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      positions.push({ row: r, col: c });
    }
  }
  return positions;
}

function StarBurst({ x, y }) {
  const stars = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div style={{ position: "absolute", left: x, top: y, pointerEvents: "none", zIndex: 100 }}>
      {stars.map((i) => {
        const angle = (i / 8) * 360;
        const dist = 30 + Math.random() * 30;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              fontSize: `${14 + Math.random() * 10}px`,
              animation: `starfly 0.7s ease-out forwards`,
              transform: `translate(-50%, -50%)`,
              left: 0,
              top: 0,
              "--tx": `${Math.cos((angle * Math.PI) / 180) * dist}px`,
              "--ty": `${Math.sin((angle * Math.PI) / 180) * dist}px`,
            }}
          >
            ⭐
          </div>
        );
      })}
    </div>
  );
}

export default function SwampPuzzle() {
  const nav = useNavigate();
  const [targetOrder] = useState(() => shuffleArray(ANIMALS));
  const [pieceOrder, setPieceOrder] = useState(() => shuffleArray(ANIMALS));
  const [placed, setPlaced] = useState({});
  const [dragging, setDragging] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [hoverSlot, setHoverSlot] = useState(null);
  const [celebrations, setCelebrations] = useState([]);
  const [soundPop, setSoundPop] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [wrongShake, setWrongShake] = useState(null);
  const boardRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const touchIdRef = useRef(null);

  const placedCount = Object.keys(placed).length;
  const allPlaced = placedCount === 10;

  useEffect(() => {
    if (allPlaced && !completed) {
      setTimeout(() => setCompleted(true), 600);
    }
  }, [allPlaced, completed]);

  const addCelebration = (x, y) => {
    const id = Date.now();
    setCelebrations((p) => [...p, { id, x, y }]);
    setTimeout(() => setCelebrations((p) => p.filter((c) => c.id !== id)), 900);
  };

  const showSound = (animalId, text) => {
    setSoundPop({ id: animalId, text });
    setTimeout(() => setSoundPop(null), 1200);
  };

  const handleDrop = useCallback(
    (slotIndex) => {
      if (!dragging) return;
      const target = targetOrder[slotIndex];
      if (target.id === dragging.id) {
        setPlaced((p) => ({ ...p, [slotIndex]: dragging }));
        setPieceOrder((p) => p.filter((a) => a.id !== dragging.id));
        addCelebration(dragPos.x, dragPos.y);
        showSound(dragging.id, dragging.sound);
      } else {
        setWrongShake(slotIndex);
        setTimeout(() => setWrongShake(null), 500);
      }
      setDragging(null);
      setHoverSlot(null);
    },
    [dragging, targetOrder, dragPos]
  );

  const getSlotFromPoint = useCallback(
    (clientX, clientY) => {
      const board = boardRef.current;
      if (!board) return null;
      const slots = board.querySelectorAll("[data-slot]");
      for (const slot of slots) {
        const rect = slot.getBoundingClientRect();
        if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
          return parseInt(slot.dataset.slot);
        }
      }
      return null;
    },
    []
  );

  const handlePointerDown = (e, animal) => {
    if (e.type === "touchstart") {
      const touch = e.touches[0];
      touchIdRef.current = touch.identifier;
      const rect = e.currentTarget.getBoundingClientRect();
      dragOffsetRef.current = { x: touch.clientX - rect.left - rect.width / 2, y: touch.clientY - rect.top - rect.height / 2 };
      setDragging(animal);
      setDragPos({ x: touch.clientX, y: touch.clientY });
      e.preventDefault();
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      dragOffsetRef.current = { x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2 };
      setDragging(animal);
      setDragPos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e) => {
      let cx, cy;
      if (e.type === "touchmove") {
        const touch = Array.from(e.touches).find((t) => t.identifier === touchIdRef.current);
        if (!touch) return;
        cx = touch.clientX;
        cy = touch.clientY;
        e.preventDefault();
      } else {
        cx = e.clientX;
        cy = e.clientY;
      }
      setDragPos({ x: cx, y: cy });
      const slot = getSlotFromPoint(cx, cy);
      setHoverSlot(slot);
    };

    const handleUp = (e) => {
      let cx, cy;
      if (e.type === "touchend") {
        const touch = e.changedTouches[0];
        cx = touch.clientX;
        cy = touch.clientY;
      } else {
        cx = e.clientX;
        cy = e.clientY;
      }
      const slot = getSlotFromPoint(cx, cy);
      if (slot !== null && !placed[slot]) {
        handleDrop(slot);
      } else {
        setDragging(null);
        setHoverSlot(null);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging, getSlotFromPoint, handleDrop, placed]);

  const resetGame = () => {
    setPieceOrder(shuffleArray(ANIMALS));
    setPlaced({});
    setDragging(null);
    setCelebrations([]);
    setCompleted(false);
    setSoundPop(null);
    setWrongShake(null);
  };

  const positions = generatePositions();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(170deg, #1a3a2a 0%, #2d4a35 30%, #1e3328 60%, #152a20 100%)",
        fontFamily: "'Fredoka', 'Nunito', 'Segoe UI', sans-serif",
        overflow: "hidden",
        position: "relative",
        userSelect: "none",
        touchAction: "none",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
        @keyframes starfly {
          0% { transform: translate(-50%,-50%) scale(0); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1); opacity: 0; }
        }
        @keyframes bobble { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-6px); } 
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        @keyframes popIn {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(4px) rotate(-1deg); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes soundBubble {
          0% { transform: scale(0) translateY(0); opacity: 0; }
          30% { transform: scale(1.1) translateY(-10px); opacity: 1; }
          70% { transform: scale(1) translateY(-20px); opacity: 1; }
          100% { transform: scale(0.8) translateY(-35px); opacity: 0; }
        }
        @keyframes celebrate {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(120px) rotate(720deg); opacity: 0; }
        }
        @keyframes bigPop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }
        .puzzle-piece:hover { transform: scale(1.08); }
        .puzzle-piece:active { transform: scale(0.95); }
      `}</style>

      {/* Swamp atmosphere decorations */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Lily pads */}
        {[
          { x: "5%", y: "15%", size: 60, rot: 20, opacity: 0.12 },
          { x: "85%", y: "25%", size: 80, rot: -15, opacity: 0.1 },
          { x: "15%", y: "80%", size: 50, rot: 45, opacity: 0.08 },
          { x: "90%", y: "75%", size: 70, rot: -30, opacity: 0.1 },
          { x: "50%", y: "90%", size: 55, rot: 10, opacity: 0.07 },
        ].map((lp, i) => (
          <div
            key={`lp-${i}`}
            style={{
              position: "absolute",
              left: lp.x,
              top: lp.y,
              width: lp.size,
              height: lp.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, #3a6b45 30%, #2a5535 70%, transparent 100%)`,
              transform: `rotate(${lp.rot}deg)`,
              opacity: lp.opacity,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
        {/* Fireflies */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`ff-${i}`}
            style={{
              position: "absolute",
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 85}%`,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#ffe87c",
              boxShadow: "0 0 8px 3px rgba(255,232,124,0.4)",
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <div style={{ position: "absolute", top: 16, left: 16, zIndex: 20 }}>
        <div onClick={() => nav('/')} style={{ fontSize: ".78rem", color: "rgba(255,255,255,.7)", cursor: "pointer", fontWeight: 500, display: "flex", alignItems: "center", gap: 3 }}>
          <span style={{ fontSize: ".7rem" }}>←</span> Back to Apps
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "20px 16px 10px", position: "relative", zIndex: 10 }}>
        <h1
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            fontWeight: 700,
            color: "#a8e6a3",
            margin: 0,
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            letterSpacing: "-0.02em",
          }}
        >
          🐊 Swamp Puzzle 🐸
        </h1>
        <p style={{ color: "#7ec07a", fontSize: "clamp(0.8rem, 2.5vw, 1rem)", margin: "4px 0 0", fontWeight: 500, opacity: 0.85 }}>
          Drag each animal to its matching shadow!
        </p>
        {/* Progress */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 10 }}>
          <div
            style={{
              width: "clamp(120px, 40vw, 220px)",
              height: 14,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                width: `${(placedCount / 10) * 100}%`,
                height: "100%",
                background: "linear-gradient(90deg, #5cb85c, #a8e6a3)",
                borderRadius: 10,
                transition: "width 0.4s ease",
                boxShadow: placedCount > 0 ? "0 0 10px rgba(92,184,92,0.4)" : "none",
              }}
            />
          </div>
          <span style={{ color: "#a8e6a3", fontWeight: 600, fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
            {placedCount}/10
          </span>
        </div>
      </div>

      {/* Puzzle Board */}
      <div ref={boardRef} style={{ maxWidth: 700, margin: "10px auto 0", padding: "0 12px", position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gap: "clamp(6px, 1.5vw, 12px)",
            padding: "clamp(8px, 2vw, 16px)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {positions.map((_, idx) => {
            const target = targetOrder[idx];
            const isPlaced = !!placed[idx];
            const isHovering = hoverSlot === idx && !isPlaced;
            const isShaking = wrongShake === idx;

            return (
              <div
                key={idx}
                data-slot={idx}
                style={{
                  aspectRatio: "1",
                  borderRadius: 16,
                  background: isPlaced
                    ? `linear-gradient(135deg, ${target.color}22, ${target.color}33)`
                    : isHovering
                    ? "rgba(168,230,163,0.15)"
                    : "rgba(255,255,255,0.04)",
                  border: isPlaced
                    ? `2.5px solid ${target.color}66`
                    : isHovering
                    ? "2.5px dashed #a8e6a3"
                    : "2px dashed rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  transition: "all 0.2s ease",
                  animation: isShaking ? "shake 0.4s ease" : isPlaced ? "popIn 0.4s ease" : "none",
                  cursor: isPlaced ? "default" : "default",
                }}
              >
                {isPlaced ? (
                  <>
                    <span style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)" }}>{target.emoji}</span>
                    <span
                      style={{
                        fontSize: "clamp(0.55rem, 1.8vw, 0.72rem)",
                        fontWeight: 600,
                        color: target.color,
                        marginTop: 2,
                        textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                      }}
                    >
                      {target.name}
                    </span>
                    {soundPop && soundPop.id === target.id && (
                      <div
                        style={{
                          position: "absolute",
                          top: -5,
                          right: -5,
                          background: "#fff",
                          color: target.color,
                          padding: "2px 8px",
                          borderRadius: 10,
                          fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)",
                          fontWeight: 700,
                          animation: "soundBubble 1.2s ease forwards",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {soundPop.text}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
                        filter: "brightness(0) opacity(0.15)",
                      }}
                    >
                      {target.emoji}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(0.55rem, 1.8vw, 0.72rem)",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.2)",
                        marginTop: 2,
                      }}
                    >
                      {target.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Piece Tray */}
      <div
        style={{
          maxWidth: 700,
          margin: "16px auto 0",
          padding: "0 12px 20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "clamp(6px, 1.5vw, 10px)",
            padding: "clamp(10px, 2vw, 16px)",
            background: "rgba(255,255,255,0.05)",
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.06)",
            minHeight: 60,
          }}
        >
          {pieceOrder.length === 0 && !completed && (
            <div style={{ color: "#a8e6a3", fontSize: "1rem", fontWeight: 600, padding: 12 }}>
              All placed! 🎉
            </div>
          )}
          {pieceOrder.map((animal) => {
            const isDraggingThis = dragging && dragging.id === animal.id;
            return (
              <div
                key={animal.id}
                className="puzzle-piece"
                onMouseDown={(e) => handlePointerDown(e, animal)}
                onTouchStart={(e) => handlePointerDown(e, animal)}
                style={{
                  width: "clamp(56px, 14vw, 80px)",
                  height: "clamp(56px, 14vw, 80px)",
                  borderRadius: 14,
                  background: isDraggingThis
                    ? "transparent"
                    : `linear-gradient(145deg, ${animal.color}30, ${animal.color}18)`,
                  border: isDraggingThis ? "2px dashed rgba(255,255,255,0.15)" : `2px solid ${animal.color}44`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "grab",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  opacity: isDraggingThis ? 0.3 : 1,
                  animation: !isDraggingThis ? `bobble ${2.5 + Math.random()}s ease-in-out infinite` : "none",
                  animationDelay: `${Math.random() * 2}s`,
                  boxShadow: isDraggingThis ? "none" : `0 3px 12px ${animal.color}22`,
                }}
              >
                <span style={{ fontSize: "clamp(1.5rem, 5vw, 2.2rem)", lineHeight: 1 }}>{animal.emoji}</span>
                <span
                  style={{
                    fontSize: "clamp(0.5rem, 1.5vw, 0.65rem)",
                    fontWeight: 600,
                    color: animal.color,
                    marginTop: 2,
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  {animal.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dragging ghost */}
      {dragging && (
        <div
          style={{
            position: "fixed",
            left: dragPos.x,
            top: dragPos.y,
            transform: "translate(-50%, -50%) scale(1.15) rotate(-3deg)",
            width: 75,
            height: 75,
            borderRadius: 16,
            background: `linear-gradient(145deg, ${dragging.color}55, ${dragging.color}33)`,
            border: `2.5px solid ${dragging.color}88`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 1000,
            boxShadow: `0 8px 32px ${dragging.color}44, 0 0 0 4px rgba(255,255,255,0.1)`,
          }}
        >
          <span style={{ fontSize: "2.2rem", lineHeight: 1 }}>{dragging.emoji}</span>
          <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "#fff", marginTop: 2 }}>
            {dragging.name}
          </span>
        </div>
      )}

      {/* Celebrations */}
      {celebrations.map((c) => (
        <StarBurst key={c.id} x={c.x} y={c.y} />
      ))}

      {/* Victory screen */}
      {completed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,30,18,0.85)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            animation: "popIn 0.5s ease",
          }}
        >
          {/* Confetti */}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`conf-${i}`}
              style={{
                position: "absolute",
                left: `${5 + Math.random() * 90}%`,
                top: `${-5 - Math.random() * 10}%`,
                width: 10 + Math.random() * 8,
                height: 10 + Math.random() * 8,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                background: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff8bd0", "#a8e6a3"][i % 6],
                animation: `confetti ${1.5 + Math.random() * 2}s ease-in forwards`,
                animationDelay: `${Math.random() * 0.8}s`,
                opacity: 0.9,
              }}
            />
          ))}
          <div
            style={{
              background: "linear-gradient(145deg, #1e3e2a, #2a5538)",
              borderRadius: 28,
              padding: "clamp(24px, 5vw, 40px)",
              textAlign: "center",
              border: "2px solid rgba(168,230,163,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              maxWidth: 360,
              width: "90%",
              animation: "bigPop 0.6s ease",
            }}
          >
            <div style={{ fontSize: "clamp(2.5rem, 10vw, 4rem)", marginBottom: 8 }}>🎉</div>
            <h2
              style={{
                color: "#a8e6a3",
                fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                fontWeight: 700,
                margin: "0 0 8px",
              }}
            >
              Amazing Job!
            </h2>
            <p style={{ color: "#7ec07a", fontSize: "clamp(0.8rem, 2.5vw, 1rem)", margin: "0 0 8px", fontWeight: 500 }}>
              You found all 10 swamp animals!
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, margin: "12px 0 20px" }}>
              {ANIMALS.map((a, i) => (
                <span
                  key={a.id}
                  style={{
                    fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                    animation: `bigPop 0.4s ease`,
                    animationDelay: `${0.1 + i * 0.08}s`,
                    animationFillMode: "both",
                  }}
                >
                  {a.emoji}
                </span>
              ))}
            </div>
            <button
              onClick={resetGame}
              style={{
                background: "linear-gradient(135deg, #5cb85c, #4a9e4a)",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: "12px 32px",
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(92,184,92,0.3)",
                transition: "transform 0.15s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Play Again! 🔄
            </button>
          </div>
        </div>
      )}

      {/* Reset button */}
      {!completed && placedCount > 0 && (
        <div style={{ textAlign: "center", paddingBottom: 20, position: "relative", zIndex: 10 }}>
          <button
            onClick={resetGame}
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "8px 20px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.12)";
              e.target.style.color = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.08)";
              e.target.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
