import { useState, useEffect, useRef } from "react";

// ─── CATEGORIES (sidebar navigation items) ───
const categories = [
  { id: "amphibians", label: "Amphibians", emoji: "🐸" },
  { id: "birds", label: "Birds", emoji: "🦜" },
  { id: "dinosaurs", label: "Dinosaurs", emoji: "🦕" },
  { id: "insects", label: "Insects", emoji: "🐛" },
  { id: "ocean", label: "Ocean Animals", emoji: "🐙" },
  { id: "reptiles", label: "Reptiles", emoji: "🦎" },
];

// ─── CHARACTER OPTIONS (onboarding + settings character picker) ───
const characters = [
  { id: "basilisk", name: "Basilisk Lizard", emoji: "🦎", greeting: "I can crawl on walls! Let's explore!" },
  { id: "anaconda", name: "Anaconda", emoji: "🐍", greeting: "Ssssup! Let's discover amazing animals!" },
  { id: "crab", name: "Crab", emoji: "🦀", greeting: "Snip snap! Ready to learn cool facts?" },
];

// ─── CATEGORY COLORS (primary + light bg per category) ───
const catColors = {
  amphibians: { primary: "#2E7D32", light: "#e8f5e9" },
  birds: { primary: "#3D7A9E", light: "#e8f1f6" },
  dinosaurs: { primary: "#C0612B", light: "#fdf0e6" },
  insects: { primary: "#8B6914", light: "#faf3e0" },
  ocean: { primary: "#1A6B7A", light: "#e4f0f3" },
  reptiles: { primary: "#7A9A3A", light: "#f0f5e6" },
};

// ─── ANIMAL DATA (54 animals: 9 per category, alphabetical) ───
// Each animal: id, cat, name, chars (card preview), who, size, food, habitat, facts[]
const animals = [
  // ── AMPHIBIANS (9) ──
  {id:1,cat:"amphibians",name:"Axolotl",chars:"Pink, smiley face, and can regrow body parts like a superhero!",who:"I'm a very special salamander that stays in water my whole life — I never grow up to live on land like other salamanders. People call me the 'Mexican Walking Fish' but I'm not a fish at all! I always look like I'm smiling.",size:"About 9-12 inches long — about as long as a ruler! I have feathery gills that stick out from the sides of my head like a fancy headdress.",food:"I eat worms, small fish, tiny shrimp, and insect larvae. I suck up my food like a vacuum cleaner because I don't have strong teeth for chewing.",habitat:"I originally come from Lake Xochimilco near Mexico City, Mexico. Sadly, I'm very rare in the wild now and need help from people to survive.",facts:["I can regrow my legs, tail, heart, and even parts of my brain!","I always look like I'm smiling — that's just how my face is shaped.","I'm critically endangered in the wild but very popular as pets.","Scientists study me to learn how humans might regrow body parts someday."]},
  {id:2,cat:"amphibians",name:"Cane Toad",chars:"Big, bumpy, tough, and has poison glands behind its eyes!",who:"I'm a large, tough toad originally from Central and South America. People brought me to Australia in 1935 to eat beetles in sugar cane fields, but I liked it so much I spread everywhere and became a big problem!",size:"Up to 6 inches long — as big as your hand! Some of us can weigh over 2 pounds, making me one of the world's largest toads.",food:"I eat bugs, snails, small mice, lizards, and even dog food left outside! I'm not a picky eater at all — I'll eat almost anything that fits in my mouth.",habitat:"I live in warm areas including Australia, Florida, Hawaii, and many tropical places. I'm very adaptable and can live in gardens, farms, forests, and even cities.",facts:["The bumps behind my eyes are special glands that make a milky white poison.","I was brought to Australia to eat beetles but became an invasive pest instead.","I can eat almost anything that fits in my mouth — even other toads!","I can lay up to 30,000 eggs at a time — that's a LOT of baby toads."]},
  {id:3,cat:"amphibians",name:"Fire Salamander",chars:"Black and yellow pattern warns predators — I spray poison from my skin!",who:"I'm a striking black salamander with bright yellow or orange spots and stripes. My bold pattern is nature's warning sign telling predators that I taste terrible and I'm poisonous.",size:"About 6-10 inches long — a bit longer than a pencil. I'm one of the larger salamanders found in Europe.",food:"I eat insects, worms, slugs, and small invertebrates that I find on the damp forest floor at night. I use my sticky tongue to catch my prey.",habitat:"I live in cool, damp forests across Europe, usually near streams and under logs or rocks. I come out mostly at night or after rain.",facts:["I can spray poison from glands on my back when threatened!","My bright yellow and black pattern warns predators 'I'm toxic — don't eat me!'","I can live up to 20 years or more — some have lived over 50 years in captivity.","Unlike most amphibians, I give birth to live young instead of laying eggs in water."]},
  {id:4,cat:"amphibians",name:"Giant Salamander",chars:"The biggest amphibian alive — can grow longer than a kid is tall!",who:"I'm the largest amphibian on Earth! I live in cold mountain streams in Asia and have been around for millions of years — almost unchanged since the time of dinosaurs. I'm sometimes called a 'living fossil.'",size:"Up to 5 feet long — taller than most kids! I can weigh up to 110 pounds, making me the heavyweight champion of amphibians.",food:"I eat fish, frogs, crabs, insects, and sometimes smaller salamanders. I sit very still on the river bottom and snap up anything that swims close to my big mouth.",habitat:"I live in cold, fast-flowing mountain streams and rivers in China and Japan. I need very clean water to survive.",facts:["I can live for over 50 years — some may live to 80!","I breathe through my wrinkly skin, which absorbs oxygen from the water.","I have tiny eyes and find food by sensing vibrations and movement in water.","I've been on Earth for 170 million years — I lived alongside dinosaurs!"]},
  {id:5,cat:"amphibians",name:"Glass Frog",chars:"See-through belly — you can actually see its heart beating!",who:"I'm a tiny, amazing frog with a transparent belly. If you look at my underside, you can actually see my heart, liver, and intestines through my skin! My back is green so I blend in perfectly with leaves.",size:"Only about 1-3 inches long — small enough to sit on a coin! I'm one of the most delicate and beautiful frogs in the world.",food:"I eat tiny insects like flies, spiders, and crickets that I catch at night high up in the trees along stream banks.",habitat:"I live in tropical rainforests in Central and South America, usually high up in trees hanging over streams and rivers.",facts:["You can see my heart beating right through my transparent belly!","My green back helps me blend in perfectly with the leaves I sleep on.","Males guard the eggs and sometimes sit on them to keep them moist.","There are over 150 different species of glass frogs."]},
  {id:6,cat:"amphibians",name:"Hellbender",chars:"North America's biggest salamander — slimy, wrinkly, and totally harmless!",who:"I'm the largest salamander in North America! I have a flat body with wrinkly, slimy skin and I live under rocks in clean, fast-flowing streams. People give me funny nicknames like 'snot otter' and 'devil dog' but I'm completely harmless.",size:"Up to 29 inches long — over 2 feet! I can weigh up to 5 pounds, making me a giant among North American salamanders.",food:"I eat crayfish (my favorite!), small fish, insects, and worms. I hide under large rocks and ambush prey as it passes by.",habitat:"I live in clean, fast-flowing streams and rivers in the eastern United States, from New York to Missouri. I need very clean, well-oxygenated water.",facts:["I breathe mostly through my wrinkly skin — the wrinkles give me more surface area to absorb oxygen.","I've been around for 65 million years — I survived the extinction that killed the dinosaurs!","I'm an indicator species — if I'm doing well, it means the stream water is very clean.","I can live up to 30 years in the wild."]},
  {id:7,cat:"amphibians",name:"Poison Dart Frog",chars:"Tiny, super colorful, and one of the most poisonous animals on Earth!",who:"I'm a tiny frog that lives in rainforests. My bright colors warn predators to stay away — I can be yellow, blue, red, or green! Indigenous people once used my poison on the tips of their blow darts for hunting.",size:"About 1 inch long — smaller than your thumb! I'm one of the tiniest frogs in the world, but my poison makes me one of the most dangerous.",food:"I eat tiny ants, mites, termites, and other small insects I find on the forest floor. The special chemicals in the bugs I eat are actually what make me poisonous!",habitat:"I live in tropical rainforests in Central and South America, usually near streams and on the forest floor where it's warm and humid.",facts:["My bright colors tell other animals 'Don't eat me — I'm dangerous!'","Some of us have enough poison to harm 10 grown-up people!","Baby dart frogs ride on their parent's back to get to pools of water in tree leaves.","There are over 170 different species of poison dart frogs in many different colors."]},
  {id:8,cat:"amphibians",name:"Red-Eyed Tree Frog",chars:"Big bright red eyes, green body, and sticky toe pads for climbing trees!",who:"I'm a beautiful tree frog with bright red eyes, a green body, blue-and-yellow striped sides, and orange feet. I sleep during the day on green leaves and come out at night to hunt. When a predator comes close, I flash open my big red eyes to startle them!",size:"About 2-3 inches long — I fit right in the palm of your hand! Even though I'm small, my colors make me one of the most recognizable frogs in the world.",food:"I eat crickets, flies, moths, grasshoppers, and other small bugs that I catch at night. I have a sticky tongue that zaps out to grab insects in a flash.",habitat:"I live in tropical rainforests from southern Mexico all the way to Colombia, high up in the trees near ponds and rivers.",facts:["My red eyes scare predators when I open them suddenly — it's called 'startle coloring!'","I have sticky pads on my toes that let me climb trees and even hang upside down on leaves.","I sleep on green leaves during the day and tuck in my colorful legs to blend in perfectly.","My babies (tadpoles) drop from leaves into the water below when they hatch."]},
  {id:9,cat:"amphibians",name:"Tomato Frog",chars:"Bright red-orange like a tomato — puffs up and oozes sticky goo when scared!",who:"I'm a chubby, round frog that's bright red-orange — just like a ripe tomato! When a predator tries to eat me, I puff up my body to look even bigger and ooze a thick, sticky white goo from my skin that gums up their mouth.",size:"About 2-4 inches long — females are bigger and more brightly colored than males. I'm round and plump like a little ball.",food:"I eat insects, worms, and small invertebrates. I sit and wait for food to come to me, then snap it up with my sticky tongue.",habitat:"I only live on the island of Madagascar, off the coast of Africa. I'm found near swamps, ponds, and slow-moving water in lowland areas.",facts:["When scared, I puff up like a balloon and ooze sticky white goo!","I'm only found on the island of Madagascar — nowhere else on Earth.","Females are bright red-orange, while males are more yellowish-brown.","I'm a 'sit and wait' predator — I let food come to me instead of chasing it."]},

  // ── BIRDS (9) ──
  {id:10,cat:"birds",name:"Flamingo",chars:"Tall, pink, stands on one leg, and gets its color from eating shrimp!",who:"I'm one of the most recognizable birds in the world thanks to my bright pink feathers and habit of standing on one leg! I'm actually born with grey-white feathers — my pink color comes entirely from the food I eat.",size:"About 3.5-4.5 feet tall and weighing 4-8 pounds. My long, thin legs make up most of my height. My neck is long and curved like the letter S.",food:"I eat tiny shrimp, algae, and small crustaceans that I filter from muddy water using my special upside-down beak. The pink pigments in shrimp and algae are what turn my feathers pink!",habitat:"I live in large shallow lakes, lagoons, and mudflats in Africa, southern Europe, the Caribbean, and South America. I always live in big groups.",facts:["I'm born grey-white — I turn pink from eating shrimp and algae!","I stand on one leg to save body heat — it's actually more comfortable for me.","I can only eat with my head upside down — my beak works like a filter.","I live in huge flocks that can have thousands or even millions of flamingos!"]},
  {id:11,cat:"birds",name:"Frigate Bird",chars:"Pirate of the sky with a giant red throat balloon and 7-foot wingspan!",who:"I'm sometimes called the 'pirate bird' because I steal food from other birds right in mid-air! Males like me have a bright red throat pouch that I inflate like a giant balloon to attract females during mating season.",size:"About 3 feet long with a wingspan of up to 7.5 feet — one of the largest wingspans relative to body weight of any bird! I only weigh about 3 pounds despite my huge wings.",food:"I eat flying fish, squid, and jellyfish that I snatch from the ocean surface. I also chase other seabirds and steal their food — that's why people call me a pirate!",habitat:"I live in tropical oceans worldwide, soaring over warm coastal waters. I nest in colonies on remote islands and mangrove trees.",facts:["Male frigate birds inflate a bright red throat pouch like a balloon to impress females!","I can stay in the air for weeks at a time — I even sleep while flying!","I steal food from other birds by chasing them until they drop or spit up their fish.","My feathers aren't waterproof, so I never land on water — I'd get waterlogged and couldn't take off!"]},
  {id:12,cat:"birds",name:"Hummingbird",chars:"The tiniest bird that can fly backwards and flaps its wings 80 times per second!",who:"I'm the smallest bird in the world and the only bird that can truly fly backwards and hover in place like a helicopter! My wings move so fast they make a humming sound — that's how I got my name.",size:"The Bee Hummingbird is only 2 inches long and weighs less than a penny! Most hummingbirds are 3-5 inches long. My heart beats over 1,200 times per minute.",food:"I drink nectar from flowers using my long, thin tongue that can lick 13 times per second. I also eat tiny insects and spiders for protein. I need to eat every 10-15 minutes!",habitat:"I live only in the Americas — from Alaska to the tip of South America. I'm found in gardens, forests, meadows, and anywhere with nectar-rich flowers.",facts:["My wings flap 50-80 times per SECOND — so fast you can't see them!","I'm the only bird that can truly fly backwards and upside down.","My heart beats over 1,200 times per minute — the fastest of any bird.","I eat about half my body weight in nectar every single day just to survive."]},
  {id:13,cat:"birds",name:"Owl",chars:"Silent night hunter with eyes that can see in almost total darkness!",who:"I'm a master of nighttime hunting! My huge eyes can see in near-total darkness, my ears can pinpoint the exact location of a mouse under snow, and my special feathers let me fly in complete silence.",size:"From the tiny Elf Owl (5 inches) to the Great Grey Owl (up to 33 inches tall). The Eurasian Eagle-Owl has a wingspan of nearly 6 feet!",food:"I eat mice, rats, rabbits, insects, fish, and even other birds depending on my species. I swallow small prey whole and later cough up pellets of bones and fur I can't digest.",habitat:"I live on every continent except Antarctica — in forests, deserts, mountains, grasslands, and even cities. Different species prefer different habitats.",facts:["I can turn my head up to 270 degrees — almost all the way around!","My flight feathers have special edges that make my flying completely silent.","I can't move my eyes in their sockets — that's why I turn my whole head instead.","I cough up pellets of bones and fur from the animals I eat — scientists study these to learn what I ate!"]},
  {id:14,cat:"birds",name:"Parrot",chars:"Super smart, can learn to talk, and sees more colors than humans can!",who:"I'm one of the smartest birds on Earth! Many of us can learn to mimic human speech, solve puzzles, and even use tools. I have a strong curved beak, colorful feathers, and I can live for a very long time.",size:"From the tiny Pygmy Parrot (3 inches) to the Hyacinth Macaw (3.3 feet long). Most parrots are between 6-16 inches long.",food:"I eat seeds, nuts, fruits, flowers, and sometimes insects. My powerful curved beak can crack even the hardest nuts. Some of us also eat clay from riverbanks to help digest toxins in seeds.",habitat:"I live in tropical and subtropical regions of Central and South America, Africa, Asia, and Australia — mostly in rainforests, but also in grasslands and even mountains.",facts:["Some parrots can learn over 100 human words and even use them in context!","I can live 40-80 years — some parrots have lived over 100 years.","I can see ultraviolet light, so I see more colors than humans can.","I'm one of the few animals that can move my upper beak independently from my skull."]},
  {id:15,cat:"birds",name:"Penguin",chars:"A bird that can't fly but is an amazing swimmer — built for icy water!",who:"I'm a bird that traded flying in the sky for flying through the water! My wings evolved into powerful flippers that make me one of the fastest swimmers in the ocean. I'm known for my tuxedo-like black and white feathers.",size:"Emperor penguins (the largest) are about 4 feet tall and weigh 80-90 pounds. Little blue penguins (the smallest) are only 13 inches tall!",food:"I eat fish, krill, and squid that I catch by diving deep underwater. Emperor penguins can dive over 1,800 feet deep!",habitat:"Most of us live in the Southern Hemisphere — Antarctica, South America, South Africa, New Zealand, and the Galápagos Islands.",facts:["Emperor penguins can dive deeper than 1,800 feet — the deepest of any bird!","Penguin dads keep their eggs warm on top of their feet for over 2 months in freezing Antarctic winters.","We huddle together in groups of thousands to stay warm — taking turns on the cold outside.","There are 18 different species of penguins and only 2 actually live in Antarctica."]},
  {id:16,cat:"birds",name:"Pigeon",chars:"The world's most underrated bird — a GPS navigator and war hero!",who:"I'm one of the most common birds in the world, but I'm much more amazing than people think! I was one of the first birds ever domesticated by humans, and I've been delivering messages for thousands of years — even in both World Wars!",size:"About 11-14 inches long and weighing around 10-13 ounces. I'm a sturdy, compact bird with a small head and a plump body.",food:"I eat seeds, grains, berries, and breadcrumbs. In cities, I eat just about anything people drop! I drink water by sucking it up like a straw — most birds have to tilt their heads back.",habitat:"I live everywhere humans live — cities, towns, and farms on every continent except Antarctica. I'm one of the most adaptable birds on Earth.",facts:["I can find my way home from over 1,000 miles away — better than any GPS!","I was used to carry secret messages in World War I and II — some pigeons even received medals for bravery.","I'm one of only a few birds that can drink water by sucking it up — most birds have to tilt their heads back.","I can fly at speeds up to 90 mph — faster than most cars on the highway!"]},
  {id:17,cat:"birds",name:"Red Cardinal",chars:"Bright red with a pointed crest — sings beautiful songs all year round!",who:"I'm one of the most beloved backyard birds in North America! The males are bright red from head to tail, while females are a warm brown with red accents. I'm one of the few birds that sings all year round — not just in spring.",size:"About 8-9 inches long with a wingspan of 10-12 inches. I'm a medium-sized songbird with a distinctive pointed crest on my head and a strong orange-red beak.",food:"I eat seeds (especially sunflower seeds), fruits, berries, and insects like beetles, crickets, and caterpillars. I love visiting bird feeders!",habitat:"I live in eastern and central North America, and also in Mexico and Central America. I'm found in woodlands, gardens, parks, shrubs, and backyards.",facts:["Only the males are bright red — females are brownish with red tints for better camouflage while nesting.","I'm one of the few songbirds where the female also sings — most species only the male sings.","I'm the state bird of 7 US states — more than any other bird!","I don't migrate — I stay in the same area all year and sing even in winter."]},
  {id:18,cat:"birds",name:"Woodpecker",chars:"Drums on trees at 20 times per second — with a built-in brain helmet!",who:"I'm a bird that pecks on tree trunks to find insects, make nests, and communicate. I can hammer my beak into wood up to 20 times per second without getting a headache, thanks to special shock absorbers in my skull!",size:"From the tiny Downy Woodpecker (6 inches) to the huge Pileated Woodpecker (19 inches with a bright red crest). Most woodpeckers are 7-15 inches long.",food:"I eat insects (especially wood-boring beetles and their larvae), tree sap, nuts, seeds, and fruit. I use my incredibly long, barbed tongue to pull insects out of tiny holes in wood.",habitat:"I live in forests and woodlands on every continent except Australia and Antarctica. I'm also found in parks and neighborhoods with large trees.",facts:["I peck at wood up to 20 times per second — my head experiences over 1,000 G's of force!","My skull has special spongy bone and muscles that act like a built-in shock absorber to protect my brain.","My tongue can be up to 4 inches long and wraps around the inside of my skull when not in use!","I drum on trees to communicate — each species has its own unique drumming pattern."]},

  // ── DINOSAURS (9) ──
  {id:19,cat:"dinosaurs",name:"Ankylosaurus",chars:"Built like a living tank with armor plates and a massive club tail!",who:"I'm the ultimate armored dinosaur! My entire back was covered in thick bony plates, spikes, and knobs — even my eyelids had armor. My tail ended in a huge bony club that I could swing at predators like T. Rex.",size:"About 20-26 feet long and 6 feet tall — about the size of a wide school bus. I weighed about 6 tons. My tail club alone was about 2 feet wide.",food:"I ate low-growing plants, ferns, and shrubs. I had a wide mouth for cropping lots of plants at once but very small teeth.",habitat:"I lived in forests and plains of western North America about 68 million years ago — at the same time as T. Rex.",facts:["My tail club could swing hard enough to break a T. Rex's ankle bones!","Even my eyelids were armored with bony plates.","I lived at the same time as T. Rex and was one of the few dinosaurs that could fight back.","My armor was made of bony plates called osteoderms embedded right in my skin."]},
  {id:20,cat:"dinosaurs",name:"Apatosaurus",chars:"The gentle long-neck — Littlefoot from The Land Before Time!",who:"I'm a huge, gentle, long-necked plant eater. You might know me as Brontosaurus — and if you've seen The Land Before Time, the character Littlefoot is based on my kind! I used my super long tail like a whip to defend myself.",size:"Up to 75 feet long and weighing about 25 tons — that's as heavy as 4 elephants! My tail alone was incredibly long.",food:"I ate ferns, leaves, and other plants. I probably swallowed stones (called gastroliths) to help grind up plants in my stomach since I couldn't chew very well.",habitat:"I lived in the plains and forests of western North America about 150 million years ago, during the Late Jurassic period.",facts:["Littlefoot from The Land Before Time is based on me!","I could crack my long tail like a whip — the tip may have broken the sound barrier!","I swallowed stones to help grind up food in my stomach.","For over 100 years, scientists argued about whether I was the same as Brontosaurus."]},
  {id:21,cat:"dinosaurs",name:"Brachiosaurus",chars:"Super long neck to reach treetops — one of the tallest dinosaurs ever!",who:"I'm a gentle giant with a very long neck, kind of like a super-sized giraffe! I'm one of the tallest dinosaurs that ever lived. My front legs are longer than my back legs, which gives me a sloping shape — perfect for reaching the highest treetops.",size:"Up to 85 feet long and 40 feet tall — taller than a 3-story building! I weighed about 60 tons, as much as 10 elephants put together.",food:"I ate leaves from the very tops of tall trees — ginkgoes, ferns, and conifers. I had to eat about 900 pounds of plants every single day.",habitat:"I lived in forests of North America and Africa about 150 million years ago, during the Late Jurassic period.",facts:["My nostrils were on top of my head, above my eyes!","I had to eat about 900 pounds of plants every single day.","My front legs were longer than my back legs, which is unusual for dinosaurs.","My heart had to be incredibly powerful to pump blood all the way up my long neck to my brain."]},
  {id:22,cat:"dinosaurs",name:"Pteranodon",chars:"Giant flying reptile with wings as wide as a small airplane!",who:"I'm not actually a dinosaur — I'm a flying reptile called a pterosaur that lived alongside the dinosaurs! I had enormous wings made of skin stretched over one very long finger, and a big crest on the back of my head.",size:"My wingspan was about 23 feet — wider than most cars are long! Despite my huge wings, I only weighed about 55 pounds because my bones were hollow.",food:"I ate fish that I scooped from the ocean surface while flying or floating on the water. I swallowed them whole because I had no teeth!",habitat:"I lived along coastal areas of North America about 85 million years ago.",facts:["I had no teeth — I swallowed fish whole like a pelican!","My big head crest may have worked like a rudder for steering while flying.","I could soar for hours without flapping, riding ocean wind currents.","My bones were hollow and thin as playing cards — that's how I stayed light enough to fly."]},
  {id:23,cat:"dinosaurs",name:"Spinosaurus",chars:"Bigger than T. Rex with a giant sail on its back — a swimming dinosaur!",who:"I'm the largest meat-eating dinosaur ever discovered — even bigger than T. Rex! I had a huge sail-like fin on my back and a long snout like a crocodile. Scientists recently discovered that I spent a lot of time in water, swimming and hunting fish.",size:"Up to 50 feet long — about 10 feet longer than T. Rex! I weighed about 7-9 tons. My back sail could be over 5 feet tall.",food:"I mainly ate large fish, but also other dinosaurs. My long, narrow snout was perfect for snapping up fish from rivers, similar to a crocodile.",habitat:"I lived in swampy river systems in North Africa about 95 million years ago, in what is now Egypt and Morocco.",facts:["I'm the largest meat-eating dinosaur ever found — bigger than T. Rex!","My huge back sail may have helped me attract mates or regulate my body temperature.","I'm one of the few dinosaurs that could actually swim — I hunted fish in rivers!","My nostrils were placed high on my snout so I could breathe while mostly submerged."]},
  {id:24,cat:"dinosaurs",name:"Stegosaurus",chars:"Big bony plates on its back and a spiked tail for defense!",who:"I'm a large plant-eating dinosaur famous for the two rows of diamond-shaped bony plates running along my back and the sharp spikes on my tail. I lived during the Late Jurassic period, long before T. Rex!",size:"About 30 feet long and 14 feet tall (to the top of my plates) — but my brain was only the size of a walnut! I weighed about 5 tons.",food:"I ate low-growing plants, ferns, mosses, and cycads. My small head and weak jaw meant I could only eat soft, low plants.",habitat:"I lived in plains and forests of western North America about 155 million years ago. I also lived in parts of Europe and possibly Africa.",facts:["My tail spikes are called a 'thagomizer' — a word actually invented by a cartoonist!","My back plates may have helped me warm up, cool down, or attract mates.","My brain was only about the size of a walnut despite my huge body.","I lived 80 million years BEFORE T. Rex — they never actually met!"]},
  {id:25,cat:"dinosaurs",name:"Triceratops",chars:"Three big horns on its face and a giant neck frill for protection!",who:"I'm a large plant-eating dinosaur with three horns and a big bony frill that protects my neck. My name means 'three-horned face.' I'm one of the most recognizable dinosaurs and I lived right alongside T. Rex!",size:"Up to 30 feet long and 10 feet tall — about the size of a big truck! I weighed up to 12 tons. My skull alone could be over 7 feet long.",food:"I ate plants, ferns, palms, and shrubs. I had a sharp beak like a parrot to snip tough plants and hundreds of small teeth to grind them up.",habitat:"I lived on the plains and in forests of western North America about 68 million years ago, during the very last age of the dinosaurs.",facts:["My name means 'three-horned face' — two big horns above my eyes and one on my nose.","My frill may have changed color to attract mates or scare rivals!","I lived at the same time as T. Rex and sometimes had to fight them off with my horns.","I'm one of the very last dinosaurs to have lived before the asteroid hit."]},
  {id:26,cat:"dinosaurs",name:"Tyrannosaurus Rex",chars:"King of the dinosaurs with giant teeth and tiny arms!",who:"I'm one of the largest and fiercest meat-eating dinosaurs that ever lived! My name means 'Tyrant Lizard King' and I ruled the land during the Late Cretaceous period. I had one of the strongest bites of any land animal ever.",size:"About 40 feet long and 12 feet tall at the hip — bigger than a school bus! I weighed about 9 tons, as heavy as an African elephant.",food:"I hunted other dinosaurs like Triceratops and Edmontosaurus. I was both an active hunter and a scavenger. I could eat about 500 pounds of meat in a single bite!",habitat:"I lived in forests and plains of western North America about 68 million years ago, in what is now Montana, Wyoming, and the Dakotas.",facts:["My teeth were up to 12 inches long — as long as bananas — and could crush bone!","My tiny arms were actually super strong — each could lift about 400 pounds.","I could run about 15-25 mph — fast enough to catch most prey.","Scientists think I may have had feathers when I was young."]},
  {id:27,cat:"dinosaurs",name:"Velociraptor",chars:"Fast, smart, feathered, and had a big curved claw on each foot!",who:"I'm a small but very smart and fast meat-eating dinosaur. Unlike in the movies, I was actually covered in feathers and only about the size of a turkey! But I made up for my small size with speed, intelligence, and a deadly curved claw on each foot.",size:"About 6 feet long and 2 feet tall — about the size of a large turkey! I only weighed about 30 pounds.",food:"I hunted small dinosaurs, lizards, mammals, and insects. I may have hunted in packs to take down bigger prey.",habitat:"I lived in hot, dry deserts of Mongolia and China about 75 million years ago.",facts:["I was actually covered in feathers, not scaly like in the Jurassic Park movies!","I was only about the size of a big turkey — much smaller than movies show.","My big curved toe claw was about 3 inches long and used to hold onto prey.","I was one of the smartest dinosaurs, with a large brain compared to my body size."]},

  // ── INSECTS (9) ──
  {id:28,cat:"insects",name:"Atlas Moth",chars:"One of the biggest insects with wings that look like snake heads!",who:"I'm one of the largest moths on Earth! My huge wings have a beautiful pattern with reddish-brown and white colors. The tips of my forewings look like snake heads, which scares away predators. The strangest thing about me? I have no mouth!",size:"My wingspan can be up to 12 inches — bigger than your face and wider than a dinner plate! I'm one of the largest winged insects on the planet.",food:"As an adult, I don't eat at all because I have no mouth! I live off the energy I stored when I was a caterpillar. As a caterpillar, I eat leaves from citrus and cinnamon trees.",habitat:"I live in tropical and subtropical forests across Southeast Asia, including India, China, Malaysia, and Indonesia.",facts:["The tips of my wings look like snake heads to scare away birds and predators!","I have no mouth as an adult — I can never eat and live only 1-2 weeks.","My cocoon silk is so strong that in some places, people use it to make small purses!","I'm named after Atlas, the Greek Titan who held up the sky, because of my enormous size."]},
  {id:29,cat:"insects",name:"Dragonfly",chars:"Ancient flying ace with 360-degree vision — catches prey mid-air at 35 mph!",who:"I'm one of the most amazing flyers in the animal kingdom! I've been around for over 300 million years — even before dinosaurs. I can fly forward, backward, sideways, and hover in place.",size:"About 1-5 inches long with wingspans up to 6 inches. My ancestors from 300 million years ago had wingspans of over 2 feet — as big as hawks!",food:"I eat mosquitoes, gnats, flies, and other small flying insects. I catch them in mid-air using my legs like a basket.",habitat:"I live near ponds, lakes, streams, and wetlands on every continent except Antarctica.",facts:["I catch up to 95% of the prey I chase — the most successful hunter in the animal kingdom!","My ancestors from 300 million years ago were as big as hawks with 2-foot wingspans!","I can fly at speeds up to 35 mph and can even fly backwards.","I spend most of my life (up to 5 years!) as a water-dwelling nymph before becoming a flying adult."]},
  {id:30,cat:"insects",name:"Dung Beetle",chars:"Rolls poop into balls and navigates using the Milky Way — seriously!",who:"I might not seem glamorous, but I'm one of the most important and amazing insects on Earth! I collect animal dung, roll it into balls, and bury it to feed my babies. I'm also the only known insect that navigates using the stars!",size:"About 0.5 to 2.5 inches long depending on my species. Some of us can roll dung balls much bigger and heavier than ourselves.",food:"Animal dung — mostly from large herbivores like elephants, cattle, and buffalo. I eat the nutritious parts and use the rest as a nursery for my eggs.",habitat:"I live on every continent except Antarctica, in grasslands, farmlands, forests, and deserts.",facts:["I'm the strongest insect — I can pull 1,141 times my own body weight!","I navigate at night using the Milky Way — the only known insect to use the stars!","I'm essential for the environment — I recycle nutrients and bury tons of dung every year.","Ancient Egyptians worshipped me as a sacred symbol of the sun god Ra."]},
  {id:31,cat:"insects",name:"Firefly",chars:"Lights up at night like a tiny flying lantern — using chemistry in its body!",who:"I'm a beetle (not a fly!) that can make my own light using special chemicals in my abdomen. On summer nights, I light up in patterns to find a mate. Each species of firefly has its own unique blinking pattern — like a secret code!",size:"About half an inch to 1 inch long — small enough to fit on your fingertip. But my glow can be seen from far away on a dark night!",food:"As a larva, I eat snails, slugs, and worms. Many adult fireflies don't eat at all — they focus only on finding a mate during their short adult lives.",habitat:"I live in warm, humid areas worldwide — meadows, forests, marshes, and backyards.",facts:["My light is 'cold light' — nearly 100% of the energy becomes light with almost no heat!","Each firefly species has its own blinking pattern — like a secret Morse code.","Baby fireflies (larvae) also glow — they're called 'glowworms.'","Scientists have used the chemicals from my glow to help detect bacteria and even find life on Mars!"]},
  {id:32,cat:"insects",name:"Hercules Beetle",chars:"One of the strongest animals on Earth — can carry 850 times its weight!",who:"I'm one of the largest and strongest beetles in the world! Males like me have a huge horn that we use to fight other males. I'm named after the Greek hero Hercules because of my incredible strength.",size:"Up to 7 inches long (including my horn) — one of the biggest beetles in the world! I'm about as long as a dollar bill.",food:"As an adult, I eat rotting fruit and tree sap. As a grub, I eat decaying wood and leaf litter for 1-2 years before becoming an adult beetle.",habitat:"I live in tropical rainforests in Central and South America, and also in the Caribbean islands.",facts:["I can carry up to 850 times my own body weight — that's like a person carrying 65 tons!","Males use their huge horns to wrestle each other for mates — like tiny sumo wrestlers.","I start life as a huge white grub that can be the size of your fist.","My wing covers can change color — they turn black when it's humid and greenish-yellow when dry!"]},
  {id:33,cat:"insects",name:"Leafcutter Ant",chars:"Tiny farmers that cut leaves and grow their own food — fungus gardens!",who:"I'm part of an amazing ant colony that works together to cut fresh leaves and carry them to our underground nest. But we don't eat the leaves — we chew them up and use them to grow a special fungus that is our only food! We are tiny farmers.",size:"Workers are about half an inch long, but our colonies can have millions of ants! Our underground nests can be 30 feet across with thousands of chambers.",food:"We eat a special fungus that we grow ourselves in underground gardens. We feed the fungus with chewed-up leaf pieces. This fungus doesn't grow anywhere else — only in our nests!",habitat:"We live in forests and grasslands from the southern United States through Central America and into South America.",facts:["We don't eat the leaves — we use them to grow fungus gardens underground!","A single colony can have 8 million ants working together.","We can carry leaf pieces 50 times our own body weight over long distances.","Our farming system is so advanced that we also grow antibiotics to keep our gardens healthy!"]},
  {id:34,cat:"insects",name:"Monarch Butterfly",chars:"Beautiful orange wings and travels thousands of miles every year!",who:"I'm one of the most famous butterflies in the world, known for my stunning orange and black wings and my incredible migration. Every fall, millions of us fly thousands of miles from North America to spend winter in the warm mountains of Mexico!",size:"About 4 inches wide (wingspan) — a bit wider than your hand. I only weigh about as much as a paperclip!",food:"As a butterfly, I drink nectar from flowers using my long, curly tongue called a proboscis. As a caterpillar, I only eat milkweed plants — nothing else!",habitat:"I'm found across North America in meadows, fields, and gardens. I migrate to mountain forests in central Mexico and coastal California for winter.",facts:["I travel up to 3,000 miles to my winter home in Mexico — one of the longest insect migrations!","I taste bad to birds because I eat milkweed as a caterpillar, which contains a mild poison.","Millions of us gather in the same trees in Mexico every year — trees turn orange!","It takes 3-4 generations of Monarchs to make the full round trip each year."]},
  {id:35,cat:"insects",name:"Praying Mantis",chars:"Looks like it's praying, but it's really waiting to ambush dinner!",who:"I'm a sneaky predator insect that sits very still with my front legs folded — it looks like I'm praying, but I'm actually waiting to ambush my next meal! My strike is one of the fastest in the insect world.",size:"About 2-5 inches long, depending on my species. I have a long body, triangular head, and large eyes that give me excellent vision.",food:"I eat other insects like flies, crickets, and moths. Larger species sometimes eat small frogs, lizards, or even hummingbirds!",habitat:"I live in gardens, meadows, forests, and grasslands on every continent except Antarctica.",facts:["I can turn my head almost 180 degrees — the only insect that can look over its shoulder!","I catch prey in about 50-70 milliseconds — faster than you can blink!","I have 5 eyes — 2 big compound eyes and 3 small simple eyes between them.","Baby mantises look like tiny versions of adults and can hunt from the moment they hatch."]},
  {id:36,cat:"insects",name:"Walking Stick",chars:"Looks exactly like a twig — the ultimate hide-and-seek champion!",who:"I'm a master of disguise! My long, thin body looks exactly like a twig or small branch, making me nearly invisible to predators when I sit still on a plant.",size:"From 1 inch to over 24 inches long — the longest insects in the world! The Chan's megastick from Borneo can be over 22 inches long.",food:"I eat leaves from trees and shrubs, usually feeding at night when predators can't see me. I'm a very slow, gentle eater.",habitat:"I live in forests and woodlands in warm and tropical areas worldwide, especially in Southeast Asia and South America.",facts:["I'm the longest insect in the world — some species are over 2 feet long!","If a bird grabs my leg, I can drop it off and slowly grow a new one.","I sway gently back and forth to mimic a twig moving in the breeze.","My eggs look like tiny seeds — ants carry them underground where the babies hatch safely!"]},

  // ── OCEAN ANIMALS (9) ──
  {id:37,cat:"ocean",name:"Blue Whale",chars:"The biggest animal that has EVER lived — even bigger than dinosaurs!",who:"I'm the largest animal that has ever existed on planet Earth — bigger than any dinosaur! My heart is the size of a small car and my tongue alone weighs as much as an elephant.",size:"Up to 100 feet long — as long as 3 school buses lined up! I can weigh up to 200 tons.",food:"I eat tiny shrimp-like creatures called krill — about 4-6 tons every single day during feeding season! I filter them through special plates in my mouth called baleen.",habitat:"I swim in all of the world's oceans, from tropical waters to polar seas.",facts:["My tongue weighs as much as an elephant — about 6,000 pounds!","My heart is so big a small child could crawl through my largest arteries.","Baby blue whales drink about 100 gallons of milk a day and gain 200 pounds daily!","My call is the loudest sound made by any animal — up to 188 decibels."]},
  {id:38,cat:"ocean",name:"Clownfish",chars:"Orange and white stripes — lives safely inside stinging sea anemones!",who:"I'm a small, colorful fish with orange and white stripes that is best friends with sea anemones. While an anemone's tentacles sting other fish, I have a special slimy coating on my body that protects me.",size:"About 3-4 inches long — small enough to fit in the palm of your hand!",food:"I eat algae, tiny plankton, and leftover food scraps from my anemone. In return, I clean parasites off the anemone — we help each other!",habitat:"I live in warm coral reefs in the Pacific and Indian Oceans, always close to my sea anemone home.",facts:["Sea anemone stings don't hurt me — my special mucus coating protects me!","I keep my anemone clean and bring it food — we're true best friends.","All clownfish are born male — the biggest one in a group becomes female!","I fiercely guard my anemone home — I'll even charge at divers who get too close!"]},
  {id:39,cat:"ocean",name:"Dolphin",chars:"One of the smartest animals alive — talks with clicks and has a name!",who:"I'm one of the most intelligent animals on Earth! I use echolocation (clicking sounds) to 'see' underwater, I live in social groups called pods, and I even have my own unique whistle — like a name — that other dolphins use to call me!",size:"Bottlenose dolphins are about 6-13 feet long and weigh 300-1,400 pounds. I'm sleek, muscular, and built for speed.",food:"I eat fish (like herring, cod, and mackerel), squid, and shrimp. I sometimes work with my pod to herd fish into tight balls — it's called 'fish balling.'",habitat:"I live in oceans worldwide, from tropical to temperate waters. Some species live in the open ocean or even in rivers!",facts:["Each dolphin has a unique signature whistle — like a personal name!","I use echolocation — I send out clicking sounds and listen to the echoes to 'see' underwater.","I sleep with one eye open and half my brain awake to keep breathing.","I can swim up to 20 mph and leap up to 15 feet out of the water!"]},
  {id:40,cat:"ocean",name:"Giant Pacific Octopus",chars:"Super smart, 8 arms, 3 hearts, and can change color in a flash!",who:"I'm the largest octopus in the world and one of the smartest invertebrates on Earth. I can solve puzzles, open jars, use tools, and even recognize individual human faces! I have 8 flexible arms, 3 hearts, and blue blood.",size:"My arms can stretch 16 feet wide — wider than a car! I can weigh over 100 pounds. But I can squeeze through any opening bigger than my beak.",food:"I eat crabs, clams, shrimp, small fish, and other shellfish. I use my strong arms and suction cups to pry open clam shells.",habitat:"I live in rocky reefs, kelp forests, and underwater caves in the coastal Pacific Ocean from Alaska to California and across to Japan.",facts:["I have 3 hearts — two pump blood to my gills and one pumps it to my body!","I can change my color, pattern, AND texture in less than a second.","I can squeeze through any opening bigger than my beak — even a small hole!","Each of my 8 arms has about 280 suction cups that can taste and smell."]},
  {id:41,cat:"ocean",name:"Hammerhead Shark",chars:"A shark with a head shaped like a hammer — built for super vision!",who:"I'm one of the most uniquely shaped sharks in the ocean! My wide, flat head gives me incredible abilities. My eyes are on each end of the hammer, giving me amazing 360-degree vision.",size:"Up to 20 feet long — longer than a big car! The Great Hammerhead is the largest species. I can weigh over 1,000 pounds.",food:"My favorite food is stingrays! I also eat fish, squid, octopus, and crabs. I use my wide head to pin stingrays to the ocean floor.",habitat:"I swim in warm tropical and temperate ocean waters around the world.",facts:["My hammer-shaped head lets me see above and below at the same time!","I use my wide head to pin stingrays flat against the ocean floor.","I sometimes swim in schools of over 100 hammerheads during the day.","I have special sensors in my head that can detect the electrical signals of hidden prey."]},
  {id:42,cat:"ocean",name:"Jellyfish",chars:"No brain, no heart, no blood — but has been around for 500 million years!",who:"I'm one of the oldest and most mysterious creatures in the ocean. I have no brain, no heart, no blood, and no bones — I'm about 95% water! Despite being so simple, I've survived on Earth for over 500 million years.",size:"From tiny (1 inch) to enormous — the lion's mane jellyfish can have tentacles over 120 feet long, longer than a blue whale!",food:"I eat small fish, shrimp, plankton, and other tiny sea creatures. I catch them with my stinging tentacles.",habitat:"I live in every ocean on Earth, from the surface to the deep sea, and from tropical waters to Arctic seas.",facts:["I have no brain, no heart, and no blood — I'm about 95% water!","I've been on Earth for over 500 million years — 250 million years before the first dinosaurs!","One species called the 'immortal jellyfish' can actually reverse its aging!","Some jellyfish glow in the dark — scientists have used their glowing proteins in medical research."]},
  {id:43,cat:"ocean",name:"Sea Turtle",chars:"Ancient ocean traveler that returns to the same beach where it was born!",who:"I'm a gentle, ancient reptile that has been swimming the oceans for over 100 million years — since the time of the dinosaurs! I spend almost my entire life in the ocean but return to land to lay my eggs.",size:"Green sea turtles are about 3-4 feet long and weigh 300-400 pounds. Leatherbacks can be over 6 feet long and weigh 2,000 pounds!",food:"Different species eat different things — green sea turtles eat seagrass, leatherbacks love jellyfish, and hawksbills eat sea sponges.",habitat:"I live in warm and temperate oceans worldwide, in coral reefs, seagrass beds, and open ocean.",facts:["I can hold my breath for up to 5 hours while sleeping underwater!","Mother sea turtles return to the exact same beach where they were born to lay eggs.","I've been around for over 100 million years — I swam with dinosaurs!","I can navigate across entire oceans using Earth's magnetic field like a built-in compass."]},
  {id:44,cat:"ocean",name:"Seal",chars:"Playful ocean acrobat with big puppy-dog eyes and amazing diving skills!",who:"I'm a marine mammal with a sleek, torpedo-shaped body built for life in the water. I have big, dark eyes, adorable whiskers, and I'm incredibly playful and curious.",size:"Harbor seals are about 5-6 feet long and weigh 250-300 pounds. Elephant seals can be up to 16 feet long and weigh 5,000 pounds!",food:"I eat fish, squid, octopus, and shellfish. I use my sensitive whiskers to detect the movement of fish in dark or murky water.",habitat:"I live in oceans worldwide, from tropical beaches to Arctic ice. I come onto land or ice to rest, give birth, and warm up.",facts:["My whiskers are so sensitive they can detect fish swimming up to 600 feet away!","I can hold my breath for up to 2 hours during deep dives.","I can sleep with only half my brain at a time — the other half stays awake to watch for danger!","Baby seals (pups) can swim within hours of being born."]},
  {id:45,cat:"ocean",name:"Starfish",chars:"No brain, no blood, and can regrow an entire arm if it breaks off!",who:"I'm not actually a fish — I'm a marine invertebrate! My real name is 'sea star.' I have five arms (sometimes more!), no brain, no blood, and I can regenerate lost limbs. I move using hundreds of tiny tube feet on my underside.",size:"Most sea stars are 5-10 inches across, but the sunflower sea star can reach over 3 feet across with up to 24 arms!",food:"I eat clams, mussels, oysters, and snails. I have a super cool trick — I push my stomach OUT of my body, wrap it around my food, digest it outside, then pull my stomach back in!",habitat:"I live in oceans worldwide — from shallow tide pools to the deep ocean floor, in both warm tropical and cold Arctic waters.",facts:["I push my stomach outside my body to eat — I digest food on the outside!","If I lose an arm, I can grow a whole new one. Some species can regrow an entire body from just one arm!","I have no brain and no blood — instead I pump seawater through my body.","I have tiny eyes at the tip of each arm that can sense light and dark."]},

  // ── REPTILES (9) ──
  {id:46,cat:"reptiles",name:"Basilisk Lizard",chars:"Can actually run on water — nicknamed the 'Jesus Christ Lizard!'",who:"I'm an incredible lizard that can actually run across the surface of water! When danger threatens, I rear up on my hind legs and sprint across ponds and streams without sinking.",size:"About 2-2.5 feet long including my tail. Males have impressive crests on their heads, backs, and tails that make them look like tiny dinosaurs.",food:"I eat insects, small fish, flowers, fruits, and smaller lizards. I'm an omnivore — I eat both plants and animals.",habitat:"I live in tropical rainforests near rivers, streams, and lakes in Central and South America — from Mexico to Ecuador.",facts:["I run on water using special fringes on my long toes that create air pockets!","I can run on water for about 15-20 feet before I start to sink.","I'm an excellent swimmer and can stay underwater for up to 30 minutes to hide.","Males have tall crests on their heads and backs that make them look like mini dinosaurs."]},
  {id:47,cat:"reptiles",name:"Chameleon",chars:"Changes color, eyes look in two directions at once, and super-fast tongue!",who:"I'm a remarkable lizard famous for three amazing abilities: I can change my skin color, each of my eyes can look in a completely different direction, and my tongue shoots out faster than a fighter jet accelerates!",size:"From 1 inch (the tiny Brookesia micra) to 27 inches (Parson's chameleon). Most common species are about 8-18 inches.",food:"I eat insects like crickets, grasshoppers, and flies that I catch with my super-long, super-sticky tongue. Larger chameleons also eat small birds.",habitat:"Most of us live on the island of Madagascar and in mainland Africa, in tropical forests and jungles.",facts:["My tongue shoots out faster than a fighter jet takes off — it catches prey in about 0.07 seconds!","Each eye can look in a completely different direction at the same time!","I change color based on mood, temperature, and light — not mainly for camouflage like people think!","My feet are shaped like tongs with fused toes that grip branches perfectly."]},
  {id:48,cat:"reptiles",name:"Frilled-Neck Lizard",chars:"Opens a huge frill around its neck like an umbrella to scare predators!",who:"I'm an amazing lizard with a large, colorful frill of skin around my neck. When I feel threatened, I open my mouth wide, spread out my enormous frill like an umbrella, hiss loudly, and stand up on my hind legs!",size:"About 2-3 feet long including my tail. My frill can be up to 12 inches across when fully opened — bigger than my entire body!",food:"I eat insects like beetles, ants, termites, and cicadas. I also eat spiders, small lizards, and small mammals.",habitat:"I live in tropical forests and woodlands in northern Australia and southern New Guinea. I spend most of my time in trees.",facts:["My frill can be up to 12 inches across — it has blood vessels that fill up to make it stand out!","When scared, I run away on just my two back legs — I look hilarious doing it!","I spend about 90% of my time up in trees and only come down to eat or move to a new tree.","I was featured on the Australian 2-cent coin before it was discontinued."]},
  {id:49,cat:"reptiles",name:"Gecko",chars:"Walks on walls and ceilings with sticky toe pads — and licks its own eyes!",who:"I'm a small, friendly lizard famous for climbing smooth walls and even walking upside down on ceilings! My secret is millions of tiny hair-like structures on my toes. I also don't have eyelids — I lick my eyes to keep them clean!",size:"Most geckos are 3-6 inches long, but the giant day gecko can be up to 12 inches. The nano-chameleon gecko is only about 1 inch!",food:"I eat insects like crickets, beetles, moths, and mosquitoes. Some larger geckos also eat small mice and fruit.",habitat:"I live in warm regions all over the world — tropical forests, deserts, and even inside people's houses!",facts:["My toe pads have millions of tiny hairs (setae) that let me walk on walls and ceilings!","I don't have eyelids — I use my long tongue to lick my eyes clean.","I can drop my tail when a predator grabs it — the tail keeps wiggling to distract them!","I'm one of the only lizards with a true voice — I can chirp, click, and bark!"]},
  {id:50,cat:"reptiles",name:"Gila Monster",chars:"One of the few venomous lizards — colorful, slow, and carries venom in its jaw!",who:"I'm one of only a few venomous lizards in the world! I'm heavy-bodied with beautiful black and orange/pink bead-like scales. I chew my venom into prey through grooved teeth in my lower jaw.",size:"About 18-22 inches long and weighing up to 5 pounds. I'm a heavy, stocky lizard with a thick tail where I store fat.",food:"I eat bird and reptile eggs, baby rabbits, small birds, and lizards. I may only eat 5-10 big meals per year!",habitat:"I live in the deserts and scrublands of the southwestern United States and northwestern Mexico.",facts:["My venom contains a compound that scientists used to create a diabetes medication!","I store fat in my thick tail and can survive months between meals.","I spend about 95% of my life underground in burrows.","My bead-like scales are reinforced with tiny bones called osteoderms — built-in armor."]},
  {id:51,cat:"reptiles",name:"Green Anaconda",chars:"The heaviest snake in the world — a giant water-loving squeezer!",who:"I'm the heaviest snake in the world and one of the longest! I live in the rivers and swamps of South America where I spend most of my time in the water. I'm a constrictor — I wrap my powerful coils around prey and squeeze.",size:"Up to 30 feet long and over 500 pounds — as heavy as 3 adult people! Females are much larger than males.",food:"I eat fish, birds, caimans, capybaras, deer, and wild pigs. I swallow my prey whole — my jaws can stretch incredibly wide!",habitat:"I live in rivers, swamps, marshes, and flooded forests of the Amazon Basin in South America.",facts:["I can hold my breath underwater for up to 10 minutes while waiting to ambush prey.","My eyes and nostrils are on top of my head so I can hide almost completely underwater.","I squeeze my prey instead of using venom — I'm incredibly strong.","After a really big meal, I might not eat again for weeks or even months!"]},
  {id:52,cat:"reptiles",name:"King Cobra",chars:"The longest venomous snake in the world — can stand up and look you in the eye!",who:"I'm the longest venomous snake on Earth and the only snake that builds a nest for my eggs! When threatened, I raise the front third of my body off the ground, spread my famous hood, and hiss loudly.",size:"Up to 18 feet long — as long as a large car! I can inject so much venom in a single bite that it could theoretically take down an elephant.",food:"My name 'King' Cobra comes from the fact that I eat other snakes — including other cobras and pythons!",habitat:"I live in forests, bamboo thickets, and swamps across South and Southeast Asia.",facts:["I'm the only snake in the world that builds a nest of leaves and guards my eggs!","I can raise up to 6 feet of my body off the ground — enough to look a tall person in the eye.","Despite my fearsome reputation, I'm actually quite shy and prefer to avoid people.","My genus name 'Ophiophagus' literally means 'snake eater.'"]},
  {id:53,cat:"reptiles",name:"Komodo Dragon",chars:"The biggest lizard in the world with a venomous bite!",who:"I'm the largest living lizard on Earth and a fierce apex predator. I have powerful claws, a muscular tail, and venom glands in my mouth that weaken my prey. I've been called a real-life dragon!",size:"Up to 10 feet long and 150-200 pounds — bigger than most adult people!",food:"I eat deer, pigs, water buffalo, birds, and sometimes other Komodo dragons! I can eat up to 80% of my body weight in a single meal.",habitat:"I live on only a few small islands in Indonesia — Komodo, Rinca, Flores, and Gili Motang.",facts:["I have venom glands in my mouth that lower my prey's blood pressure!","I can smell a dead animal from 6 miles away using my forked tongue!","Baby Komodos live in trees for their first few years to hide from hungry adults.","I can run up to 13 mph in short bursts — fast for such a large lizard!"]},
  {id:54,cat:"reptiles",name:"Saltwater Crocodile",chars:"The largest reptile alive with the strongest bite of any animal!",who:"I'm the largest living reptile on Earth and one of the most powerful predators. My kind has been around for over 200 million years — I've outlasted the dinosaurs. I have the strongest measured bite force of any living animal.",size:"Up to 23 feet long and over 2,200 pounds! Males are much larger than females.",food:"I eat fish, birds, mammals, and anything that comes near the water — including water buffalo! I use a 'death roll' to tear large prey apart.",habitat:"I live in saltwater and brackish coastal areas from eastern India through Southeast Asia to northern Australia.",facts:["My bite force is over 3,700 pounds per square inch — the strongest ever measured!","I can swim in the open ocean for hundreds of miles using ocean currents.","I've been around for over 200 million years — I'm older than the dinosaurs!","My stomach acid is so strong it can dissolve bones and horns."]},
];

// ─── MAIN APP (state, layout, routing between views) ───
export default function App() {
  const [profile, setProfile] = useState(null);
  const [view, setView] = useState("loading");
  const [activeCat, setActiveCat] = useState("amphibians");

  // Load saved profile on startup
  useEffect(() => {
    try {
      const saved = localStorage.getItem("profile");
      if (saved) {
        setProfile(JSON.parse(saved));
        setView("home");
      } else {
        setView("onboarding");
      }
    } catch {
      setView("onboarding");
    }
  }, []);
  const [search, setSearch] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ck = () => setIsMobile(window.innerWidth <= 820);
    ck(); window.addEventListener("resize", ck);
    return () => window.removeEventListener("resize", ck);
  }, []);

  const filtered = animals.filter((a) => {
    const mc = a.cat === activeCat;
    const q = search.toLowerCase();
    const ms = !q || a.name.toLowerCase().includes(q) || a.chars.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q);
    return mc && ms;
  });

  const char = characters.find((c) => c.id === profile?.character) || characters[0];

  // Save profile helper
  const saveProfile = (p) => {
    setProfile(p);
    try { localStorage.setItem("profile", JSON.stringify(p)); } catch {}
  };

  // ── Onboarding gate ──
  if (view === "loading") return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI',system-ui,sans-serif", color: "#aaa" }}>Loading...</div>;
  if (view === "onboarding") return <Onboarding onComplete={(p) => { saveProfile(p); setView("home"); }} />;

  const navigateTo = (catId) => { setActiveCat(catId); setSelectedAnimal(null); setDrawerOpen(false); };

  // ── SIDEBAR CONTENT (menu items + character guide + ask AI link) ──
  const sidebarContent = (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Category menu items */}
      <div style={{ paddingTop: 14 }}>
        {categories.map((c) => (
          <CatBtn key={c.id} label={c.label} emoji={c.emoji} active={activeCat === c.id} color={catColors[c.id].primary} onClick={() => navigateTo(c.id)} />
        ))}
      </div>
      {/* Character guide + Ask AI link */}
      <div style={{ padding: "0 18px 18px", marginTop: 36, textAlign: "center" }}>
        <div style={{ fontSize: "3.8rem", lineHeight: 1 }}>{char.emoji}</div>
        <div style={{ fontSize: ".8rem", color: "#666", marginTop: 6, lineHeight: 1.45 }}>{char.greeting}</div>
        <div style={{ marginTop: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "#3a9e7e", fontSize: ".84rem", fontWeight: 600 }} onClick={() => setAiOpen(true)}>
          🔍 <span>Ask Animal Expert</span>
        </div>
      </div>
    </div>
  );

  // ── BODY CONTENT (card grid OR detail view) ──
  const bodyContent = selectedAnimal ? (
    <DetailView animal={selectedAnimal} char={char} profile={profile} onBack={() => setSelectedAnimal(null)} onAskAI={() => setAiOpen(true)} />
  ) : (
    <>
      {/* Welcome bar */}
      <div style={{ background: "#f5f7f6", padding: "22px 24px 12px", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: "1.08rem", color: "#888" }}>Welcome, <span style={{ color: "#0d7a5f", fontWeight: 600 }}>{profile?.name || "Explorer"}</span>!</span>
        <span style={{ marginLeft: "auto", fontSize: ".88rem", color: "#aaa" }}><span style={{ color: "#0d7a5f", fontWeight: 600 }}>{filtered.length}</span> animals</span>
      </div>
      {/* Card grid */}
      <div style={{ padding: "20px 24px" }}>
        {filtered.length === 0 && <div style={{ background: "#fff", borderRadius: 10, padding: "48px 20px", fontSize: "1rem", color: "#aaa", textAlign: "center" }}>No animals match your search.</div>}
        {filtered.length > 0 && (
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: ".03em", marginBottom: 14, color: catColors[activeCat].primary }}>
              {categories.find(c => c.id === activeCat)?.emoji} {categories.find(c => c.id === activeCat)?.label}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 18 }}>
              {filtered.map((a) => <AnimalCard key={a.id} animal={a} onClick={() => setSelectedAnimal(a)} />)}
            </div>
          </div>
        )}
        {/* Footer */}
        <div style={{ textAlign: "center", padding: "32px 0 12px", fontSize: ".78rem", color: "#999" }}>Powered by Grandma ❤️</div>
      </div>
    </>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Segoe UI',system-ui,sans-serif", color: "#555" }}>
      {/* ── HEADER (logo, tagline, search, settings gear, hamburger) ── */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8eeec", position: "sticky", top: 0, zIndex: 100, padding: "10px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ flex: 1, whiteSpace: "nowrap", minWidth: 0 }}>
            <div style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-.02em", color: "#0d7a5f" }}>Animal Explorer</div>
            <div style={{ fontSize: ".7rem", color: "#aaa", fontWeight: 500, letterSpacing: ".03em", marginTop: -1 }}>Discover the wild world, one animal at a time</div>
          </div>
          {/* Desktop search */}
          {!isMobile && (
            <div style={{ flex: 1, maxWidth: 420 }}>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search animals…" style={{ width: "100%", padding: "8px 14px", border: "1.5px solid #dce4e1", borderRadius: 8, fontSize: ".92rem", outline: "none", color: "#555", boxSizing: "border-box" }} />
            </div>
          )}
          {/* Settings + hamburger (right side) */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setSettingsOpen(!settingsOpen)} style={{ width: 36, height: 36, borderRadius: 8, background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0d7a5f" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </button>
              {settingsOpen && <SettingsPopover profile={profile} setProfile={setProfile} onClose={() => setSettingsOpen(false)} />}
            </div>
            {isMobile && (
              <button onClick={() => setDrawerOpen(true)} style={{ display: "flex", flexDirection: "column", gap: 4, width: 36, height: 36, background: "#f5f8f7", border: "1.5px solid #e0e8e5", borderRadius: 8, cursor: "pointer", padding: 8, alignItems: "stretch", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ height: 2, background: "#888", borderRadius: 2 }} /><span style={{ height: 2, background: "#888", borderRadius: 2 }} /><span style={{ height: 2, background: "#888", borderRadius: 2 }} />
              </button>
            )}
          </div>
        </div>
        {/* Mobile search below logo */}
        {isMobile && (
          <div style={{ marginTop: 8 }}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search animals…" style={{ width: "100%", padding: "8px 14px", border: "1.5px solid #dce4e1", borderRadius: 8, fontSize: ".92rem", outline: "none", color: "#555", boxSizing: "border-box" }} />
          </div>
        )}
      </header>

      {/* ── MOBILE DRAWER (slides in from left) ── */}
      {drawerOpen && <div onClick={() => setDrawerOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.3)", zIndex: 300 }} />}
      <div style={{ position: "fixed", top: 0, left: drawerOpen ? 0 : -300, width: 270, height: "100vh", background: "#fff", zIndex: 400, boxShadow: "4px 0 20px rgba(0,0,0,.12)", transition: "left .25s", overflowY: "auto" }}>
        <div style={{ padding: "12px 18px", borderBottom: "1px solid #eaf0ed", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700, fontSize: ".92rem", color: "#333" }}>Menu</span>
          <button onClick={() => setDrawerOpen(false)} style={{ width: 28, height: 28, borderRadius: 6, background: "#f5f7f6", border: "1px solid #e4e8e6", cursor: "pointer", fontSize: ".9rem", color: "#888", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        {sidebarContent}
      </div>

      {/* ── MAIN LAYOUT (sidebar + body) ── */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 57px)" }}>
        {/* Desktop sidebar */}
        {!isMobile && (
          <aside style={{ width: 210, minWidth: 210, background: "#fff", borderRight: "1px solid #eaf0ed", position: "sticky", top: 57, height: "calc(100vh - 57px)", overflowY: "auto", display: "flex", flexDirection: "column" }}>
            {sidebarContent}
          </aside>
        )}
        {/* Main body */}
        <main style={{ flex: 1, background: "#f5f7f6", overflowY: "auto" }}>
          {bodyContent}
        </main>
      </div>

      {/* ── ASK AI OVERLAY (chat modal) ── */}
      {aiOpen && <AskAIOverlay char={char} profile={profile} animal={selectedAnimal} onClose={() => setAiOpen(false)} />}
    </div>
  );
}

// ─── SIDEBAR MENU BUTTON (single category item) ───
function CatBtn({ label, emoji, active, color, onClick }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", padding: "5px 18px", border: "none", background: "none", cursor: "pointer", fontSize: ".94rem", color: active ? color : "#777", fontWeight: active ? 600 : 400, borderLeft: `3px solid ${active ? color : "transparent"}`, transition: "all .15s" }}>
      <span style={{ fontSize: "1.3rem" }}>{emoji}</span>
      <span>{label}</span>
    </button>
  );
}

// ─── ANIMAL CARD (grid card with name + description) ───
function AnimalCard({ animal, onClick }) {
  const col = catColors[animal.cat];
  return (
    <div onClick={onClick} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.05)", borderTop: `3px solid ${col.primary}`, cursor: "pointer", display: "flex", flexDirection: "column", transition: "box-shadow .15s, transform .15s" }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.09)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,.05)"; e.currentTarget.style.transform = "none"; }}>
      <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "1rem", fontWeight: 600, color: "#333", lineHeight: 1.3, marginBottom: 6 }}>{animal.name}</div>
        <div style={{ fontSize: ".88rem", color: "#555", lineHeight: 1.55, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{animal.chars}</div>
      </div>
    </div>
  );
}

// ─── DETAIL VIEW (full animal page: Who Am I, Size, Food, Habitat, Fun Facts) ───
function DetailView({ animal, char, onBack, onAskAI }) {
  const col = catColors[animal.cat];
  // Section component — no divider lines, header color provides separation
  const Sec = ({ icon, title, children }) => (
    <div style={{ padding: "18px 0" }}>
      <div style={{ fontSize: ".88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: col.primary, marginBottom: 8 }}>{icon} {title}</div>
      <div style={{ fontSize: ".94rem", color: "#555", lineHeight: 1.7 }}>{children}</div>
    </div>
  );
  return (
    <div style={{ padding: "20px 24px", maxWidth: 720 }}>
      <div onClick={onBack} style={{ fontSize: ".92rem", color: col.primary, cursor: "pointer", fontWeight: 500, marginBottom: 16, display: "inline-block" }}>← Back</div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#333" }}>{animal.name}</div>
        <div style={{ fontSize: ".88rem", color: col.primary, fontWeight: 600, marginTop: 3 }}>{categories.find(c => c.id === animal.cat)?.label}</div>
      </div>
      <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 2px 10px rgba(0,0,0,.04)", padding: "4px 24px 24px" }}>
        <Sec icon="🔍" title="Who Am I?">{animal.who}</Sec>
        <Sec icon="📏" title="Size">{animal.size}</Sec>
        <Sec icon="🍽️" title="Food">{animal.food}</Sec>
        <Sec icon="🏠" title="Habitat">{animal.habitat}</Sec>
        <div style={{ padding: "18px 0" }}>
          <div style={{ fontSize: ".88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: col.primary, marginBottom: 8 }}>⭐ Fun Facts</div>
          {animal.facts.map((f, i) => (
            <div key={i} style={{ fontSize: ".94rem", color: "#555", lineHeight: 1.7, padding: "3px 0 3px 16px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: col.primary, fontWeight: 700 }}>•</span>{f}
            </div>
          ))}
        </div>
        {/* Ask AI button */}
        <div style={{ paddingTop: 18, marginTop: 4, textAlign: "center" }}>
          <div style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, color: "#3a9e7e", fontSize: ".9rem", fontWeight: 600 }} onClick={onAskAI}>
            🔍 <span>Ask Animal Expert</span>
          </div>
        </div>
      </div>
      {/* Footer - outside the white box */}
      <div style={{ textAlign: "center", padding: "24px 0 8px", fontSize: ".78rem", color: "#999" }}>Powered by Grandma ❤️</div>
    </div>
  );
}

// ─── ONBOARDING (first-time setup: name, gender toggle, birthday, character picker) ───
function Onboarding({ onComplete }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [bday, setBday] = useState("");
  const [charId, setCharId] = useState("basilisk");
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#e8f5e9,#e3f2fd)", fontFamily: "'Segoe UI',system-ui,sans-serif", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 18, padding: "40px 36px", maxWidth: 440, width: "100%", boxShadow: "0 8px 30px rgba(0,0,0,.08)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: "2.8rem", marginBottom: 6 }}>🐢</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d7a5f" }}>Animal Explorer</div>
          <div style={{ fontSize: ".86rem", color: "#aaa", marginTop: 4 }}>Discover the wild world, one animal at a time</div>
        </div>
        <label style={lbl}>Your Name</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" style={inp} />
        <label style={lbl}>Gender</label>
        {/* Gender toggle buttons */}
        <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
          {["boy", "girl"].map(g => (
            <button key={g} onClick={() => setGender(g)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: gender === g ? "2px solid #0d7a5f" : "2px solid #e0e5e3", background: gender === g ? "#e8f5e9" : "#fff", color: gender === g ? "#0d7a5f" : "#888", fontWeight: 600, fontSize: ".92rem", cursor: "pointer", transition: "all .15s", textTransform: "capitalize" }}>{g}</button>
          ))}
        </div>
        <label style={lbl}>Birth Date</label>
        <input type="date" value={bday} onChange={e => setBday(e.target.value)} style={inp} />
        <label style={{ ...lbl, marginTop: 20 }}>Choose Your Animal Character</label>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 10 }}>
          {characters.map(c => (
            <div key={c.id} onClick={() => setCharId(c.id)} style={{ textAlign: "center", cursor: "pointer", padding: 12, borderRadius: 14, border: charId === c.id ? "2.5px solid #0d7a5f" : "2.5px solid #e8eeec", background: charId === c.id ? "#e8f5e9" : "#fff", transition: "all .15s", flex: 1 }}>
              <div style={{ fontSize: "2.4rem" }}>{c.emoji}</div>
            </div>
          ))}
        </div>
        <button onClick={() => { if (name.trim()) onComplete({ name: name.trim(), gender, bday, character: charId }); }} disabled={!name.trim()}
          style={{ width: "100%", marginTop: 28, padding: "14px 0", background: name.trim() ? "#0d7a5f" : "#ccc", color: "#fff", border: "none", borderRadius: 12, fontSize: "1rem", fontWeight: 700, cursor: name.trim() ? "pointer" : "default" }}>
          Start Exploring! Let's Go!
        </button>
      </div>
    </div>
  );
}

// ─── SETTINGS POPOVER (edit profile: name, gender toggle, birthday, character) ───
function SettingsPopover({ profile, setProfile, onClose }) {
  const [n, setN] = useState(profile?.name || "");
  const [g, setG] = useState(profile?.gender || "");
  const [b, setB] = useState(profile?.bday || "");
  const [ch, setCh] = useState(profile?.character || "basilisk");
  useEffect(() => {
    const h = (e) => { if (!e.target.closest(".sp-inner")) onClose(); };
    setTimeout(() => document.addEventListener("click", h), 0);
    return () => document.removeEventListener("click", h);
  }, [onClose]);
  return (
    <div className="sp-inner" onClick={e => e.stopPropagation()} style={{ position: "absolute", right: 0, top: 44, background: "#fff", border: "1px solid #e4e8e6", borderRadius: 14, padding: "20px 22px", boxShadow: "0 6px 24px rgba(0,0,0,.1)", zIndex: 200, width: 300 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontSize: ".78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", color: "#aaa" }}>Settings</span>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: ".9rem", color: "#aaa" }}>✕</button>
      </div>
      <label style={lblS}>Name</label>
      <input value={n} onChange={e => setN(e.target.value)} style={inpS} />
      {/* Gender toggle buttons */}
      <label style={{ ...lblS, marginTop: 16 }}>Gender</label>
      <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
        {["boy", "girl"].map(gv => (
          <button key={gv} onClick={() => setG(gv)} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: g === gv ? "2px solid #0d7a5f" : "2px solid #e0e5e3", background: g === gv ? "#e8f5e9" : "#fff", color: g === gv ? "#0d7a5f" : "#888", fontWeight: 600, fontSize: ".84rem", cursor: "pointer", transition: "all .15s", textTransform: "capitalize" }}>{gv}</button>
        ))}
      </div>
      <label style={{ ...lblS, marginTop: 16 }}>Birth Date</label>
      <input type="date" value={b} onChange={e => setB(e.target.value)} style={inpS} />
      <label style={{ ...lblS, marginTop: 20 }}>Animal Character</label>
      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        {characters.map(c => (
          <div key={c.id} onClick={() => setCh(c.id)} style={{ textAlign: "center", cursor: "pointer", padding: 8, borderRadius: 12, border: ch === c.id ? "2.5px solid #0d7a5f" : "2.5px solid #e8eeec", background: ch === c.id ? "#e8f5e9" : "#fff", flex: 1, transition: "all .15s" }}>
            <div style={{ fontSize: "1.6rem" }}>{c.emoji}</div>
          </div>
        ))}
      </div>
      <button onClick={() => { const p = { name: n.trim() || "Explorer", gender: g, bday: b, character: ch }; setProfile(p); try { localStorage.setItem("profile", JSON.stringify(p)); } catch {} onClose(); }}
        style={{ width: "100%", marginTop: 20, padding: "10px 0", background: "#0d7a5f", color: "#fff", border: "none", borderRadius: 10, fontSize: ".88rem", fontWeight: 600, cursor: "pointer" }}>
        Save Changes
      </button>
    </div>
  );
}

// ─── ASK AI CHAT (Claude-powered animal expert chat overlay) ───
function AskAIOverlay({ char, profile, animal, onClose }) {
  const [q, setQ] = useState("");
  const [msgs, setMsgs] = useState([{ role: "ai", text: animal ? `Hi ${profile?.name || "friend"}! I'm ${char.name}. Ask me anything about ${animal.name}! 🦎` : `Hi ${profile?.name || "friend"}! I'm ${char.name}. Ask me anything about animals! 🌍` }]);
  const [loading, setLoading] = useState(false);
  const bottom = useRef(null);
  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);
  const ask = async () => {
    if (!q.trim() || loading) return;
    const uq = q.trim(); setQ(""); setMsgs(p => [...p, { role: "user", text: uq }]); setLoading(true);
    try {
      const sys = `You are ${char.name}, a friendly animal expert guide for a child named ${profile?.name || "a kid"} who is about 4-5 years old. ${animal ? `The child is learning about ${animal.name}. Facts: ${animal.who} ${animal.food} ${animal.habitat} ${animal.facts.join(". ")}` : ""} Keep answers concise (2-3 sentences max), fun, age-appropriate, and educational. Use simple words. You can use one emoji per response.`;
      const res = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: sys, messages: [{ role: "user", content: uq }] }) });
      const data = await res.json();
      const txt = data.content?.map(b => b.text || "").join("") || "Hmm, I'm not sure! Try asking something else.";
      setMsgs(p => [...p, { role: "ai", text: txt }]);
    } catch { setMsgs(p => [...p, { role: "ai", text: "Oops! My brain got tangled. Try again! 🤔" }]); }
    setLoading(false);
  };
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.4)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background: "#fff", borderRadius: 18, maxWidth: 460, width: "100%", maxHeight: "80vh", display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,.18)" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #eaf0ed", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: "1.8rem" }}>{char.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: ".96rem", fontWeight: 700, color: "#333" }}>Ask Animal Expert</div>
            <div style={{ fontSize: ".78rem", color: "#888" }}>Your Animal Expert</div>
          </div>
          <button onClick={onClose} style={{ background: "#f5f7f6", border: "1px solid #e4e8e6", borderRadius: 8, width: 30, height: 30, cursor: "pointer", fontSize: ".85rem", color: "#888", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%", background: m.role === "user" ? "#d4edda" : "#f0f2f1", color: m.role === "user" ? "#2d5a3d" : "#333", borderRadius: 16, padding: "11px 16px", fontSize: ".92rem", lineHeight: 1.55 }}>{m.text}</div>
          ))}
          {loading && <div style={{ alignSelf: "flex-start", background: "#f0f2f1", borderRadius: 16, padding: "11px 16px", fontSize: ".92rem", color: "#999" }}>Thinking... 🤔</div>}
          <div ref={bottom} />
        </div>
        <div style={{ padding: "12px 16px", borderTop: "1px solid #eaf0ed", display: "flex", gap: 10 }}>
          <input value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === "Enter" && ask()} placeholder="Ask me anything about animals..." style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #dce4e1", borderRadius: 10, fontSize: ".92rem", outline: "none" }} />
          <button onClick={ask} disabled={loading || !q.trim()} style={{ padding: "10px 18px", background: q.trim() && !loading ? "#3a9e7e" : "#ccc", color: "#fff", border: "none", borderRadius: 10, fontSize: ".88rem", fontWeight: 600, cursor: q.trim() && !loading ? "pointer" : "default" }}>Send</button>
        </div>
      </div>
    </div>
  );
}

// ─── SHARED STYLES (reused across onboarding + settings forms) ───
const lbl = { display: "block", fontSize: ".82rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 5, marginTop: 14 };
const inp = { display: "block", width: "100%", padding: "10px 14px", border: "1.5px solid #dce4e1", borderRadius: 10, fontSize: ".94rem", outline: "none", color: "#555", boxSizing: "border-box" };
const lblS = { display: "block", fontSize: ".74rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 4 };
const inpS = { display: "block", width: "100%", padding: "8px 12px", border: "1.5px solid #dce4e1", borderRadius: 8, fontSize: ".88rem", outline: "none", color: "#555", boxSizing: "border-box" };
