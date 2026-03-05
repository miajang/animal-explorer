import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CHARACTERS = [
  { id: "mantis", name: "Mantis", color: "#7CB342", accent: "#558B2F", emoji: "🟢" },
  { id: "frog", name: "Frog", color: "#43A047", accent: "#2E7D32", emoji: "🐸" },
  { id: "lizard", name: "Lizard", color: "#F9A825", accent: "#F57F17", emoji: "🦎" },
  { id: "beetle", name: "Beetle", color: "#5D4037", accent: "#3E2723", emoji: "🪲" },
  { id: "salamander", name: "Salamander", color: "#E65100", accent: "#BF360C", emoji: "🔥" },
  { id: "chameleon", name: "Chameleon", color: "#7B1FA2", accent: "#4A148C", emoji: "🟣" },
];

const MAX_HP = 100;

// Sound generator using Web Audio API
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    
    // 꼴까닥 - three quick clucks descending, like a startled chicken
    const clucks = [
      { freq: 600, time: 0, dur: 0.08 },      // 꼴
      { freq: 500, time: 0.12, dur: 0.07 },    // 까
      { freq: 350, time: 0.22, dur: 0.12 },     // 닥
    ];

    clucks.forEach(({ freq, time, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + time);
      osc.frequency.linearRampToValueAtTime(freq * 0.6, ctx.currentTime + time + dur);
      gain.gain.setValueAtTime(0, ctx.currentTime + time);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + time + 0.01);
      gain.gain.setValueAtTime(0.18, ctx.currentTime + time + dur * 0.5);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + time + dur);
      osc.start(ctx.currentTime + time);
      osc.stop(ctx.currentTime + time + dur);
    });
  } catch (e) {
    // Audio not available
  }
}

// Quick hit sound on attack impact
function playHitSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "square";
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
    osc.start(); osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

const effects = [
  { text: "POW!", color: "#FF6B6B" },
  { text: "SMACK!", color: "#FFA94D" },
  { text: "WHAP!", color: "#FFD43B" },
  { text: "ZAP!", color: "#69DB7C" },
  { text: "BONK!", color: "#74C0FC" },
  { text: "CRASH!", color: "#DA77F2" },
];

/* ─── SVG Characters ─── */

function MantisSVG() {
  return (
    <svg width="120" height="140" viewBox="0 0 140 160">
      <ellipse cx="70" cy="105" rx="20" ry="40" fill="#7CB342" />
      <ellipse cx="70" cy="65" rx="16" ry="18" fill="#8BC34A" />
      <circle cx="70" cy="38" r="16" fill="#9CCC65" />
      <circle cx="60" cy="33" r="7" fill="#33691E" />
      <circle cx="80" cy="33" r="7" fill="#33691E" />
      <circle cx="61" cy="31" r="3" fill="white" />
      <circle cx="81" cy="31" r="3" fill="white" />
      <path d="M64 44 Q70 50 76 44" stroke="#33691E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="62" y1="24" x2="45" y2="5" stroke="#7CB342" strokeWidth="2" strokeLinecap="round" />
      <line x1="78" y1="24" x2="95" y2="5" stroke="#7CB342" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="5" r="3" fill="#AED581" />
      <circle cx="95" cy="5" r="3" fill="#AED581" />
      <path d="M54 60 L25 40 L15 55" stroke="#7CB342" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86 60 L115 40 L125 55" stroke="#7CB342" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 55 L10 48" stroke="#558B2F" strokeWidth="3" strokeLinecap="round" />
      <path d="M125 55 L130 48" stroke="#558B2F" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="90" x2="35" y2="110" stroke="#7CB342" strokeWidth="3" strokeLinecap="round" />
      <line x1="82" y1="90" x2="105" y2="110" stroke="#7CB342" strokeWidth="3" strokeLinecap="round" />
      <line x1="55" y1="110" x2="30" y2="135" stroke="#7CB342" strokeWidth="3" strokeLinecap="round" />
      <line x1="85" y1="110" x2="110" y2="135" stroke="#7CB342" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="70" cy="105" rx="10" ry="30" fill="#AED581" opacity="0.5" />
    </svg>
  );
}

function FrogSVG() {
  return (
    <svg width="120" height="140" viewBox="0 0 140 160">
      <ellipse cx="70" cy="100" rx="35" ry="30" fill="#43A047" />
      <ellipse cx="70" cy="100" rx="25" ry="22" fill="#66BB6A" />
      <ellipse cx="70" cy="60" rx="30" ry="24" fill="#43A047" />
      <circle cx="50" cy="42" r="14" fill="#43A047" />
      <circle cx="90" cy="42" r="14" fill="#43A047" />
      <circle cx="50" cy="40" r="10" fill="white" />
      <circle cx="90" cy="40" r="10" fill="white" />
      <circle cx="52" cy="38" r="5" fill="#1B5E20" />
      <circle cx="92" cy="38" r="5" fill="#1B5E20" />
      <circle cx="53" cy="36" r="2" fill="white" />
      <circle cx="93" cy="36" r="2" fill="white" />
      <path d="M50 68 Q70 82 90 68" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="65" r="6" fill="#E57373" opacity="0.3" />
      <circle cx="98" cy="65" r="6" fill="#E57373" opacity="0.3" />
      <path d="M42 95 L20 110 L15 105" stroke="#388E3C" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M98 95 L120 110 L125 105" stroke="#388E3C" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="13" cy="105" r="3" fill="#388E3C" />
      <circle cx="18" cy="108" r="3" fill="#388E3C" />
      <circle cx="123" cy="105" r="3" fill="#388E3C" />
      <circle cx="128" cy="108" r="3" fill="#388E3C" />
      <path d="M48 120 Q30 145 25 148" stroke="#388E3C" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 120 Q110 145 115 148" stroke="#388E3C" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="148" r="3" fill="#388E3C" />
      <circle cx="28" cy="150" r="3" fill="#388E3C" />
      <circle cx="117" cy="148" r="3" fill="#388E3C" />
      <circle cx="112" cy="150" r="3" fill="#388E3C" />
      <circle cx="60" cy="95" r="4" fill="#81C784" opacity="0.5" />
      <circle cx="80" cy="100" r="3" fill="#81C784" opacity="0.5" />
    </svg>
  );
}

function LizardSVG() {
  return (
    <svg width="120" height="140" viewBox="0 0 140 160">
      <path d="M70 135 Q40 150 20 155 Q10 155 15 148" stroke="#F9A825" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="70" cy="100" rx="22" ry="35" fill="#F9A825" />
      <ellipse cx="70" cy="100" rx="14" ry="28" fill="#FDD835" opacity="0.5" />
      <circle cx="65" cy="85" r="3" fill="#F57F17" opacity="0.4" />
      <circle cx="75" cy="95" r="3" fill="#F57F17" opacity="0.4" />
      <circle cx="68" cy="108" r="3" fill="#F57F17" opacity="0.4" />
      <ellipse cx="70" cy="52" rx="20" ry="16" fill="#F9A825" />
      <ellipse cx="70" cy="42" rx="12" ry="8" fill="#FBC02D" />
      <circle cx="58" cy="48" r="7" fill="#FFF9C4" />
      <circle cx="82" cy="48" r="7" fill="#FFF9C4" />
      <ellipse cx="58" cy="48" rx="3" ry="5" fill="#1B1B1B" />
      <ellipse cx="82" cy="48" rx="3" ry="5" fill="#1B1B1B" />
      <circle cx="64" cy="40" r="2" fill="#F57F17" />
      <circle cx="76" cy="40" r="2" fill="#F57F17" />
      <path d="M60 56 Q70 62 80 56" stroke="#F57F17" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M70 65 L67 58 L73 58 Z" fill="#F57F17" />
      <path d="M70 72 L67 65 L73 65 Z" fill="#F57F17" />
      <path d="M52 85 L28 80 L22 85" stroke="#F9A825" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M88 85 L112 80 L118 85" stroke="#F9A825" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M50 115 L25 125 L18 122" stroke="#F9A825" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M90 115 L115 125 L122 122" stroke="#F9A825" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="85" r="2" fill="#F57F17" />
      <circle cx="25" cy="87" r="2" fill="#F57F17" />
      <circle cx="116" cy="85" r="2" fill="#F57F17" />
      <circle cx="121" cy="87" r="2" fill="#F57F17" />
    </svg>
  );
}

function BeetleSVG() {
  return (
    <svg width="120" height="140" viewBox="0 0 140 160">
      <ellipse cx="70" cy="100" rx="30" ry="38" fill="#5D4037" />
      <ellipse cx="70" cy="95" rx="28" ry="32" fill="#795548" />
      <line x1="70" y1="63" x2="70" y2="127" stroke="#4E342E" strokeWidth="2" />
      <ellipse cx="58" cy="88" rx="8" ry="12" fill="#8D6E63" opacity="0.5" />
      <ellipse cx="82" cy="88" rx="8" ry="12" fill="#8D6E63" opacity="0.5" />
      <circle cx="70" cy="52" r="18" fill="#4E342E" />
      <circle cx="60" cy="48" r="7" fill="#FDD835" />
      <circle cx="80" cy="48" r="7" fill="#FDD835" />
      <circle cx="61" cy="46" r="3" fill="#1B1B1B" />
      <circle cx="81" cy="46" r="3" fill="#1B1B1B" />
      <path d="M63 58 Q70 64 77 58" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58 40 L40 15 Q35 10 42 18 L50 30" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M82 40 L100 15 Q105 10 98 18 L90 30" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43 20 L50 12" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
      <path d="M97 20 L90 12" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="85" x2="22" y2="100" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="85" x2="118" y2="100" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
      <line x1="45" y1="105" x2="18" y2="125" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
      <line x1="95" y1="105" x2="122" y2="125" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="120" x2="25" y2="148" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="120" x2="115" y2="148" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="70" cy="100" rx="14" ry="24" fill="#6D4C41" opacity="0.4" />
    </svg>
  );
}

function SalamanderSVG() {
  return (
    <svg width="120" height="140" viewBox="0 0 140 160">
      <path d="M70 135 Q100 148 120 155 Q130 155 125 148" stroke="#E65100" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="70" cy="100" rx="24" ry="36" fill="#E65100" />
      <ellipse cx="70" cy="102" rx="15" ry="28" fill="#FF9800" opacity="0.6" />
      <circle cx="58" cy="88" r="5" fill="#FFD54F" />
      <circle cx="82" cy="92" r="4" fill="#FFD54F" />
      <circle cx="65" cy="108" r="5" fill="#FFD54F" />
      <circle cx="78" cy="118" r="3" fill="#FFD54F" />
      <circle cx="55" cy="102" r="3" fill="#FFD54F" />
      <ellipse cx="70" cy="55" rx="22" ry="18" fill="#E65100" />
      <circle cx="56" cy="48" r="8" fill="#FFF9C4" />
      <circle cx="84" cy="48" r="8" fill="#FFF9C4" />
      <circle cx="57" cy="47" r="4" fill="#1B1B1B" />
      <circle cx="85" cy="47" r="4" fill="#1B1B1B" />
      <circle cx="58" cy="45" r="2" fill="white" />
      <circle cx="86" cy="45" r="2" fill="white" />
      <path d="M58 62 Q70 70 82 62" stroke="#BF360C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="48" cy="58" r="5" fill="#FF5722" opacity="0.3" />
      <circle cx="92" cy="58" r="5" fill="#FF5722" opacity="0.3" />
      <path d="M48 42 L35 30 M48 45 L32 38 M48 48 L33 45" stroke="#FF7043" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M92 42 L105 30 M92 45 L108 38 M92 48 L107 45" stroke="#FF7043" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M50 85 L25 80 L18 86" stroke="#E65100" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M90 85 L115 80 L122 86" stroke="#E65100" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M48 118 L22 128 L16 124" stroke="#E65100" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M92 118 L118 128 L124 124" stroke="#E65100" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="86" r="2" fill="#BF360C" />
      <circle cx="21" cy="88" r="2" fill="#BF360C" />
      <circle cx="120" cy="86" r="2" fill="#BF360C" />
      <circle cx="125" cy="88" r="2" fill="#BF360C" />
    </svg>
  );
}

function ChameleonSVG() {
  return (
    <svg width="120" height="140" viewBox="0 0 140 160">
      <path d="M55 130 Q30 140 25 130 Q20 118 30 120 Q38 122 35 128" stroke="#7B1FA2" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="70" cy="95" rx="28" ry="35" fill="#7B1FA2" />
      <ellipse cx="70" cy="98" rx="18" ry="28" fill="#9C27B0" opacity="0.5" />
      <path d="M50 78 Q70 72 90 78" stroke="#6A1B9A" strokeWidth="2" fill="none" />
      <path d="M48 88 Q70 82 92 88" stroke="#6A1B9A" strokeWidth="2" fill="none" />
      <path d="M48 98 Q70 92 92 98" stroke="#6A1B9A" strokeWidth="2" fill="none" />
      <path d="M58 45 L70 20 L82 45" fill="#9C27B0" />
      <path d="M62 45 L70 26 L78 45" fill="#AB47BC" />
      <circle cx="70" cy="52" r="20" fill="#7B1FA2" />
      <circle cx="60" cy="48" r="12" fill="#CE93D8" />
      <circle cx="60" cy="48" r="8" fill="white" />
      <circle cx="61" cy="47" r="5" fill="#1B1B1B" />
      <circle cx="62" cy="45" r="2" fill="white" />
      <circle cx="84" cy="48" r="10" fill="#CE93D8" />
      <circle cx="84" cy="48" r="7" fill="white" />
      <circle cx="85" cy="47" r="4" fill="#1B1B1B" />
      <circle cx="86" cy="45" r="2" fill="white" />
      <ellipse cx="70" cy="62" rx="10" ry="6" fill="#8E24AA" />
      <path d="M62 64 Q70 70 78 64" stroke="#4A148C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M70 66 Q85 68 95 60 Q100 56 96 58" stroke="#E91E63" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="96" cy="58" r="3" fill="#E91E63" />
      <path d="M48 85 L28 78" stroke="#7B1FA2" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M92 85 L112 78" stroke="#7B1FA2" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M46 115 L26 120" stroke="#7B1FA2" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M94 115 L114 120" stroke="#7B1FA2" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M28 78 L22 74 M28 78 L22 82" stroke="#6A1B9A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M112 78 L118 74 M112 78 L118 82" stroke="#6A1B9A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M26 120 L20 116 M26 120 L20 124" stroke="#6A1B9A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M114 120 L120 116 M114 120 L120 124" stroke="#6A1B9A" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const SVG_MAP = { mantis: MantisSVG, frog: FrogSVG, lizard: LizardSVG, beetle: BeetleSVG, salamander: SalamanderSVG, chameleon: ChameleonSVG };

/* ─── UI Components ─── */

function HealthBar({ hp, maxHp, color, label }) {
  const pct = Math.max(0, (hp / maxHp) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs font-semibold mb-1" style={{ color }}><span>{label}</span><span>{hp}/{maxHp}</span></div>
      <div className="w-full h-4 rounded-full bg-gray-200 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function Bug({ charId, isAttacking, isHurt, side }) {
  const Comp = SVG_MAP[charId];
  const flip = side === "right" ? "scaleX(-1)" : "scaleX(1)";
  const attackAnim = isAttacking ? (side === "left" ? "translateX(40px) rotate(10deg)" : "translateX(-40px) rotate(-10deg)") : "translateX(0)";
  const hurtAnim = isHurt ? "scale(0.85)" : "scale(1)";
  const hurtFilter = isHurt ? "brightness(2)" : "brightness(1)";
  return (
    <div className="transition-all duration-300 ease-out" style={{ transform: `${flip} ${attackAnim} ${hurtAnim}`, filter: hurtFilter }}>
      <Comp />
    </div>
  );
}

function EffectBurst({ text, color, position }) {
  return (
    <div className="absolute font-black text-3xl pointer-events-none" style={{ color, left: position === "left" ? "25%" : "55%", top: "30%", textShadow: `0 0 10px ${color}, 0 0 20px ${color}`, animation: "popIn 0.6s ease-out forwards" }}>
      {text}
    </div>
  );
}

function Confetti() {
  const colors = ["#FF6B6B", "#FFA94D", "#FFD43B", "#69DB7C", "#74C0FC", "#DA77F2", "#F06595"];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="absolute w-3 h-3 rounded-sm" style={{ backgroundColor: colors[i % colors.length], left: `${Math.random() * 100}%`, top: `-5%`, animation: `confettiFall ${1.5 + Math.random() * 2}s ease-in forwards`, animationDelay: `${Math.random() * 0.5}s`, transform: `rotate(${Math.random() * 360}deg)` }} />
      ))}
    </div>
  );
}

function GearIcon({ onClick }) {
  return (
    <button onClick={onClick} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-60 active:scale-90 transition-transform" style={{ zIndex: 20 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    </button>
  );
}

/* ─── Character Select Panel ─── */

function CharacterSelect({ currentFighters, onConfirm, onClose }) {
  const [selected, setSelected] = useState([...currentFighters]);

  const handleToggle = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else if (selected.length < 2) {
      setSelected([...selected, id]);
    } else {
      // Already 2 selected — replace the first one
      setSelected([selected[1], id]);
    }
  };

  const handleConfirm = () => {
    if (selected.length === 2) {
      onConfirm(selected);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
      <div className="bg-white rounded-3xl p-6 mx-4 w-full max-w-sm shadow-2xl" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-800">Choose 2 Fighters</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 active:scale-90 transition-transform">✕</button>
        </div>
        <p className="text-sm text-gray-500 mb-4">{selected.length}/2 selected</p>

        <div className="grid grid-cols-2 gap-3">
          {CHARACTERS.map((char) => {
            const isSelected = selected.includes(char.id);
            const Comp = SVG_MAP[char.id];
            return (
              <button
                key={char.id}
                onClick={() => handleToggle(char.id)}
                className="relative rounded-2xl p-3 flex flex-col items-center transition-all active:scale-95"
                style={{
                  backgroundColor: isSelected ? `${char.color}18` : "#f5f5f5",
                  border: isSelected ? `3px solid ${char.color}` : "3px solid transparent",
                  opacity: 1,
                }}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: char.color }}>
                    {selected.indexOf(char.id) + 1}
                  </div>
                )}
                <div className="w-20 h-16 flex items-center justify-center overflow-hidden">
                  <div style={{ transform: "scale(0.45)", transformOrigin: "center center" }}><Comp /></div>
                </div>
                <span className="text-sm font-semibold mt-1" style={{ color: isSelected ? char.color : "#666" }}>{char.name}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleConfirm}
          disabled={selected.length !== 2}
          className="w-full mt-5 py-3 rounded-2xl text-white font-bold text-lg transition-all active:scale-95 disabled:opacity-30"
          style={{ backgroundColor: selected.length === 2 ? "#43A047" : "#aaa" }}
        >
          ⚔️ Let's Battle!
        </button>
      </div>
    </div>
  );
}

/* ─── Main Game ─── */

export default function BugBattle() {
  const nav = useNavigate();
  const [fighters, setFighters] = useState(["beetle", "mantis"]);
  const [showSelect, setShowSelect] = useState(false);
  const [hp, setHp] = useState([MAX_HP, MAX_HP]);
  const [attacking, setAttacking] = useState([false, false]);
  const [hurt, setHurt] = useState([false, false]);
  const [activeEffect, setActiveEffect] = useState(null);
  const [gameOver, setGameOver] = useState(null);
  const [busy, setBusy] = useState(false);
  const [round, setRound] = useState(1);
  const [shake, setShake] = useState(false);

  const char1 = CHARACTERS.find((c) => c.id === fighters[0]);
  const char2 = CHARACTERS.find((c) => c.id === fighters[1]);

  const doAttack = useCallback((idx) => {
    if (busy || gameOver !== null) return;
    setBusy(true);
    const damage = 8 + Math.floor(Math.random() * 18);
    const effect = effects[Math.floor(Math.random() * effects.length)];
    const targetIdx = idx === 0 ? 1 : 0;

    setAttacking((a) => { const n = [...a]; n[idx] = true; return n; });
    setTimeout(() => {
      setAttacking((a) => { const n = [...a]; n[idx] = false; return n; });
      setHurt((h) => { const n = [...h]; n[targetIdx] = true; return n; });
      setShake(true);
      playHitSound();
      setActiveEffect({ ...effect, position: targetIdx === 0 ? "left" : "right" });
      setHp((prev) => {
        const n = [...prev];
        n[targetIdx] = Math.max(0, n[targetIdx] - damage);
        if (n[targetIdx] <= 0) setTimeout(() => { playSound(fighters[targetIdx]); setGameOver(idx); }, 600);
        return n;
      });
      setTimeout(() => {
        setHurt((h) => { const n = [...h]; n[targetIdx] = false; return n; });
        setShake(false);
        setActiveEffect(null);
        setRound((r) => r + 1);
        setBusy(false);
      }, 500);
    }, 300);
  }, [busy, gameOver]);

  const resetGame = () => {
    setHp([MAX_HP, MAX_HP]);
    setGameOver(null);
    setRound(1);
    setActiveEffect(null);
    setBusy(false);
    setAttacking([false, false]);
    setHurt([false, false]);
  };

  const handleFighterSelect = (newFighters) => {
    setFighters(newFighters);
    resetGame();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-green-200 flex flex-col items-center p-4 relative">
      <style>{`
        @keyframes popIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.3)}100%{opacity:0;transform:scale(1.6) translateY(-30px)}}
        @keyframes confettiFall{0%{transform:translateY(0) rotate(0deg);opacity:1}100%{transform:translateY(600px) rotate(720deg);opacity:0}}
        @keyframes screenShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes winPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
      `}</style>

      <button onClick={() => nav('/')} className="absolute top-4 left-4 px-3 py-2 rounded-full bg-white bg-opacity-60 text-xs font-semibold text-gray-500 flex items-center gap-1 active:scale-90 transition-transform" style={{ zIndex: 20 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        Apps
      </button>
      <GearIcon onClick={() => setShowSelect(true)} />
      {showSelect && <CharacterSelect currentFighters={fighters} onConfirm={(newFighters) => { handleFighterSelect(newFighters); setShowSelect(false); }} onClose={() => setShowSelect(false)} />}

      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-green-800" style={{ letterSpacing: "0.05em" }}>🐛 BUG BATTLE! 🐛</h1>
        <p className="text-sm text-green-700 font-medium mt-1">Round {round}</p>
      </div>

      <div className="w-full max-w-md flex gap-4 mb-4 px-2">
        <div className="flex-1"><HealthBar hp={hp[0]} maxHp={MAX_HP} color={char1.color} label={`${char1.emoji} ${char1.name}`} /></div>
        <div className="flex-1"><HealthBar hp={hp[1]} maxHp={MAX_HP} color={char2.color} label={`${char2.emoji} ${char2.name}`} /></div>
      </div>

      <div className="relative w-full max-w-md bg-gradient-to-b from-green-100 to-green-300 rounded-3xl p-6 flex justify-between items-center overflow-hidden" style={{ minHeight: 240, animation: shake ? "screenShake 0.15s ease-in-out 3" : "none", boxShadow: "inset 0 2px 20px rgba(0,0,0,0.08)" }}>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-400 to-transparent rounded-b-3xl" />
        <div className="absolute bottom-2 left-6 text-2xl opacity-60">🌿</div>
        <div className="absolute bottom-2 right-8 text-2xl opacity-60">🌱</div>
        <div className="absolute bottom-3 left-1/2 text-xl opacity-40">🍃</div>

        <div style={{ animation: !attacking[0] && !hurt[0] ? "float 2s ease-in-out infinite" : "none", zIndex: 2 }}>
          <Bug charId={fighters[0]} isAttacking={attacking[0]} isHurt={hurt[0]} side="left" />
        </div>
        {gameOver === null && <div className="text-2xl font-black text-white opacity-30 z-0">VS</div>}
        <div style={{ animation: !attacking[1] && !hurt[1] ? "float 2s ease-in-out infinite 0.5s" : "none", zIndex: 2 }}>
          <Bug charId={fighters[1]} isAttacking={attacking[1]} isHurt={hurt[1]} side="right" />
        </div>

        {activeEffect && <EffectBurst text={activeEffect.text} color={activeEffect.color} position={activeEffect.position} />}
        {gameOver !== null && <Confetti />}
      </div>

      {gameOver !== null ? (
        <div className="mt-6 text-center" style={{ animation: "winPulse 1s ease-in-out infinite" }}>
          <div className="text-4xl mb-2">{gameOver === 0 ? char1.emoji : char2.emoji}</div>
          <h2 className="text-2xl font-bold text-green-800 mb-1">{gameOver === 0 ? char1.name : char2.name} Wins!</h2>
          <p className="text-green-700 text-sm mb-4">Great battle!</p>
          <button onClick={resetGame} className="px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg active:scale-95 transition-transform" style={{ backgroundColor: "#43A047" }}>🔄 Play Again!</button>
        </div>
      ) : (
        <div className="mt-6 flex gap-4">
          <button onClick={() => doAttack(0)} disabled={busy} className="px-6 py-4 rounded-2xl text-white font-bold text-lg shadow-lg active:scale-95 transition-all disabled:opacity-40" style={{ backgroundColor: char1.color, minWidth: 140 }}>
            {char1.emoji} {char1.name}<br /><span className="text-xs font-medium opacity-80">ATTACK!</span>
          </button>
          <button onClick={() => doAttack(1)} disabled={busy} className="px-6 py-4 rounded-2xl text-white font-bold text-lg shadow-lg active:scale-95 transition-all disabled:opacity-40" style={{ backgroundColor: char2.color, minWidth: 140 }}>
            {char2.emoji} {char2.name}<br /><span className="text-xs font-medium opacity-80">ATTACK!</span>
          </button>
        </div>
      )}

      <p className="text-xs text-green-700 mt-6 opacity-60">Tap a creature to attack! ⚙️ to change fighters</p>
    </div>
  );
}
