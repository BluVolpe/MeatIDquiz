const questions = [
  {
    question: "What is 'Bovine' commonly known as?",
    choice: ["Goat", "Cattle", "Chicken", "Pork"],
    answer: "Cattle",
  },
  {
    question: "What does 'HACCP' stand for?",
    choice: [
      "Hazardous Activity Critical Control Point",
      "Highly Active Common Control Plan",
      "Hazard Analysis Critical Control Point",
      "Health Analysis Control Production",
    ],
    answer: "Hazard Analysis Critical Control Point",
  },
  {
    question: "What is 'Collagen'?",
    choice: [
      "A type of meat cut",
      "A synthetic additive",
      "A fibrous protein in connective tissues",
      "A preservation technique",
    ],
    answer: "A fibrous protein in connective tissues",
  },
  {
    question: "Which term is used to describe yield grading?",
    choice: ["Marbling", "Cutability", "Tenderness", "Dryness"],
    answer: "Cutability",
  },
  {
    question: "What does 'Intramuscular fat' refer to?",
    choice: ["Marbling", "Collagen", "External fat layer", "Connective tissue"],
    answer: "Marbling",
  },
  {
    question: "What is 'Game' in terms of food?",
    choice: [
      "Processed meat products",
      "Poultry",
      "Free roaming animals consumed as food",
      "Fish and seafood",
    ],
    answer: "Free roaming animals consumed as food",
  },
  {
    question: "Which federal agency is responsible for meat inspection?",
    choice: ["FBI", "FDA", "USDA", "NSA"],
    answer: "USDA",
  },
  {
    question: "What is 'FIFO' a principle of?",
    choice: ["Cooking", "Stock rotation", "Pricing", "Marketing"],
    answer: "Stock rotation",
  },
  {
    question: "What is a natural seam in meat?",
    choice: [
      "A synthetic division used in meat processing",
      "A chemical used to tenderize meat",
      "A natural break in the muscles of an animal",
      "An artificial enhancement technique",
    ],
    answer: "A natural break in the muscles of an animal",
  },
  {
    question: "What does 'PSE' in pork stand for?",
    choice: [
      "Pale, Soft, Exudative",
      "Pink, Salty, Edible",
      "Processed, Smoked, Enhanced",
      "Packed, Sealed, Exported",
    ],
    answer: "Pale, Soft, Exudative",
  },
  {
    question: "Which of these is not a primary cut of beef?",
    choice: ["Loin", "Chuck", "Rib", "Boston Butt"],
    answer: "Boston Butt",
  },
  {
    question: "What is the purpose of dry aging beef?",
    choice: [
      "To reduce the weight of the beef",
      "To increase the meat's palatability traits",
      "To extend the shelf life indefinitely",
      "To make the meat suitable for grinding",
    ],
    answer: "To increase the meat's palatability traits",
  },
  {
    question: "What does 'USDA' stand for?",
    choice: [
      "United States Department of Agriculture",
      "United States Department of Assembly",
      "United State Domestic Agency",
      "Universal Sanitary Department of Animals",
    ],
    answer: "United States Department of Agriculture",
  },
  {
    question: "What is the main reason for vacuum packaging meat?",
    choice: [
      "To add flavor",
      "To increase transparency",
      "To reduce storage space",
      "To store meat in an oxygen-free environment",
    ],
    answer: "To store meat in an oxygen-free environment",
  },
  {
    question: "Which is not a method of meat inspection?",
    choice: [
      "Sensory evaluation",
      "Chemical testing",
      "Color grading",
      "Pack date verification",
    ],
    answer: "Pack date verification",
  },
  {
    question: "What differentiates quality grading from yield grading in meat?",
    choice: [
      "Quality grading measures tenderness, yield grading measures quantity",
      "Quality grading measures fat content, yield grading measures muscle",
      "Quality grading measures overall quality, yield grading measures the amount of usable meat",
      "Quality grading is voluntary, yield grading is mandatory",
    ],
    answer:
      "Quality grading measures overall quality, yield grading measures the amount of usable meat",
  },
  {
    question:
      "What is the significance of knowing where a cut comes from on the carcass?",
    choice: [
      "To price the meat accurately",
      "To determine the appropriate cooking method",
      "To simplify the packaging process",
      "To ensure legal compliance",
    ],
    answer: "To determine the appropriate cooking method",
  },
  {
    question: "Why is collagen important in cooking meats?",
    choice: [
      "It thickens sauces naturally",
      "It enhances flavor",
      "It breaks down into gelatin, tenderizing the meat",
      "It reduces cooking time",
    ],
    answer: "It breaks down into gelatin, tenderizing the meat",
  },
  {
    question: "What type of animal is referred to as 'Ovine'?",
    choice: ["Cattle", "Pig", "Sheep", "Goat"],
    answer: "Sheep",
  },
  {
    question: "What does the term 'Prime' refer to in meat grading?",
    choice: [
      "The lowest quality of meat",
      "The highest grade of beef",
      "The most commonly sold grade of pork",
      "A method of butchering",
    ],
    answer: "The highest grade of beef",
  },
  {
    question: "What is the primary purpose of meat inspection?",
    choice: [
      "To determine the price of meat",
      "To enhance meat flavor",
      "To ensure meat is safe to consume",
      "To speed up the butchering process",
    ],
    answer: "To ensure meat is safe to consume",
  },
  {
    question:
      "Which term describes the fat that is on top of muscles and generally not edible?",
    choice: [
      "Intramuscular fat",
      "Intermuscular fat",
      "Subcutaneous fat",
      "Visceral fat",
    ],
    answer: "Intermuscular fat",
  },
  {
    question: "What does 'Vacuum packaging' help prevent in stored meats?",
    choice: ["Overcooking", "Freezer burn", "Loss of color", "Spoilage"],
    answer: "Spoilage",
  },
  {
    question:
      "Which of these is a term used to describe the quality grading of meats?",
    choice: ["Packability", "Marbling", "Palatability", "Cutability"],
    answer: "Palatability",
  },
  {
    question:
      "Which term describes the fibrous protein that breaks down into gelatin?",
    choice: ["Keratin", "Elastin", "Collagen", "Myoglobin"],
    answer: "Collagen",
  },
  {
    question: "What does 'FIFO' stand for in food storage?",
    choice: [
      "First In, First Out",
      "Final Input, First Output",
      "First In, Final Out",
      "Full Input, Full Output",
    ],
    answer: "First In, First Out",
  },
  {
    question:
      "Which type of meat is referred to when using the term 'Porcine'?",
    choice: ["Beef", "Lamb", "Pork", "Poultry"],
    answer: "Pork",
  },
  {
    question: "What is 'marbling' a reference to in meat quality?",
    choice: [
      "The pattern of fat on the edge of the meat",
      "The distribution of intramuscular fat",
      "The color of the meat surface",
      "The pattern of bones within the cut",
    ],
    answer: "The distribution of intramuscular fat",
  },
  {
    question:
      "What is the main concern of meat inspection by agencies like the USDA?",
    choice: [
      "Improving the taste of meat",
      "Ensuring the meat is safe to consume",
      "Reducing the cost of meat production",
      "Enhancing the appearance of meat",
    ],
    answer: "Ensuring the meat is safe to consume",
  },
  {
    question: "What does 'HRI cuts' stand for?",
    choice: [
      "Highly Rated Institutional cuts",
      "Hotel, Restaurant, and Institution cuts",
      "Health Related Issues cuts",
      "High Resilience Industry cuts",
    ],
    answer: "Hotel, Restaurant, and Institution cuts",
  },
  {
    question:
      "Which of the following is not a primary purpose of vacuum packaging in the meat industry?",
    choice: [
      "To enhance meat flavor over time",
      "To extend the shelf life of meat products",
      "To prevent the growth of aerobic bacteria",
      "To reduce the use of chemical preservatives",
    ],
    answer: "To enhance meat flavor over time",
  },
  {
    question: "Why is it important to know the 'Pack date' of meat products?",
    choice: [
      "To determine the meat's cooking time",
      "To understand the meat's price fluctuations",
      "To know how fresh the meat is",
      "To decide the seasoning for the meat",
    ],
    answer: "To know how fresh the meat is",
  },
  {
    question: "What does the term 'Intermuscular fat' refer to?",
    choice: [
      "Fat within the muscle fibers",
      "Fat between different muscles",
      "Fat under the skin of an animal",
      "Artificially added fat",
    ],
    answer: "Fat between different muscles",
  },
  {
    question: "What is 'marrow' in the context of meat?",
    choice: [
      "The fat found under the skin",
      "The bones used for making broth",
      "The edible substance found inside bones",
      "The connective tissue in joints",
    ],
    answer: "The edible substance found inside bones",
  },
  {
    question: "What characterizes 'Choice' grade in beef?",
    choice: [
      "It's the lowest quality commonly sold",
      "It's considered the best quality",
      "It's a middle-grade quality commonly sold",
      "It's only used for ground beef",
    ],
    answer: "It's a middle-grade quality commonly sold",
  },
  {
    question: "What does 'No Roll' indicate in meat grading?",
    choice: [
      "Meat that cannot be used for rolling cuts",
      "Meat without any USDA grading",
      "Meat that is too tough to be rolled",
      "Meat that is pre-rolled for convenience",
    ],
    answer: "Meat without any USDA grading",
  },
  {
    question: "What is the primary function of 'intramuscular fat' in meats?",
    choice: [
      "To prevent spoilage",
      "To increase cooking speed",
      "To enhance flavor and tenderness",
      "To reduce cooking temperature requirements",
    ],
    answer: "To enhance flavor and tenderness",
  },
  {
    question: "Why are 'natural casings' used in sausage making?",
    choice: [
      "They provide a uniform shape to sausages",
      "They are cheaper than synthetic casings",
      "They add flavor and have a natural texture",
      "They increase the shelf life of sausages",
    ],
    answer: "They add flavor and have a natural texture",
  },
  {
    question: "What are 'sub-primal cuts' of beef?",
    choice: [
      "The initial large sections from slaughtering",
      "Cuts derived from breaking down primal cuts",
      "The smallest cuts sold at retail",
      "Unprocessed whole carcasses",
    ],
    answer: "Cuts derived from breaking down primal cuts",
  },
  {
    question: "What is the purpose of 'aging beef'?",
    choice: [
      "To comply with safety regulations",
      "To increase the beef's nutrient content",
      "To enhance its flavor and tenderness",
      "To make it easier to transport and store",
    ],
    answer: "To enhance its flavor and tenderness",
  },
  {
    question: "What does 'Frenched' refer to in meat cuts?",
    choice: [
      "Meat packaged without skin or bones",
      "Bone-in cuts with the meat trimmed away from the bone end",
      "Cuts made across the grain",
      "Meat cuts rolled and tied for roasting",
    ],
    answer: "Bone-in cuts with the meat trimmed away from the bone end",
  },
  {
    question: "What is 'Trichinosis'?",
    choice: [
      "A method of meat preservation",
      "A nutritional deficiency in wild game",
      "A parasitic disease potentially found in pork",
      "A type of meat cut",
    ],
    answer: "A parasitic disease potentially found in pork",
  },
  {
    question: "Which description fits 'medallion' cuts best?",
    choice: [
      "Long, thin slices of meat for stir-frying",
      "Small, thick, round cuts typically from the loin for grilling or sautéing",
      "Large, flat pieces used for roasting",
      "Thinly sliced meat for sandwiches",
    ],
    answer:
      "Small, thick, round cuts typically from the loin for grilling or sautéing",
  },
  {
    question:
      "What is the main benefit of 'dry curing' compared to 'wet curing'?",
    choice: [
      "It is faster and adds more moisture to the meat",
      "It produces a stronger flavor without adding extra water",
      "It reduces the risk of contamination",
      "It extends the shelf life longer",
    ],
    answer: "It produces a stronger flavor without adding extra water",
  },
  {
    question: "What is the significance of 'Suckling pig' in culinary terms?",
    choice: [
      "It refers to pigs raised on organic diets",
      "It describes very young pigs, often roasted whole",
      "It indicates pigs used specifically for pork chops",
      "It is a term for genetically modified pigs",
    ],
    answer: "It describes very young pigs, often roasted whole",
  },
  {
    question: "Which of the following is not a typical use for 'charcuterie'?",
    choice: [
      "As an appetizer on meat platters",
      "For breakfast with eggs and toast",
      "In sandwiches or on pizzas",
      "As part of gourmet salads",
    ],
    answer: "For breakfast with eggs and toast",
  },
  {
    question: "Why is 'intramuscular fat' important for meat quality?",
    choice: [
      "It increases the weight of the meat",
      "It improves the flavor and texture of the meat",
      "It decreases cooking time",
      "It reduces the price of the meat",
    ],
    answer: "It improves the flavor and texture of the meat",
  },
  {
    question: "What does 'Mutton' refer to?",
    choice: [
      "Meat from young lambs",
      "Meat from female sheep",
      "Meat from male goats",
      "Meat from older sheep",
    ],
    answer: "Meat from older sheep",
  },
  {
    question: "What characterizes 'Yearling' meat?",
    choice: [
      "Meat from animals older than two years",
      "Meat from animals slaughtered at around 12 months old",
      "Meat from newborn animals",
      "Meat specifically used in year-end celebrations",
    ],
    answer: "Meat from animals slaughtered at around 12 months old",
  },
  {
    question:
      "What is the primary purpose of the 'FIFO' method in meat storage?",
    choice: [
      "To keep the most recently processed meat at the front",
      "To improve the marbling of stored meat",
      "To ensure older stock is used before newer stock",
      "To enhance the flavor of aged meats",
    ],
    answer: "To ensure older stock is used before newer stock",
  },
  {
    question: "What does 'across the grain' refer to in meat preparation?",
    choice: [
      "Cutting meat parallel to the muscle fibers",
      "Cutting meat perpendicular to the muscle fibers",
      "Grinding meat into a fine texture",
      "Marinating meat before cooking",
    ],
    answer: "Cutting meat perpendicular to the muscle fibers",
  },
  {
    question: "What is a 'chop ready rack'?",
    choice: [
      "A storage method for frozen meats",
      "A cut of meat that is pre-trimmed and ready to be cut into individual chops",
      "A spice rack designed for meat seasonings",
      "A kitchen tool for tenderizing meat chops",
    ],
    answer:
      "A cut of meat that is pre-trimmed and ready to be cut into individual chops",
  },
  {
    question: "What does 'conformation' refer to in meat grading?",
    choice: [
      "The flavor profile of the meat",
      "The age of the animal at the time of slaughter",
      "The meat to bone ratio",
      "The health condition of the animal",
    ],
    answer: "The meat to bone ratio",
  },
  {
    question: "What is 'scallopine'?",
    choice: [
      "A thick cut of meat for slow cooking",
      "A very thin cut of meat, typically veal or pork, for quick cooking",
      "A method of smoking meats",
      "A type of seasoning for meats",
    ],
    answer:
      "A very thin cut of meat, typically veal or pork, for quick cooking",
  },
  {
    question: "Describe 'frenched chop'.",
    choice: [
      "A chop where the bone is left long and clean of meat",
      "A chop cut from the rib section with no bone",
      "A boneless and skinless piece of chicken",
      "A pork chop with added French herbs",
    ],
    answer: "A chop where the bone is left long and clean of meat",
  },
  {
    question: "What are 'sub-primal cuts' of a leg of veal?",
    choice: [
      "Shank, loin, and ribs",
      "Hind shank, top round, and sirloin",
      "Top round, bottom round, and knuckle",
      "Rib, brisket, and chuck",
    ],
    answer: "Top round, bottom round, and knuckle",
  },
  {
    question:
      "What is the main difference between beef and veal carcass division?",
    choice: [
      "Beef is typically divided into more cuts than veal",
      "Veal is divided into smaller, more numerous cuts",
      "Veal is not divided into primal cuts",
      "Beef and veal divisions are essentially the same",
    ],
    answer: "Veal is divided into smaller, more numerous cuts",
  },
  {
    question: "What are the grades of veal determined by?",
    choice: [
      "Color and texture of the meat",
      "Weight and age of the animal",
      "Marbling and fat content",
      "Size, conformation, color, and muscle fiber quality",
    ],
    answer: "Size, conformation, color, and muscle fiber quality",
  },
  {
    question: "What characterizes 'PSE pork'?",
    choice: [
      "Pale, Soft, and Exudative appearance due to stress and handling",
      "Prime, Select, and Excellent grades",
      "Pork Specially Exported",
      "Packed, Sealed, and Encased",
    ],
    answer: "Pale, Soft, and Exudative appearance due to stress and handling",
  },
  {
    question: "What is the purpose of curing meats?",
    choice: [
      "To extend shelf life and change textures",
      "To make meats suitable for raw consumption",
      "To enhance the natural color of meats",
      "To reduce the cost of meat production",
    ],
    answer: "To extend shelf life and change textures",
  },
  {
    question: "Which type of meat is 'Hot house lamb'?",
    choice: [
      "Lamb that is raised in a controlled, indoor environment",
      "A very small, very young lamb meant to be roasted whole",
      "Lamb that is seasoned and cooked at high temperatures",
      "Lamb processed in a greenhouse setting",
    ],
    answer: "A very small, very young lamb meant to be roasted whole",
  },
  {
    question: "What is 'in-house grading'?",
    choice: [
      "Grading performed by external inspectors at the farm",
      "A standard set by meat distributors for internal quality control",
      "Grading assessed by a packaging plant, not regulated by the USDA",
      "Consumer grading provided in-house at grocery stores",
    ],
    answer: "Grading assessed by a packaging plant, not regulated by the USDA",
  },
  {
    question: "What does 'bob veal' refer to?",
    choice: [
      "Veal from calves aged 3-5 months old",
      "Veal from very young calves, less than one month old",
      "Veal that has been specially branded",
      "A cut of veal used primarily for stews",
    ],
    answer: "Veal from very young calves, less than one month old",
  },
  {
    question: "What are the primary cuts of a market style hog?",
    choice: [
      "Ham, loin, boston butt, picnic, belly with spare ribs",
      "Shoulder, belly, jowl, neck bones, back ribs",
      "Loin, shank, rib, cheek, tail",
      "Brisket, round, chuck, plate",
    ],
    answer: "Ham, loin, boston butt, picnic, belly with spare ribs",
  },
  {
    question:
      "Why might a chef choose to fabricate portion cuts in the kitchen?",
    choice: [
      "To ensure higher quality and customization",
      "To comply with local health regulations",
      "Because it is less expensive than pre-cut portions",
      "To reduce the need for skilled labor",
    ],
    answer: "To ensure higher quality and customization",
  },
  {
    question:
      "What is a primary benefit of using 'natural casings' for sausages?",
    choice: [
      "They are more cost-effective than synthetic casings",
      "They can be produced in larger quantities",
      "They offer better flavor and texture",
      "They last longer on the shelf",
    ],
    answer: "They offer better flavor and texture",
  },
  {
    question: "What does 'TCM' refer to in meat processing?",
    choice: [
      "Total Cured Meat",
      "Thermal Curing Method",
      "Treated Cured Meat",
      "A group of sodium-based curing agents",
    ],
    answer: "A group of sodium-based curing agents",
  },
  {
    question: "Why is 'yield grading' important in lamb purchasing?",
    choice: [
      "It determines the flavor profile",
      "It assesses the economic value based on the amount of usable meat",
      "It is a regulatory requirement for all lamb products",
      "It indicates the age of the lamb",
    ],
    answer: "It assesses the economic value based on the amount of usable meat",
  },
  {
    question: "What does the term 'frenched' indicate about a meat cut?",
    choice: [
      "The bone ends have been trimmed and cleaned of meat",
      "It has been marinated with French herbs",
      "The meat has been sliced thinly and layered",
      "It has been ground and reformed into a patty",
    ],
    answer: "The bone ends have been trimmed and cleaned of meat",
  },
  {
    question: "What is the purpose of 'dry cure' in meat processing?",
    choice: [
      "To enhance the meat's natural moisture content",
      "To add bulk to the meat",
      "To cure the meat by applying salt and other seasonings directly",
      "To cook the meat slowly using a dry heat method",
    ],
    answer: "To cure the meat by applying salt and other seasonings directly",
  },
  {
    question:
      "Which cut of beef is known for its fine-grained and full-flavored meat with generous marbling?",
    choice: ["Ribeye", "Cap of Ribeye", "Prime Rib Roast", "NY Strip"],
    answer: "Ribeye",
  },
  {
    question:
      "Which cut from the beef rib region is also known as Spinalis Dorsi or Deckle Steak?",
    choice: ["Ribeye", "Cap of Ribeye", "Prime Rib Roast", "NY Strip"],
    answer: "Cap of Ribeye",
  },
  {
    question: "What is another name for Prime Rib Roast?",
    choice: ["English Cut", "King Cut", "Queen Cut", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "Which cut of beef loin is also known as Kansas City Steak or Delmonico Steak?",
    choice: ["NY Strip", "Tenderloin Filet", "T-Bone", "Tenderloin Roast"],
    answer: "NY Strip",
  },
  {
    question: "What is another name for the Tenderloin Filet?",
    choice: ["Filet Mignon", "NY Strip", "T-Bone", "Tri-Tip"],
    answer: "Filet Mignon",
  },
  {
    question:
      "Which cut combines a Strip Steak and a Tenderloin Steak connected by a T-shaped bone?",
    choice: ["NY Strip", "Tenderloin Filet", "T-Bone", "Top Sirloin"],
    answer: "T-Bone",
  },
  {
    question:
      "Which cut from the beef loin region is cut from the most tender muscle and is easy to prepare?",
    choice: ["NY Strip", "Tenderloin Filet", "T-Bone", "Tenderloin Roast"],
    answer: "Tenderloin Roast",
  },
  {
    question: "What is another name for the Top Sirloin?",
    choice: [
      "Baseball Cut",
      "Sirloin Steak",
      "Both of the above",
      "None of the above",
    ],
    answer: "Both of the above",
  },
  {
    question:
      "Which triangular-shaped muscle cut from the beef sirloin region is also known as Beef Loin, Bottom Sirloin Butt, Bottom Sirloin Roast, or Triangle Roast?",
    choice: ["Top Sirloin", "Tri-Tip", "Flat Iron", "Teres Major"],
    answer: "Tri-Tip",
  },
  {
    question:
      "Which cut from the beef chuck is the second most tender beef muscle?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Flat Iron",
  },
  {
    question:
      "Which cut from the beef chuck offers versatility and upscale plate presentation similar to Beef Tenderloin (Filet Mignon)?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Teres Major",
  },
  {
    question:
      "Which boneless cut from the beef brisket is typically used for regional barbecue items, pot roast, and corned beef?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Brisket",
  },
  {
    question:
      "Which cut from the beef plate consists of the rib section from any rib and/or plate item and is ideal for signature rubs and sauces?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Plate Ribs",
  },
  {
    question:
      "Which cut from the beef plate is a long, flat muscle commonly used for fajitas?",
    choice: ["Flat Iron", "Skirt Steak", "Brisket", "Plate Ribs"],
    answer: "Skirt Steak",
  },
  {
    question: "Which cut from the beef flank is also known as Hanging Tender?",
    choice: ["Hanger Steak", "Flank Steak", "Top Round", "Eye of Round"],
    answer: "Hanger Steak",
  },
  {
    question:
      "Which single flat muscle cut from the flank region is known for its robust, beefy flavor?",
    choice: ["Hanger Steak", "Flank Steak", "Top Round", "Eye of Round"],
    answer: "Flank Steak",
  },
  {
    question:
      "Which cut from the shank region is tough but can be used for crockpot recipes that call for low and slow cooking?",
    choice: ["Fore Shank", "Ground Beef", "Top Round", "Bottom Round"],
    answer: "Fore Shank",
  },
  {
    question: "Which cut from the shank region is often used for Ground Beef?",
    choice: ["Fore Shank", "Ground Beef", "Top Round", "Bottom Round"],
    answer: "Ground Beef",
  },
  {
    question:
      "Which large subprimal cut from the round region is lean and flavorful, often used for roast beef?",
    choice: ["Top Round", "Eye of Round", "Bottom Round", "Flank Steak"],
    answer: "Top Round",
  },
  {
    question:
      "Which cut from the round region is a cheaper and tougher cut ideal for hearty stews?",
    choice: ["Top Round", "Eye of Round", "Bottom Round", "Flank Steak"],
    answer: "Eye of Round",
  },
  {
    question:
      "Which cut of beef is known for its fine-grained and full-flavored meat with generous marbling?",
    choice: ["Ribeye", "Cap of Ribeye", "Prime Rib Roast", "NY Strip"],
    answer: "Ribeye",
  },
  {
    question:
      "Which cut from the beef rib region is also known as Spinalis Dorsi or Deckle Steak?",
    choice: ["Ribeye", "Cap of Ribeye", "Prime Rib Roast", "NY Strip"],
    answer: "Cap of Ribeye",
  },
  {
    question: "What is another name for Prime Rib Roast?",
    choice: ["English Cut", "King Cut", "Queen Cut", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "Which cut of beef loin is also known as Kansas City Steak or Delmonico Steak?",
    choice: ["NY Strip", "Tenderloin Filet", "T-Bone", "Tenderloin Roast"],
    answer: "NY Strip",
  },
  {
    question: "What is another name for the Tenderloin Filet?",
    choice: ["Filet Mignon", "NY Strip", "T-Bone", "Tri-Tip"],
    answer: "Filet Mignon",
  },
  {
    question:
      "Which cut combines a Strip Steak and a Tenderloin Steak connected by a T-shaped bone?",
    choice: ["NY Strip", "Tenderloin Filet", "T-Bone", "Top Sirloin"],
    answer: "T-Bone",
  },
  {
    question:
      "Which cut from the beef loin region is cut from the most tender muscle and is easy to prepare?",
    choice: ["NY Strip", "Tenderloin Filet", "T-Bone", "Tenderloin Roast"],
    answer: "Tenderloin Roast",
  },
  {
    question: "What is another name for the Top Sirloin?",
    choice: [
      "Baseball Cut",
      "Sirloin Steak",
      "Both of the above",
      "None of the above",
    ],
    answer: "Both of the above",
  },
  {
    question:
      "Which triangular-shaped muscle cut from the beef sirloin region is also known as Beef Loin, Bottom Sirloin Butt, Bottom Sirloin Roast, or Triangle Roast?",
    choice: ["Top Sirloin", "Tri-Tip", "Flat Iron", "Teres Major"],
    answer: "Tri-Tip",
  },
  {
    question:
      "Which cut from the beef chuck is the second most tender beef muscle?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Flat Iron",
  },
  {
    question:
      "Which cut from the beef chuck offers versatility and upscale plate presentation similar to Beef Tenderloin (Filet Mignon)?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Teres Major",
  },
  {
    question:
      "Which boneless cut from the beef brisket is typically used for regional barbecue items, pot roast, and corned beef?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Brisket",
  },
  {
    question:
      "Which cut from the beef plate consists of the rib section from any rib and/or plate item and is ideal for signature rubs and sauces?",
    choice: ["Flat Iron", "Teres Major", "Brisket", "Plate Ribs"],
    answer: "Plate Ribs",
  },
  {
    question:
      "Which cut from the beef plate is a long, flat muscle commonly used for fajitas?",
    choice: ["Flat Iron", "Skirt Steak", "Brisket", "Plate Ribs"],
    answer: "Skirt Steak",
  },
  {
    question: "Which cut from the beef flank is also known as Hanging Tender?",
    choice: ["Hanger Steak", "Flank Steak", "Top Round", "Eye of Round"],
    answer: "Hanger Steak",
  },
  {
    question:
      "Which single flat muscle cut from the flank region is known for its robust, beefy flavor?",
    choice: ["Hanger Steak", "Flank Steak", "Top Round", "Eye of Round"],
    answer: "Flank Steak",
  },
  {
    question:
      "Which cut from the shank region is tough but can be used for crockpot recipes that call for low and slow cooking?",
    choice: ["Fore Shank", "Ground Beef", "Top Round", "Bottom Round"],
    answer: "Fore Shank",
  },
  {
    question: "Which cut from the shank region is often used for Ground Beef?",
    choice: ["Fore Shank", "Ground Beef", "Top Round", "Bottom Round"],
    answer: "Ground Beef",
  },
  {
    question:
      "Which large subprimal cut from the round region is lean and flavorful, often used for roast beef?",
    choice: ["Top Round", "Eye of Round", "Bottom Round", "Flank Steak"],
    answer: "Top Round",
  },
  {
    question:
      "Which cut from the round region is a cheaper and tougher cut ideal for hearty stews?",
    choice: ["Top Round", "Eye of Round", "Bottom Round", "Flank Steak"],
    answer: "Eye of Round",
  },
  {
    question: "Cattle is commonly known as what?",
    choice: ["Goat", "Bovine", "Chicken", "Pork"],
    answer: "Bovine",
  },
  {
    question: "Hazard Analysis Critical Control Point is abbreviated as?",
    choice: [
      "Hazardous Activity Critical Control Point",
      "Highly Active Common Control Plan",
      "HACCP",
      "Health Analysis Control Production",
    ],
    answer: "HACCP",
  },
  {
    question: "A fibrous protein in connective tissues is known as?",
    choice: [
      "A type of meat cut",
      "A synthetic additive",
      "Collagen",
      "A preservation technique",
    ],
    answer: "Collagen",
  },
  {
    question: "Cutability is a term used to describe what?",
    choice: ["Marbling", "Yield grading", "Tenderness", "Dryness"],
    answer: "Yield grading",
  },
  {
    question: "Marbling refers to what in meat?",
    choice: [
      "Intramuscular fat",
      "Collagen",
      "External fat layer",
      "Connective tissue",
    ],
    answer: "Intramuscular fat",
  },
  {
    question: "Free roaming animals consumed as food are known as?",
    choice: ["Processed meat products", "Poultry", "Game", "Fish and seafood"],
    answer: "Game",
  },
  {
    question: "USDA is the federal agency responsible for what?",
    choice: ["FBI", "FDA", "Meat inspection", "NSA"],
    answer: "Meat inspection",
  },
  {
    question: "Stock rotation principle is also known as?",
    choice: ["Cooking", "FIFO", "Pricing", "Marketing"],
    answer: "FIFO",
  },
  {
    question: "A natural break in the muscles of an animal is called?",
    choice: [
      "A synthetic division used in meat processing",
      "A chemical used to tenderize meat",
      "A natural seam",
      "An artificial enhancement technique",
    ],
    answer: "A natural seam",
  },
  {
    question: "Pale, Soft, Exudative in pork is abbreviated as?",
    choice: [
      "Pink, Salty, Edible",
      "Processed, Smoked, Enhanced",
      "Packed, Sealed, Exported",
      "PSE",
    ],
    answer: "PSE",
  },
  {
    question: "Boston Butt is not a primary cut of what meat?",
    choice: ["Loin", "Chuck", "Rib", "Beef"],
    answer: "Beef",
  },
  {
    question:
      "To increase the meat's palatability traits is the purpose of what?",
    choice: [
      "To reduce the weight of the beef",
      "To extend the shelf life indefinitely",
      "Dry aging beef",
      "To make the meat suitable for grinding",
    ],
    answer: "Dry aging beef",
  },
  {
    question: "United States Department of Agriculture is abbreviated as?",
    choice: [
      "United States Department of Assembly",
      "United State Domestic Agency",
      "USDA",
      "Universal Sanitary Department of Animals",
    ],
    answer: "USDA",
  },
  {
    question:
      "Storing meat in an oxygen-free environment is the main reason for?",
    choice: [
      "To add flavor",
      "To increase transparency",
      "Vacuum packaging",
      "To reduce storage space",
    ],
    answer: "Vacuum packaging",
  },
  {
    question: "Pack date verification is not a method of what?",
    choice: [
      "Sensory evaluation",
      "Chemical testing",
      "Color grading",
      "Meat inspection",
    ],
    answer: "Meat inspection",
  },
  {
    question:
      "Quality grading measures overall quality, yield grading measures?",
    choice: [
      "Tenderness",
      "Fat content",
      "The amount of usable meat",
      "Quantity",
    ],
    answer: "The amount of usable meat",
  },
  {
    question:
      "Determining the appropriate cooking method is the significance of knowing?",
    choice: [
      "To price the meat accurately",
      "Where a cut comes from on the carcass",
      "To simplify the packaging process",
      "To ensure legal compliance",
    ],
    answer: "Where a cut comes from on the carcass",
  },
  {
    question:
      "Breaking down into gelatin, tenderizing the meat is important in cooking meats for what?",
    choice: [
      "It thickens sauces naturally",
      "Collagen",
      "It enhances flavor",
      "It reduces cooking time",
    ],
    answer: "Collagen",
  },
  {
    question: "Sheep is referred to as?",
    choice: ["Cattle", "Pig", "Ovine", "Goat"],
    answer: "Ovine",
  },
  {
    question: "The highest grade of beef is referred to as?",
    choice: [
      "The lowest quality of meat",
      "The highest grade of beef",
      "The most commonly sold grade of pork",
      "A method of butchering",
    ],
    answer: "The highest grade of beef",
  },
  {
    question: "Ensuring meat is safe to consume is the primary purpose of?",
    choice: [
      "To determine the price of meat",
      "To enhance meat flavor",
      "Meat inspection",
      "To speed up the butchering process",
    ],
    answer: "Meat inspection",
  },
  {
    question: "Intermuscular fat describes what?",
    choice: [
      "Intramuscular fat",
      "Intermuscular fat",
      "Subcutaneous fat",
      "Visceral fat",
    ],
    answer: "Fat that is on top of muscles and generally not edible",
  },
  {
    question: "Spoilage is what vacuum packaging helps prevent in?",
    choice: ["Overcooking", "Freezer burn", "Loss of color", "Stored meats"],
    answer: "Stored meats",
  },
  {
    question: "Palatability is a term used to describe?",
    choice: [
      "Packability",
      "Marbling",
      "Quality grading of meats",
      "Cutability",
    ],
    answer: "Quality grading of meats",
  },
  {
    question: "Collagen is the fibrous protein that breaks down into what?",
    choice: ["Keratin", "Elastin", "Collagen", "Myoglobin"],
    answer: "Gelatin",
  },
  {
    question: "First In, First Out is abbreviated as?",
    choice: [
      "Final Input, First Output",
      "First In, Final Out",
      "Full Input, Full Output",
      "FIFO",
    ],
    answer: "FIFO",
  },
  {
    question: "Pork is referred to as?",
    choice: ["Beef", "Lamb", "Porcine", "Poultry"],
    answer: "Porcine",
  },
  {
    question: "The distribution of intramuscular fat in meat is known as?",
    choice: [
      "The pattern of fat on the edge of the meat",
      "Marbling",
      "The color of the meat surface",
      "The pattern of bones within the cut",
    ],
    answer: "Marbling",
  },
  {
    question: "Ensuring the meat is safe to consume is the main concern of?",
    choice: [
      "Improving the taste of meat",
      "Meat inspection by agencies like the USDA",
      "Reducing the cost of meat production",
      "Enhancing the appearance of meat",
    ],
    answer: "Meat inspection by agencies like the USDA",
  },
  {
    question: "Hotel, Restaurant, and Institution cuts is abbreviated as?",
    choice: [
      "Highly Rated Institutional cuts",
      "HRI cuts",
      "Health Related Issues cuts",
      "High Resilience Industry cuts",
    ],
    answer: "HRI cuts",
  },
  {
    question: "Enhancing meat flavor over time is not a primary purpose of?",
    choice: [
      "Vacuum packaging in the meat industry",
      "To extend the shelf life of meat products",
      "To prevent the growth of aerobic bacteria",
      "To reduce the use of chemical preservatives",
    ],
    answer: "Vacuum packaging in the meat industry",
  },
  {
    question: "Knowing how fresh the meat is the importance of?",
    choice: [
      "Determining the meat's cooking time",
      "Understanding the meat's price fluctuations",
      "Knowing the 'Pack date' of meat products",
      "Deciding the seasoning for the meat",
    ],
    answer: "Knowing the 'Pack date' of meat products",
  },
  {
    question: "Fat between different muscles is referred to as?",
    choice: [
      "Fat within the muscle fibers",
      "Intermuscular fat",
      "Fat under the skin of an animal",
      "Artificially added fat",
    ],
    answer: "Intermuscular fat",
  },
  {
    question:
      "The edible substance found inside bones in the context of meat is known as?",
    choice: [
      "The fat found under the skin",
      "Bones used for making broth",
      "Marrow",
      "The connective tissue in joints",
    ],
    answer: "Marrow",
  },
  {
    question:
      "A middle-grade quality commonly sold in beef is characterized as?",
    choice: [
      "It's the lowest quality commonly sold",
      "Choice grade",
      "It's considered the best quality",
      "It's only used for ground beef",
    ],
    answer: "Choice grade",
  },
  {
    question: "Meat without any USDA grading is indicated by?",
    choice: [
      "No Roll",
      "Meat that cannot be used for rolling cuts",
      "Meat that is too tough to be rolled",
      "Meat that is pre-rolled for convenience",
    ],
    answer: "No Roll",
  },
  {
    question: "To enhance flavor and tenderness is the primary function of?",
    choice: [
      "To prevent spoilage",
      "To increase cooking speed",
      "Intramuscular fat in meats",
      "To reduce cooking temperature requirements",
    ],
    answer: "Intramuscular fat in meats",
  },
  {
    question:
      "They add flavor and have a natural texture is why what is used in sausage making?",
    choice: [
      "They provide a uniform shape to sausages",
      "Natural casings",
      "They are cheaper than synthetic casings",
      "They increase the shelf life of sausages",
    ],
    answer: "Natural casings",
  },
  {
    question: "Cuts derived from breaking down primal cuts are known as?",
    choice: [
      "The initial large sections from slaughtering",
      "Sub-primal cuts of beef",
      "The smallest cuts sold at retail",
      "Unprocessed whole carcasses",
    ],
    answer: "Sub-primal cuts of beef",
  },
  {
    question: "To enhance its flavor and tenderness is the purpose of?",
    choice: [
      "To comply with safety regulations",
      "Aging beef",
      "To increase the beef's nutrient content",
      "To make it easier to transport and store",
    ],
    answer: "Aging beef",
  },
  {
    question:
      "Bone-in cuts with the meat trimmed away from the bone end is known as?",
    choice: [
      "Meat packaged without skin or bones",
      "Frenched meat cuts",
      "Cuts made across the grain",
      "Meat cuts rolled and tied for roasting",
    ],
    answer: "Frenched meat cuts",
  },
  {
    question: "A parasitic disease potentially found in pork is called?",
    choice: [
      "A method of meat preservation",
      "A nutritional deficiency in wild game",
      "Trichinosis",
      "A type of meat cut",
    ],
    answer: "Trichinosis",
  },
  {
    question:
      "Small, thick, round cuts typically from the loin for grilling or sautéing are best described as?",
    choice: [
      "Long, thin slices of meat for stir-frying",
      "Medallion cuts",
      "Large, flat pieces used for roasting",
      "Thinly sliced meat for sandwiches",
    ],
    answer: "Medallion cuts",
  },
  {
    question:
      "Producing a stronger flavor without adding extra water is the main benefit of?",
    choice: [
      "It is faster and adds more moisture to the meat",
      "Dry curing compared to wet curing",
      "It reduces the risk of contamination",
      "It extends the shelf life longer",
    ],
    answer: "Dry curing compared to wet curing",
  },
  {
    question: "Very young pigs, often roasted whole are known as?",
    choice: [
      "Pigs raised on organic diets",
      "Suckling pig",
      "Pigs used specifically for pork chops",
      "Genetically modified pigs",
    ],
    answer: "Suckling pig",
  },
  {
    question: "For breakfast with eggs and toast is not a typical use for?",
    choice: [
      "Charcuterie",
      "As an appetizer on meat platters",
      "In sandwiches or on pizzas",
      "As part of gourmet salads",
    ],
    answer: "Charcuterie",
  },
  {
    question:
      "Improving the flavor and texture of meat is important because of?",
    choice: [
      "Increasing the weight of the meat",
      "Intramuscular fat",
      "Decreasing cooking time",
      "Reducing the price of the meat",
    ],
    answer: "Intramuscular fat",
  },
  {
    question: "Meat from older sheep is referred to as?",
    choice: [
      "Meat from young lambs",
      "Mutton",
      "Meat from female sheep",
      "Meat from male goats",
    ],
    answer: "Mutton",
  },
  {
    question:
      "Meat from animals slaughtered at around 12 months old is characterized as?",
    choice: [
      "Meat from animals older than two years",
      "Yearling meat",
      "Meat from newborn animals",
      "Meat specifically used in year-end celebrations",
    ],
    answer: "Yearling meat",
  },
  {
    question:
      "Ensuring older stock is used before newer stock is the primary purpose of?",
    choice: [
      "To keep the most recently processed meat at the front",
      "The FIFO method in meat storage",
      "To improve the marbling of stored meat",
      "To enhance the flavor of aged meats",
    ],
    answer: "The FIFO method in meat storage",
  },
  {
    question: "Cutting meat perpendicular to the muscle fibers refers to?",
    choice: [
      "Cutting meat parallel to the muscle fibers",
      "Cutting meat across the grain",
      "Grinding meat into a fine texture",
      "Marinating meat before cooking",
    ],
    answer: "Cutting meat across the grain",
  },
  {
    question:
      "A cut of meat that is pre-trimmed and ready to be cut into individual chops is known as?",
    choice: [
      "A storage method for frozen meats",
      "Chop ready rack",
      "A spice rack designed for meat seasonings",
      "A kitchen tool for tenderizing meat chops",
    ],
    answer: "Chop ready rack",
  },
  {
    question: "The meat to bone ratio refers to?",
    choice: [
      "The flavor profile of the meat",
      "Conformation in meat grading",
      "The age of the animal at the time of slaughter",
      "The health condition of the animal",
    ],
    answer: "Conformation in meat grading",
  },
  {
    question:
      "A very thin cut of meat, typically veal or pork, for quick cooking is known as?",
    choice: [
      "A thick cut of meat for slow cooking",
      "Scallopine",
      "A method of smoking meats",
      "A type of seasoning for meats",
    ],
    answer: "Scallopine",
  },
  {
    question:
      "A chop where the bone is left long and clean of meat is described as?",
    choice: [
      "A chop cut from the rib section with no bone",
      "Frenched chop",
      "A boneless and skinless piece of chicken",
      "A pork chop with added French herbs",
    ],
    answer: "Frenched chop",
  },
  {
    question: "Top round, bottom round, and knuckle are sub-primal cuts of?",
    choice: [
      "Shank, loin, and ribs",
      "A leg of veal",
      "Hind shank, top round, and sirloin",
      "Rib, brisket, and chuck",
    ],
    answer: "A leg of veal",
  },
  {
    question: "Veal is divided into smaller, more numerous cuts compared to?",
    choice: [
      "Beef carcass division",
      "Beef is typically divided into more cuts than veal",
      "Veal is not divided into primal cuts",
      "Beef and veal divisions are essentially the same",
    ],
    answer: "Beef carcass division",
  },
  {
    question: "Size, conformation, color, and muscle fiber quality determine?",
    choice: [
      "The grades of veal",
      "Color and texture of the meat",
      "Weight and age of the animal",
      "Marbling and fat content",
    ],
    answer: "The grades of veal",
  },
  {
    question:
      "Pale, Soft, and Exudative appearance due to stress and handling characterizes?",
    choice: [
      "Prime, Select, and Excellent grades",
      "PSE pork",
      "Pork Specially Exported",
      "Packed, Sealed, and Encased",
    ],
    answer: "PSE pork",
  },
  {
    question: "To extend shelf life and change textures is the purpose of?",
    choice: [
      "Curing meats",
      "To make meats suitable for raw consumption",
      "To enhance the natural color of meats",
      "To reduce the cost of meat production",
    ],
    answer: "Curing meats",
  },
  {
    question:
      "A very small, very young lamb meant to be roasted whole is known as?",
    choice: [
      "Lamb that is raised in a controlled, indoor environment",
      "Hot house lamb",
      "Lamb that is seasoned and cooked at high temperatures",
      "Lamb processed in a greenhouse setting",
    ],
    answer: "Hot house lamb",
  },
  {
    question:
      "Grading assessed by a packaging plant, not regulated by the USDA, is known as?",
    choice: [
      "Grading performed by external inspectors at the farm",
      "In-house grading",
      "A standard set by meat distributors for internal quality control",
      "Consumer grading provided in-house at grocery stores",
    ],
    answer: "In-house grading",
  },
  {
    question:
      "Veal from very young calves, less than one month old is referred to as?",
    choice: [
      "Veal from calves aged 3-5 months old",
      "Bob veal",
      "Veal that has been specially branded",
      "A cut of veal used primarily for stews",
    ],
    answer: "Bob veal",
  },
  {
    question:
      "Ham, loin, boston butt, picnic, belly with spare ribs are primary cuts of?",
    choice: [
      "Market style hog",
      "Shoulder, belly, jowl, neck bones, back ribs",
      "Loin, shank, rib, cheek, tail",
      "Brisket, round, chuck, plate",
    ],
    answer: "Market style hog",
  },
  {
    question:
      "To ensure higher quality and customization is why a chef might choose to?",
    choice: [
      "Fabricate portion cuts in the kitchen",
      "To comply with local health regulations",
      "Because it is less expensive than pre-cut portions",
      "To reduce the need for skilled labor",
    ],
    answer: "Fabricate portion cuts in the kitchen",
  },
  {
    question:
      "They offer better flavor and texture is a primary benefit of using?",
    choice: [
      "Natural casings for sausages",
      "They are more cost-effective than synthetic casings",
      "They can be produced in larger quantities",
      "They last longer on the shelf",
    ],
    answer: "Natural casings for sausages",
  },
  {
    question: "A group of sodium-based curing agents is referred to as?",
    choice: [
      "Total Cured Meat",
      "Thermal Curing Method",
      "TCM",
      "Treated Cured Meat",
    ],
    answer: "TCM",
  },
  {
    question:
      "Assessing the economic value based on the amount of usable meat is the importance of?",
    choice: [
      "Yield grading in lamb purchasing",
      "It determines the flavor profile",
      "It is a regulatory requirement for all lamb products",
      "It indicates the age of the lamb",
    ],
    answer: "Yield grading in lamb purchasing",
  },
  {
    question:
      "The bone ends have been trimmed and cleaned of meat is what term?",
    choice: [
      "It has been marinated with French herbs",
      "Frenched meat cut",
      "The meat has been sliced thinly and layered",
      "It has been ground and reformed into a patty",
    ],
    answer: "Frenched meat cut",
  },
  {
    question:
      "To cure the meat by applying salt and other seasonings directly is the purpose of?",
    choice: [
      "To enhance the meat's natural moisture content",
      "Dry cure in meat processing",
      "To add bulk to the meat",
      "To cook the meat slowly using a dry heat method",
    ],
    answer: "Dry cure in meat processing",
  },
  // Cattle Breeds
  {
    question:
      "Which breed of cattle originated in Japan and is known for its high marbling?",
    choice: ["Angus", "Hereford", "Wagyu", "Charolais"],
    answer: "Wagyu",
  },
  {
    question:
      "Which breed of cattle originated in Scotland and is known for its marbling?",
    choice: ["Hereford", "Angus", "Texas Longhorn", "Galloway"],
    answer: "Angus",
  },
  {
    question:
      "Which breed of cattle originated in France and is known for its large size and lean meat?",
    choice: ["Charolais", "Limousin", "Simmental", "Hereford"],
    answer: "Charolais",
  },
  {
    question:
      "Which versatile breed of cattle originated in Switzerland and is known for its marbling?",
    choice: ["Simmental", "Texas Longhorn", "Galloway", "Angus"],
    answer: "Simmental",
  },

  // Pigs
  {
    question:
      "Which breed of pig originated in England and is known for its juicy meat?",
    choice: ["Berkshire", "Duroc", "Yorkshire", "Tamworth"],
    answer: "Berkshire",
  },
  {
    question:
      "Which breed of pig originated in the United States and is known for its marbling?",
    choice: ["Duroc", "Berkshire", "Gloucestershire Old Spot", "Mangalitsa"],
    answer: "Duroc",
  },
  {
    question:
      "Which breed of pig originated in Hungary and is known for its high fat content?",
    choice: ["Landrace", "Hampshire", "Mangalitsa", "Tamworth"],
    answer: "Mangalitsa",
  },
  {
    question:
      "Which breed of pig originated in the United Kingdom and is known for its lean meat?",
    choice: ["Yorkshire", "Landrace", "Hampshire", "Duroc"],
    answer: "Hampshire",
  },

  // Chicken
  {
    question:
      "Which breed of chicken originated in England and is known for fast growth and meat production?",
    choice: ["Cornish Cross", "Rhode Island Red", "Plymouth Rock", "Orpington"],
    answer: "Cornish Cross",
  },
  {
    question:
      "Which breed of chicken originated in the United States and is dual-purpose for meat and eggs?",
    choice: ["Rhode Island Red", "Plymouth Rock", "Jersey Giant", "Sussex"],
    answer: "Rhode Island Red",
  },
  {
    question:
      "Which breed of chicken originated in the United States and is known for its flavorful meat?",
    choice: ["Plymouth Rock", "Orpington", "Bresse", "Cochin"],
    answer: "Plymouth Rock",
  },
  {
    question:
      "Which breed of chicken originated in the United States and is known for its large size?",
    choice: ["Jersey Giant", "Orpington", "Sussex", "Cochin"],
    answer: "Jersey Giant",
  },

  // Lamb
  {
    question:
      "Which breed of lamb originated in England and is known for its lean meat?",
    choice: ["Suffolk", "Dorset", "Merino", "Hampshire"],
    answer: "Suffolk",
  },
  {
    question:
      "Which breed of lamb originated in England and is known for its tender meat?",
    choice: ["Dorset", "Suffolk", "Southdown", "Katahdin"],
    answer: "Dorset",
  },
  {
    question:
      "Which breed of lamb originated in Spain and is known for its fine wool?",
    choice: ["Merino", "Hampshire", "Dorper", "Texel"],
    answer: "Merino",
  },
  {
    question:
      "Which breed of lamb originated in the Netherlands and is known for its lean meat?",
    choice: ["Texel", "Dorper", "Southdown", "Merino"],
    answer: "Texel",
  },

  // Goat
  {
    question:
      "Which breed of goat originated in South Africa and is known for its rapid growth?",
    choice: ["Boer", "Kiko", "Spanish", "Nubian"],
    answer: "Boer",
  },
  {
    question:
      "Which breed of goat originated in New Zealand and is known for its hardiness?",
    choice: ["Kiko", "Boer", "Toggenburg", "Alpine"],
    answer: "Kiko",
  },
  {
    question:
      "Which breed of goat originated in the Middle East and is known for its rich milk?",
    choice: ["Nubian", "Saanen", "LaMancha", "Alpine"],
    answer: "Nubian",
  },
  {
    question:
      "Which breed of goat originated in Switzerland and is known for its high milk production?",
    choice: ["Alpine", "Toggenburg", "Saanen", "Nubian"],
    answer: "Saanen",
  },

  // Ducks
  {
    question:
      "Which breed of duck originated in China and is known for its tender meat?",
    choice: ["Pekin", "Muscovy", "Rouen", "Khaki Campbell"],
    answer: "Pekin",
  },
  {
    question:
      "Which breed of duck originated in South America and is known for its lean meat?",
    choice: ["Muscovy", "Pekin", "Aylesbury", "Cayuga"],
    answer: "Muscovy",
  },
  {
    question:
      "Which breed of duck originated in England and is known for its high egg production?",
    choice: ["Khaki Campbell", "Indian Runner", "Swedish Blue", "Rouen"],
    answer: "Khaki Campbell",
  },
  {
    question:
      "Which breed of duck originated in the United States and is known for its unique plumage?",
    choice: ["Cayuga", "Aylesbury", "Indian Runner", "Swedish Blue"],
    answer: "Cayuga",
  },
  {
    question:
      "Which breed of duck originated in Sweden and is known for its good meat quality?",
    choice: ["Swedish Blue", "Cayuga", "Aylesbury", "Indian Runner"],
    answer: "Swedish Blue",
  },
  {
    question:
      "Which breed of duck originated in the United States and is known for its unique color?",
    choice: ["Cayuga", "Swedish Blue", "Indian Runner", "Khaki Campbell"],
    answer: "Cayuga",
  },
  {
    question:
      "Which breed of duck originated in Sweden and is known for its unique color?",
    choice: ["Swedish Blue", "Aylesbury", "Khaki Campbell", "Indian Runner"],
    answer: "Swedish Blue",
  },
  {
    question:
      "What is the recommended internal temperature for cooking ground beef to ensure it is safe to eat?",
    choice: ["145°F", "155°F", "160°F", "165°F"],
    answer: "160°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking steaks and roasts to medium-rare?",
    choice: ["125°F", "135°F", "145°F", "155°F"],
    answer: "135°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking steaks and roasts to medium?",
    choice: ["135°F", "145°F", "155°F", "165°F"],
    answer: "145°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking steaks and roasts to well-done?",
    choice: ["145°F", "155°F", "160°F", "170°F"],
    answer: "160°F",
  },

  // Pork
  {
    question:
      "What is the recommended internal temperature for cooking pork chops, roasts, and loins to ensure they are safe to eat?",
    choice: ["145°F", "150°F", "155°F", "160°F"],
    answer: "145°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking ground pork to ensure it is safe to eat?",
    choice: ["145°F", "155°F", "160°F", "165°F"],
    answer: "160°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking ham to reheat it?",
    choice: ["135°F", "145°F", "155°F", "165°F"],
    answer: "140°F",
  },

  // Chicken
  {
    question:
      "What is the recommended internal temperature for cooking chicken breasts to ensure they are safe to eat?",
    choice: ["145°F", "155°F", "160°F", "165°F"],
    answer: "165°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking chicken thighs and drumsticks to ensure they are safe to eat?",
    choice: ["165°F", "170°F", "175°F", "180°F"],
    answer: "165°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking ground chicken to ensure it is safe to eat?",
    choice: ["160°F", "165°F", "170°F", "175°F"],
    answer: "165°F",
  },

  // Lamb
  {
    question:
      "What is the recommended internal temperature for cooking lamb chops and roasts to medium-rare?",
    choice: ["125°F", "135°F", "145°F", "155°F"],
    answer: "135°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking lamb chops and roasts to medium?",
    choice: ["135°F", "145°F", "155°F", "165°F"],
    answer: "145°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking lamb chops and roasts to well-done?",
    choice: ["145°F", "155°F", "160°F", "170°F"],
    answer: "160°F",
  },

  // Goat
  {
    question:
      "What is the recommended internal temperature for cooking goat meat to ensure it is safe to eat?",
    choice: ["145°F", "155°F", "160°F", "165°F"],
    answer: "160°F",
  },

  // Duck
  {
    question:
      "What is the recommended internal temperature for cooking duck breasts to medium-rare?",
    choice: ["125°F", "135°F", "145°F", "155°F"],
    answer: "135°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking duck breasts to medium?",
    choice: ["135°F", "145°F", "155°F", "165°F"],
    answer: "145°F",
  },
  {
    question:
      "What is the recommended internal temperature for cooking ground duck to ensure it is safe to eat?",
    choice: ["160°F", "165°F", "170°F", "175°F"],
    answer: "165°F",
  },
  // Beef
  {
    question: "Which disease is commonly associated with undercooked beef?",
    choice: ["Salmonella", "E. coli", "Listeria", "Campylobacter"],
    answer: "E. coli",
  },
  {
    question:
      "What disease, also known as 'Mad Cow Disease', affects cattle and can be transmitted to humans through contaminated beef?",
    choice: [
      "Bovine Spongiform Encephalopathy (BSE)",
      "Foot and Mouth Disease",
      "Brucellosis",
      "Anthrax",
    ],
    answer: "Bovine Spongiform Encephalopathy (BSE)",
  },
  {
    question:
      "Which disease can be caused by eating beef contaminated with bovine tuberculosis?",
    choice: [
      "Salmonellosis",
      "Tuberculosis",
      "Campylobacteriosis",
      "Hepatitis A",
    ],
    answer: "Tuberculosis",
  },

  // Pork
  {
    question: "Which disease is commonly associated with undercooked pork?",
    choice: ["Trichinosis", "Listeriosis", "Salmonellosis", "E. coli"],
    answer: "Trichinosis",
  },
  {
    question:
      "Which disease can be caused by pork contaminated with Yersinia enterocolitica?",
    choice: ["Yersiniosis", "Brucellosis", "Anthrax", "Tuberculosis"],
    answer: "Yersiniosis",
  },
  {
    question:
      "Which disease is associated with pork contaminated with hepatitis E virus?",
    choice: ["Hepatitis E", "Hepatitis A", "Hepatitis B", "Hepatitis C"],
    answer: "Hepatitis E",
  },

  // Chicken
  {
    question: "Which disease is commonly associated with undercooked chicken?",
    choice: ["Salmonella", "E. coli", "Listeria", "Campylobacter"],
    answer: "Salmonella",
  },
  {
    question:
      "Which disease can be caused by eating chicken contaminated with Campylobacter jejuni?",
    choice: ["Campylobacteriosis", "Listeriosis", "Botulism", "Trichinosis"],
    answer: "Campylobacteriosis",
  },
  {
    question:
      "Which disease is associated with chicken contaminated with avian influenza virus?",
    choice: [
      "Avian Influenza",
      "Newcastle Disease",
      "Marek's Disease",
      "Fowl Cholera",
    ],
    answer: "Avian Influenza",
  },

  // Duck
  {
    question: "Which disease is commonly associated with undercooked duck?",
    choice: ["Salmonella", "E. coli", "Listeria", "Campylobacter"],
    answer: "Campylobacter",
  },
  {
    question:
      "Which disease is associated with ducks infected with the avian influenza virus?",
    choice: [
      "Avian Influenza",
      "Newcastle Disease",
      "Duck Viral Enteritis",
      "Fowl Cholera",
    ],
    answer: "Avian Influenza",
  },
  {
    question:
      "Which disease can be caused by eating duck contaminated with Salmonella?",
    choice: ["Salmonellosis", "Listeriosis", "Botulism", "Campylobacteriosis"],
    answer: "Salmonellosis",
  },

  // Goat
  {
    question:
      "Which disease is commonly associated with undercooked goat meat?",
    choice: ["Brucellosis", "E. coli", "Listeria", "Campylobacter"],
    answer: "Brucellosis",
  },
  {
    question:
      "Which disease can be caused by goat meat contaminated with Q fever?",
    choice: ["Q fever", "Anthrax", "Tuberculosis", "Toxoplasmosis"],
    answer: "Q fever",
  },
  {
    question:
      "Which disease is associated with goat meat contaminated with Listeria monocytogenes?",
    choice: ["Listeriosis", "Salmonellosis", "Botulism", "Campylobacteriosis"],
    answer: "Listeriosis",
  },

  // Lamb
  {
    question: "Which disease is commonly associated with undercooked lamb?",
    choice: ["Toxoplasmosis", "Listeriosis", "Salmonellosis", "E. coli"],
    answer: "Toxoplasmosis",
  },
  {
    question:
      "Which disease can be caused by lamb contaminated with Salmonella?",
    choice: ["Salmonellosis", "Listeriosis", "Botulism", "Campylobacteriosis"],
    answer: "Salmonellosis",
  },
  {
    question:
      "Which disease is associated with lamb meat contaminated with Campylobacter?",
    choice: ["Campylobacteriosis", "Listeriosis", "Botulism", "Brucellosis"],
    answer: "Campylobacteriosis",
  },
  {
    question: "What is an adult male cattle used for breeding called?",
    choice: ["Cow", "Steer", "Bull", "Heifer"],
    answer: "Bull",
  },
  {
    question: "What is a castrated male cattle raised for beef called?",
    choice: ["Cow", "Steer", "Bull", "Heifer"],
    answer: "Steer",
  },
  {
    question:
      "What is an adult female cattle that has given birth to at least one calf called?",
    choice: ["Cow", "Steer", "Bull", "Heifer"],
    answer: "Cow",
  },
  {
    question:
      "What is a young female cattle that has not yet given birth called?",
    choice: ["Cow", "Steer", "Bull", "Heifer"],
    answer: "Heifer",
  },
  {
    question: "What is an adult male pig used for breeding called?",
    choice: ["Sow", "Boar", "Barrow", "Gilt"],
    answer: "Boar",
  },
  {
    question: "What is a castrated male pig raised for meat called?",
    choice: ["Sow", "Boar", "Barrow", "Gilt"],
    answer: "Barrow",
  },
  {
    question:
      "What is an adult female pig that has given birth to at least one litter called?",
    choice: ["Sow", "Boar", "Barrow", "Gilt"],
    answer: "Sow",
  },
  {
    question: "What is a young female pig that has not yet given birth called?",
    choice: ["Sow", "Boar", "Barrow", "Gilt"],
    answer: "Gilt",
  },
  {
    question: "What is an adult male chicken called?",
    choice: ["Hen", "Pullet", "Rooster", "Cockerel"],
    answer: "Rooster",
  },
  {
    question:
      "What is a young male chicken, usually less than a year old, called?",
    choice: ["Hen", "Pullet", "Rooster", "Cockerel"],
    answer: "Cockerel",
  },
  {
    question: "What is an adult female chicken called?",
    choice: ["Hen", "Pullet", "Rooster", "Cockerel"],
    answer: "Hen",
  },
  {
    question:
      "What is a young female chicken, usually less than a year old and not yet laying eggs, called?",
    choice: ["Hen", "Pullet", "Rooster", "Cockerel"],
    answer: "Pullet",
  },
  {
    question: "What is an adult male duck called?",
    choice: ["Duck", "Drake", "Gander", "Hen"],
    answer: "Drake",
  },
  {
    question: "What is an adult female duck called?",
    choice: ["Duck", "Drake", "Gander", "Hen"],
    answer: "Duck",
  },
  {
    question: "What is an adult male turkey called?",
    choice: ["Hen", "Jenny", "Tom", "Jake"],
    answer: "Tom",
  },
  {
    question: "What is a young male turkey called?",
    choice: ["Hen", "Jenny", "Tom", "Jake"],
    answer: "Jake",
  },
  {
    question: "What is an adult female turkey called?",
    choice: ["Hen", "Jenny", "Tom", "Jake"],
    answer: "Hen",
  },
  {
    question: "What is a young female turkey called?",
    choice: ["Hen", "Jenny", "Tom", "Jake"],
    answer: "Jenny",
  },
  {
    question: "What is the cut number for primal rib?",
    choice: ["103", "109", "112a", "175"],
    answer: "103",
  },
  {
    question: "What is the cut number for roast ready rib?",
    choice: ["103", "109", "112a", "175"],
    answer: "109",
  },
  {
    question: "What is the cut number for export rib?",
    choice: ["103", "109", "109d", "175"],
    answer: "109d",
  },
  {
    question: "What is the cut number for boneless ribeye lip on?",
    choice: ["103", "109", "112a", "175"],
    answer: "112a",
  },
  {
    question: "What is the cut number for ribeye roll?",
    choice: ["103", "109", "112", "175"],
    answer: "112",
  },
  {
    question: "What is the cut number for bone-in strip loin?",
    choice: ["103", "175", "109", "180"],
    answer: "175",
  },
  {
    question: "What is the cut number for boneless striploin?",
    choice: ["103", "175", "109", "180"],
    answer: "180",
  },
  {
    question: "What is the cut number for tenderloin full fat on?",
    choice: ["103", "175", "189", "180"],
    answer: "189",
  },
  {
    question: "What is the cut number for tenderloin psmo?",
    choice: ["189", "175", "109d", "189a"],
    answer: "189a",
  },
  {
    question: "What is the cut number for tenderloin denuded?",
    choice: ["189", "175", "109d", "190a"],
    answer: "190a",
  },
  {
    question: "What is the cut number for tenderloin portion cut?",
    choice: ["189", "175", "109d", "1190a"],
    answer: "1190a",
  },
  {
    question: "What cut is numbered 103?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Export rib",
      "Boneless ribeye lip on",
    ],
    answer: "Primal rib",
  },
  {
    question: "What cut is numbered 109?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Export rib",
      "Boneless ribeye lip on",
    ],
    answer: "Roast ready rib",
  },
  {
    question: "What cut is numbered 109d?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Export rib",
      "Bone-in strip loin",
    ],
    answer: "Export rib",
  },
  {
    question: "What cut is numbered 112a?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Boneless ribeye lip on",
      "Bone-in strip loin",
    ],
    answer: "Boneless ribeye lip on",
  },
  {
    question: "What cut is numbered 112?",
    choice: [
      "Primal rib",
      "Ribeye roll",
      "Boneless ribeye lip on",
      "Bone-in strip loin",
    ],
    answer: "Ribeye roll",
  },
  {
    question: "What cut is numbered 175?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Bone-in strip loin",
      "Boneless striploin",
    ],
    answer: "Bone-in strip loin",
  },
  {
    question: "What cut is numbered 180?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Bone-in strip loin",
      "Boneless striploin",
    ],
    answer: "Boneless striploin",
  },
  {
    question: "What cut is numbered 189?",
    choice: [
      "Primal rib",
      "Roast ready rib",
      "Tenderloin full fat on",
      "Boneless striploin",
    ],
    answer: "Tenderloin full fat on",
  },
  {
    question: "What cut is numbered 189a?",
    choice: [
      "Tenderloin full fat on",
      "Tenderloin psmo",
      "Tenderloin denuded",
      "Tenderloin portion cut",
    ],
    answer: "Tenderloin psmo",
  },
  {
    question: "What cut is numbered 190a?",
    choice: [
      "Tenderloin full fat on",
      "Tenderloin psmo",
      "Tenderloin denuded",
      "Tenderloin portion cut",
    ],
    answer: "Tenderloin denuded",
  },
  {
    question: "What cut is numbered 1190a?",
    choice: [
      "Tenderloin full fat on",
      "Tenderloin psmo",
      "Tenderloin denuded",
      "Tenderloin portion cut",
    ],
    answer: "Tenderloin portion cut",
  },
  {
    question: "What is the highest grade for lamb?",
    choice: ["Good", "Utility", "Prime", "Choice"],
    answer: "Prime",
  },
  {
    question: "What is the highest grade for veal?",
    choice: ["Good", "Utility", "Prime", "Choice"],
    answer: "Prime",
  },
  {
    question: "What is the highest grade for poultry?",
    choice: ["A", "B", "C"],
    answer: "A",
  },
  {
    question: "What is the highest grade for pork?",
    choice: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    question: "What grade is not assigned to game meat?",
    choice: ["A", "Prime", "Utility", "Not Graded"],
    answer: "Not Graded",
  },
  {
    question: "What is the second highest grade for beef?",
    choice: ["Choice", "Select", "Prime", "Standard"],
    answer: "Choice",
  },
  {
    question: "What is the second highest grade for lamb?",
    choice: ["Good", "Utility", "Prime", "Choice"],
    answer: "Choice",
  },
  {
    question: "What is the second highest grade for veal?",
    choice: ["Good", "Utility", "Prime", "Choice"],
    answer: "Choice",
  },
  {
    question: "What is the second highest grade for poultry?",
    choice: ["A", "B", "C"],
    answer: "B",
  },
  {
    question: "What is the second highest grade for pork?",
    choice: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "What is the third highest grade for beef?",
    choice: ["Choice", "Select", "Prime", "Standard"],
    answer: "Select",
  },
  {
    question: "What is the third highest grade for lamb?",
    choice: ["Good", "Utility", "Prime", "Choice"],
    answer: "Good",
  },
  {
    question: "What is the third highest grade for veal?",
    choice: ["Good", "Utility", "Prime", "Choice"],
    answer: "Good",
  },
  {
    question: "What is the third highest grade for poultry?",
    choice: ["A", "B", "C"],
    answer: "C",
  },
  {
    question: "What is the third highest grade for pork?",
    choice: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "What is the fourth highest grade for beef?",
    choice: ["Choice", "Select", "Prime", "Standard"],
    answer: "Standard",
  },
  {
    question: "What is the fourth highest grade for veal?",
    choice: ["Good", "Utility", "Prime", "Standard"],
    answer: "Standard",
  },
  {
    question: "What is the fourth highest grade for pork?",
    choice: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    question: "What is the fifth highest grade for beef?",
    choice: ["Choice", "Select", "Standard", "Commercial"],
    answer: "Commercial",
  },
  {
    question: "What is the fifth highest grade for veal?",
    choice: ["Good", "Utility", "Prime", "Standard"],
    answer: "Utility",
  },
  {
    question: "What is the sixth highest grade for beef?",
    choice: ["Utility", "Choice", "Cutter", "Canner"],
    answer: "Utility",
  },
  {
    question: "What is the seventh highest grade for beef?",
    choice: ["Utility", "Choice", "Cutter", "Canner"],
    answer: "Cutter",
  },
  {
    question: "What is the eighth highest grade for beef?",
    choice: ["Utility", "Choice", "Cutter", "Canner"],
    answer: "Canner",
  },
  {
    question: "What is the lowest grade for lamb?",
    choice: ["Cull", "Utility", "Good", "Choice"],
    answer: "Cull",
  },
];
