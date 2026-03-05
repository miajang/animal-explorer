import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SCENES = [
  { id:"farm", name:"Farm", emoji:"🐄", bg:"linear-gradient(180deg,#87CEEB 0%,#87CEEB 55%,#7CBA3F 55%,#5A9A1F 100%)",
    items:[{id:"cat",word:"CAT",emoji:"🐱",color:"#FF8C42"},{id:"hen",word:"HEN",emoji:"🐔",color:"#E85D3A"},{id:"pig",word:"PIG",emoji:"🐷",color:"#F4A0B5"},{id:"sun",word:"SUN",emoji:"☀️",color:"#FFD93D"},{id:"egg",word:"EGG",emoji:"🥚",color:"#F5E6CA"}]},
  { id:"ocean", name:"Ocean", emoji:"🐠", bg:"linear-gradient(180deg,#1B98C2 0%,#0B6FA4 40%,#064273 70%,#2E1A47 100%)",
    items:[{id:"fish",word:"FISH",emoji:"🐟",color:"#FF6B8A"},{id:"crab",word:"CRAB",emoji:"🦀",color:"#FF4444"},{id:"star",word:"STAR",emoji:"⭐",color:"#FFD93D"},{id:"shell",word:"SHELL",emoji:"🐚",color:"#FBBFCA"},{id:"whale",word:"WHALE",emoji:"🐋",color:"#5B9BD5"}]},
  { id:"garden", name:"Garden", emoji:"🌻", bg:"linear-gradient(180deg,#89CFF0 0%,#89CFF0 45%,#6DBF5A 45%,#4A8C3F 100%)",
    items:[{id:"bee",word:"BEE",emoji:"🐝",color:"#FFD93D"},{id:"frog",word:"FROG",emoji:"🐸",color:"#4CAF50"},{id:"bird",word:"BIRD",emoji:"🐦",color:"#42A5F5"},{id:"bug",word:"BUG",emoji:"🐞",color:"#E53935"},{id:"worm",word:"WORM",emoji:"🪱",color:"#A1887F"}]},
  { id:"swamp", name:"Swamp", emoji:"🐊", bg:"linear-gradient(180deg,#A8D5BA 0%,#6B9F78 30%,#3E6B4E 60%,#2C4A35 85%,#4A3728 100%)",
    items:[{id:"frog2",word:"FROG",emoji:"🐸",color:"#4CAF50"},{id:"snake",word:"SNAKE",emoji:"🐍",color:"#8BC34A"},{id:"turtle",word:"TURTLE",emoji:"🐢",color:"#5D8A3C"},{id:"lizard",word:"LIZARD",emoji:"🦎",color:"#66BB6A"},{id:"newt",word:"NEWT",emoji:"🦎",color:"#FF7043"}]},
];

const ZONES = {
  farm:{cat:{cx:26,cy:52},hen:{cx:69,cy:62},pig:{cx:46,cy:72},sun:{cx:84,cy:6},egg:{cx:57,cy:82}},
  ocean:{fish:{cx:6,cy:47},crab:{cx:83,cy:82},star:{cx:50,cy:90},shell:{cx:23,cy:78},whale:{cx:68,cy:18}},
  garden:{bee:{cx:35,cy:26},frog:{cx:66,cy:73},bird:{cx:85,cy:17},bug:{cx:17,cy:71},worm:{cx:52,cy:84}},
  swamp:{frog2:{cx:20,cy:65},snake:{cx:86,cy:51},turtle:{cx:50,cy:79},lizard:{cx:88,cy:65},newt:{cx:27,cy:35}},
};

/* ═══ FARM ═══ */
function FarmScene({found,onFind}){
  const f=found.includes, svgS={position:"absolute",inset:0,width:"100%",height:"100%"};
  return <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={svgS}>
    {/* clouds */}
    <ellipse cx="20" cy="12" rx="10" ry="5" fill="#fff" opacity=".8"/>
    <ellipse cx="25" cy="10" rx="8" ry="4" fill="#fff" opacity=".7"/>
    <ellipse cx="60" cy="8" rx="12" ry="5" fill="#fff" opacity=".75"/>
    <ellipse cx="66" cy="6" rx="8" ry="4" fill="#fff" opacity=".65"/>

    {/* SUN behind cloud */}
    {!found.includes("sun") ? <g onClick={()=>onFind("sun")} style={{cursor:"pointer"}}>
      <line x1="84" y1="1" x2="84" y2="4.5" stroke="#FFD93D" strokeWidth=".9" strokeLinecap="round"/>
      <line x1="89" y1="3.5" x2="87.5" y2="5.5" stroke="#FFD93D" strokeWidth=".7" strokeLinecap="round"/>
      <line x1="79" y1="3" x2="80.5" y2="5.5" stroke="#FFD93D" strokeWidth=".7" strokeLinecap="round"/>
      <ellipse cx="84" cy="10" rx="9" ry="5" fill="#fff" opacity=".88"/>
      <ellipse cx="79" cy="11" rx="5" ry="3.5" fill="#fff" opacity=".82"/>
      <rect x="74" y="0" width="20" height="16" fill="transparent"/>
    </g> : <g>
      <circle cx="84" cy="8" r="5" fill="#FFD93D"/>
      {[0,45,90,135,180,225,270,315].map((a,i)=><line key={i} x1={84+Math.cos(a*Math.PI/180)*6} y1={8+Math.sin(a*Math.PI/180)*6} x2={84+Math.cos(a*Math.PI/180)*8} y2={8+Math.sin(a*Math.PI/180)*8} stroke="#FFD93D" strokeWidth=".8" strokeLinecap="round"/>)}
    </g>}

    {/* barn */}
    <rect x="3" y="40" width="22" height="22" fill="#C0392B" rx="1"/>
    <polygon points="3,40 14,30 25,40" fill="#922B21"/>
    <rect x="10" y="48" width="8" height="14" fill="#7B241C" rx="1"/>
    <line x1="14" y1="48" x2="14" y2="62" stroke="#5B1A14" strokeWidth=".5"/>

    {/* CAT peeking from right side of barn — half face visible against red wall */}
    {!found.includes("cat") ? <g onClick={()=>onFind("cat")} style={{cursor:"pointer"}}>
      {/* Half of cat face visible on right edge of barn */}
      <circle cx="25.5" cy="52" r="3" fill="#FF8C42"/>
      <polygon points="24,49 25,46.5 26.5,49" fill="#FF8C42"/>
      <polygon points="24.3,49.2 25,47.5 25.8,49.2" fill="#FFB380"/>
      <circle cx="26" cy="51.5" r=".55" fill="#333"/>
      <ellipse cx="26" cy="52.8" rx=".6" ry=".35" fill="#FFB380"/>
      <line x1="26.5" y1="52.3" x2="28.5" y2="51.8" stroke="#555" strokeWidth=".2"/>
      <line x1="26.5" y1="52.7" x2="28.5" y2="52.7" stroke="#555" strokeWidth=".2"/>
      <line x1="26.5" y1="53.1" x2="28.5" y2="53.6" stroke="#555" strokeWidth=".2"/>
      {/* Barn wall covers left half */}
      <rect x="3" y="40" width="22.5" height="22" fill="#C0392B" rx="1"/>
      <rect x="20" y="44" width="12" height="14" fill="transparent"/>
    </g> : <g>
      <circle cx="27" cy="52" r="3.5" fill="#FF8C42"/>
      <polygon points="24,49 25.5,45.5 27,49" fill="#FF8C42"/>
      <polygon points="27,49 28.5,45.5 30,49" fill="#FF8C42"/>
      <polygon points="24.4,49.2 25.5,46.5 26.5,49.2" fill="#FFB380"/>
      <polygon points="27.5,49.2 28.5,46.5 29.5,49.2" fill="#FFB380"/>
      <circle cx="25.5" cy="51.5" r=".6" fill="#333"/><circle cx="28.5" cy="51.5" r=".6" fill="#333"/>
      <ellipse cx="27" cy="53" rx="1" ry=".5" fill="#FFB380"/>
      <path d="M26.2 53.5Q27 54.2 27.8 53.5" fill="none" stroke="#333" strokeWidth=".3"/>
    </g>}

    {/* fence */}
    {[60,66,72,78].map(x=><rect key={x} x={x} y="58" width="1.2" height="16" fill="#D4A057"/>)}
    <rect x="59" y="62" width="21" height="1.5" fill="#D4A057" rx=".5"/>
    <rect x="59" y="68" width="21" height="1.5" fill="#D4A057" rx=".5"/>

    {/* HEN head peeking above fence */}
    {!found.includes("hen") ? <g onClick={()=>onFind("hen")} style={{cursor:"pointer"}}>
      {/* Head above fence rail with comb, eye, beak tip */}
      <circle cx="69" cy="61" r="1.8" fill="#F5DEB3"/>
      <ellipse cx="69" cy="59.5" rx="1.4" ry="1.1" fill="#E85D3A"/>
      <circle cx="69.8" cy="59.2" r=".5" fill="#E85D3A"/>
      <circle cx="68.2" cy="59.2" r=".4" fill="#E85D3A"/>
      <circle cx="69.8" cy="60.8" r=".4" fill="#333"/>
      <polygon points="71,61.2 72.2,61.5 71,61.8" fill="#FF9800"/>
      <rect x="65" y="56" width="10" height="8" fill="transparent"/>
    </g> : <g>
      <ellipse cx="69" cy="65" rx="3" ry="2.5" fill="#F5DEB3"/>
      <circle cx="69" cy="62.5" r="2" fill="#F5DEB3"/>
      <ellipse cx="69" cy="61" rx="1.2" ry="1" fill="#E85D3A"/>
      <circle cx="68.2" cy="62.2" r=".4" fill="#333"/>
      <polygon points="67,63 66,63.3 67,63.6" fill="#FF9800"/>
    </g>}

    {/* hay */}
    <ellipse cx="44" cy="76" rx="8" ry="5" fill="#DAA520"/>
    <ellipse cx="44" cy="75" rx="7" ry="4" fill="#E8B828"/>
    <line x1="37" y1="75" x2="51" y2="75" stroke="#C4961A" strokeWidth=".3"/>
    <line x1="38" y1="77" x2="50" y2="77" stroke="#C4961A" strokeWidth=".3"/>

    {/* PIG snout + eyes peeking over hay */}
    {!found.includes("pig") ? <g onClick={()=>onFind("pig")} style={{cursor:"pointer"}}>
      {/* Pink snout and two eyes visible above hay bale */}
      <ellipse cx="44" cy="72.5" rx="2" ry="1.3" fill="#F4A0B5"/>
      <circle cx="43.3" cy="72.3" r=".35" fill="#D47A8E"/>
      <circle cx="44.7" cy="72.3" r=".35" fill="#D47A8E"/>
      <circle cx="43" cy="71" r=".5" fill="#333"/>
      <circle cx="45" cy="71" r=".5" fill="#333"/>
      {/* Ear tips */}
      <ellipse cx="41.5" cy="70.5" rx="1" ry="1.5" fill="#F4A0B5" opacity=".8"/>
      <ellipse cx="46.5" cy="70.5" rx="1" ry="1.5" fill="#F4A0B5" opacity=".8"/>
      <rect x="38" y="68" width="14" height="10" fill="transparent"/>
    </g> : <g>
      <ellipse cx="44" cy="80" rx="4" ry="3" fill="#F4A0B5"/>
      <circle cx="44" cy="77" r="3" fill="#F4A0B5"/>
      <ellipse cx="41" cy="75" rx="1.5" ry="2" fill="#F4A0B5"/>
      <ellipse cx="47" cy="75" rx="1.5" ry="2" fill="#F4A0B5"/>
      <circle cx="43" cy="76.5" r=".5" fill="#333"/><circle cx="45" cy="76.5" r=".5" fill="#333"/>
      <ellipse cx="44" cy="78" rx="1.8" ry="1.2" fill="#E8899E"/>
      <circle cx="43.4" cy="77.8" r=".4" fill="#D47A8E"/><circle cx="44.6" cy="77.8" r=".4" fill="#D47A8E"/>
    </g>}

    {/* grass */}
    {[53,55,57,59].map((x,i)=><path key={i} d={`M${x} 84Q${x+.5} ${78+i*.3} ${x+1} 84`} stroke="#4A8C1F" fill="none" strokeWidth=".7"/>)}
    {[54,56,58].map((x,i)=><path key={i} d={`M${x} 85Q${x+.5} ${79+i*.3} ${x+1} 85`} stroke="#3D7A18" fill="none" strokeWidth=".6"/>)}

    {/* EGG nestled in grass — top half visible between blades */}
    {!found.includes("egg") ? <g onClick={()=>onFind("egg")} style={{cursor:"pointer"}}>
      {/* Egg visible but color blends with sky/grass */}
      <ellipse cx="57" cy="82.5" rx="1.8" ry="2.5" fill="#F0E4C8" opacity=".9"/>
      <ellipse cx="57" cy="82" rx="1.2" ry="1.6" fill="#FAF3E0" opacity=".75"/>
      {/* Grass partially in front */}
      <path d="M55.5 84Q56 78.5 56.5 84" stroke="#4A8C1F" fill="none" strokeWidth=".9"/>
      <path d="M58 84Q58.5 79 59 84" stroke="#4A8C1F" fill="none" strokeWidth=".9"/>
      <rect x="53" y="78" width="10" height="10" fill="transparent"/>
    </g> : <g>
      <ellipse cx="57" cy="83" rx="2" ry="2.8" fill="#F5E6CA"/>
      <ellipse cx="57" cy="82.5" rx="1.5" ry="2" fill="#FFF8E8"/>
    </g>}

    {/* tree */}
    <rect x="88" y="40" width="3" height="18" fill="#8B6914" rx=".5"/>
    <circle cx="89.5" cy="36" r="8" fill="#3D8B37"/>
    <circle cx="85" cy="38" r="5" fill="#2E7D2E"/>
    <circle cx="94" cy="38" r="5" fill="#2E7D2E"/>
  </svg>;
}

/* ═══ OCEAN ═══ */
function OceanScene({found,onFind}){
  const svgS={position:"absolute",inset:0,width:"100%",height:"100%"};
  return <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={svgS}>
    <path d="M0 25Q10 20 20 25Q30 30 40 25Q50 20 60 25Q70 30 80 25Q90 20 100 25" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1"/>
    <path d="M0 30Q15 26 25 30Q35 34 50 30Q65 26 75 30Q85 34 100 30" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth=".8"/>

    {/* WHALE back + spout between waves */}
    {!found.includes("whale") ? <g onClick={()=>onFind("whale")} style={{cursor:"pointer"}}>
      {/* Visible dark back hump + clearer spout */}
      <path d="M65 24Q68 21 71 24" fill="#4A7FAF" stroke="#3A6F9F" strokeWidth=".5"/>
      <path d="M68 21Q67 17 68 14" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth=".7" strokeLinecap="round"/>
      <path d="M68 14Q66 12 67 10" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth=".5" strokeLinecap="round"/>
      <path d="M68 14Q70 12 69 10" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth=".5" strokeLinecap="round"/>
      {/* Tiny tail fluke */}
      <path d="M71 23Q73 21 72 20" fill="#4A7FAF" stroke="#3A6F9F" strokeWidth=".3"/>
      <rect x="60" y="8" width="18" height="18" fill="transparent"/>
    </g> : <g>
      <ellipse cx="68" cy="24" rx="6" ry="3" fill="#5B9BD5"/>
      <circle cx="65" cy="23" r=".5" fill="#333"/>
      <path d="M68 18Q67 14 68 11" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth=".7" strokeLinecap="round"/>
      <path d="M74 24Q76 22 75 20" fill="#5B9BD5"/>
    </g>}

    {/* coral */}
    <path d="M8 55Q10 42 12 55" fill="#FF6B8A"/>
    <path d="M12 55Q14 44 16 55" fill="#E84393"/>
    <path d="M10 55Q11 46 14 55" fill="#FF8A9E"/>
    <circle cx="10" cy="42" r="2" fill="#FF6B8A"/>
    <circle cx="14" cy="44" r="1.5" fill="#E84393"/>

    {/* FISH tail + body peeking behind coral */}
    {!found.includes("fish") ? <g onClick={()=>onFind("fish")} style={{cursor:"pointer"}}>
      {/* Tail fin clearly visible + bit of pink body */}
      <polygon points="7,47 3.5,44.5 3.5,49.5" fill="#FF6B8A"/>
      <ellipse cx="8" cy="47" rx="2" ry="1.5" fill="#FF6B8A" opacity=".8"/>
      <rect x="1" y="42" width="12" height="10" fill="transparent"/>
    </g> : <g>
      <ellipse cx="14" cy="48" rx="4" ry="2.5" fill="#FF6B8A"/>
      <polygon points="10,48 7,46 7,50" fill="#FF6B8A"/>
      <circle cx="16" cy="47.5" r=".5" fill="#333"/>
    </g>}

    {/* rock */}
    <ellipse cx="80" cy="86" rx="12" ry="6" fill="#5D6D7E"/>
    <ellipse cx="80" cy="85" rx="10" ry="4.5" fill="#6E7F8D"/>

    {/* CRAB claws + eye stalks peeking over rock */}
    {!found.includes("crab") ? <g onClick={()=>onFind("crab")} style={{cursor:"pointer"}}>
      {/* Two claws + eye stalks above rock */}
      <path d="M76 82Q74 79 76 78" fill="none" stroke="#FF4444" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="76" cy="78" r=".6" fill="#FF4444"/>
      <path d="M84 82Q86 79 84 78" fill="none" stroke="#FF4444" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="84" cy="78" r=".6" fill="#FF4444"/>
      {/* Eye stalks */}
      <line x1="79" y1="82" x2="79" y2="80" stroke="#FF4444" strokeWidth=".5"/>
      <circle cx="79" cy="79.8" r=".5" fill="#FF4444"/>
      <circle cx="79" cy="79.8" r=".2" fill="#333"/>
      <line x1="81" y1="82" x2="81" y2="80" stroke="#FF4444" strokeWidth=".5"/>
      <circle cx="81" cy="79.8" r=".5" fill="#FF4444"/>
      <circle cx="81" cy="79.8" r=".2" fill="#333"/>
      <rect x="72" y="76" width="18" height="10" fill="transparent"/>
    </g> : <g>
      <ellipse cx="82" cy="88" rx="3" ry="2" fill="#FF4444"/>
      <circle cx="80.5" cy="87" r=".5" fill="#333"/><circle cx="83.5" cy="87" r=".5" fill="#333"/>
      <path d="M78 86Q76 84 78 83" fill="none" stroke="#FF4444" strokeWidth=".8" strokeLinecap="round"/>
      <path d="M86 86Q88 84 86 83" fill="none" stroke="#FF4444" strokeWidth=".8" strokeLinecap="round"/>
    </g>}

    {/* seaweed */}
    <path d="M26 92Q24 82 28 72Q26 76 30 82Q28 86 26 92" fill="#27AE60" opacity=".8"/>
    <path d="M30 92Q28 80 32 70" fill="none" stroke="#2ECC71" strokeWidth="1.5"/>
    <path d="M22 92Q20 84 24 76" fill="none" stroke="#1B8A4A" strokeWidth="1.2"/>

    {/* SHELL fan shape visible behind seaweed */}
    {!found.includes("shell") ? <g onClick={()=>onFind("shell")} style={{cursor:"pointer"}}>
      {/* Shell fan visible — ridges give it away */}
      <path d="M24 81Q22 77 25 74Q27 77 25 81Z" fill="#FBBFCA" opacity=".8"/>
      <path d="M24.3 80L23.5 76" fill="none" stroke="#E8A0B0" strokeWidth=".3"/>
      <path d="M25 80L25.5 76" fill="none" stroke="#E8A0B0" strokeWidth=".3"/>
      <rect x="19" y="72" width="12" height="12" fill="transparent"/>
    </g> : <g>
      <path d="M27 82Q25 77 28 74Q31 77 29 82Z" fill="#FBBFCA"/>
      <path d="M27.5 82L27 76" fill="none" stroke="#E8A0B0" strokeWidth=".2"/>
      <path d="M28 82L28.5 76" fill="none" stroke="#E8A0B0" strokeWidth=".2"/>
    </g>}

    {/* sand */}
    <ellipse cx="50" cy="96" rx="50" ry="6" fill="#F4D58D" opacity=".4"/>

    {/* STAR two arm tips poking from sand */}
    {!found.includes("star") ? <g onClick={()=>onFind("star")} style={{cursor:"pointer"}}>
      <polygon points="49,90 48,92.5 50,92.5" fill="#E8C430"/>
      <polygon points="52,90.5 51,92.5 53,92.5" fill="#E8C430"/>
      <circle cx="50.5" cy="92" r=".4" fill="#D4B42A"/>
      <rect x="45" y="87" width="12" height="9" fill="transparent"/>
    </g> : <g>
      <polygon points="50,87 51,90 54,90 51.5,92 52.5,95 50,93 47.5,95 48.5,92 46,90 49,90" fill="#FFD93D"/>
    </g>}

    {/* bubbles */}
    <circle cx="40" cy="50" r="1.5" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth=".4"/>
    <circle cx="55" cy="40" r="1" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth=".3"/>
    <circle cx="80" cy="45" r="2" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth=".4"/>
  </svg>;
}

/* ═══ GARDEN ═══ */
function GardenScene({found,onFind}){
  const svgS={position:"absolute",inset:0,width:"100%",height:"100%"};
  return <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={svgS}>
    <ellipse cx="45" cy="10" rx="12" ry="5" fill="#fff" opacity=".7"/>
    <ellipse cx="15" cy="15" rx="8" ry="4" fill="#fff" opacity=".6"/>

    {/* tree */}
    <rect x="75" y="20" width="4" height="30" fill="#6D4C28" rx="1"/>
    <circle cx="77" cy="16" r="12" fill="#2E7D2E"/>
    <circle cx="70" cy="20" r="8" fill="#388E3C"/>
    <circle cx="84" cy="20" r="8" fill="#388E3C"/>

    {/* BIRD peeking from tree — blue body + wing visible at edge of foliage */}
    {!found.includes("bird") ? <g onClick={()=>onFind("bird")} style={{cursor:"pointer"}}>
      {/* Blue body visible at foliage edge + eye + orange beak + wing */}
      <ellipse cx="88" cy="18" rx="2.5" ry="2" fill="#42A5F5"/>
      <circle cx="88" cy="17" r="1.5" fill="#42A5F5"/>
      <circle cx="89" cy="16.8" r=".5" fill="#333"/>
      <circle cx="89" cy="16.8" r=".2" fill="#fff"/>
      <polygon points="90,17.5 92,18 90,18.5" fill="#FF9800"/>
      {/* Wing detail */}
      <path d="M87 18.5Q85.5 20 86 21" stroke="#3690DB" strokeWidth=".5" fill="none" strokeLinecap="round"/>
      {/* Tree foliage covers left side */}
      <circle cx="84" cy="20" r="8" fill="#388E3C"/>
      <rect x="82" y="12" width="16" height="14" fill="transparent"/>
    </g> : <g>
      <ellipse cx="84" cy="18" rx="3" ry="2.5" fill="#42A5F5"/>
      <circle cx="84" cy="17" r="1.8" fill="#42A5F5"/>
      <circle cx="85" cy="16.8" r=".5" fill="#333"/>
      <polygon points="86.5,17.5 88.5,18 86.5,18.5" fill="#FF9800"/>
    </g>}

    {/* flowers */}
    <line x1="30" y1="45" x2="30" y2="32" stroke="#4CAF50" strokeWidth="1"/>
    <circle cx="30" cy="28" r="4" fill="#FFD93D"/><circle cx="30" cy="28" r="2" fill="#FF9800"/>
    <line x1="40" y1="45" x2="40" y2="35" stroke="#4CAF50" strokeWidth="1"/>
    <circle cx="40" cy="32" r="3" fill="#E91E63"/><circle cx="40" cy="32" r="1.5" fill="#FF5722"/>
    <line x1="50" y1="45" x2="50" y2="30" stroke="#4CAF50" strokeWidth="1"/>
    <circle cx="50" cy="27" r="3.5" fill="#9C27B0"/><circle cx="50" cy="27" r="1.5" fill="#E1BEE7"/>

    {/* BEE body + wing visible behind sunflower */}
    {!found.includes("bee") ? <g onClick={()=>onFind("bee")} style={{cursor:"pointer"}}>
      {/* Yellow body with stripe + translucent wing peeking right of flower */}
      <ellipse cx="35" cy="27" rx="1.8" ry="1.2" fill="#FFD93D"/>
      <rect x="34.5" y="26.5" width="1" height="2.4" fill="#333" rx=".2" opacity=".5"/>
      <ellipse cx="35.5" cy="25.5" rx="2" ry="1" fill="rgba(255,255,255,.55)"/>
      <circle cx="36.2" cy="27" r=".25" fill="#333"/>
      <rect x="30" y="23" width="10" height="8" fill="transparent"/>
    </g> : <g>
      <ellipse cx="37" cy="27" rx="2.2" ry="1.5" fill="#FFD93D"/>
      <rect x="35.5" y="26" width="1" height="3" fill="#333" rx=".3" opacity=".6"/>
      <rect x="37.5" y="26" width="1" height="3" fill="#333" rx=".3" opacity=".6"/>
      <ellipse cx="36" cy="25" rx="2" ry="1" fill="rgba(255,255,255,.6)"/>
      <ellipse cx="38" cy="25" rx="2" ry="1" fill="rgba(255,255,255,.6)"/>
      <circle cx="38.5" cy="27" r=".3" fill="#333"/>
    </g>}

    {/* pond */}
    <ellipse cx="68" cy="76" rx="14" ry="7" fill="#1B5E20" opacity=".5"/>
    <ellipse cx="65" cy="74" rx="5" ry="2.5" fill="#4CAF50"/>
    <ellipse cx="72" cy="77" rx="4" ry="2" fill="#388E3C"/>

    {/* FROG eyes + forehead above lily pad */}
    {!found.includes("frog") ? <g onClick={()=>onFind("frog")} style={{cursor:"pointer"}}>
      {/* Bigger bumpy eyes + green strip of head visible */}
      <ellipse cx="65.5" cy="73" rx="3" ry=".8" fill="#4CAF50" opacity=".7"/>
      <circle cx="64" cy="72" r="1.1" fill="#4CAF50"/>
      <circle cx="67" cy="72" r="1.1" fill="#4CAF50"/>
      <circle cx="64.2" cy="71.8" r=".45" fill="#333"/>
      <circle cx="67.2" cy="71.8" r=".45" fill="#333"/>
      <rect x="60" y="69" width="12" height="8" fill="transparent"/>
    </g> : <g>
      <ellipse cx="65.5" cy="75" rx="4" ry="3" fill="#4CAF50"/>
      <circle cx="63.5" cy="72.5" r="1.3" fill="#4CAF50"/><circle cx="67.5" cy="72.5" r="1.3" fill="#4CAF50"/>
      <circle cx="63.8" cy="72.2" r=".5" fill="#333"/><circle cx="67.8" cy="72.2" r=".5" fill="#333"/>
      <path d="M64.5 76Q65.5 77 66.5 76" fill="none" stroke="#2E7D2E" strokeWidth=".3"/>
    </g>}

    {/* leaves */}
    <path d="M14 72Q18 62 22 72Q18 68 14 72" fill="#388E3C"/>
    <path d="M24 74Q28 66 30 74Q28 70 24 74" fill="#2E7D32"/>

    {/* BUG half body + spots visible under leaf */}
    {!found.includes("bug") ? <g onClick={()=>onFind("bug")} style={{cursor:"pointer"}}>
      {/* Half ladybug visible — red dome with spots, antennae sticking out */}
      <circle cx="18" cy="72.5" r="1.8" fill="#E53935"/>
      <line x1="18" y1="70.7" x2="18" y2="74.3" stroke="#333" strokeWidth=".25"/>
      <circle cx="17.3" cy="72" r=".25" fill="#333"/>
      <circle cx="18.7" cy="73" r=".25" fill="#333"/>
      <circle cx="18" cy="71" r=".7" fill="#333"/>
      <line x1="17.4" y1="70.5" x2="16.6" y2="69.5" stroke="#333" strokeWidth=".25"/>
      <line x1="18.6" y1="70.5" x2="19.4" y2="69.5" stroke="#333" strokeWidth=".25"/>
      <circle cx="16.6" cy="69.4" r=".2" fill="#333"/>
      <circle cx="19.4" cy="69.4" r=".2" fill="#333"/>
      <rect x="14" y="68" width="10" height="8" fill="transparent"/>
    </g> : <g>
      <circle cx="18" cy="73" r="2.5" fill="#E53935"/>
      <line x1="18" y1="70.5" x2="18" y2="75.5" stroke="#333" strokeWidth=".3"/>
      <circle cx="17.3" cy="72.5" r=".3" fill="#333"/><circle cx="18.7" cy="72.5" r=".3" fill="#333"/>
      <circle cx="18" cy="70.5" r="1" fill="#333"/>
      <line x1="17.3" y1="70" x2="16.5" y2="69" stroke="#333" strokeWidth=".2"/>
      <line x1="18.7" y1="70" x2="19.5" y2="69" stroke="#333" strokeWidth=".2"/>
    </g>}

    {/* dirt */}
    <rect x="48" y="82" width="10" height="18" fill="#6D4C41" opacity=".25" rx="2"/>

    {/* WORM body curve visible in dirt */}
    {!found.includes("worm") ? <g onClick={()=>onFind("worm")} style={{cursor:"pointer"}}>
      {/* Longer S-curve visible — pinkish brown against dark dirt */}
      <path d="M51 86Q53 83 55 85Q53 84 52 86" fill="none" stroke="#C48B7F" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="51" cy="86" r=".5" fill="#B07B6F"/>
      <rect x="48" y="80" width="10" height="10" fill="transparent"/>
    </g> : <g>
      <path d="M50 88Q52 82 54 86Q56 90 54 92" fill="none" stroke="#C48B7F" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="50" cy="88" r=".6" fill="#A1887F"/>
    </g>}
  </svg>;
}

/* ═══ SWAMP ═══ */
function SwampScene({found,onFind}){
  const svgS={position:"absolute",inset:0,width:"100%",height:"100%"};
  return <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={svgS}>
    <ellipse cx="25" cy="8" rx="18" ry="5" fill="rgba(255,255,255,.2)"/>
    <ellipse cx="70" cy="12" rx="14" ry="4" fill="rgba(255,255,255,.15)"/>

    {/* tree + moss */}
    <rect x="4" y="15" width="6" height="55" fill="#5D4037" rx="2"/>
    <circle cx="7" cy="16" r="10" fill="#3E7D3E"/>
    <circle cx="14" cy="20" r="7" fill="#2E6B2E"/>
    <path d="M8 25Q7 38 9 45" stroke="#8FBC8F" strokeWidth=".6" fill="none"/>
    <path d="M12 22Q11 34 13 42" stroke="#8FBC8F" strokeWidth=".5" fill="none"/>

    {/* ferns */}
    <path d="M30 42Q34 34 32 24" fill="none" stroke="#4CAF50" strokeWidth="1.2"/>
    <path d="M32 38Q36 36 34 32" fill="none" stroke="#66BB6A" strokeWidth=".8"/>
    <path d="M31 40Q27 37 29 33" fill="none" stroke="#66BB6A" strokeWidth=".8"/>
    <path d="M33 35Q37 32 35 29" fill="none" stroke="#81C784" strokeWidth=".6"/>
    <path d="M32 36Q28 33 30 30" fill="none" stroke="#81C784" strokeWidth=".6"/>

    {/* NEWT body + legs visible behind fern */}
    {!found.includes("newt") ? <g onClick={()=>onFind("newt")} style={{cursor:"pointer"}}>
      {/* Orange body partially visible + tail curves out + tiny legs */}
      <ellipse cx="29" cy="36.5" rx="2" ry="1" fill="#FF7043" opacity=".85"/>
      <path d="M27 36.5Q25 35 26 33" fill="none" stroke="#FF7043" strokeWidth=".8" strokeLinecap="round"/>
      <line x1="28.5" y1="37.5" x2="28" y2="38.5" stroke="#FF7043" strokeWidth=".4"/>
      <circle cx="30.5" cy="36" r=".3" fill="#333"/>
      <rect x="23" y="30" width="12" height="12" fill="transparent"/>
    </g> : <g>
      <ellipse cx="33" cy="37" rx="3.5" ry="1.5" fill="#FF7043"/>
      <circle cx="36" cy="36.5" r="1.2" fill="#FF7043"/>
      <circle cx="36.5" cy="36.2" r=".35" fill="#333"/>
      <path d="M29 37Q27 35 28 33" fill="none" stroke="#FF7043" strokeWidth=".8" strokeLinecap="round"/>
      <line x1="31" y1="38.5" x2="30" y2="40" stroke="#FF7043" strokeWidth=".4"/>
      <line x1="35" y1="38.5" x2="36" y2="40" stroke="#FF7043" strokeWidth=".4"/>
    </g>}

    {/* log */}
    <rect x="60" y="48" width="24" height="6" fill="#6D4C28" rx="3"/>
    <ellipse cx="60" cy="51" rx="3" ry="3" fill="#5D3E1A"/>
    <ellipse cx="84" cy="51" rx="3" ry="3" fill="#5D3E1A"/>
    {[64,70,76].map(x=><line key={x} x1={x} y1="49" x2={x} y2="53" stroke="#5D3E1A" strokeWidth=".3"/>)}

    {/* SNAKE head + tongue + partial body at log end */}
    {!found.includes("snake") ? <g onClick={()=>onFind("snake")} style={{cursor:"pointer"}}>
      {/* Green head visible at log opening + forked tongue + eye */}
      <circle cx="85.5" cy="51" r="1.3" fill="#7CB342"/>
      <ellipse cx="86.5" cy="51" rx=".8" ry="1" fill="#8BC34A"/>
      <circle cx="86.2" cy="50.5" r=".3" fill="#333"/>
      <path d="M87.5 51L89.5 50.3L90.5 49.5" fill="none" stroke="#E53935" strokeWidth=".35" strokeLinecap="round"/>
      <path d="M89.5 50.3L90.5 51.2" fill="none" stroke="#E53935" strokeWidth=".35" strokeLinecap="round"/>
      {/* Bit of body coil visible below log */}
      <path d="M83 54Q85 55.5 87 54" fill="none" stroke="#7CB342" strokeWidth=".7" strokeLinecap="round" opacity=".6"/>
      <rect x="81" y="47" width="12" height="10" fill="transparent"/>
    </g> : <g>
      <path d="M84 51Q88 49 90 52Q92 55 90 57" fill="none" stroke="#8BC34A" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="84.5" cy="51" r="1.5" fill="#8BC34A"/>
      <circle cx="85" cy="50.5" r=".4" fill="#333"/>
      <path d="M86 51L88 50.3L89 49.6" fill="none" stroke="#E53935" strokeWidth=".3"/>
      <path d="M88 50.3L89 51" fill="none" stroke="#E53935" strokeWidth=".3"/>
    </g>}

    {/* water + lily pads */}
    <ellipse cx="30" cy="70" rx="22" ry="10" fill="#2E6B4E" opacity=".5"/>
    <ellipse cx="20" cy="67" rx="7" ry="3.5" fill="#4CAF50"/>
    <ellipse cx="30" cy="72" rx="5" ry="2.5" fill="#388E3C"/>
    <ellipse cx="38" cy="68" rx="6" ry="3" fill="#43A047"/>

    {/* FROG eyes + forehead above lily pad */}
    {!found.includes("frog2") ? <g onClick={()=>onFind("frog2")} style={{cursor:"pointer"}}>
      {/* Bigger eyes + green head strip visible */}
      <ellipse cx="20.5" cy="66" rx="2.5" ry=".7" fill="#388E3C" opacity=".6"/>
      <circle cx="19" cy="65" r="1.1" fill="#388E3C"/>
      <circle cx="22" cy="65" r="1.1" fill="#388E3C"/>
      <circle cx="19.2" cy="64.8" r=".4" fill="#333"/>
      <circle cx="22.2" cy="64.8" r=".4" fill="#333"/>
      <rect x="15" y="62" width="12" height="8" fill="transparent"/>
    </g> : <g>
      <ellipse cx="20.5" cy="68" rx="4" ry="3" fill="#4CAF50"/>
      <circle cx="19" cy="65" r="1.3" fill="#4CAF50"/><circle cx="22" cy="65" r="1.3" fill="#4CAF50"/>
      <circle cx="19.2" cy="64.7" r=".5" fill="#333"/><circle cx="22.2" cy="64.7" r=".5" fill="#333"/>
      <path d="M19.5 69Q20.5 70 21.5 69" fill="none" stroke="#2E7D2E" strokeWidth=".3"/>
    </g>}

    {/* rock */}
    <ellipse cx="50" cy="84" rx="10" ry="5" fill="#78909C"/>
    <ellipse cx="50" cy="83" rx="8" ry="3.5" fill="#8D9FA8"/>

    {/* TURTLE shell + head peeking over rock */}
    {!found.includes("turtle") ? <g onClick={()=>onFind("turtle")} style={{cursor:"pointer"}}>
      {/* Shell dome with pattern + tiny head sticking out left */}
      <path d="M46 80Q50 76.5 54 80" fill="#5D8A3C" stroke="#4A7A30" strokeWidth=".4"/>
      <line x1="50" y1="77" x2="50" y2="80" stroke="#4A7A30" strokeWidth=".25"/>
      <line x1="47.5" y1="78.5" x2="52.5" y2="78.5" stroke="#4A7A30" strokeWidth=".25"/>
      {/* Head poking out left */}
      <circle cx="45" cy="80" r=".9" fill="#5D8A3C"/>
      <circle cx="44.6" cy="79.7" r=".25" fill="#333"/>
      <rect x="42" y="74" width="16" height="10" fill="transparent"/>
    </g> : <g>
      <ellipse cx="50" cy="82" rx="5" ry="3" fill="#5D8A3C"/>
      <path d="M45 82Q50 76 55 82" fill="#6B9F4A" stroke="#4A7A30" strokeWidth=".3"/>
      <line x1="50" y1="77" x2="50" y2="82" stroke="#4A7A30" strokeWidth=".2"/>
      <line x1="47" y1="79" x2="53" y2="79" stroke="#4A7A30" strokeWidth=".2"/>
      <circle cx="46" cy="82.5" r=".8" fill="#5D8A3C"/>
      <circle cx="45.5" cy="82.2" r=".25" fill="#333"/>
      <line x1="44" y1="83.5" x2="43" y2="84" stroke="#5D8A3C" strokeWidth=".5" strokeLinecap="round"/>
      <line x1="56" y1="83.5" x2="57" y2="84" stroke="#5D8A3C" strokeWidth=".5" strokeLinecap="round"/>
    </g>}

    {/* branch */}
    <path d="M78 62Q84 58 92 64Q88 60 94 57" fill="none" stroke="#6D4C28" strokeWidth="2" strokeLinecap="round"/>
    <path d="M84 60Q86 54 88 57" fill="none" stroke="#5D3E1A" strokeWidth="1"/>

    {/* LIZARD body on branch + tail hanging */}
    {!found.includes("lizard") ? <g onClick={()=>onFind("lizard")} style={{cursor:"pointer"}}>
      {/* Body resting on branch + tail dangling + eye visible */}
      <ellipse cx="88" cy="62" rx="2.5" ry="1" fill="#66BB6A" opacity=".85"/>
      <circle cx="90" cy="61.5" r=".8" fill="#66BB6A"/>
      <circle cx="90.3" cy="61.3" r=".25" fill="#333"/>
      <path d="M86 62.5Q85 66 87 69" fill="none" stroke="#66BB6A" strokeWidth=".8" strokeLinecap="round"/>
      {/* Tiny front leg gripping branch */}
      <line x1="89" y1="63" x2="89.5" y2="64" stroke="#66BB6A" strokeWidth=".4"/>
      <rect x="83" y="58" width="12" height="14" fill="transparent"/>
    </g> : <g>
      <ellipse cx="87" cy="62" rx="3" ry="1.5" fill="#66BB6A"/>
      <circle cx="85" cy="61.5" r="1.2" fill="#66BB6A"/>
      <circle cx="84.5" cy="61.2" r=".35" fill="#333"/>
      <path d="M88 63Q87 67 89 70" fill="none" stroke="#66BB6A" strokeWidth=".7" strokeLinecap="round"/>
      <line x1="85.5" y1="63" x2="84.5" y2="64.5" stroke="#66BB6A" strokeWidth=".4"/>
      <line x1="88" y1="63" x2="89" y2="64.5" stroke="#66BB6A" strokeWidth=".4"/>
    </g>}

    {/* mushrooms */}
    <rect x="88" y="82" width="1.5" height="4" fill="#D7CCC8" rx=".5"/>
    <ellipse cx="88.75" cy="82" rx="3" ry="2" fill="#E53935"/>
    <circle cx="87.5" cy="81.5" r=".5" fill="#fff"/><circle cx="89.5" cy="81.8" r=".4" fill="#fff"/>
    <rect x="93" y="84" width="1" height="3" fill="#D7CCC8" rx=".5"/>
    <ellipse cx="93.5" cy="84" rx="2" ry="1.5" fill="#E53935"/>

    {/* cattails */}
    <line x1="48" y1="60" x2="48" y2="44" stroke="#6D4C28" strokeWidth=".8"/>
    <ellipse cx="48" cy="44" rx="1.5" ry="4" fill="#5D4037"/>
    <line x1="52" y1="62" x2="52" y2="48" stroke="#6D4C28" strokeWidth=".8"/>
    <ellipse cx="52" cy="48" rx="1.5" ry="3.5" fill="#5D4037"/>

    {/* dragonfly */}
    <circle cx="44" cy="28" r=".8" fill="#42A5F5"/>
    <line x1="44" y1="28" x2="46" y2="26" stroke="#90CAF9" strokeWidth=".4"/>
    <line x1="44" y1="28" x2="46" y2="30" stroke="#90CAF9" strokeWidth=".4"/>
  </svg>;
}

const SceneComponents = {farm:FarmScene, ocean:OceanScene, garden:GardenScene, swamp:SwampScene};

/* ═══ CELEBRATION RAIN ═══ */
function CelebrationRain({onDone}){
  const items=useRef(Array.from({length:40},(_,i)=>({id:i,
    emoji:["🪱","🦎","🍬","🪱","🦎","🍭","🪱","🦎","🍡","⭐"][i%10],
    left:Math.random()*100, delay:Math.random()*2, dur:2+Math.random()*2, size:20+Math.random()*20,
  }))).current;
  useEffect(()=>{const t=setTimeout(()=>onDone?.(),5000);return()=>clearTimeout(t);},[onDone]);
  return <div style={{position:"fixed",inset:0,zIndex:1000,pointerEvents:"none",overflow:"hidden"}}>
    <style>{`@keyframes jf{0%{transform:translateY(-60px) rotate(0);opacity:1}80%{opacity:1}100%{transform:translateY(110vh) rotate(360deg);opacity:0}}@keyframes jw{0%,100%{transform:translateX(0)}25%{transform:translateX(15px)}75%{transform:translateX(-15px)}}`}</style>
    {items.map(j=><div key={j.id} style={{position:"absolute",left:`${j.left}%`,top:-60,fontSize:j.size,animation:`jf ${j.dur}s ${j.delay}s ease-in forwards`}}>
      <div style={{animation:`jw ${1+Math.random()}s ease-in-out infinite`}}>{j.emoji}</div>
    </div>)}
  </div>;
}

/* ═══ SPELLING REVEAL ═══ */
function SpellingReveal({word,color,x,y}){
  return <div style={{position:"absolute",left:`${x}%`,top:`${y}%`,transform:"translate(-50%,-50%)",display:"flex",gap:3,zIndex:30,pointerEvents:"none",animation:"spi .4s cubic-bezier(.34,1.56,.64,1) forwards"}}>
    <style>{`@keyframes spi{0%{transform:translate(-50%,-50%) scale(0);opacity:0}100%{transform:translate(-50%,-50%) scale(1);opacity:1}}@keyframes lp{0%{transform:scale(0) rotate(-10deg);opacity:0}60%{transform:scale(1.2) rotate(3deg)}100%{transform:scale(1) rotate(0);opacity:1}}`}</style>
    {word.split("").map((l,i)=><span key={i} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:32,background:"#fff",borderRadius:6,fontSize:"1rem",fontWeight:800,color,boxShadow:`0 3px 10px ${color}40`,border:`2.5px solid ${color}`,animation:`lp .4s ${i*.1}s cubic-bezier(.34,1.56,.64,1) both`,fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif"}}>{l}</span>)}
  </div>;
}

/* ═══ HINT BAR ═══ */
function HintBar({items,found}){
  return <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",padding:"10px 16px",background:"rgba(255,255,255,.95)",borderRadius:16,boxShadow:"0 4px 20px rgba(0,0,0,.1)"}}>
    <span style={{fontSize:".72rem",fontWeight:700,color:"#888",textTransform:"uppercase",letterSpacing:".08em",alignSelf:"center",marginRight:4}}>Find:</span>
    {items.map(item=>{const ok=found.includes(item.id);return <div key={item.id} style={{display:"flex",alignItems:"center",gap:4,padding:"4px 10px",borderRadius:10,background:ok?`${item.color}20`:"#f5f5f5",border:ok?`2px solid ${item.color}`:"2px solid #e0e0e0",opacity:ok?1:.7}}>
      <span style={{fontSize:18}}>{item.emoji}</span>
      <span style={{fontSize:".78rem",fontWeight:700,color:ok?item.color:"#ccc",fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif"}}>{ok?item.word:""}</span>
      {ok&&<span style={{fontSize:12}}>✓</span>}
    </div>;})}
  </div>;
}

/* ═══ CELEBRATION OVERLAY ═══ */
function CelebrationOverlay({scene,onNext,onReplay}){
  const[rain,setRain]=useState(true);
  return <>
    {rain&&<CelebrationRain onDone={()=>setRain(false)}/>}
    <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50,backdropFilter:"blur(4px)"}}>
      <div style={{background:"#fff",borderRadius:24,padding:"36px 40px",textAlign:"center",maxWidth:340,boxShadow:"0 20px 60px rgba(0,0,0,.3)",animation:"spi2 .5s cubic-bezier(.34,1.56,.64,1) forwards"}}>
        <style>{`@keyframes spi2{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes bn{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}`}</style>
        <div style={{fontSize:52,marginBottom:8,animation:"bn .6s ease infinite"}}>🎉</div>
        <div style={{fontSize:"1.6rem",fontWeight:800,color:"#333",fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif",marginBottom:4}}>Amazing!</div>
        <div style={{fontSize:"1.1rem",color:"#666",marginBottom:6,fontWeight:600}}>You found all 5! ⭐⭐⭐⭐⭐</div>
        <div style={{fontSize:".9rem",color:"#999",marginBottom:24}}>Great job in the {scene.name}!</div>
        <div style={{display:"flex",gap:10,justifyContent:"center"}}>
          <button onClick={onReplay} style={{padding:"12px 24px",borderRadius:14,border:"2.5px solid #e0e0e0",background:"#fff",fontSize:".95rem",fontWeight:700,color:"#666",cursor:"pointer",fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif"}}>🔄 Again</button>
          <button onClick={onNext} style={{padding:"12px 24px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#6C63FF,#4ECDC4)",fontSize:".95rem",fontWeight:700,color:"#fff",cursor:"pointer",fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif",boxShadow:"0 4px 15px rgba(108,99,255,.4)"}}>Next ➡️</button>
        </div>
      </div>
    </div>
  </>;
}

/* ═══ SCENE SELECTOR ═══ */
function SceneSelector({onSelect,completed,onBack}){
  return <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#0D4F4F 0%,#1A7A6D 35%,#2A9D8F 65%,#5AB8A9 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif",position:"relative"}}>
    <div onClick={onBack} style={{position:"absolute",top:16,left:16,fontSize:".78rem",color:"rgba(255,255,255,.85)",cursor:"pointer",fontWeight:500,display:"flex",alignItems:"center",gap:3,zIndex:10}}>
      <span style={{fontSize:".7rem"}}>←</span> Back to Apps
    </div>
    <style>{`@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
    <div style={{fontSize:48,marginBottom:8,animation:"fl 3s ease-in-out infinite"}}>🔍</div>
    <h1 style={{fontSize:"2.2rem",fontWeight:800,color:"#fff",textShadow:"0 3px 12px rgba(0,0,0,.2)",marginBottom:6,textAlign:"center"}}>Peek & Seek!</h1>
    <p style={{fontSize:"1rem",color:"rgba(255,255,255,.85)",marginBottom:36,fontWeight:500,textAlign:"center"}}>Look carefully and tap the hidden animals!</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16,maxWidth:380,width:"100%"}}>
      {SCENES.map(s=>{const done=completed.includes(s.id);return <button key={s.id} onClick={()=>onSelect(s.id)} style={{background:"rgba(255,255,255,.95)",border:done?"3px solid #4CAF50":"3px solid transparent",borderRadius:20,padding:"24px 16px",cursor:"pointer",boxShadow:"0 8px 24px rgba(0,0,0,.15)",display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
        <span style={{fontSize:40}}>{s.emoji}</span>
        <span style={{fontSize:"1.1rem",fontWeight:700,color:"#333"}}>{s.name}</span>
        {done&&<span style={{fontSize:".72rem",fontWeight:700,color:"#4CAF50",background:"#E8F5E9",borderRadius:8,padding:"2px 10px"}}>⭐ Complete!</span>}
      </button>;})}
    </div>
    {completed.length===4&&<div style={{marginTop:28,padding:"14px 28px",background:"rgba(255,255,255,.2)",borderRadius:16,color:"#fff",fontWeight:700,fontSize:"1.05rem",textAlign:"center"}}>🏆 You found everything! Super star! 🌟</div>}
  </div>;
}

/* ═══ MAIN APP ═══ */
export default function AnimalSeek(){
  const nav=useNavigate();
  const[cur,setCur]=useState(null);
  const[found,setFound]=useState([]);
  const[completed,setCompleted]=useState([]);
  const[showCel,setShowCel]=useState(false);
  const[spells,setSpells]=useState([]);

  const scene=SCENES.find(s=>s.id===cur);

  const handleFind=useCallback((id)=>{
    if(!scene||found.includes(id))return;
    const nf=[...found,id];
    setFound(nf);
    const z=ZONES[scene.id]?.[id];
    const item=scene.items.find(it=>it.id===id);
    if(z&&item)setSpells(p=>[...p,{id,word:item.word,color:item.color,x:z.cx,y:Math.max(z.cy-12,5)}]);
    if(nf.length===scene.items.length)setTimeout(()=>{setShowCel(true);if(!completed.includes(cur))setCompleted(p=>[...p,cur]);},800);
  },[found,scene,cur,completed]);

  const sel=(id)=>{setCur(id);setFound([]);setShowCel(false);setSpells([]);};
  const next=()=>{const i=SCENES.findIndex(s=>s.id===cur);sel(SCENES[(i+1)%SCENES.length].id);};
  const replay=()=>{setFound([]);setShowCel(false);setSpells([]);};
  const back=()=>{setCur(null);setFound([]);setShowCel(false);setSpells([]);};

  if(!scene)return <SceneSelector onSelect={sel} completed={completed} onBack={()=>nav('/')}/>;
  const SC=SceneComponents[scene.id];

  return <div style={{fontFamily:"'Fredoka','Nunito','Segoe UI',sans-serif",minHeight:"100vh",background:"#f0f0f0",display:"flex",flexDirection:"column"}}>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet"/>

    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#fff",boxShadow:"0 2px 10px rgba(0,0,0,.08)",zIndex:30}}>
      <button onClick={back} style={{background:"#f5f5f5",border:"2px solid #e0e0e0",borderRadius:12,padding:"8px 16px",fontSize:".85rem",fontWeight:700,color:"#666",cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:22}}>{scene.emoji}</span>
        <span style={{fontSize:"1.1rem",fontWeight:700,color:"#333"}}>{scene.name}</span>
      </div>
      <div style={{background:found.length===5?"#4CAF50":"#f5f5f5",color:found.length===5?"#fff":"#666",borderRadius:12,padding:"8px 16px",fontSize:".95rem",fontWeight:800,minWidth:60,textAlign:"center",border:found.length===5?"none":"2px solid #e0e0e0"}}>{found.length}/5</div>
    </div>

    <div style={{padding:"10px 16px",background:"rgba(255,255,255,.5)"}}>
      <HintBar items={scene.items} found={found}/>
    </div>

    <div style={{flex:1,position:"relative",background:scene.bg,overflow:"hidden",minHeight:420,cursor:"crosshair"}}>
      <SC found={found} onFind={handleFind}/>
      {spells.map(sp=><SpellingReveal key={sp.id} word={sp.word} color={sp.color} x={sp.x} y={sp.y}/>)}
      {showCel&&<CelebrationOverlay scene={scene} onNext={next} onReplay={replay}/>}
    </div>
  </div>;
}
