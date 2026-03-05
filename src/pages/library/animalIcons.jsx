// Animal SVG icons — 28x28 display, 64x64 viewBox
// Each icon is a simple, recognizable representation of the animal

const S = { flexShrink: 0 };

const animalIcons = {
  // ── AMPHIBIANS ──
  "Axolotl": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="36" rx="14" ry="12" fill="#E8A0BF"/>
      <circle cx="26" cy="33" r="2.5" fill="#333"/>
      <circle cx="38" cy="33" r="2.5" fill="#333"/>
      <path d="M28 40 Q32 43 36 40" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M14 22 Q8 16 6 24 Q8 28 16 30" stroke="#D4749A" strokeWidth="3" fill="#E8A0BF" strokeLinecap="round"/>
      <path d="M12 20 Q6 12 4 20" stroke="#D4749A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M15 18 Q10 10 8 18" stroke="#D4749A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M18 17 Q14 9 12 17" stroke="#D4749A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M50 22 Q56 16 58 24 Q56 28 48 30" stroke="#D4749A" strokeWidth="3" fill="#E8A0BF" strokeLinecap="round"/>
      <path d="M52 20 Q58 12 60 20" stroke="#D4749A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M49 18 Q54 10 56 18" stroke="#D4749A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M46 17 Q50 9 52 17" stroke="#D4749A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Cane Toad": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="38" rx="18" ry="14" fill="#8B9E6B"/>
      <circle cx="22" cy="26" r="6" fill="#7A8E5A"/>
      <circle cx="42" cy="26" r="6" fill="#7A8E5A"/>
      <circle cx="22" cy="25" r="3" fill="#F5E6C8"/>
      <circle cx="42" cy="25" r="3" fill="#F5E6C8"/>
      <circle cx="22" cy="25" r="1.8" fill="#333"/>
      <circle cx="42" cy="25" r="1.8" fill="#333"/>
      <path d="M28 42 Q32 45 36 42" stroke="#5A6E3A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="26" cy="44" rx="2" ry="1" fill="#7A8E5A" opacity=".5"/>
      <ellipse cx="38" cy="44" rx="2" ry="1" fill="#7A8E5A" opacity=".5"/>
    </svg>
  ),
  "Fire Salamander": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="32" rx="8" ry="22" fill="#333"/>
      <ellipse cx="32" cy="12" rx="7" ry="5" fill="#333"/>
      <circle cx="28" cy="10" r="1.8" fill="#F5C842"/>
      <circle cx="36" cy="10" r="1.8" fill="#F5C842"/>
      <circle cx="28" cy="10" r="1" fill="#333"/>
      <circle cx="36" cy="10" r="1" fill="#333"/>
      <path d="M32 54 Q32 62 34 60 Q32 58 32 54" fill="#333"/>
      <path d="M26 20 Q16 16 12 20 Q14 22 18 21" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M38 20 Q48 16 52 20 Q50 22 46 21" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M26 44 Q16 48 12 46 Q14 44 18 44" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M38 44 Q48 48 52 46 Q50 44 46 44" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="30" cy="22" rx="2.5" ry="1.8" fill="#F5C842"/>
      <ellipse cx="35" cy="28" rx="2" ry="1.5" fill="#F5C842"/>
      <ellipse cx="29" cy="34" rx="2.2" ry="1.6" fill="#F5C842"/>
      <ellipse cx="35" cy="40" rx="2" ry="1.5" fill="#F5C842"/>
      <ellipse cx="30" cy="46" rx="1.8" ry="1.3" fill="#F5C842"/>
      <ellipse cx="34" cy="15" rx="1.5" ry="1.2" fill="#F5C842"/>
    </svg>
  ),
  "Giant Salamander": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="32" rx="10" ry="22" fill="#6B5B4F"/>
      <ellipse cx="32" cy="12" rx="9" ry="6" fill="#6B5B4F"/>
      <circle cx="27" cy="11" r="1.5" fill="#222"/>
      <circle cx="37" cy="11" r="1.5" fill="#222"/>
      <path d="M26 16 Q32 19 38 16" stroke="#4A3F36" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M24 20 Q14 16 10 20 Q12 23 16 22" stroke="#6B5B4F" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 20 Q50 16 54 20 Q52 23 48 22" stroke="#6B5B4F" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M24 44 Q14 48 10 46" stroke="#6B5B4F" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 44 Q50 48 54 46" stroke="#6B5B4F" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M32 54 Q32 60 34 62" fill="#6B5B4F" stroke="#6B5B4F" strokeWidth="2"/>
      {/* wrinkly skin texture */}
      <path d="M26 26 Q32 28 38 26" stroke="#5A4D42" strokeWidth=".8" fill="none"/>
      <path d="M25 32 Q32 34 39 32" stroke="#5A4D42" strokeWidth=".8" fill="none"/>
      <path d="M26 38 Q32 40 38 38" stroke="#5A4D42" strokeWidth=".8" fill="none"/>
    </svg>
  ),
  "Glass Frog": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="38" rx="14" ry="12" fill="#A8D8A8" opacity=".7"/>
      <ellipse cx="32" cy="40" rx="8" ry="6" fill="#F5C4C4" opacity=".4"/>
      {/* visible organs through transparent belly */}
      <circle cx="32" cy="38" r="2.5" fill="#D46A6A" opacity=".5"/>
      <circle cx="24" cy="28" r="5" fill="#7BC67B"/>
      <circle cx="40" cy="28" r="5" fill="#7BC67B"/>
      <circle cx="24" cy="27" r="2.5" fill="#fff"/>
      <circle cx="40" cy="27" r="2.5" fill="#fff"/>
      <circle cx="24" cy="27" r="1.5" fill="#333"/>
      <circle cx="40" cy="27" r="1.5" fill="#333"/>
      <path d="M29 42 Q32 44 35 42" stroke="#5A9E5A" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Hellbender": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* flat, wide body */}
      <ellipse cx="32" cy="32" rx="14" ry="20" fill="#7A6B5A"/>
      <ellipse cx="32" cy="14" rx="10" ry="6" fill="#7A6B5A"/>
      <circle cx="27" cy="12" r="1.5" fill="#222"/>
      <circle cx="37" cy="12" r="1.5" fill="#222"/>
      <path d="M28 17 Q32 19 36 17" stroke="#5A4D42" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* wrinkly skin folds */}
      <path d="M20 24 Q18 28 20 32 Q18 36 20 40" stroke="#6B5C4A" strokeWidth="1.5" fill="none"/>
      <path d="M44 24 Q46 28 44 32 Q46 36 44 40" stroke="#6B5C4A" strokeWidth="1.5" fill="none"/>
      {/* stubby legs */}
      <path d="M22 22 Q14 18 10 22" stroke="#7A6B5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 22 Q50 18 54 22" stroke="#7A6B5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M22 42 Q14 46 10 44" stroke="#7A6B5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 42 Q50 46 54 44" stroke="#7A6B5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M32 52 Q32 58 34 60" fill="#7A6B5A" stroke="#7A6B5A" strokeWidth="2"/>
    </svg>
  ),
  "Poison Dart Frog": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="38" rx="14" ry="12" fill="#2E6BE6"/>
      <circle cx="24" cy="28" r="5" fill="#2255CC"/>
      <circle cx="40" cy="28" r="5" fill="#2255CC"/>
      <circle cx="24" cy="27" r="2.2" fill="#111"/>
      <circle cx="40" cy="27" r="2.2" fill="#111"/>
      <path d="M29 42 Q32 45 35 42" stroke="#1A4DB3" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* bright spots */}
      <circle cx="26" cy="36" r="2" fill="#333"/>
      <circle cx="38" cy="36" r="2" fill="#333"/>
      <circle cx="32" cy="42" r="1.5" fill="#333"/>
      <circle cx="28" cy="32" r="1.2" fill="#333"/>
      <circle cx="36" cy="32" r="1.2" fill="#333"/>
      {/* front legs */}
      <path d="M20 44 Q14 50 10 48" stroke="#2E6BE6" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M44 44 Q50 50 54 48" stroke="#2E6BE6" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Red-Eyed Tree Frog": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      <ellipse cx="32" cy="38" rx="14" ry="12" fill="#4CAF50"/>
      <circle cx="22" cy="26" r="6" fill="#4CAF50"/>
      <circle cx="42" cy="26" r="6" fill="#4CAF50"/>
      <circle cx="22" cy="25" r="4" fill="#E53935"/>
      <circle cx="42" cy="25" r="4" fill="#E53935"/>
      <circle cx="22" cy="25" r="2" fill="#111"/>
      <circle cx="42" cy="25" r="2" fill="#111"/>
      <path d="M29 42 Q32 44 35 42" stroke="#2E7D32" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* blue-yellow stripes on side */}
      <path d="M20 34 L18 38" stroke="#2196F3" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 36 L17 40" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M44 34 L46 38" stroke="#2196F3" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M45 36 L47 40" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round"/>
      {/* orange feet */}
      <circle cx="18" cy="48" r="3" fill="#FF9800"/>
      <circle cx="46" cy="48" r="3" fill="#FF9800"/>
    </svg>
  ),
  "Tomato Frog": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* very round body */}
      <circle cx="32" cy="36" r="16" fill="#E8512D"/>
      <circle cx="24" cy="26" r="5" fill="#D44420"/>
      <circle cx="40" cy="26" r="5" fill="#D44420"/>
      <circle cx="24" cy="25" r="2.5" fill="#F5E6C8"/>
      <circle cx="40" cy="25" r="2.5" fill="#F5E6C8"/>
      <circle cx="24" cy="25" r="1.5" fill="#333"/>
      <circle cx="40" cy="25" r="1.5" fill="#333"/>
      <path d="M28 42 Q32 45 36 42" stroke="#B33D1A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* belly lighter */}
      <ellipse cx="32" cy="42" rx="10" ry="6" fill="#F0A070" opacity=".4"/>
    </svg>
  ),

  // ── BIRDS ──
  "Flamingo": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="28" rx="10" ry="8" fill="#E8879B"/>
      {/* S-curved neck */}
      <path d="M28 22 Q22 14 26 6" stroke="#E8879B" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* head */}
      <circle cx="26" cy="6" r="4" fill="#E8879B"/>
      <circle cx="24" cy="5" r="1.2" fill="#333"/>
      {/* beak */}
      <path d="M22 7 L16 9 L22 9" fill="#333"/>
      {/* long legs */}
      <line x1="28" y1="36" x2="26" y2="56" stroke="#E8879B" strokeWidth="2"/>
      <line x1="36" y1="36" x2="38" y2="56" stroke="#E8879B" strokeWidth="2"/>
      <path d="M24 56 L28 56" stroke="#E8879B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 56 L40 56" stroke="#E8879B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Frigate Bird": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="30" rx="8" ry="10" fill="#2C2C2C"/>
      {/* wide wingspan */}
      <path d="M24 26 Q12 18 4 22" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 26 Q52 18 60 22" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* head */}
      <circle cx="32" cy="18" r="4" fill="#2C2C2C"/>
      <circle cx="30" cy="17" r="1" fill="#fff"/>
      {/* hooked beak */}
      <path d="M28 19 L24 20 L26 21" fill="#555"/>
      {/* red throat pouch */}
      <ellipse cx="32" cy="24" rx="4" ry="3" fill="#E53935"/>
      {/* forked tail */}
      <path d="M28 40 L26 50" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 40 L38 50" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Hummingbird": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* tiny body */}
      <ellipse cx="34" cy="30" rx="8" ry="6" fill="#4CAF50"/>
      {/* head */}
      <circle cx="26" cy="24" r="5" fill="#2E7D32"/>
      <circle cx="24" cy="23" r="1.2" fill="#333"/>
      {/* long thin beak */}
      <line x1="22" y1="24" x2="8" y2="22" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
      {/* wings (blurred/fast) */}
      <ellipse cx="40" cy="20" rx="10" ry="4" fill="#66BB6A" opacity=".6" transform="rotate(-20 40 20)"/>
      <ellipse cx="42" cy="24" rx="10" ry="4" fill="#66BB6A" opacity=".4" transform="rotate(-10 42 24)"/>
      {/* iridescent throat */}
      <ellipse cx="28" cy="28" rx="3" ry="2" fill="#E53935"/>
      {/* tail */}
      <path d="M42 32 L50 40 L46 40 L54 48" stroke="#2E7D32" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Owl": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* round face disc */}
      <circle cx="32" cy="30" r="18" fill="#C4A46B"/>
      <circle cx="32" cy="30" r="15" fill="#D4B87B"/>
      {/* big eyes */}
      <circle cx="24" cy="26" r="6" fill="#F5E6C8"/>
      <circle cx="40" cy="26" r="6" fill="#F5E6C8"/>
      <circle cx="24" cy="26" r="3.5" fill="#333"/>
      <circle cx="40" cy="26" r="3.5" fill="#333"/>
      <circle cx="25" cy="25" r="1.2" fill="#fff"/>
      <circle cx="41" cy="25" r="1.2" fill="#fff"/>
      {/* beak */}
      <path d="M30 32 L32 36 L34 32" fill="#E8A030"/>
      {/* ear tufts */}
      <path d="M20 14 L22 20" stroke="#B8944A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M44 14 L42 20" stroke="#B8944A" strokeWidth="3" strokeLinecap="round"/>
      {/* body hint */}
      <ellipse cx="32" cy="50" rx="10" ry="8" fill="#C4A46B"/>
    </svg>
  ),
  "Parrot": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="34" rx="10" ry="14" fill="#4CAF50"/>
      {/* head */}
      <circle cx="32" cy="16" r="8" fill="#4CAF50"/>
      {/* eye patch */}
      <circle cx="28" cy="14" r="3" fill="#fff"/>
      <circle cx="28" cy="14" r="1.5" fill="#333"/>
      {/* curved beak */}
      <path d="M22 18 Q18 16 20 12 Q22 14 24 15" fill="#333"/>
      {/* red/blue wing */}
      <path d="M42 28 Q52 34 48 46" stroke="#E53935" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 30 Q48 36 46 44" stroke="#2196F3" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* tail */}
      <path d="M30 48 L26 60" stroke="#E53935" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 48 L36 60" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
      {/* yellow on head */}
      <ellipse cx="36" cy="12" rx="3" ry="2" fill="#FFC107"/>
    </svg>
  ),
  "Penguin": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body - tuxedo */}
      <ellipse cx="32" cy="36" rx="12" ry="18" fill="#2C2C2C"/>
      {/* white belly */}
      <ellipse cx="32" cy="38" rx="8" ry="14" fill="#F5F5F5"/>
      {/* head */}
      <circle cx="32" cy="16" r="8" fill="#2C2C2C"/>
      {/* eyes */}
      <circle cx="28" cy="14" r="1.5" fill="#fff"/>
      <circle cx="36" cy="14" r="1.5" fill="#fff"/>
      <circle cx="28" cy="14" r=".8" fill="#333"/>
      <circle cx="36" cy="14" r=".8" fill="#333"/>
      {/* beak */}
      <path d="M30 18 L32 22 L34 18" fill="#FF9800"/>
      {/* flippers */}
      <path d="M20 30 Q16 36 18 44" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M44 30 Q48 36 46 44" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* feet */}
      <path d="M26 54 L22 58 L30 56" fill="#FF9800"/>
      <path d="M38 54 L42 58 L34 56" fill="#FF9800"/>
    </svg>
  ),
  "Pigeon": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="34" cy="34" rx="12" ry="10" fill="#9E9E9E"/>
      {/* head */}
      <circle cx="22" cy="22" r="7" fill="#BDBDBD"/>
      {/* eye */}
      <circle cx="20" cy="20" r="2" fill="#FF8F00"/>
      <circle cx="20" cy="20" r="1" fill="#333"/>
      {/* beak */}
      <path d="M16 24 L10 23 L14 26" fill="#E0C060"/>
      {/* iridescent neck */}
      <ellipse cx="24" cy="28" rx="5" ry="4" fill="#7B5EA7"/>
      <ellipse cx="24" cy="28" rx="5" ry="4" fill="#4CAF50" opacity=".3"/>
      {/* wing */}
      <path d="M34 28 Q44 24 50 30 Q46 36 40 38" fill="#888"/>
      {/* tail */}
      <path d="M46 36 L54 42 L52 44 L44 40" fill="#777"/>
      {/* feet */}
      <path d="M28 44 L26 54 L24 54" stroke="#D4749A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M34 44 L34 54 L32 54" stroke="#D4749A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Red Cardinal": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="38" rx="12" ry="14" fill="#D32F2F"/>
      {/* head */}
      <circle cx="32" cy="20" r="8" fill="#D32F2F"/>
      {/* crest */}
      <path d="M30 12 L32 2 L36 12" fill="#D32F2F"/>
      {/* black mask */}
      <path d="M24 20 Q32 26 40 20 Q36 18 32 18 Q28 18 24 20" fill="#333"/>
      {/* eye */}
      <circle cx="28" cy="18" r="1.5" fill="#333"/>
      {/* orange beak */}
      <path d="M24 22 L18 24 L24 26" fill="#FF8F00"/>
      {/* wing */}
      <path d="M40 32 Q50 30 48 42" stroke="#B71C1C" strokeWidth="2" fill="#C62828" strokeLinecap="round"/>
      {/* tail */}
      <path d="M32 52 L30 60" stroke="#B71C1C" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M34 52 L36 60" stroke="#B71C1C" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  "Woodpecker": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body on tree */}
      <rect x="44" y="8" width="10" height="56" rx="4" fill="#A1887F"/>
      {/* body */}
      <ellipse cx="34" cy="34" rx="10" ry="12" fill="#333"/>
      {/* white belly */}
      <ellipse cx="32" cy="38" rx="6" ry="8" fill="#F5F5F5"/>
      {/* head */}
      <circle cx="30" cy="18" r="7" fill="#333"/>
      {/* red crest */}
      <ellipse cx="32" cy="12" rx="5" ry="3" fill="#D32F2F"/>
      {/* eye */}
      <circle cx="27" cy="17" r="1.5" fill="#fff"/>
      <circle cx="27" cy="17" r=".8" fill="#333"/>
      {/* beak pointing at tree */}
      <path d="M36 20 L44 20" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
      {/* feet gripping */}
      <path d="M38 36 L44 34" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 40 L44 38" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  // ── DINOSAURS ──
  "Ankylosaurus": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* armored body */}
      <ellipse cx="30" cy="34" rx="16" ry="10" fill="#8B7D5A"/>
      {/* armor bumps */}
      <circle cx="22" cy="28" r="3" fill="#9E8E6A"/>
      <circle cx="30" cy="26" r="3" fill="#9E8E6A"/>
      <circle cx="38" cy="28" r="3" fill="#9E8E6A"/>
      <circle cx="26" cy="34" r="2.5" fill="#9E8E6A"/>
      <circle cx="34" cy="33" r="2.5" fill="#9E8E6A"/>
      {/* head */}
      <ellipse cx="14" cy="30" rx="6" ry="5" fill="#8B7D5A"/>
      <circle cx="12" cy="28" r="1.2" fill="#333"/>
      {/* tail with club */}
      <path d="M46 34 Q52 32 56 30" stroke="#8B7D5A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="58" cy="29" r="4" fill="#7A6C4A"/>
      {/* legs */}
      <rect x="20" y="42" width="4" height="10" rx="2" fill="#7A6C4A"/>
      <rect x="36" y="42" width="4" height="10" rx="2" fill="#7A6C4A"/>
    </svg>
  ),
  "Apatosaurus": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="34" rx="14" ry="10" fill="#7A9E6B"/>
      {/* long neck */}
      <path d="M20 30 Q14 20 12 10" stroke="#7A9E6B" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* head */}
      <ellipse cx="11" cy="8" rx="5" ry="3.5" fill="#7A9E6B"/>
      <circle cx="9" cy="7" r="1" fill="#333"/>
      {/* long tail */}
      <path d="M46 34 Q52 36 58 32 Q60 28 62 30" stroke="#7A9E6B" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* legs */}
      <rect x="22" y="42" width="5" height="12" rx="2" fill="#6B8E5A"/>
      <rect x="36" y="42" width="5" height="12" rx="2" fill="#6B8E5A"/>
    </svg>
  ),
  "Brachiosaurus": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="34" cy="40" rx="14" ry="10" fill="#6B8E6B"/>
      {/* very long neck going up */}
      <path d="M24 36 Q20 20 22 6" stroke="#6B8E6B" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* head */}
      <ellipse cx="22" cy="4" rx="5" ry="3" fill="#6B8E6B"/>
      <circle cx="20" cy="3" r="1" fill="#333"/>
      {/* front legs (longer) */}
      <rect x="24" y="48" width="4" height="12" rx="2" fill="#5A7D5A"/>
      {/* back legs (shorter) */}
      <rect x="40" y="48" width="4" height="8" rx="2" fill="#5A7D5A"/>
      {/* tail */}
      <path d="M48 40 Q54 42 58 38" stroke="#6B8E6B" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Pteranodon": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="32" rx="6" ry="8" fill="#8E7A5A"/>
      {/* head with crest */}
      <circle cx="32" cy="20" r="5" fill="#8E7A5A"/>
      <path d="M36 18 L48 10" stroke="#8E7A5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="30" cy="19" r="1.2" fill="#333"/>
      {/* long beak */}
      <path d="M28 22 L18 24" stroke="#A08060" strokeWidth="2" strokeLinecap="round"/>
      {/* wide wings */}
      <path d="M26 28 Q10 20 4 28 Q10 30 20 30" fill="#A08060"/>
      <path d="M38 28 Q54 20 60 28 Q54 30 44 30" fill="#A08060"/>
      {/* feet */}
      <path d="M30 40 L28 48" stroke="#8E7A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M34 40 L36 48" stroke="#8E7A5A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Spinosaurus": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="30" cy="40" rx="14" ry="8" fill="#6B7A5A"/>
      {/* sail on back */}
      <path d="M18 42 Q20 20 30 18 Q40 20 42 42" fill="#8B9E6B" stroke="#6B7A5A" strokeWidth="1"/>
      {/* neck + crocodile snout */}
      <path d="M18 38 Q12 34 8 30" stroke="#6B7A5A" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <ellipse cx="6" cy="28" rx="6" ry="3" fill="#6B7A5A"/>
      <circle cx="8" cy="26" r="1" fill="#333"/>
      {/* jaw teeth hint */}
      <path d="M2 30 L4 32 L6 30 L8 32" stroke="#fff" strokeWidth=".8"/>
      {/* legs */}
      <rect x="22" y="46" width="4" height="10" rx="2" fill="#5A6B4A"/>
      <rect x="36" y="46" width="3" height="8" rx="1.5" fill="#5A6B4A"/>
      {/* tail */}
      <path d="M44 40 Q52 42 58 38" stroke="#6B7A5A" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Stegosaurus": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="30" cy="38" rx="14" ry="9" fill="#8B7D5A"/>
      {/* plates on back */}
      <path d="M18 30 L20 20 L22 30" fill="#A08060"/>
      <path d="M24 28 L27 16 L30 28" fill="#A08060"/>
      <path d="M32 28 L35 18 L38 28" fill="#A08060"/>
      <path d="M38 30 L40 22 L42 30" fill="#A08060"/>
      {/* small head */}
      <ellipse cx="14" cy="34" rx="5" ry="4" fill="#8B7D5A"/>
      <circle cx="12" cy="32" r="1" fill="#333"/>
      {/* tail with spikes */}
      <path d="M44 38 Q50 36 54 34" stroke="#8B7D5A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <line x1="52" y1="34" x2="56" y2="28" stroke="#A08060" strokeWidth="2" strokeLinecap="round"/>
      <line x1="54" y1="34" x2="60" y2="30" stroke="#A08060" strokeWidth="2" strokeLinecap="round"/>
      {/* legs */}
      <rect x="20" y="45" width="4" height="10" rx="2" fill="#7A6C4A"/>
      <rect x="36" y="45" width="4" height="10" rx="2" fill="#7A6C4A"/>
    </svg>
  ),
  "Triceratops": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="36" cy="38" rx="14" ry="10" fill="#8B9E6B"/>
      {/* frill */}
      <ellipse cx="18" cy="22" rx="12" ry="10" fill="#A0B47A" stroke="#8B9E6B" strokeWidth="1.5"/>
      {/* head */}
      <ellipse cx="16" cy="32" rx="8" ry="6" fill="#8B9E6B"/>
      <circle cx="14" cy="30" r="1.5" fill="#333"/>
      {/* three horns */}
      <line x1="10" y1="30" x2="2" y2="26" stroke="#D4C090" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="24" x2="12" y2="14" stroke="#D4C090" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="24" x2="20" y2="14" stroke="#D4C090" strokeWidth="2" strokeLinecap="round"/>
      {/* beak */}
      <path d="M8 34 L6 36" stroke="#7A8E5A" strokeWidth="2" strokeLinecap="round"/>
      {/* legs */}
      <rect x="28" y="46" width="4" height="10" rx="2" fill="#7A8E5A"/>
      <rect x="42" y="46" width="4" height="10" rx="2" fill="#7A8E5A"/>
      {/* tail */}
      <path d="M50 38 Q56 40 58 36" stroke="#8B9E6B" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Tyrannosaurus Rex": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="34" cy="34" rx="12" ry="10" fill="#6B7A5A"/>
      {/* big head */}
      <ellipse cx="18" cy="20" rx="10" ry="8" fill="#6B7A5A"/>
      <circle cx="14" cy="17" r="2" fill="#fff"/>
      <circle cx="14" cy="17" r="1" fill="#333"/>
      {/* open jaw with teeth */}
      <path d="M10 24 L8 28 L20 28 L18 24" fill="#5A6B4A"/>
      <path d="M10 24 L11 26 L13 24 L15 26 L17 24" stroke="#fff" strokeWidth="1" fill="#fff"/>
      {/* tiny arms */}
      <path d="M24 28 Q22 32 20 30" stroke="#6B7A5A" strokeWidth="2" strokeLinecap="round"/>
      {/* strong legs */}
      <rect x="28" y="42" width="5" height="12" rx="2" fill="#5A6B4A"/>
      <rect x="38" y="42" width="5" height="12" rx="2" fill="#5A6B4A"/>
      {/* tail */}
      <path d="M46 34 Q52 32 58 34 Q60 36 62 34" stroke="#6B7A5A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Velociraptor": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* small feathered body */}
      <ellipse cx="32" cy="34" rx="10" ry="8" fill="#8B7A5A"/>
      {/* feather tufts */}
      <path d="M26 28 Q24 24 28 26" stroke="#A08E6A" strokeWidth="1.5" fill="#A08E6A"/>
      <path d="M38 28 Q40 24 36 26" stroke="#A08E6A" strokeWidth="1.5" fill="#A08E6A"/>
      {/* head */}
      <ellipse cx="18" cy="22" rx="6" ry="4.5" fill="#8B7A5A"/>
      <circle cx="16" cy="20" r="1.5" fill="#333"/>
      {/* snout + teeth */}
      <path d="M12 24 L10 22" stroke="#8B7A5A" strokeWidth="2" strokeLinecap="round"/>
      {/* neck */}
      <path d="M24 28 Q20 24 18 24" stroke="#8B7A5A" strokeWidth="3" fill="none"/>
      {/* legs with claw */}
      <path d="M28 42 L26 50 L24 52" stroke="#7A6B4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 42 L38 50 L36 52" stroke="#7A6B4A" strokeWidth="2" strokeLinecap="round"/>
      {/* big curved claw */}
      <path d="M24 52 Q22 48 26 50" stroke="#555" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* tail with feathers */}
      <path d="M42 34 Q50 32 56 28" stroke="#8B7A5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M54 26 Q56 24 58 26" stroke="#A08E6A" strokeWidth="1.5" fill="#A08E6A"/>
    </svg>
  ),

  // ── INSECTS ──
  "Atlas Moth": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="32" rx="3" ry="10" fill="#8B5A3A"/>
      {/* large wings */}
      <ellipse cx="16" cy="28" rx="14" ry="12" fill="#C0744A" transform="rotate(-10 16 28)"/>
      <ellipse cx="48" cy="28" rx="14" ry="12" fill="#C0744A" transform="rotate(10 48 28)"/>
      {/* wing patterns */}
      <ellipse cx="12" cy="26" rx="5" ry="4" fill="#8B4A2A" opacity=".5"/>
      <ellipse cx="52" cy="26" rx="5" ry="4" fill="#8B4A2A" opacity=".5"/>
      {/* snake head wing tips */}
      <ellipse cx="6" cy="22" rx="4" ry="3" fill="#6B3A1A" opacity=".6"/>
      <ellipse cx="58" cy="22" rx="4" ry="3" fill="#6B3A1A" opacity=".6"/>
      {/* lower wings */}
      <ellipse cx="18" cy="42" rx="10" ry="8" fill="#D4885A"/>
      <ellipse cx="46" cy="42" rx="10" ry="8" fill="#D4885A"/>
      {/* antennae */}
      <path d="M30 22 Q26 14 22 12" stroke="#8B5A3A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M34 22 Q38 14 42 12" stroke="#8B5A3A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Dragonfly": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* long thin body */}
      <rect x="30" y="20" width="4" height="36" rx="2" fill="#2196F3"/>
      {/* head with big eyes */}
      <circle cx="32" cy="16" r="6" fill="#2196F3"/>
      <circle cx="28" cy="14" r="3" fill="#4FC3F7"/>
      <circle cx="36" cy="14" r="3" fill="#4FC3F7"/>
      <circle cx="28" cy="14" r="1.5" fill="#333"/>
      <circle cx="36" cy="14" r="1.5" fill="#333"/>
      {/* four wings */}
      <ellipse cx="18" cy="26" rx="14" ry="4" fill="#B3E5FC" opacity=".7" transform="rotate(-10 18 26)"/>
      <ellipse cx="46" cy="26" rx="14" ry="4" fill="#B3E5FC" opacity=".7" transform="rotate(10 46 26)"/>
      <ellipse cx="18" cy="32" rx="12" ry="3.5" fill="#B3E5FC" opacity=".6" transform="rotate(5 18 32)"/>
      <ellipse cx="46" cy="32" rx="12" ry="3.5" fill="#B3E5FC" opacity=".6" transform="rotate(-5 46 32)"/>
      {/* tail tip */}
      <circle cx="32" cy="56" r="2" fill="#1976D2"/>
    </svg>
  ),
  "Dung Beetle": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* dung ball */}
      <circle cx="46" cy="44" r="10" fill="#8B7355"/>
      {/* beetle body */}
      <ellipse cx="28" cy="32" rx="12" ry="10" fill="#333"/>
      {/* head */}
      <ellipse cx="18" cy="28" rx="5" ry="4" fill="#444"/>
      {/* legs */}
      <path d="M22 40 Q18 46 14 48" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 42 Q26 48 24 50" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 40 Q38 44 40 42" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      {/* horn */}
      <path d="M16 26 Q14 20 16 18" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      {/* wing case line */}
      <line x1="28" y1="22" x2="28" y2="42" stroke="#555" strokeWidth=".8"/>
    </svg>
  ),
  "Firefly": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="30" rx="8" ry="10" fill="#444"/>
      {/* head */}
      <circle cx="32" cy="18" r="5" fill="#555"/>
      <circle cx="29" cy="16" r="1.2" fill="#333"/>
      <circle cx="35" cy="16" r="1.2" fill="#333"/>
      {/* antennae */}
      <path d="M30 14 Q26 8 24 6" stroke="#555" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M34 14 Q38 8 40 6" stroke="#555" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* glowing abdomen */}
      <ellipse cx="32" cy="44" rx="7" ry="8" fill="#FFEB3B"/>
      <ellipse cx="32" cy="44" rx="7" ry="8" fill="#FFF9C4" opacity=".5"/>
      {/* glow effect */}
      <ellipse cx="32" cy="44" rx="12" ry="12" fill="#FFEB3B" opacity=".15"/>
      {/* wings */}
      <ellipse cx="20" cy="28" rx="8" ry="4" fill="#666" opacity=".4" transform="rotate(-15 20 28)"/>
      <ellipse cx="44" cy="28" rx="8" ry="4" fill="#666" opacity=".4" transform="rotate(15 44 28)"/>
      {/* wing case */}
      <path d="M26 24 Q32 22 38 24" stroke="#555" strokeWidth="1" fill="none"/>
    </svg>
  ),
  "Hercules Beetle": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="34" cy="38" rx="12" ry="10" fill="#5A6B2A"/>
      {/* head */}
      <ellipse cx="22" cy="32" rx="6" ry="5" fill="#444"/>
      {/* huge horn - upper */}
      <path d="M20 28 Q14 18 8 12 Q6 10 8 8" stroke="#5A6B2A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* lower jaw horn */}
      <path d="M18 34 Q12 28 8 24" stroke="#444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* wing case line */}
      <line x1="34" y1="28" x2="34" y2="48" stroke="#4A5A1A" strokeWidth=".8"/>
      {/* legs */}
      <path d="M26 46 Q22 52 20 54" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 48 Q32 54 30 56" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 46 Q44 52 46 54" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Leafcutter Ant": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* leaf being carried */}
      <ellipse cx="28" cy="12" rx="10" ry="7" fill="#66BB6A" transform="rotate(-20 28 12)"/>
      <path d="M28 6 L28 18" stroke="#4CAF50" strokeWidth="1"/>
      {/* head */}
      <circle cx="24" cy="26" r="5" fill="#8B4513"/>
      {/* mandibles */}
      <path d="M20 28 Q18 32 16 30" stroke="#6B3410" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M22 30 Q20 34 18 32" stroke="#6B3410" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* eye */}
      <circle cx="22" cy="25" r="1" fill="#333"/>
      {/* antennae */}
      <path d="M22 22 Q18 18 16 14" stroke="#8B4513" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* thorax */}
      <ellipse cx="30" cy="32" rx="4" ry="3" fill="#A0522D"/>
      {/* abdomen */}
      <ellipse cx="38" cy="36" rx="6" ry="5" fill="#8B4513"/>
      {/* legs */}
      <path d="M26 30 Q22 36 18 40" stroke="#6B3410" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M30 34 Q28 40 24 44" stroke="#6B3410" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M36 38 Q38 44 36 48" stroke="#6B3410" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Monarch Butterfly": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="32" rx="2.5" ry="12" fill="#333"/>
      {/* upper wings - orange */}
      <ellipse cx="18" cy="26" rx="14" ry="10" fill="#FF8F00"/>
      <ellipse cx="46" cy="26" rx="14" ry="10" fill="#FF8F00"/>
      {/* black veins on upper wings */}
      <line x1="18" y1="18" x2="18" y2="34" stroke="#333" strokeWidth="1"/>
      <line x1="10" y1="26" x2="26" y2="26" stroke="#333" strokeWidth="1"/>
      <line x1="46" y1="18" x2="46" y2="34" stroke="#333" strokeWidth="1"/>
      <line x1="38" y1="26" x2="54" y2="26" stroke="#333" strokeWidth="1"/>
      {/* white dots on wing edges */}
      <circle cx="6" cy="24" r="1" fill="#fff"/>
      <circle cx="8" cy="20" r="1" fill="#fff"/>
      <circle cx="58" cy="24" r="1" fill="#fff"/>
      <circle cx="56" cy="20" r="1" fill="#fff"/>
      {/* lower wings */}
      <ellipse cx="18" cy="40" rx="10" ry="8" fill="#FF8F00"/>
      <ellipse cx="46" cy="40" rx="10" ry="8" fill="#FF8F00"/>
      {/* antennae */}
      <path d="M30 20 Q28 12 26 8" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M34 20 Q36 12 38 8" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <circle cx="26" cy="8" r="1.5" fill="#333"/>
      <circle cx="38" cy="8" r="1.5" fill="#333"/>
    </svg>
  ),
  "Praying Mantis": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* long body */}
      <ellipse cx="32" cy="38" rx="5" ry="14" fill="#6B8E4A"/>
      {/* thorax */}
      <ellipse cx="32" cy="22" rx="4" ry="6" fill="#7A9E5A"/>
      {/* triangular head */}
      <path d="M26 12 L32 8 L38 12 L32 16 Z" fill="#6B8E4A"/>
      {/* big eyes */}
      <circle cx="28" cy="11" r="2.5" fill="#8BC34A"/>
      <circle cx="36" cy="11" r="2.5" fill="#8BC34A"/>
      <circle cx="28" cy="11" r="1" fill="#333"/>
      <circle cx="36" cy="11" r="1" fill="#333"/>
      {/* folded front legs (praying) */}
      <path d="M28 18 L20 14 L18 20 L26 22" stroke="#5A7A3A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M36 18 L44 14 L46 20 L38 22" stroke="#5A7A3A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* back legs */}
      <path d="M28 40 Q20 48 16 52" stroke="#5A7A3A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M36 40 Q44 48 48 52" stroke="#5A7A3A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* antennae */}
      <path d="M30 8 Q26 2 24 0" stroke="#6B8E4A" strokeWidth=".8" fill="none"/>
      <path d="M34 8 Q38 2 40 0" stroke="#6B8E4A" strokeWidth=".8" fill="none"/>
    </svg>
  ),
  "Walking Stick": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* very long thin body */}
      <rect x="30" y="6" width="4" height="50" rx="2" fill="#8B7355"/>
      {/* head */}
      <ellipse cx="32" cy="6" rx="3" ry="2.5" fill="#7A6245"/>
      <circle cx="30" cy="5" r=".8" fill="#333"/>
      <circle cx="34" cy="5" r=".8" fill="#333"/>
      {/* antennae */}
      <path d="M30 4 Q26 0 24 -2" stroke="#7A6245" strokeWidth=".8" fill="none"/>
      <path d="M34 4 Q38 0 40 -2" stroke="#7A6245" strokeWidth=".8" fill="none"/>
      {/* thin legs - like twigs */}
      <path d="M30 16 Q20 12 14 16" stroke="#7A6245" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M34 16 Q44 12 50 16" stroke="#7A6245" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M30 28 Q18 24 12 28" stroke="#7A6245" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M34 28 Q46 24 52 28" stroke="#7A6245" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M30 40 Q20 36 14 40" stroke="#7A6245" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M34 40 Q44 36 50 40" stroke="#7A6245" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* small node details like a real twig */}
      <circle cx="32" cy="20" r="1.5" fill="#9E8E7A"/>
      <circle cx="32" cy="34" r="1.5" fill="#9E8E7A"/>
    </svg>
  ),

  // ── OCEAN ANIMALS ──
  "Blue Whale": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* massive body */}
      <ellipse cx="28" cy="32" rx="22" ry="12" fill="#5A7A9E"/>
      {/* lighter belly */}
      <ellipse cx="28" cy="36" rx="18" ry="6" fill="#8AAEC0"/>
      {/* eye */}
      <circle cx="10" cy="28" r="1.5" fill="#333"/>
      {/* mouth line */}
      <path d="M6 34 Q12 38 20 36" stroke="#4A6A8E" strokeWidth="1" fill="none"/>
      {/* tail */}
      <path d="M50 30 Q56 24 62 22" stroke="#5A7A9E" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M50 34 Q56 40 62 42" stroke="#5A7A9E" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* water spout */}
      <path d="M12 20 Q10 12 8 8" stroke="#87CEEB" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M12 20 Q14 12 16 8" stroke="#87CEEB" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* fin */}
      <path d="M28 22 L32 14 L34 22" fill="#4A6A8E"/>
    </svg>
  ),
  "Clownfish": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="30" cy="32" rx="16" ry="10" fill="#FF8F00"/>
      {/* white stripes */}
      <path d="M20 22 Q18 32 20 42" stroke="#fff" strokeWidth="3"/>
      <path d="M32 22 Q30 32 32 42" stroke="#fff" strokeWidth="3"/>
      <path d="M42 26 Q40 32 42 38" stroke="#fff" strokeWidth="2.5"/>
      {/* black outlines on stripes */}
      <path d="M20 22 Q18 32 20 42" stroke="#333" strokeWidth=".5"/>
      <path d="M32 22 Q30 32 32 42" stroke="#333" strokeWidth=".5"/>
      {/* eye */}
      <circle cx="16" cy="30" r="2.5" fill="#fff"/>
      <circle cx="16" cy="30" r="1.2" fill="#333"/>
      {/* tail fin */}
      <path d="M46 28 Q52 24 54 28 Q52 32 54 36 Q52 40 46 36" fill="#FF8F00"/>
      {/* fins */}
      <path d="M24 22 Q26 18 30 20" stroke="#FF8F00" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Dolphin": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* sleek body */}
      <path d="M8 30 Q16 20 32 22 Q48 24 56 30 Q48 40 32 38 Q16 36 8 30" fill="#607D8B"/>
      {/* lighter belly */}
      <path d="M14 32 Q24 38 40 36 Q50 34 54 32 Q46 38 32 36 Q18 36 14 32" fill="#90A4AE"/>
      {/* dorsal fin */}
      <path d="M30 22 L34 12 L36 22" fill="#546E7A"/>
      {/* eye */}
      <circle cx="14" cy="28" r="1.5" fill="#333"/>
      {/* beak/snout */}
      <path d="M8 30 L2 28" stroke="#607D8B" strokeWidth="2" strokeLinecap="round"/>
      {/* mouth smile */}
      <path d="M4 30 Q8 32 12 30" stroke="#455A64" strokeWidth=".8" fill="none"/>
      {/* tail fluke */}
      <path d="M56 28 Q60 22 62 24" stroke="#607D8B" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M56 32 Q60 38 62 36" stroke="#607D8B" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* pectoral fin */}
      <path d="M22 34 Q20 40 18 42" stroke="#546E7A" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Giant Pacific Octopus": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* head */}
      <ellipse cx="32" cy="18" rx="12" ry="10" fill="#C0504D"/>
      {/* eyes */}
      <circle cx="26" cy="18" r="3" fill="#F5E6C8"/>
      <circle cx="38" cy="18" r="3" fill="#F5E6C8"/>
      <circle cx="26" cy="18" r="1.5" fill="#333"/>
      <circle cx="38" cy="18" r="1.5" fill="#333"/>
      {/* 8 tentacles */}
      <path d="M22 28 Q14 36 8 44 Q6 48 10 46" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M24 28 Q18 38 14 50 Q12 54 16 52" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M28 28 Q26 40 22 52 Q20 56 24 54" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M32 28 Q32 42 30 54 Q28 58 32 56" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M36 28 Q38 42 40 54 Q42 58 40 54" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M40 28 Q44 40 48 52 Q50 56 48 52" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 28 Q48 38 52 48 Q54 52 52 48" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M44 26 Q50 34 56 42 Q58 46 56 42" stroke="#B0403D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* suction cups hint */}
      <circle cx="12" cy="42" r="1" fill="#D4746D"/>
      <circle cx="18" cy="48" r="1" fill="#D4746D"/>
      <circle cx="46" cy="46" r="1" fill="#D4746D"/>
    </svg>
  ),
  "Hammerhead Shark": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="32" rx="16" ry="8" fill="#78909C"/>
      {/* hammer head */}
      <rect x="8" y="24" width="48" height="6" rx="3" fill="#78909C"/>
      {/* eyes on ends of hammer */}
      <circle cx="10" cy="27" r="2" fill="#fff"/>
      <circle cx="10" cy="27" r="1" fill="#333"/>
      <circle cx="54" cy="27" r="2" fill="#fff"/>
      <circle cx="54" cy="27" r="1" fill="#333"/>
      {/* dorsal fin */}
      <path d="M30 24 L32 14 L36 24" fill="#607D8B"/>
      {/* tail */}
      <path d="M48 30 Q54 24 58 20" stroke="#78909C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M48 34 Q52 38 54 36" stroke="#78909C" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* belly */}
      <ellipse cx="32" cy="36" rx="12" ry="3" fill="#B0BEC5"/>
      {/* pectoral fins */}
      <path d="M22 36 Q18 44 14 46" stroke="#78909C" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M42 36 Q46 44 50 46" stroke="#78909C" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Jellyfish": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* bell/dome */}
      <path d="M12 30 Q12 10 32 10 Q52 10 52 30 Z" fill="#CE93D8" opacity=".7"/>
      <path d="M16 28 Q16 14 32 14 Q48 14 48 28" fill="#E1BEE7" opacity=".5"/>
      {/* tentacles - wavy */}
      <path d="M16 30 Q14 38 18 42 Q22 46 18 52 Q14 58 18 62" stroke="#CE93D8" strokeWidth="1.5" fill="none" opacity=".6"/>
      <path d="M24 30 Q22 40 26 44 Q30 48 26 54 Q22 60 26 62" stroke="#CE93D8" strokeWidth="1.5" fill="none" opacity=".7"/>
      <path d="M32 30 Q30 40 34 44 Q38 48 34 54 Q30 60 34 62" stroke="#CE93D8" strokeWidth="1.5" fill="none" opacity=".6"/>
      <path d="M40 30 Q38 38 42 42 Q46 46 42 52 Q38 58 42 62" stroke="#CE93D8" strokeWidth="1.5" fill="none" opacity=".7"/>
      <path d="M48 30 Q46 38 50 42 Q54 46 50 52" stroke="#CE93D8" strokeWidth="1.5" fill="none" opacity=".6"/>
      {/* inner glow */}
      <ellipse cx="32" cy="20" rx="6" ry="4" fill="#F3E5F5" opacity=".5"/>
    </svg>
  ),
  "Sea Turtle": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* shell */}
      <ellipse cx="32" cy="32" rx="16" ry="14" fill="#6B8E4A"/>
      {/* shell pattern */}
      <ellipse cx="32" cy="32" rx="10" ry="8" fill="#7A9E5A" stroke="#5A7A3A" strokeWidth="1"/>
      <line x1="32" y1="24" x2="32" y2="40" stroke="#5A7A3A" strokeWidth=".8"/>
      <line x1="22" y1="32" x2="42" y2="32" stroke="#5A7A3A" strokeWidth=".8"/>
      {/* head */}
      <ellipse cx="32" cy="14" rx="5" ry="4" fill="#8BAA6A"/>
      <circle cx="29" cy="13" r="1" fill="#333"/>
      <circle cx="35" cy="13" r="1" fill="#333"/>
      {/* flippers */}
      <path d="M16 26 Q8 20 6 24 Q8 28 14 28" fill="#7A9A5A"/>
      <path d="M48 26 Q56 20 58 24 Q56 28 50 28" fill="#7A9A5A"/>
      <path d="M18 40 Q12 46 14 48 Q16 46 20 42" fill="#7A9A5A"/>
      <path d="M46 40 Q52 46 50 48 Q48 46 44 42" fill="#7A9A5A"/>
      {/* tail */}
      <path d="M32 46 L32 50" stroke="#8BAA6A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Seal": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="36" rx="16" ry="10" fill="#8E8E8E"/>
      {/* head */}
      <circle cx="18" cy="24" r="10" fill="#9E9E9E"/>
      {/* big dark eyes */}
      <circle cx="14" cy="22" r="3" fill="#333"/>
      <circle cx="15" cy="21" r="1" fill="#fff"/>
      {/* nose */}
      <ellipse cx="10" cy="26" rx="2" ry="1.5" fill="#444"/>
      {/* whiskers */}
      <path d="M12 28 L4 26" stroke="#777" strokeWidth=".8" strokeLinecap="round"/>
      <path d="M12 29 L4 30" stroke="#777" strokeWidth=".8" strokeLinecap="round"/>
      <path d="M12 30 L4 34" stroke="#777" strokeWidth=".8" strokeLinecap="round"/>
      {/* flippers */}
      <path d="M48 34 Q54 30 58 34 Q56 38 52 36" fill="#7A7A7A"/>
      <path d="M48 38 Q54 42 58 40 Q56 36 52 38" fill="#7A7A7A"/>
      {/* belly */}
      <ellipse cx="30" cy="40" rx="10" ry="4" fill="#B0B0B0"/>
    </svg>
  ),
  "Starfish": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* five-pointed star shape */}
      <path d="M32 6 L37 22 L54 22 L40 32 L46 50 L32 40 L18 50 L24 32 L10 22 L27 22 Z" fill="#E8734A"/>
      {/* center */}
      <circle cx="32" cy="28" r="5" fill="#D4623A"/>
      {/* bumpy texture dots */}
      <circle cx="32" cy="14" r="1" fill="#F0956A"/>
      <circle cx="44" cy="24" r="1" fill="#F0956A"/>
      <circle cx="42" cy="40" r="1" fill="#F0956A"/>
      <circle cx="22" cy="40" r="1" fill="#F0956A"/>
      <circle cx="20" cy="24" r="1" fill="#F0956A"/>
      <circle cx="32" cy="20" r=".8" fill="#F0956A"/>
      <circle cx="38" cy="30" r=".8" fill="#F0956A"/>
      <circle cx="26" cy="30" r=".8" fill="#F0956A"/>
    </svg>
  ),

  // ── REPTILES ──
  "Basilisk Lizard": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="30" cy="30" rx="12" ry="8" fill="#4CAF50"/>
      {/* head with crest */}
      <ellipse cx="14" cy="22" rx="6" ry="5" fill="#4CAF50"/>
      <path d="M14 18 Q16 10 20 14 Q22 8 24 14" fill="#66BB6A"/>
      <circle cx="12" cy="20" r="1.5" fill="#333"/>
      {/* running on water - hind legs up */}
      <path d="M34 36 Q38 44 36 52" stroke="#388E3C" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M28 36 Q24 44 22 52" stroke="#388E3C" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* water splash */}
      <path d="M18 54 Q22 50 26 54" stroke="#64B5F6" strokeWidth="1" fill="none"/>
      <path d="M32 54 Q36 50 40 54" stroke="#64B5F6" strokeWidth="1" fill="none"/>
      {/* long tail */}
      <path d="M42 30 Q50 28 56 24 Q60 22 62 24" stroke="#4CAF50" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* front legs */}
      <path d="M20 28 Q16 32 14 36" stroke="#388E3C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Chameleon": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="30" rx="14" ry="10" fill="#66BB6A"/>
      {/* head */}
      <path d="M16 24 Q8 20 6 26 Q8 32 16 30" fill="#66BB6A"/>
      {/* casque/crest on head */}
      <path d="M12 20 Q8 14 10 18" fill="#4CAF50"/>
      {/* big bulging eye */}
      <circle cx="12" cy="24" r="4" fill="#81C784"/>
      <circle cx="12" cy="24" r="2" fill="#333"/>
      {/* curled tail */}
      <path d="M46 30 Q52 28 54 24 Q56 20 54 18 Q52 16 50 18 Q48 20 50 22" stroke="#66BB6A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* tong-like feet */}
      <path d="M24 38 Q22 44 20 46" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M38 38 Q40 44 42 46" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* color patches */}
      <circle cx="28" cy="28" r="3" fill="#FFC107" opacity=".4"/>
      <circle cx="36" cy="32" r="2.5" fill="#81C784" opacity=".4"/>
    </svg>
  ),
  "Frilled-Neck Lizard": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body */}
      <ellipse cx="32" cy="36" rx="10" ry="8" fill="#A0522D"/>
      {/* frill - big circle around head */}
      <circle cx="32" cy="18" r="14" fill="#D4885A" opacity=".8"/>
      <circle cx="32" cy="18" r="14" stroke="#C0744A" strokeWidth="1.5" fill="none"/>
      {/* radial frill lines */}
      <path d="M32 4 L32 8" stroke="#C0744A" strokeWidth="1"/>
      <path d="M22 6 L24 10" stroke="#C0744A" strokeWidth="1"/>
      <path d="M42 6 L40 10" stroke="#C0744A" strokeWidth="1"/>
      <path d="M18 14 L22 16" stroke="#C0744A" strokeWidth="1"/>
      <path d="M46 14 L42 16" stroke="#C0744A" strokeWidth="1"/>
      {/* head in center of frill */}
      <ellipse cx="32" cy="20" rx="6" ry="5" fill="#A0522D"/>
      {/* open mouth */}
      <path d="M28 22 Q32 28 36 22" fill="#E8512D"/>
      {/* eyes */}
      <circle cx="28" cy="18" r="1.5" fill="#333"/>
      <circle cx="36" cy="18" r="1.5" fill="#333"/>
      {/* legs */}
      <path d="M24 42 Q20 50 16 52" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M40 42 Q44 50 48 52" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* tail */}
      <path d="M32 44 Q34 52 36 58" stroke="#A0522D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Gecko": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* body - top view */}
      <ellipse cx="32" cy="32" rx="8" ry="14" fill="#66BB6A"/>
      {/* head */}
      <ellipse cx="32" cy="16" rx="7" ry="5" fill="#66BB6A"/>
      {/* big eyes (no eyelids!) */}
      <circle cx="27" cy="14" r="3" fill="#FFC107"/>
      <circle cx="37" cy="14" r="3" fill="#FFC107"/>
      <circle cx="27" cy="14" r="1.5" fill="#333"/>
      <circle cx="37" cy="14" r="1.5" fill="#333"/>
      {/* toe pads - splayed feet */}
      <path d="M24 22 Q14 18 10 20" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="10" cy="20" r="2" fill="#4CAF50"/>
      <path d="M40 22 Q50 18 54 20" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="54" cy="20" r="2" fill="#4CAF50"/>
      <path d="M24 42 Q14 46 10 44" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="10" cy="44" r="2" fill="#4CAF50"/>
      <path d="M40 42 Q50 46 54 44" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="54" cy="44" r="2" fill="#4CAF50"/>
      {/* spots */}
      <circle cx="30" cy="28" r="1.5" fill="#81C784"/>
      <circle cx="35" cy="34" r="1.5" fill="#81C784"/>
      <circle cx="29" cy="38" r="1.2" fill="#81C784"/>
      {/* tail */}
      <path d="M32 46 Q34 54 36 58 Q38 62 36 60" stroke="#66BB6A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Gila Monster": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* stocky body */}
      <ellipse cx="32" cy="32" rx="12" ry="16" fill="#333"/>
      {/* bead-like pattern */}
      <circle cx="26" cy="24" r="2.5" fill="#FF8F00"/>
      <circle cx="34" cy="22" r="2.5" fill="#FF8F00"/>
      <circle cx="38" cy="28" r="2.5" fill="#FF8F00"/>
      <circle cx="28" cy="30" r="2.5" fill="#FF8F00"/>
      <circle cx="34" cy="36" r="2.5" fill="#FF8F00"/>
      <circle cx="26" cy="38" r="2.5" fill="#FF8F00"/>
      <circle cx="38" cy="42" r="2" fill="#FF8F00"/>
      <circle cx="30" cy="44" r="2" fill="#FF8F00"/>
      {/* head */}
      <ellipse cx="32" cy="14" rx="7" ry="4" fill="#333"/>
      <circle cx="28" cy="13" r="1.2" fill="#FF8F00"/>
      <circle cx="36" cy="13" r="1.2" fill="#FF8F00"/>
      <circle cx="28" cy="13" r=".6" fill="#333"/>
      <circle cx="36" cy="13" r=".6" fill="#333"/>
      {/* forked tongue */}
      <path d="M32 10 L30 6 M32 10 L34 6" stroke="#E53935" strokeWidth="1" strokeLinecap="round"/>
      {/* thick tail */}
      <path d="M32 48 Q34 54 36 58" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <circle cx="34" cy="52" r="1.5" fill="#FF8F00"/>
      {/* stubby legs */}
      <path d="M22 24 Q14 20 10 22" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 24 Q50 20 54 22" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M22 42 Q14 46 10 44" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 42 Q50 46 54 44" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Green Anaconda": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* coiled thick body */}
      <path d="M20 48 Q8 44 8 34 Q8 24 18 20 Q28 16 38 20 Q48 24 48 34 Q48 44 38 46 Q28 48 24 40 Q22 34 28 30 Q34 26 38 30 Q40 34 36 36" stroke="#4CAF50" strokeWidth="6" fill="none" strokeLinecap="round"/>
      {/* pattern spots */}
      <circle cx="12" cy="34" r="2" fill="#2E7D32" opacity=".5"/>
      <circle cx="24" cy="20" r="2" fill="#2E7D32" opacity=".5"/>
      <circle cx="44" cy="30" r="2" fill="#2E7D32" opacity=".5"/>
      <circle cx="36" cy="44" r="2" fill="#2E7D32" opacity=".5"/>
      {/* head */}
      <ellipse cx="36" cy="36" rx="4" ry="3" fill="#4CAF50"/>
      <circle cx="34" cy="35" r="1" fill="#333"/>
      {/* forked tongue */}
      <path d="M40 36 L44 34 M40 36 L44 38" stroke="#E53935" strokeWidth=".8" strokeLinecap="round"/>
    </svg>
  ),
  "King Cobra": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* coiled body at base */}
      <ellipse cx="32" cy="50" rx="14" ry="6" fill="#6B5B4F"/>
      <ellipse cx="32" cy="46" rx="12" ry="4" fill="#7A6B5A"/>
      {/* raised body */}
      <path d="M32 42 L32 22" stroke="#7A6B5A" strokeWidth="6" fill="none" strokeLinecap="round"/>
      {/* spread hood */}
      <path d="M20 22 Q16 16 18 12 Q24 8 32 6 Q40 8 46 12 Q48 16 44 22" fill="#8B7D5A"/>
      <path d="M22 22 Q20 16 22 12 Q28 8 32 7 Q36 8 42 12 Q44 16 42 22" fill="#A0926B"/>
      {/* hood markings */}
      <ellipse cx="32" cy="14" rx="4" ry="3" fill="#6B5B4F" opacity=".5"/>
      {/* eyes */}
      <circle cx="28" cy="16" r="1.5" fill="#333"/>
      <circle cx="36" cy="16" r="1.5" fill="#333"/>
      {/* forked tongue */}
      <path d="M32 22 L30 26 M32 22 L34 26" stroke="#E53935" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  "Komodo Dragon": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* large body - side view */}
      <ellipse cx="30" cy="32" rx="16" ry="9" fill="#6B6B4A"/>
      {/* head */}
      <ellipse cx="10" cy="28" rx="8" ry="5" fill="#6B6B4A"/>
      <circle cx="8" cy="26" r="1.5" fill="#333"/>
      {/* forked tongue */}
      <path d="M2 28 L-2 26 M2 28 L-2 30" stroke="#E53935" strokeWidth="1" strokeLinecap="round"/>
      {/* open jaw hint */}
      <path d="M4 30 L8 32" stroke="#5A5A3A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* scaly texture */}
      <circle cx="22" cy="28" r="1.5" fill="#7A7A5A" opacity=".5"/>
      <circle cx="30" cy="30" r="1.5" fill="#7A7A5A" opacity=".5"/>
      <circle cx="38" cy="28" r="1.5" fill="#7A7A5A" opacity=".5"/>
      {/* strong legs */}
      <path d="M20 38 Q16 46 12 48" stroke="#5A5A3A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M36 38 Q40 46 44 48" stroke="#5A5A3A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* claws */}
      <path d="M12 48 L10 50 M12 48 L14 50" stroke="#444" strokeWidth="1" strokeLinecap="round"/>
      <path d="M44 48 L42 50 M44 48 L46 50" stroke="#444" strokeWidth="1" strokeLinecap="round"/>
      {/* long thick tail */}
      <path d="M46 32 Q52 30 58 28 Q62 26 60 28" stroke="#6B6B4A" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Saltwater Crocodile": () => (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" style={S}>
      {/* long body - top view */}
      <ellipse cx="28" cy="32" rx="10" ry="18" fill="#5A6B4A"/>
      {/* long snout */}
      <ellipse cx="28" cy="10" rx="6" ry="8" fill="#5A6B4A"/>
      <ellipse cx="28" cy="6" rx="4" ry="4" fill="#4A5A3A"/>
      {/* nostrils */}
      <circle cx="26" cy="4" r="1" fill="#333"/>
      <circle cx="30" cy="4" r="1" fill="#333"/>
      {/* eyes */}
      <circle cx="22" cy="14" r="2" fill="#C8B832"/>
      <circle cx="34" cy="14" r="2" fill="#C8B832"/>
      <circle cx="22" cy="14" r="1" fill="#333"/>
      <circle cx="34" cy="14" r="1" fill="#333"/>
      {/* teeth along jaw */}
      <path d="M22 8 L21 6 L24 8 L23 6 L26 8" stroke="#F5F5F5" strokeWidth=".8"/>
      <path d="M30 8 L31 6 L33 8 L34 6" stroke="#F5F5F5" strokeWidth=".8"/>
      {/* scaly ridges down back */}
      <path d="M28 20 L30 22 L28 24 L30 26 L28 28 L30 30 L28 32" stroke="#4A5A3A" strokeWidth="1.5"/>
      {/* legs */}
      <path d="M20 24 Q12 20 8 24" stroke="#5A6B4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M36 24 Q44 20 48 24" stroke="#5A6B4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M20 40 Q12 44 8 42" stroke="#5A6B4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M36 40 Q44 44 48 42" stroke="#5A6B4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* thick tail */}
      <path d="M28 50 Q30 56 32 60 Q34 62 32 60" stroke="#5A6B4A" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  ),
};

export default animalIcons;
