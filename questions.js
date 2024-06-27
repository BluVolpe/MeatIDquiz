const questions = [
  // Primal Cuts with image
  {
    question: "Which beef primal cut is section number 1?",
    image: "Images/Beef Cuts.png",
    choice: ["Chuck", "Brisket", "Rib", "Plate"],
    answer: "Chuck",
  },
  {
    question: "Which beef primal cut is section number 2?",
    image: "Images/Beef Cuts.png",
    choice: ["Chuck", "Brisket", "Rib", "Plate"],
    answer: "Brisket",
  },
  {
    question: "Which beef primal cut is section number 3?",
    image: "Images/Beef Cuts.png",
    choice: ["Rib", "Loin", "Flank", "Shank"],
    answer: "Rib",
  },
  {
    question: "Which beef primal cut is section number 4?",
    image: "Images/Beef Cuts.png",
    choice: ["Plate", "Sirloin", "Round", "Flank"],
    answer: "Plate",
  },
  {
    question: "Which beef primal cut is section number 5?",
    image: "Images/Beef Cuts.png",
    choice: ["Loin", "Rib", "Chuck", "Round"],
    answer: "Loin",
  },
  {
    question: "Which beef primal cut is section number 6?",
    image: "Images/Beef Cuts.png",
    choice: ["Flank", "Plate", "Rib", "Shank"],
    answer: "Flank",
  },
  {
    question: "Which beef primal cut is section number 7?",
    image: "Images/Beef Cuts.png",
    choice: ["Sirloin", "Loin", "Round", "Chuck"],
    answer: "Sirloin",
  },
  {
    question: "Which beef primal cut is section number 8?",
    image: "Images/Beef Cuts.png",
    choice: ["Round", "Chuck", "Shank", "Brisket"],
    answer: "Round",
  },
  {
    question: "Which beef primal cut is section number 9?",
    image: "Images/Beef Cuts.png",
    choice: ["Shank", "Brisket", "Flank", "Rib"],
    answer: "Shank",
  },
  {
    question: "Which part of the pig is labeled as 1 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Head", "Cheek", "Clear Plate", "Boston Shoulder"],
    answer: "Head",
  },
  {
    question: "Which part of the pig is labeled as 2 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Cheek", "Picnic", "Ribs", "Loin"],
    answer: "Cheek",
  },
  {
    question: "Which part of the pig is labeled as 3 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Clear Plate", "Back Fat", "Belly", "Leg Ham"],
    answer: "Clear Plate",
  },
  {
    question: "Which part of the pig is labeled as 4 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Boston Shoulder/Butt", "Hock", "Loin", "Ribs"],
    answer: "Boston Shoulder/Butt",
  },
  {
    question: "Which part of the pig is labeled as 5 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Picnic", "Head", "Cheek", "Clear Plate"],
    answer: "Picnic",
  },
  {
    question: "Which part of the pig is labeled as 6 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Back Fat", "Boston Shoulder/Butt", "Hock", "Leg Ham"],
    answer: "Back Fat",
  },
  {
    question: "Which part of the pig is labeled as 7 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Loin", "Clear Plate", "Cheek", "Ribs"],
    answer: "Loin",
  },
  {
    question: "Which part of the pig is labeled as 8 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Ribs", "Head", "Back Fat", "Belly"],
    answer: "Ribs",
  },
  {
    question: "Which part of the pig is labeled as 9 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Belly/Bacon", "Clear Plate", "Hock", "Leg Ham"],
    answer: "Belly/Bacon",
  },
  {
    question: "Which part of the pig is labeled as 10 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Leg Ham", "Cheek", "Loin", "Picnic"],
    answer: "Leg Ham",
  },
  {
    question: "Which part of the pig is labeled as 11 in the image?",
    image: "Images/Pig Cuts.png",
    choice: ["Hock", "Clear Plate", "Back Fat", "Boston Shoulder/Butt"],
    answer: "Hock",
  },

  // Section 1-2
  // Composition of Lean Muscle Tissue
  {
    question: "What percentage of lean muscle tissue is composed of water?",
    choice: ["70%", "72%", "75%", "80%"],
    answer: "72%",
  },
  {
    question: "What percentage of lean muscle tissue is composed of protein?",
    choice: ["18%", "20%", "22%", "25%"],
    answer: "20%",
  },
  {
    question: "What percentage of lean muscle tissue is composed of fat?",
    choice: ["5%", "6%", "7%", "8%"],
    answer: "7%",
  },
  {
    question: "What percentage of lean muscle tissue is composed of minerals?",
    choice: ["0.5%", "1%", "1.5%", "2%"],
    answer: "1%",
  },

  // What is Lean Muscle?
  {
    question: "What are strands of protein fibers grouped together called?",
    choice: ["Collagen", "Myofibrillar", "Perimysium", "Lean Muscle"],
    answer: "Lean Muscle",
  },
  {
    question: "What are cable-like muscle structures known as?",
    choice: ["Collagen", "Myofibrillar", "Perimysium", "Lean Muscle"],
    answer: "Myofibrillar",
  },
  {
    question: "What is the fiber wrapping around muscle bundles called?",
    choice: ["Collagen", "Myofibrillar", "Perimysium", "Lean Muscle"],
    answer: "Perimysium",
  },

  // Why are Meats Cooked?
  {
    question: "Which process enhances the flavor of meat during cooking?",
    choice: [
      "Protein Coagulation",
      "Collagen Breakdown",
      "Maillard Reaction",
      "Pathogen Control",
    ],
    answer: "Maillard Reaction",
  },
  {
    question: "Which process tenderizes meat during cooking?",
    choice: [
      "Maillard Reaction",
      "Protein Coagulation",
      "Collagen Breakdown",
      "Pathogen Control",
    ],
    answer: "Protein Coagulation",
  },
  {
    question: "What is the purpose of cooking meat in terms of safety?",
    choice: [
      "Enhances Flavor",
      "Tenderizes",
      "Controls Pathogens",
      "All choices mentioned",
    ],
    answer: "Controls Pathogens",
  },

  // Meat Cooking
  {
    question:
      "At what temperature does the protein myosin begin to coagulate in meat?",
    choice: ["100°F", "120°F", "140°F", "150°F"],
    answer: "120°F",
  },
  {
    question:
      "At what temperature do the remaining proteins within muscle cells coagulate, turning the meat firm and opaque?",
    choice: ["120°F", "140°F", "160°F", "180°F"],
    answer: "140°F",
  },
  {
    question:
      "At what temperature do the proteins in the meat's sheath (mainly collagen) rapidly coagulate and contract?",
    choice: ["130°F", "140°F", "150°F", "160°F"],
    answer: "150°F",
  },
  {
    question: "What happens to meat when it is cooked under 120°F?",
    choice: [
      "It becomes dry",
      "It remains raw",
      "It becomes tender",
      "It becomes opaque",
    ],
    answer: "It remains raw",
  },
  // Section 3
  {
    question:
      "What protein is responsible for the red color in muscle cells due to its iron content and oxygen attachment?",
    choice: ["Collagen", "Elastin", "Myoglobin", "Actin"],
    answer: "Myoglobin",
  },
  {
    question:
      "What color does lean muscle turn when it is fresh and has just been cut?",
    choice: ["Grayish", "Dark", "Bright Red", "Yellow"],
    answer: "Bright Red",
  },
  {
    question: "What does the grayish color in lean muscle indicate?",
    choice: ["Freshness", "Spoilage", "Freezer burn", "Initial bloom"],
    answer: "Initial bloom",
  },
  {
    question: "What does the dark color in lean muscle indicate?",
    choice: ["Freshness", "Spoilage", "Tenderness", "Marbling"],
    answer: "Spoilage",
  },
  {
    question: "What are the three main types of connective tissues in meat?",
    choice: [
      "Myoglobin, Actin, Myosin",
      "Collagen, Bone Connectives, Elastin",
      "Keratin, Hemoglobin, Myoglobin",
      "Fibrin, Actin, Elastin",
    ],
    answer: "Collagen, Bone Connectives, Elastin",
  },
  {
    question:
      "What connective tissue is described as silver, clearish, or white and forms natural seams in meat?",
    choice: ["Elastin", "Myoglobin", "Collagen", "Bone Connectives"],
    answer: "Collagen",
  },
  {
    question: "What happens to collagen during moist cooking?",
    choice: [
      "It toughens",
      "It breaks down and becomes tender",
      "It discolors",
      "It evaporates",
    ],
    answer: "It breaks down and becomes tender",
  },
  {
    question: "What is the characteristic color of elastin?",
    choice: ["Yellow", "Pink", "White", "Brown"],
    answer: "Yellow",
  },
  {
    question: "Where is elastin primarily located in the animal's body?",
    choice: [
      "Along the back and into the neck (Backstrap)",
      "In the muscles",
      "In the skin",
      "In the bones",
    ],
    answer: "Along the back and into the neck (Backstrap)",
  },
  {
    question: "What type of fat is found under the skin?",
    choice: ["Intermuscular", "Intramuscular", "Lumbar", "Subcutaneous"],
    answer: "Subcutaneous",
  },
  {
    question: "What type of fat is referred to as marbling?",
    choice: ["Subcutaneous", "Intermuscular", "Intramuscular", "Lumbar"],
    answer: "Intramuscular",
  },
  {
    question: "What is the purpose of barding in meat preparation?",
    choice: [
      "Placing fat inside lean muscle tissue",
      "Wrapping with fat",
      "Rendering fat",
      "Removing fat",
    ],
    answer: "Wrapping with fat",
  },
  {
    question: "What are offals or variety meats?",
    choice: [
      "External muscle fibers",
      "Internal edible organs",
      "Connective tissues",
      "Marbled fat",
    ],
    answer: "Internal edible organs",
  },
  {
    question:
      "Which of the following is NOT considered an offal or variety meat?",
    choice: ["Heart", "Liver", "Kidneys", "Tenderloin"],
    answer: "Tenderloin",
  },
  {
    question: "Which offal is commonly used for sweetbreads?",
    choice: ["Heart", "Liver", "Thymus or pancreas", "Kidneys"],
    answer: "Thymus or pancreas",
  },

  // Block 3
  {
    question: "What are the main sections of the beef loin?",
    choice: [
      "Sirloin, Striploin/Shell, Tenderloin, Flank, Shortloin",
      "Chuck, Rib, Brisket, Plate, Flank",
      "Round, Shank, Chuck, Rib, Loin",
      "Brisket, Plate, Shank, Flank, Sirloin",
    ],
    answer: "Sirloin, Striploin/Shell, Tenderloin, Flank, Shortloin",
  },
  {
    question:
      "Which bones are found in the beef loin, and what are their specific parts?",
    choice: [
      "Tail, Feather, Finger, Hip Bone, Chine, 13th Rib",
      "Tail, Wing, Finger, Hip Bone, Spine, 12th Rib",
      "Tail, Feather, Hand, Hip Bone, Back, 11th Rib",
      "Tail, Wing, Foot, Hip Bone, Neck, 10th Rib",
    ],
    answer: "Tail, Feather, Finger, Hip Bone, Chine, 13th Rib",
  },
  {
    question: "Identify the cuts of beef loin and their characteristics.",
    choice: [
      "Top sirloin, Striploin bone-in and boneless, Flank steak, Tri-tip, Tenderloin cuts, Primal loin, Subprimal and Portion cuts",
      "Top sirloin, Striploin boneless, Flank steak, Brisket, Chuck, Tenderloin cuts, Primal rib, Subprimal and Portion cuts",
      "Top sirloin, Striploin bone-in, Flank steak, Round, Shank, Tenderloin cuts, Primal rib, Subprimal and Portion cuts",
      "Top sirloin, Striploin shell, Flank steak, Ribeye, Tenderloin cuts, Primal chuck, Subprimal and Portion cuts",
    ],
    answer:
      "Top sirloin, Striploin bone-in and boneless, Flank steak, Tri-tip, Tenderloin cuts, Primal loin, Subprimal and Portion cuts",
  },
  {
    question: "What is the ideal temperature range for dry aging beef?",
    choice: ["35-38°F", "30-34°F", "32-35°F", "36-39°F"],
    answer: "35-38°F",
  },
  {
    question: "What is the ideal humidity range for dry aging beef?",
    choice: ["65-90%", "55-75%", "60-85%", "70-95%"],
    answer: "65-90%",
  },
  {
    question: "How long is the minimum time required for dry aging beef?",
    choice: ["21 days", "14 days", "18 days", "20 days"],
    answer: "21 days",
  },
  {
    question: "How long can dry aging beef be extended to?",
    choice: [
      "Up to 60 days",
      "Up to 45 days",
      "Up to 50 days",
      "Up to 55 days",
    ],
    answer: "Up to 60 days",
  },
  {
    question:
      "What tool is commonly used to circulate air during the dry aging process?",
    choice: ["Large fans", "Small fans", "Medium fans", "Dehumidifiers"],
    answer: "Large fans",
  },
  {
    question:
      "How often should the meat be turned during the dry aging process?",
    choice: ["Every few days", "Every day", "Once a week", "Every other day"],
    answer: "Every few days",
  },

  // Section 5 Pork

  {
    question: "What are the four classes of pork listed in the image?",
    choice: [
      "Suckling Pig, Roasting Pigs, Market Style Hogs, Sow/Boar",
      "Piglets, Adult Pigs, Market Pigs, Breeding Pigs",
      "Young Pigs, Old Pigs, Meat Pigs, Breeding Pigs",
      "Suckling Pig, Roasting Pigs, Bacon Hogs, Breeding Hogs",
    ],
    answer: "Suckling Pig, Roasting Pigs, Market Style Hogs, Sow/Boar",
  },
  {
    question: "What is the weight range for roasting pigs?",
    choice: ["18-35 lbs", "40-150 lbs", "170-200 lbs", "200-300 lbs"],
    answer: "40-150 lbs",
  },
  {
    question: "Which class of pork is used for breeding?",
    choice: ["Suckling Pig", "Roasting Pigs", "Market Style Hogs", "Sow/Boar"],
    answer: "Sow/Boar",
  },
  {
    question: "Which class of pork is cut for pork primals?",
    choice: ["Suckling Pig", "Roasting Pigs", "Market Style Hogs", "Sow/Boar"],
    answer: "Market Style Hogs",
  },
  {
    question: "What is the ideal color for high-quality pork?",
    choice: ["Bright Pink", "Dark Red", "Grayish", "Light Brown"],
    answer: "Bright Pink",
  },
  {
    question: "What does P.S.E. stand for in terms of pork quality?",
    choice: [
      "Pale, Soft, Exudative",
      "Pink, Strong, Elastic",
      "Perfect, Succulent, Edible",
      "Pungent, Soft, Evasive",
    ],
    answer: "Pale, Soft, Exudative",
  },
  {
    question: "What factors cause P.S.E. in pork?",
    choice: [
      "Lack of exercise and overfeeding",
      "Stress and genetics",
      "Improper cooking methods",
      "Poor hygiene and infections",
    ],
    answer: "Stress and genetics",
  },
  {
    question: "What texture is desired for high-quality pork?",
    choice: [
      "Firm and no P.S.E.",
      "Soft and mushy",
      "Tough and chewy",
      "Grainy and dry",
    ],
    answer: "Firm and no P.S.E.",
  },
  {
    question:
      "What is one characteristic that disqualifies pork from being high-quality?",
    choice: ["Marbling", "Firm texture", "P.S.E.", "Bright pink color"],
    answer: "P.S.E.",
  },
  {
    question: "What are the USDA quality grades for pork?",
    choice: [
      "Prime, Choice, Select, Standard, Utility",
      "1, 2, 3, 4, Utility",
      "A, B, C, D, E",
      "Excellent, Good, Fair, Poor, Utility",
    ],
    answer: "1, 2, 3, 4, Utility",
  },
  {
    question: "What do USDA quality grades for pork depend on?",
    choice: [
      "Color and taste",
      "Fat and muscle scores, length of loin",
      "Weight and age",
      "Breed and genetics",
    ],
    answer: "Fat and muscle scores, length of loin",
  },
  {
    question: "How does stress affect the quality of pork?",
    choice: [
      "It enhances flavor and texture",
      "It causes P.S.E., resulting in pale, soft, and exudative meat",
      "It increases marbling",
      "It has no effect on pork quality",
    ],
    answer: "It causes P.S.E., resulting in pale, soft, and exudative meat",
  },
  {
    question: "What is marbling in pork?",
    choice: [
      "The exterior fat layer",
      "The fat within lean muscle tissues",
      "The pinkish color of the meat",
      "The firmness of the meat",
    ],
    answer: "The fat within lean muscle tissues",
  },
  {
    question:
      "What is the origin of the Berkshire pig breed, also known as Kurobuta in Japan?",
    choice: ["France", "England", "Spain", "Italy"],
    answer: "England",
  },
  {
    question:
      "Which pig breed is known for being fed a diet including barley, peas, oats, wheat, and fresh vegetables?",
    choice: ["Tamworth", "Mulefoot", "Berkshire", "Iberico"],
    answer: "Berkshire",
  },
  {
    question:
      "The Tamworth pig breed is known for its origin in which country?",
    choice: ["Ireland", "Wales", "England", "Scotland"],
    answer: "England",
  },
  {
    question:
      "Which pig breed is native to the Ossabaw Island in the United States?",
    choice: ["Berkshire", "Tamworth", "Ossabaw", "Mangalitsa"],
    answer: "Ossabaw",
  },
  {
    question:
      "The Mangalitsa pig, known for its woolly coat, originates from which country?",
    choice: ["Hungary", "Austria", "Germany", "Switzerland"],
    answer: "Hungary",
  },
  {
    question:
      "Which breed is recognized by its distinct solid black color and was first recorded in the United States in 1908?",
    choice: ["Mangalitsa", "Mulefoot", "Iberico", "Berkshire"],
    answer: "Mulefoot",
  },
  {
    question:
      "The Iberico pig, known for producing high-quality ham, originates from which region?",
    choice: ["France", "Italy", "Portugal", "Spain"],
    answer: "Spain",
  },
  {
    question:
      "What is the primary purpose of pumping pork with a solution of water, sodium phosphate, and flavorings?",
    choice: [
      "To increase moisture, tenderness, and weight",
      "To reduce fat content",
      "To enhance the color of the meat",
      "To improve the shelf life",
    ],
    answer: "To increase moisture, tenderness, and weight",
  },
  {
    question: "What is a potential downside of enhancing pork with a solution?",
    choice: [
      "It can decrease flavor or add saltiness",
      "It makes the meat harder to cook",
      "It increases the cooking time",
      "It reduces the nutritional value",
    ],
    answer: "It can decrease flavor or add saltiness",
  },
  {
    question: "What does the term 'enhanced' refer to in pork processing?",
    choice: [
      "Addition of an injection solution into fresh meat",
      "Natural aging process",
      "Reduction of fat content",
      "Organic certification",
    ],
    answer: "Addition of an injection solution into fresh meat",
  },
  {
    question:
      "What is the primary purpose of pumping pork with a solution of water, sodium phosphate, and flavorings?",
    choice: [
      "To increase moisture, tenderness, and weight",
      "To reduce fat content",
      "To enhance the color of the meat",
      "To improve the shelf life",
    ],
    answer: "To increase moisture, tenderness, and weight",
  },
  {
    question: "What is a potential downside of enhancing pork with a solution?",
    choice: [
      "It can decrease flavor or add saltiness",
      "It makes the meat harder to cook",
      "It increases the cooking time",
      "It reduces the nutritional value",
    ],
    answer: "It can decrease flavor or add saltiness",
  },
  {
    question: "What does the term 'enhanced' refer to in pork processing?",
    choice: [
      "Addition of an injection solution into fresh meat",
      "Natural aging process",
      "Reduction of fat content",
      "Organic certification",
    ],
    answer: "Addition of an injection solution into fresh meat",
  },
  {
    question: "Which part of the pork carcass is labeled as 'Boston Butt'?",
    choice: ["Upper shoulder", "Lower leg", "Belly", "Ham"],
    answer: "Upper shoulder",
  },
  {
    question: "What part of the pork carcass is used for making bacon?",
    choice: ["Belly", "Ham", "Jowl", "Full loin"],
    answer: "Belly",
  },
  {
    question:
      "Which part of the pork carcass is typically used for making pulled pork?",
    choice: ["Boston Butt", "Ham", "Full loin", "Feet"],
    answer: "Boston Butt",
  },
  {
    question: "What is a 'B.R.T. Ham' in pork processing?",
    choice: [
      "Boned, Rolled, and Tied Ham",
      "Brined, Roasted, and Tender Ham",
      "Boiled, Roasted, and Tied Ham",
      "Breaded, Roasted, and Tender Ham",
    ],
    answer: "Boned, Rolled, and Tied Ham",
  },
  {
    question: "Which cut is commonly used for making 'osso buco' in pork?",
    choice: ["Hock", "Ham", "Full loin", "Belly"],
    answer: "Hock",
  },
  {
    question: "What is the typical use of a fresh ham?",
    choice: [
      "Roasting whole",
      "Making bacon",
      "Slicing into pork chops",
      "Making sausages",
    ],
    answer: "Roasting whole",
  },
  {
    question: "Which of the following is a dry-cured ham?",
    choice: [
      "Parma Prosciutto",
      "Smoked Smithfield Ham",
      "Sliced deli ham",
      "Baked ham",
    ],
    answer: "Parma Prosciutto",
  },
  {
    question: "What is a common characteristic of wet-cured ham?",
    choice: [
      "Cured quickly in a few days",
      "Cured slowly over many months",
      "Not cooked during the curing process",
      "Contains no added flavorings",
    ],
    answer: "Cured quickly in a few days",
  },
  {
    question:
      "Which type of ham is typically used as a flavor agent in soups and beans?",
    choice: [
      "Hock cured, smoked",
      "Dry cured ham",
      "Wet cured ham",
      "Boneless ham",
    ],
    answer: "Hock cured, smoked",
  },
  {
    question: "Which cut is NOT part of the pork loin?",
    choice: [
      "Pork shoulder",
      "Pork tenderloin",
      "Baby back ribs",
      "Pork chops",
    ],
    answer: "Pork shoulder",
  },
  {
    question: "What is a common kitchen use for pork loin?",
    choice: [
      "Roast with bones",
      "Making sausages",
      "Slicing for bacon",
      "Rendering lard",
    ],
    answer: "Roast with bones",
  },
  {
    question: "What is a characteristic of the center cut of pork loin?",
    choice: [
      "Includes 8-11 ribs",
      "Has no bones",
      "Is only used for ground pork",
      "Contains high fat content",
    ],
    answer: "Includes 8-11 ribs",
  },
  {
    question: "What is a typical use for Boston Butt in cooking?",
    choice: ["Pulled pork", "Making bacon", "Rendering lard", "Roasting whole"],
    answer: "Pulled pork",
  },
  {
    question:
      "Which of the following is a processed product made from Boston Butt?",
    choice: ["Cappacola", "Pork tenderloin", "Baby back ribs", "Ham steak"],
    answer: "Cappacola",
  },
  {
    question: "Boston Butt is commonly used for which type of dish?",
    choice: [
      "Stew or braise",
      "Grilled pork chops",
      "Pork belly slices",
      "Sausage patties",
    ],
    answer: "Stew or braise",
  },
  {
    question:
      "Which cut of pork is suitable for both roasting and making pulled pork?",
    choice: ["Picnic", "Belly", "Offal/Variety Meats", "Loin"],
    answer: "Picnic",
  },
  {
    question: "What is pancetta made from?",
    choice: ["Picnic", "Belly", "Offal/Variety Meats", "Loin"],
    answer: "Belly",
  },
  {
    question:
      "Which of the following is not considered an offal or variety meat?",
    choice: ["Jowl", "Hock", "Skin", "Picnic"],
    answer: "Picnic",
  },
  {
    question: "Which of these is commonly used for making bacon?",
    choice: ["Picnic", "Belly", "Offal/Variety Meats", "Ham"],
    answer: "Belly",
  },
  {
    question: "Which cut is often used for smoked hams and sausages?",
    choice: ["Picnic", "Belly", "Offal/Variety Meats", "Ribs"],
    answer: "Picnic",
  },
  {
    question: "What type of meat product is 'Cracklin’' typically made from?",
    choice: ["Skin", "Jowl", "Liver", "Caul fat"],
    answer: "Skin",
  },
  {
    question: "Which offal is used to make headcheese?",
    choice: ["Whole Head", "Intestines", "Liver", "Neck bones"],
    answer: "Whole Head",
  },

  //Section 7 Sausage

  {
    question:
      "Which type of sausage is made from fresh uncured meat and must be kept refrigerated?",
    choice: [
      "Fresh Sausage",
      "Uncooked Smoked Sausages",
      "Cooked Sausages",
      "Cooked, Smoked Sausages, Cured",
    ],
    answer: "Fresh Sausage",
  },
  {
    question:
      "What is an example of an uncooked smoked sausage that needs to be cooked before eating?",
    choice: ["Liverwurst", "Chorizo", "Pepperoni", "Frankfurter"],
    answer: "Chorizo",
  },
  {
    question:
      "Which type of sausage is fully cooked, often emulsified, and smoked?",
    choice: [
      "Fresh Sausage",
      "Uncooked Smoked Sausages",
      "Cooked Sausages",
      "Cooked, Smoked Sausages, Cured",
    ],
    answer: "Cooked, Smoked Sausages, Cured",
  },
  {
    question: "What is a characteristic of dry and semi-dry sausages?",
    choice: [
      "They are made from fresh uncured meat.",
      "They must be poached before eating.",
      "They are produced by fermentation.",
      "They are always fully cooked.",
    ],
    answer: "They are produced by fermentation.",
  },
  {
    question:
      "Which sausage product includes items like pâtés, terrines, and head cheese?",
    choice: [
      "Fresh Sausage",
      "Uncooked Smoked Sausages",
      "Cooked Meat Specialties",
      "Dry and Semi-dry Sausages",
    ],
    answer: "Cooked Meat Specialties",
  },
  {
    question:
      "What is the fat content ratio for Italian or Breakfast Fresh Sausage?",
    choice: [
      "50% Lean, 50% Fat",
      "70% Lean, 30% Fat",
      "30% Lean, 70% Fat",
      "60% Lean, 40% Fat",
    ],
    answer: "70% Lean, 30% Fat",
  },
  {
    question:
      "Which of the following is NOT typically included in the seasoning and cure for fresh sausage?",
    choice: ["Salt", "Spices", "Sweetener", "Vinegar"],
    answer: "Vinegar",
  },
  {
    question:
      "What is the primary ingredient in fresh sausage aside from pork trim?",
    choice: ["Cold Water", "Red Wine", "Apple Cider", "Milk"],
    answer: "Cold Water",
  },
  {
    question:
      "Which type of pork trim is used at a ratio of 30% in fresh sausage?",
    choice: [
      "Lean Usable Pork Trim",
      "Fat Usable Pork Trim",
      "Pork Belly",
      "Pork Shoulder",
    ],
    answer: "Fat Usable Pork Trim",
  },
  {
    question:
      "In fresh sausage production, what purpose does adding cold water serve?",
    choice: [
      "To add flavor",
      "To help bind the meat and fat",
      "To preserve the sausage",
      "To tenderize the meat",
    ],
    answer: "To help bind the meat and fat",
  },
  {
    question:
      "Which of the following casings are typically used for small link sausages such as breakfast sausages and hot dogs?",
    choice: ["Hog Casings", "Sheep Casings", "Beef Rounds", "Plastic Casings"],
    answer: "Sheep Casings",
  },
  {
    question:
      "What is the main reason for rinsing and rehydrating natural casings before use?",
    choice: [
      "To remove salt and make them pliable",
      "To add flavor",
      "To remove any unwanted odors",
      "To ensure they do not tear",
    ],
    answer: "To remove salt and make them pliable",
  },
  {
    question:
      "What is a common ingredient in the seasoning for both Italian and breakfast sausage recipes?",
    choice: ["Salt", "Fennel seed", "Dextrose", "Paprika"],
    answer: "Salt",
  },
  {
    question:
      "What is the purpose of cooking a tester patty before stuffing or packaging sausage?",
    choice: [
      "To ensure proper seasoning and texture",
      "To reduce the fat content",
      "To add a smoky flavor",
      "To make it easier to handle",
    ],
    answer: "To ensure proper seasoning and texture",
  },
  {
    question:
      "What is the fat to lean meat ratio typically used for fresh Italian sausage?",
    choice: [
      "30% fat, 70% lean",
      "50% fat, 50% lean",
      "20% fat, 80% lean",
      "40% fat, 60% lean",
    ],
    answer: "30% fat, 70% lean",
  },

  {
    question:
      "What is the primary function of adding ice or cold water to sausage mixes?",
    choice: [
      "To keep the mixture cold and improve texture",
      "To add moisture and flavor",
      "To help the sausage cure faster",
      "To make the mixture easier to stuff into casings",
    ],
    answer: "To keep the mixture cold and improve texture",
  },
  {
    question: "Which type of casing is measured in hanks (100 yards)?",
    choice: ["Hog Casing", "Sheep Casing", "Plastic Casing", "Collagen Casing"],
    answer: "Hog Casing",
  },
  {
    question:
      "What is a common characteristic of fresh sausage according to USDA classifications?",
    choice: [
      "Made from uncured meat and needs refrigeration and thorough cooking before serving",
      "Pre-cooked and ready to eat",
      "Smoked and air-dried",
      "Made from cured meat, ready to eat without further cooking",
    ],
    answer:
      "Made from uncured meat and needs refrigeration and thorough cooking before serving",
  },
  {
    question:
      "Which type of sausage is typically fermented, resulting in a tangy flavor and lower pH?",
    choice: [
      "Dry and Semi-dry Sausages",
      "Cooked Sausages",
      "Fresh Sausages",
      "Uncooked Smoked Sausages",
    ],
    answer: "Dry and Semi-dry Sausages",
  },

  // Section 8 Poultry

  {
    question: "What is the weight range for Cornish Game Hens?",
    choice: ["1-2 lbs", "2.5-4.5 lbs", "6-8 lbs", "5-7 lbs"],
    answer: "1-2 lbs",
  },
  {
    question:
      "Which class of chicken is slightly larger than Cornish Game Hens and used similarly for roasting?",
    choice: ["Petite Broiler/Poussin", "Broiler/Fryer", "Roaster", "Capon"],
    answer: "Petite Broiler/Poussin",
  },
  {
    question: "What is the weight range for Broiler/Fryer chickens?",
    choice: ["1-2 lbs", "2.5-4.5 lbs", "6-8 lbs", "5-7 lbs"],
    answer: "2.5-4.5 lbs",
  },
  {
    question:
      "Which class of chicken is best suited for slow cooking methods like stewing?",
    choice: ["Roaster", "Capon", "Fowl/Stewing Hen", "Broiler/Fryer"],
    answer: "Fowl/Stewing Hen",
  },
  {
    question:
      "What is the USDA Quality Grade for poultry with the best appearance and no defects?",
    choice: ["A", "B", "C", "Utility"],
    answer: "A",
  },
  {
    question: "What cooking method is suitable for Capon?",
    choice: [
      "Roast whole, carve",
      "Stew, soup, moist cook dishes",
      "Roast whole or split",
      "Grill, broil, sauté, pan fry",
    ],
    answer: "Roast whole, carve",
  },
  {
    question: "What are the parts of a whole chicken's leg quarter?",
    choice: [
      "Supremes/airline, bone in breast, cutlets, wings",
      "Thigh, drumstick",
      "Breast, legs, wings",
      "Liver, gizzard, neck, heart",
    ],
    answer: "Thigh, drumstick",
  },
  {
    question: "Which type of duck is typically 3-6 lbs and 6 weeks old?",
    choice: ["Duckling", "Roasting Duck", "Pekin", "Moulard"],
    answer: "Duckling",
  },
  {
    question: "What is the weight range for a Tom turkey?",
    choice: ["8-16 lbs", "16-30 lbs", "8-14 lbs", "5-7 lbs"],
    answer: "16-30 lbs",
  },
  {
    question: "Which poultry/game type includes Pheasants and Quail?",
    choice: [
      "Squab/Pigeon",
      "Partridge/Woodcock",
      "Guinea Hen",
      "Poultry/Game",
    ],
    answer: "Poultry/Game",
  },
  {
    question: "What is the weight range for Petite Broiler/Poussin?",
    choice: ["1-2 lbs", "2.5-4.5 lbs", "6-8 lbs", "5-7 lbs"],
    answer: "1-2 lbs",
  },
  {
    question:
      "Which class of chicken is known for their tender meat and ideal for individual servings?",
    choice: [
      "Cornish Game Hens",
      "Broiler/Fryer",
      "Roaster",
      "Fowl/Stewing Hen",
    ],
    answer: "Cornish Game Hens",
  },
  {
    question:
      "Which class of chicken is raised specifically for meat production?",
    choice: ["Petite Broiler/Poussin", "Broiler/Fryer", "Roaster", "Capon"],
    answer: "Broiler/Fryer",
  },
  {
    question: "What is the weight range for Roaster chickens?",
    choice: ["1-2 lbs", "2.5-4.5 lbs", "6-8 lbs", "5-7 lbs"],
    answer: "6-8 lbs",
  },
  {
    question:
      "Which class of chicken is castrated male chickens, known for their tender meat?",
    choice: ["Cornish Game Hens", "Broiler/Fryer", "Capon", "Fowl/Stewing Hen"],
    answer: "Capon",
  },
  {
    question:
      "Which cooking method is suitable for Broiler/Fryer chicken breasts?",
    choice: [
      "Grill, broil, sauté, pan fry",
      "Roast whole, carve",
      "Stew, soup, moist cook dishes",
      "Roast whole or split",
    ],
    answer: "Grill, broil, sauté, pan fry",
  },
  {
    question: "What cooking method is used for Fowl/Stewing Hen?",
    choice: [
      "Roast whole, carve",
      "Stew, soup, moist cook dishes",
      "Roast whole or split",
      "Grill, broil, sauté, pan fry",
    ],
    answer: "Stew, soup, moist cook dishes",
  },
  {
    question:
      "What is the USDA Quality Grade for poultry with minor defects such as slight deformities?",
    choice: ["A", "B", "C", "Utility"],
    answer: "B",
  },
  {
    question: "What are the criteria for USDA Quality Grading in poultry?",
    choice: [
      "Age, maturity, weight, conformation, fleshing, appearance",
      "Tenderness, juiciness, flavor",
      "Size, color, shape",
      "Breed, feed, living conditions",
    ],
    answer: "Age, maturity, weight, conformation, fleshing, appearance",
  },
  {
    question: "Which breed of duck is known for its breast called Magret?",
    choice: ["Pekin", "Moscovy", "Moulard", "Roasting Duck"],
    answer: "Moulard",
  },
  {
    question: "At what age are Roasting Ducks typically processed?",
    choice: ["6 weeks", "8-10 weeks", "12 weeks", "16 weeks"],
    answer: "8-10 weeks",
  },
  {
    question: "What is the weight range for a Hen turkey?",
    choice: ["8-16 lbs", "16-30 lbs", "6-9 lbs", "4-8 lbs"],
    answer: "8-16 lbs",
  },
  {
    question: "What part of the turkey is processed into cutlets?",
    choice: ["Breast", "Legs", "Drumstick", "Thighs"],
    answer: "Thighs",
  },
  {
    question: "Which poultry/game type includes Guinea Hen and Partridge?",
    choice: ["Squab/Pigeon", "Pheasants", "Quail/Euroquail", "Poultry/Game"],
    answer: "Poultry/Game",
  },
  {
    question: "What are giblets typically included with a whole chicken?",
    choice: [
      "Liver, gizzard, neck, heart",
      "Breast, legs, wings",
      "Thigh, drumstick",
      "Supremes/airline, cutlets",
    ],
    answer: "Liver, gizzard, neck, heart",
  },
  {
    question: "What does WOG stand for in poultry terminology?",
    choice: [
      "Without giblets",
      "With gizzards",
      "Whole organic",
      "Wing off ground",
    ],
    answer: "Without giblets",
  },
  {
    question:
      "Which cooking method is suitable for roasting a Roaster chicken?",
    choice: [
      "Roast whole, carve",
      "Stew, soup, moist cook dishes",
      "Roast whole or split",
      "Grill, broil, sauté, pan fry",
    ],
    answer: "Roast whole, carve",
  },
  {
    question:
      "Which breed of duck is typically 4-8 lbs and processed at 8-10 weeks old?",
    choice: ["Duckling", "Roasting Duck", "Pekin", "Moulard"],
    answer: "Roasting Duck",
  },
  {
    question: "What is the weight range for Goose?",
    choice: ["8-14 lbs", "14-20 lbs", "6-10 lbs", "4-8 lbs"],
    answer: "8-14 lbs",
  },
  {
    question: "What are the typical parts included in a whole turkey?",
    choice: [
      "Breast, legs, drumstick, boneless thighs, cutlets",
      "Breast, wings, thighs, drumstick",
      "Legs, wings, neck, heart",
      "Breast, thighs, gizzard, liver",
    ],
    answer: "Breast, legs, drumstick, boneless thighs, cutlets",
  },

  // Section 11 Lamb & Veal
  {
    question: "What is the weight range for a Hot House/Baby Lamb?",
    choice: ["10 lbs", "20 lbs", "30 lbs", "40 lbs"],
    answer: "20 lbs",
  },
  {
    question: "What is the weight range for a Spring Lamb?",
    choice: ["10-20 lbs", "20-30 lbs", "30-40 lbs", "40-50 lbs"],
    answer: "30-40 lbs",
  },
  {
    question: "What is the weight range for a standard Lamb?",
    choice: ["40-60 lbs", "50-75 lbs", "60-80 lbs", "70-90 lbs"],
    answer: "50-75 lbs",
  },
  {
    question: "What is the weight range for a Yearling lamb?",
    choice: ["50-75 lbs", "60-80 lbs", "60-90 lbs", "70-90 lbs"],
    answer: "60-90 lbs",
  },
  {
    question: "Which class of lamb is not seen often?",
    choice: ["Hot House/Baby Lamb", "Spring Lamb", "Lamb", "Mutton"],
    answer: "Mutton",
  },
  {
    question: "Which class of lamb is known for being older and less common?",
    choice: ["Hot House/Baby Lamb", "Spring Lamb", "Lamb", "Mutton"],
    answer: "Mutton",
  },
  {
    question: "Which country produces large, feedlot-fed lambs?",
    choice: ["U.S.", "New Zealand", "Australia", "Canada"],
    answer: "U.S.",
  },
  {
    question: "Which country produces small, grass-fed lambs?",
    choice: ["U.S.", "New Zealand", "Australia", "Canada"],
    answer: "New Zealand",
  },
  {
    question: "Which country produces both small and large varieties of lamb?",
    choice: ["U.S.", "New Zealand", "Australia", "Canada"],
    answer: "Australia",
  },
  {
    question:
      "Which USDA quality grade represents the highest quality for lamb?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Prime",
  },
  {
    question:
      "Which USDA quality grade represents the second highest quality for lamb?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Choice",
  },
  {
    question: "Which USDA quality grade represents moderate quality for lamb?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Good",
  },
  {
    question:
      "Which USDA quality grade represents the lowest quality for lamb?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Cull",
  },
  {
    question: "Which yield grade represents the leanest lamb meat?",
    choice: ["1", "2", "3", "4", "5"],
    answer: "1",
  },
  {
    question: "Which yield grade represents the fattiest lamb meat?",
    choice: ["1", "2", "3", "4", "5"],
    answer: "5",
  },
  {
    question: "What part of the lamb is included in the foreshank?",
    choice: ["Chuck", "Rack", "Loin", "Leg"],
    answer: "Chuck",
  },
  {
    question: "What part of the lamb is included in the hindsaddle?",
    choice: ["Chuck", "Rack", "Loin", "Leg"],
    answer: "Loin",
  },
  {
    question: "Which cut of lamb comes from the rack?",
    choice: ["Loin Chops", "Rack of Lamb", "Leg of Lamb", "Shoulder Roast"],
    answer: "Rack of Lamb",
  },
  {
    question: "Which part of the lamb is typically used for osso buco?",
    choice: ["Neck", "Foreshank", "Breast", "Hind Shank"],
    answer: "Hind Shank",
  },
  {
    question: "What is a common kitchen use for lamb top round?",
    choice: ["Roast whole", "Grill", "Braise", "Osso buco"],
    answer: "Grill",
  },
  {
    question:
      "What is the term for the primal cut of lamb that includes the bone-in leg?",
    choice: ["Frenched", "Primal", "B.R.T Roast", "Top Round"],
    answer: "Primal",
  },
  {
    question: "Which cut of lamb is typically pre-cut for kababs?",
    choice: ["B.R.T Roast", "Top Round", "Sirloin", "Pre-cut Kababs"],
    answer: "Pre-cut Kababs",
  },
  {
    question:
      "Which USDA quality grade for lamb would likely have the most marbling?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Prime",
  },
  {
    question: "Which yield grade number indicates the fattiest lamb meat?",
    choice: ["1", "2", "3", "4", "5"],
    answer: "5",
  },
  {
    question: "Which yield grade number indicates the leanest lamb meat?",
    choice: ["1", "2", "3", "4", "5"],
    answer: "1",
  },
  {
    question: "Which country produces lamb that is grass-fed and small?",
    choice: ["U.S.", "New Zealand", "Australia", "Canada"],
    answer: "New Zealand",
  },
  {
    question:
      "Which country produces lamb that is both small and large varieties?",
    choice: ["U.S.", "New Zealand", "Australia", "Canada"],
    answer: "Australia",
  },
  {
    question:
      "Which USDA quality grade for lamb would you expect to find slight deformities?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Choice",
  },
  {
    question:
      "Which USDA quality grade for lamb would you expect to find more noticeable defects?",
    choice: ["Prime", "Choice", "Good", "Utility", "Cull"],
    answer: "Good",
  },
  {
    question:
      "What is the term for the primal cut that includes both chuck and rack?",
    choice: ["Whole Carcass", "Foreshaddle", "Hindsaddle", "Loin"],
    answer: "Foreshaddle",
  },
  {
    question:
      "What is a common kitchen use for a trimmed loin (saddle) of lamb?",
    choice: ["Grill", "Braise", "Steam", "Poach"],
    answer: "Grill",
  },
  {
    question: "Which type of lamb chop can be single or double?",
    choice: ["Shoulder Chop", "Loin Chop", "Frenched Rack", "Fore Shank"],
    answer: "Loin Chop",
  },
  {
    question: "What is a characteristic of a boneless loin?",
    choice: ["Split-chined", "Trimmed", "Single chop", "Double chop"],
    answer: "Trimmed",
  },
  {
    question: "What are the kitchen uses for a boneless rack of lamb?",
    choice: ["Grill", "Roast", "Broil", "All choices mentioned"],
    answer: "All choices mentioned",
  },
  {
    question: "Which cut of lamb is also known as the hotel rack?",
    choice: ["Fore Shank", "Loin Chop", "Shoulder Chop", "Rack"],
    answer: "Rack",
  },
  {
    question:
      "Which of the following is NOT a kitchen use for a frenched rack of lamb?",
    choice: ["Broil", "Roast", "Saute", "Braise"],
    answer: "Braise",
  },
  {
    question: "What is the kitchen use for a boneless BRT shoulder of lamb?",
    choice: ["Roast", "Grill", "Braise", "All choices mentioned"],
    answer: "Roast",
  },
  {
    question: "Which lamb cut is ideal for moist braise or osso buco?",
    choice: ["Fore Shank", "Breast", "Denver Ribs", "Shoulder Chop"],
    answer: "Fore Shank",
  },
  {
    question: "What is the main kitchen use for lamb breast or ribs?",
    choice: ["Grill", "Stuff", "Braise", "All choices mentioned"],
    answer: "All choices mentioned",
  },
  {
    question:
      "Which cut of lamb can be used for braise, roast, and grill chops?",
    choice: [
      "Bone in primal",
      "Boneless BRT",
      "Shoulder Chop",
      "All choices mentioned",
    ],
    answer: "All choices mentioned",
  },
  {
    question:
      "What is one of the kitchen uses for a bone-in primal cut of lamb shoulder?",
    choice: ["Grill", "Steam", "Braise", "Sauté"],
    answer: "Braise",
  },
  {
    question: "What is a boneless BRT roast in lamb cooking?",
    choice: [
      "Bone-in roast",
      "Boneless, rolled, and tied roast",
      "French trimmed roast",
      "Stuffed roast",
    ],
    answer: "Boneless, rolled, and tied roast",
  },
  {
    question: "Which cooking method is suitable for lamb loin chops?",
    choice: ["Grill", "Braise", "Steam", "Poach"],
    answer: "Grill",
  },
  {
    question: "What is a common kitchen use for lamb foreshank?",
    choice: ["Grill", "Broil", "Braise", "Sauté"],
    answer: "Braise",
  },
  {
    question: "Which lamb cut is often used for kababs?",
    choice: ["Loin Chops", "Pre-cut Kababs", "Breast", "Fore Shank"],
    answer: "Pre-cut Kababs",
  },
  {
    question: "What is the term for a trimmed and split lamb loin?",
    choice: ["Noisette", "Saddle", "Frenched", "Denver Ribs"],
    answer: "Saddle",
  },
  {
    question: "Which lamb cut is described as having a frenched appearance?",
    choice: ["Rack", "Loin Chop", "Shoulder Chop", "Breast"],
    answer: "Rack",
  },
  {
    question: "What is a boneless loin roast in lamb cooking?",
    choice: ["Bone-in loin", "Boneless loin", "Loin chop", "Shoulder chop"],
    answer: "Boneless loin",
  },
  {
    question:
      "Which lamb cut is typically braised whole or used for osso buco?",
    choice: ["Hind Shank", "Fore Shank", "Rack", "Shoulder Chop"],
    answer: "Hind Shank",
  },
  {
    question: "What is a characteristic kitchen use for a lamb hotel rack?",
    choice: ["Grill", "Roast", "Broil", "All choices mentioned"],
    answer: "All choices mentioned",
  },
  {
    question: "What is the typical weight range for a veal loin?",
    choice: ["10-15 lbs", "15-20 lbs", "20-25 lbs", "25-30 lbs"],
    answer: "15-20 lbs",
  },
  {
    question: "Which cut is typically used for veal chops?",
    choice: ["Loin", "Rack", "Shoulder", "Shank"],
    answer: "Rack",
  },
  {
    question: "Which cooking method is most suitable for veal loin medallions?",
    choice: ["Grill", "Braise", "Saute", "Roast"],
    answer: "Saute",
  },
  {
    question:
      "What is a characteristic of the veal rack when prepared 'frenched'?",
    choice: ["Bone in", "Bone out", "Fat trimmed", "Bone cleaned"],
    answer: "Bone cleaned",
  },
  {
    question: "Which cut from the veal shoulder is suitable for braising?",
    choice: [
      "Primal Shoulder",
      "Shoulder Clod",
      "Chuck Roll",
      "All choices mentioned",
    ],
    answer: "All choices mentioned",
  },
  {
    question: "What is the primary use of the veal hotel rack?",
    choice: ["Grilling", "Roasting", "Stewing", "All choices mentioned"],
    answer: "All choices mentioned",
  },
  {
    question: "What part of the veal is the 'chined' cut taken from?",
    choice: ["Loin", "Rack", "Shoulder", "Leg"],
    answer: "Rack",
  },
  {
    question: "Which veal cut is most often used for osso buco?",
    choice: ["Shank", "Loin", "Rack", "Shoulder"],
    answer: "Shank",
  },
  {
    question: "What is the ideal cooking method for veal shoulder clod?",
    choice: ["Grill", "Slow roast", "Broil", "Pan-sear"],
    answer: "Slow roast",
  },
  {
    question:
      "Which veal cut is known for its high tenderness and often used for medallions?",
    choice: ["Loin", "Rack", "Shoulder", "Leg"],
    answer: "Loin",
  },
  {
    question: "What is one of the cooking methods for Breast of Veal?",
    choice: ["Grill", "Stuffed Roast", "Fry", "Sauté"],
    answer: "Stuffed Roast",
  },
  {
    question: "Which product can be made from Breast of Veal?",
    choice: ["Veal bacon", "Veal sausage", "Veal steak", "Veal ham"],
    answer: "Veal bacon",
  },
  {
    question: "What dish is made from the Foreshank of Veal?",
    choice: [
      "Veal Osso Buco",
      "Veal Bacon",
      "Veal Pastrami",
      "Veal Short Ribs",
    ],
    answer: "Veal Osso Buco",
  },
  {
    question:
      "Which of the following is NOT a product made from Breast of Veal?",
    choice: ["Veal pastrami", "Veal short ribs", "Veal sausage", "Veal bacon"],
    answer: "Veal sausage",
  },
  {
    question:
      "What is the recommended storage method for veal to avoid cross-flavoring?",
    choice: [
      "Freeze immediately",
      "Store near other meats",
      "Avoid cross-flavoring",
      "Store in plastic bags",
    ],
    answer: "Avoid cross-flavoring",
  },
  {
    question: "Should veal be frozen for storage?",
    choice: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "Is veal typically aged?",
    choice: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "When should veal portions be cut for best quality?",
    choice: [
      "A week before use",
      "The same day",
      "A day before use",
      "Two days before use",
    ],
    answer: "The same day",
  },
  {
    question: "Which statement is true about veal storage?",
    choice: [
      "Veal should be aged",
      "Veal should be frozen",
      "Veal should be portion cut same day",
      "Veal can be stored near other meats",
    ],
    answer: "Veal should be portion cut same day",
  },
  {
    question:
      "What type of meat is recommended to avoid cross-flavoring in storage?",
    choice: ["Veal", "Beef", "Chicken", "Pork"],
    answer: "Veal",
  },
  {
    question:
      "What is one of the recommended cooking methods for Breast of Veal?",
    choice: ["Grill", "Stuffed Roast", "Fry", "Sauté"],
    answer: "Stuffed Roast",
  },
  {
    question: "Which product can be made from Breast of Veal?",
    choice: ["Veal bacon", "Veal sausage", "Veal steak", "Veal ham"],
    answer: "Veal bacon",
  },
  {
    question: "What dish is made from the Foreshank of Veal?",
    choice: [
      "Veal Osso Buco",
      "Veal Bacon",
      "Veal Pastrami",
      "Veal Short Ribs",
    ],
    answer: "Veal Osso Buco",
  },
  {
    question:
      "Which of the following is NOT a product made from Breast of Veal?",
    choice: ["Veal pastrami", "Veal short ribs", "Veal sausage", "Veal bacon"],
    answer: "Veal sausage",
  },
  {
    question:
      "What is a key consideration for storing veal to maintain its quality?",
    choice: [
      "Freeze immediately",
      "Avoid cross-flavoring",
      "Store near other meats",
      "Age for several days",
    ],
    answer: "Avoid cross-flavoring",
  },
  {
    question: "Should veal be frozen for optimal storage?",
    choice: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "Is veal typically aged like other meats?",
    choice: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "When should veal portions be cut for the best quality?",
    choice: [
      "A week before use",
      "The same day",
      "A day before use",
      "Two days before use",
    ],
    answer: "The same day",
  },
  {
    question: "Which statement is true about veal storage?",
    choice: [
      "Veal should be aged",
      "Veal should be frozen",
      "Veal should be portion cut the same day",
      "Veal can be stored near other meats",
    ],
    answer: "Veal should be portion cut the same day",
  },
  {
    question: "Why should veal not be stored near other meats?",
    choice: [
      "To avoid cross-flavoring",
      "To prevent spoilage",
      "To keep it fresh",
      "To avoid contamination",
    ],
    answer: "To avoid cross-flavoring",
  },

  // Section 13 Game Meat

  {
    question:
      "Which meat tends to be leaner according to the nutritional comparisons?",
    choice: ["Beef (Choice)", "Pork", "Chicken (Skinless)", "Bison"],
    answer: "Bison",
  },
  {
    question:
      "What is a key characteristic of game birds in terms of their raising conditions?",
    choice: [
      "Raised with antibiotics",
      "Raised in feedlots",
      "Naturally raised without antibiotics",
      "Genetically modified",
    ],
    answer: "Naturally raised without antibiotics",
  },
  {
    question:
      "Which of the following meats has the highest amount of protein per 100 grams?",
    choice: ["Elk", "Lean Ham", "Ground Beef", "Chicken (Skinless)"],
    answer: "Elk",
  },
  {
    question:
      "Which game animal is typically inspected by state regulations and not USDA?",
    choice: ["Guinea Hen", "Rabbit", "Water Buffalo", "Venison"],
    answer: "Venison",
  },
  {
    question: "Which animal is not part of the deer family?",
    choice: ["Elk", "Antelope", "Moose", "Yak"],
    answer: "Yak",
  },
  {
    question: "Which of the following is considered large game?",
    choice: ["Quail", "Frog", "Water Buffalo", "Pheasant"],
    answer: "Water Buffalo",
  },
  {
    question: "What kind of environment are game meats typically raised in?",
    choice: [
      "Urban farms",
      "Natural settings that resemble wild habitats",
      "Industrial feedlots",
      "Confined indoor spaces",
    ],
    answer: "Natural settings that resemble wild habitats",
  },
  {
    question: "Which meat has the highest cholesterol content per 100 grams?",
    choice: ["Ground Turkey", "Lean Beef", "Deer", "Salmon"],
    answer: "Ground Beef",
  },
  {
    question:
      "Which of the following animals is a part of the venison/deer family?",
    choice: ["Wild Boar", "Axis (Chital) Himalayan", "Yak", "Alligator"],
    answer: "Axis (Chital) Himalayan",
  },
  {
    question:
      "What is the average protein content of ground beef per 100 grams?",
    choice: ["20.7 grams", "24.8 grams", "29.4 grams", "30.2 grams"],
    answer: "20.7 grams",
  },
  {
    question: "Which meat has the lowest fat content per 100 grams?",
    choice: ["Chicken (Skinless)", "Elk", "Bison", "Lean Ham"],
    answer: "Elk",
  },
  {
    question:
      "Which of the following meats is raised in farms that resemble their wild habitat?",
    choice: ["Beef", "Pork", "Game meats", "Chicken"],
    answer: "Game meats",
  },
  {
    question: "Which of the following meats requires USDA inspection?",
    choice: ["Venison", "Bison", "Squab", "Rabbit"],
    answer: "Squab",
  },
  {
    question: "Which of the following is exempt from USDA inspection?",
    choice: ["Guinea Hen", "Ostrich", "Wild Boar", "Antelope"],
    answer: "Antelope",
  },
  {
    question:
      "Which type of large game is known for having a tomahawk chop cut?",
    choice: ["Kangaroo", "Bison", "Wild Boar", "Water Buffalo"],
    answer: "Water Buffalo",
  },
  {
    question: "What is the typical environment for raising game meats?",
    choice: [
      "Industrial feedlots",
      "Natural settings",
      "Urban farms",
      "Confined indoor spaces",
    ],
    answer: "Natural settings",
  },
  {
    question: "Which meat is known for having less cholesterol and more iron?",
    choice: ["Pork", "Beef", "Chicken", "Large game"],
    answer: "Large game",
  },
  {
    question: "Which meat has the highest amount of iron per 100 grams?",
    choice: ["Bison", "Beef (Choice)", "Pork", "Chicken (Skinless)"],
    answer: "Bison",
  },
  {
    question: "Which game meat has the highest protein content per 100 grams?",
    choice: ["Bison", "Elk", "Antelope", "Deer"],
    answer: "Elk",
  },
  {
    question:
      "Which large game animal is typically raised in natural settings?",
    choice: ["Yak", "Mouflon", "Wild Boar", "All choices mentioned"],
    answer: "All choices mentioned",
  },
  {
    question: "What is a common feature of game meats regarding antibiotics?",
    choice: [
      "Raised with antibiotics",
      "Raised without antibiotics",
      "Genetically modified",
      "None of the above",
    ],
    answer: "Raised without antibiotics",
  },
  {
    question:
      "Which of the following meats is inspected by FDA instead of USDA?",
    choice: ["Squab", "Rabbit", "Ostrich", "Venison"],
    answer: "Venison",
  },
  {
    question: "Which type of meat has the highest calories per 100 grams?",
    choice: ["Lean Ham", "Ground Beef", "Salmon", "Elk"],
    answer: "Ground Beef",
  },
  {
    question:
      "What is a characteristic of game birds in terms of raising conditions?",
    choice: [
      "Raised in confined spaces",
      "Naturally raised without antibiotics",
      "Fed with antibiotics",
      "Raised in urban farms",
    ],
    answer: "Naturally raised without antibiotics",
  },
  {
    question:
      "Which meat is typically raised on farms that resemble their wild habitat?",
    choice: ["Beef", "Game meats", "Pork", "Chicken"],
    answer: "Game meats",
  },
  {
    question:
      "Which of the following meats has the least amount of fat per 100 grams?",
    choice: ["Bison", "Elk", "Chicken (Skinless)", "Lean Ham"],
    answer: "Elk",
  },
  {
    question: "What type of game animal is a Red Tail?",
    choice: ["Deer", "Bison", "Wild Boar", "Yak"],
    answer: "Deer",
  },
  {
    question:
      "Which large game animal is known for having a tomahawk chop cut?",
    choice: ["Kangaroo", "Bison", "Wild Boar", "Water Buffalo"],
    answer: "Water Buffalo",
  },
  {
    question: "Which of the following animals is a part of the deer family?",
    choice: ["Yak", "Red Tail", "Mouflon", "Alligator"],
    answer: "Red Tail",
  },
  {
    question: "What is the typical weight range for a fryer rabbit?",
    choice: ["3-5 lbs", "5-7 lbs", "10-15 lbs", "15-20 lbs"],
    answer: "3-5 lbs",
  },
  {
    question: "How should a hare typically be cooked due to its very red meat?",
    choice: [
      "Grilled quickly",
      "Roasted at high heat",
      "Low and slow cooking",
      "Fried",
    ],
    answer: "Low and slow cooking",
  },
  {
    question: "Which part of the alligator is primarily sold as a filet?",
    choice: ["Leg", "Tail", "Ribs", "Head"],
    answer: "Tail",
  },
  {
    question: "What does turtle meat look like?",
    choice: [
      "Light white meat",
      "Dark meat resembling beef and turkey thigh mixed",
      "Red meat",
      "Pale pink meat",
    ],
    answer: "Dark meat resembling beef and turkey thigh mixed",
  },
  {
    question: "How is snake meat commonly described in terms of taste?",
    choice: [
      "Tastes like beef",
      "Tastes like pork",
      "Tastes like chicken",
      "Tastes like fish",
    ],
    answer: "Tastes like chicken",
  },
  {
    question: "What flavor profile do frog's legs have?",
    choice: [
      "Sweet and sour",
      "Light but earthy",
      "Bitter and tangy",
      "Rich and buttery",
    ],
    answer: "Light but earthy",
  },
  {
    question: "What is the average weight of an ostrich or emu carcass?",
    choice: ["100 lbs", "150 lbs", "200 lbs", "250 lbs"],
    answer: "250 lbs",
  },
  {
    question:
      "Which of the following is NOT a characteristic of ostrich and emu meat?",
    choice: [
      "Large flightless birds",
      "Alternative cutting",
      "Very lean",
      "High fat content",
    ],
    answer: "High fat content",
  },
  {
    question: "Which part of the ostrich is NOT included in the listed cuts?",
    choice: ["Outside drum", "Back fillet", "Wings", "Neck"],
    answer: "Wings",
  },
  {
    question:
      "What is the preferred cooking method for small and tender rabbits?",
    choice: ["Fried", "Slow-cooked", "Roasted", "Grilled"],
    answer: "Fried",
  },

  // Cattle Breeds

  {
    question: "Which country is the origin of the Angus cattle breed?",
    choice: ["Scotland", "United States", "Australia", "Ireland"],
    answer: "Scotland",
  },
  {
    question: "What is Angus cattle known for in the culinary world?",
    choice: [
      "High-quality beef with marbling",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "High-quality beef with marbling",
  },
  {
    question: "Where did the Belted Galloway cattle breed originate?",
    choice: ["Scotland", "England", "Ireland", "Wales"],
    answer: "Scotland",
  },
  {
    question: "What is the Belted Galloway cattle breed primarily known for?",
    choice: [
      "Lean and flavorful beef",
      "High milk production",
      "Leather production",
      "Wool production",
    ],
    answer: "Lean and flavorful beef",
  },
  {
    question: "From which country does the Brahman cattle breed originate?",
    choice: ["India", "Brazil", "Mexico", "United States"],
    answer: "India",
  },
  {
    question: "What is Brahman cattle known for in the culinary world?",
    choice: [
      "Resistant beef suitable for tropical climates",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "Resistant beef suitable for tropical climates",
  },
  {
    question: "Where did the Charolais cattle breed originate?",
    choice: ["France", "Germany", "United States", "Canada"],
    answer: "France",
  },
  {
    question: "What is Charolais cattle known for in the culinary world?",
    choice: [
      "High-quality beef with rapid growth",
      "High milk production",
      "Wool production",
      "Draught work",
    ],
    answer: "High-quality beef with rapid growth",
  },
  {
    question: "Which country is the origin of the Dexter cattle breed?",
    choice: ["Ireland", "Scotland", "England", "Wales"],
    answer: "Ireland",
  },
  {
    question: "What is the Dexter cattle breed primarily known for?",
    choice: [
      "Dual-purpose for beef and milk",
      "High wool yield",
      "Draught work",
      "Leather production",
    ],
    answer: "Dual-purpose for beef and milk",
  },
  {
    question: "From which country does the Gelbvieh cattle breed originate?",
    choice: ["Germany", "Switzerland", "Austria", "Poland"],
    answer: "Germany",
  },
  {
    question: "What is Gelbvieh cattle known for in the culinary world?",
    choice: [
      "Dual-purpose for beef and milk",
      "High wool yield",
      "Draught work",
      "Low-fat beef",
    ],
    answer: "Dual-purpose for beef and milk",
  },
  {
    question: "Where did the Hereford cattle breed originate?",
    choice: ["England", "United States", "Australia", "Canada"],
    answer: "England",
  },
  {
    question: "What is Hereford cattle known for in the culinary world?",
    choice: [
      "Beef production with high marbling",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "Beef production with high marbling",
  },
  {
    question: "Which country is the origin of the Holstein cattle breed?",
    choice: ["Netherlands", "Germany", "Denmark", "France"],
    answer: "Netherlands",
  },
  {
    question: "What is Holstein cattle primarily known for?",
    choice: [
      "High milk production",
      "Beef production",
      "Wool production",
      "Draught work",
    ],
    answer: "High milk production",
  },
  {
    question: "From which country does the Limousin cattle breed originate?",
    choice: ["France", "Italy", "Spain", "Portugal"],
    answer: "France",
  },
  {
    question:
      "What is the Limousin cattle breed primarily known for in the culinary world?",
    choice: [
      "Lean beef with high yield",
      "High milk production",
      "Wool production",
      "Draught work",
    ],
    answer: "Lean beef with high yield",
  },
  {
    question: "Where did the Piedmontese cattle breed originate?",
    choice: ["Italy", "France", "Switzerland", "Spain"],
    answer: "Italy",
  },
  {
    question: "What is Piedmontese cattle known for in the culinary world?",
    choice: [
      "Lean beef with low-fat content",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "Lean beef with low-fat content",
  },
  {
    question: "Which country is the origin of the Red Angus cattle breed?",
    choice: ["Scotland", "United States", "Australia", "Ireland"],
    answer: "Scotland",
  },
  {
    question: "What is Red Angus cattle known for in the culinary world?",
    choice: [
      "High-quality beef with marbling",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "High-quality beef with marbling",
  },
  {
    question:
      "From which country does the Scottish Highland cattle breed originate?",
    choice: ["Scotland", "Ireland", "England", "Wales"],
    answer: "Scotland",
  },
  {
    question: "What is the Scottish Highland cattle breed primarily known for?",
    choice: [
      "Lean beef with unique flavor",
      "High milk production",
      "Wool production",
      "Leather production",
    ],
    answer: "Lean beef with unique flavor",
  },
  {
    question: "Where did the Shorthorn cattle breed originate?",
    choice: ["England", "Scotland", "Ireland", "Wales"],
    answer: "England",
  },
  {
    question: "What is Shorthorn cattle known for in the culinary world?",
    choice: [
      "High-quality beef and milk production",
      "High wool yield",
      "Draught work",
      "Leather production",
    ],
    answer: "High-quality beef and milk production",
  },
  {
    question: "Which country is the origin of the Simmental cattle breed?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },
  {
    question: "What is Simmental cattle known for in the culinary world?",
    choice: [
      "Dual-purpose for beef and milk",
      "High wool yield",
      "Draught work",
      "Low-fat beef",
    ],
    answer: "Dual-purpose for beef and milk",
  },
  {
    question:
      "From which country does the Texas Longhorn cattle breed originate?",
    choice: ["United States", "Mexico", "Canada", "Spain"],
    answer: "United States",
  },
  {
    question: "What is Texas Longhorn cattle known for in the culinary world?",
    choice: [
      "Lean beef with unique flavor",
      "High milk production",
      "Wool production",
      "Draught work",
    ],
    answer: "Lean beef with unique flavor",
  },
  {
    question: "Where did the Watusi cattle breed originate?",
    choice: ["Africa", "South America", "Asia", "Europe"],
    answer: "Africa",
  },
  {
    question: "What is Watusi cattle known for in the culinary world?",
    choice: [
      "Lean beef with high protein content",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "Lean beef with high protein content",
  },
  {
    question: "Which country is the origin of the Wagyu cattle breed?",
    choice: ["Japan", "China", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    question: "What is Wagyu cattle known for in the culinary world?",
    choice: [
      "Highly marbled, luxurious beef",
      "High milk yield",
      "Wool production",
      "Leather production",
    ],
    answer: "Highly marbled, luxurious beef",
  },

  // Lamb Breeds

  {
    question: "Which country is the origin of the Merino sheep breed?",
    choice: ["Spain", "Australia", "New Zealand", "United States"],
    answer: "Spain",
  },
  {
    question: "Where did the Suffolk sheep breed originate?",
    choice: ["England", "Ireland", "Scotland", "Wales"],
    answer: "England",
  },
  {
    question: "From which country does the Dorper sheep breed originate?",
    choice: ["South Africa", "Australia", "New Zealand", "United States"],
    answer: "South Africa",
  },
  {
    question: "Which country is the origin of the Dorset sheep breed?",
    choice: ["England", "Ireland", "Scotland", "Wales"],
    answer: "England",
  },
  {
    question: "Where did the Katahdin sheep breed originate?",
    choice: ["United States", "Canada", "Australia", "New Zealand"],
    answer: "United States",
  },
  {
    question: "From which country does the Texel sheep breed originate?",
    choice: ["Netherlands", "Belgium", "Germany", "France"],
    answer: "Netherlands",
  },
  {
    question: "Which country is the origin of the Romney sheep breed?",
    choice: ["England", "New Zealand", "Australia", "United States"],
    answer: "England",
  },
  {
    question: "Where did the Cheviot sheep breed originate?",
    choice: ["Scotland", "Ireland", "England", "Wales"],
    answer: "Scotland",
  },
  // Goat Breeds
  {
    question: "Which country is the origin of the Boer goat breed?",
    choice: ["South Africa", "Australia", "United States", "New Zealand"],
    answer: "South Africa",
  },
  {
    question: "Where did the Alpine goat breed originate?",
    choice: ["France", "Switzerland", "Italy", "Germany"],
    answer: "France",
  },
  {
    question: "Which country is the origin of the Saanen goat breed?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },
  {
    question: "Where did the Nigerian Dwarf goat breed originate?",
    choice: ["West Africa", "South Africa", "East Africa", "North Africa"],
    answer: "West Africa",
  },
  {
    question: "From which country does the Kiko goat breed originate?",
    choice: ["New Zealand", "Australia", "United States", "Canada"],
    answer: "New Zealand",
  },
  {
    question: "Which country is the origin of the LaMancha goat breed?",
    choice: ["United States", "Mexico", "Canada", "Spain"],
    answer: "United States",
  },
  {
    question: "Where did the Nubian goat breed originate?",
    choice: ["United Kingdom", "India", "Egypt", "South Africa"],
    answer: "United Kingdom",
  },
  {
    question: "From which country does the Oberhasli goat breed originate?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },
  {
    question: "Which country is the origin of the Toggenburg goat breed?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },

  // Goat Breeds

  {
    question: "Which country is the origin of the Boer goat breed?",
    choice: ["South Africa", "Australia", "United States", "New Zealand"],
    answer: "South Africa",
  },
  {
    question: "Where did the Alpine goat breed originate?",
    choice: ["France", "Switzerland", "Italy", "Germany"],
    answer: "France",
  },
  {
    question: "Which country is the origin of the Saanen goat breed?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },
  {
    question: "Where did the Nigerian Dwarf goat breed originate?",
    choice: ["West Africa", "South Africa", "East Africa", "North Africa"],
    answer: "West Africa",
  },
  {
    question: "From which country does the Kiko goat breed originate?",
    choice: ["New Zealand", "Australia", "United States", "Canada"],
    answer: "New Zealand",
  },
  {
    question: "Which country is the origin of the LaMancha goat breed?",
    choice: ["United States", "Mexico", "Canada", "Spain"],
    answer: "United States",
  },
  {
    question: "Where did the Nubian goat breed originate?",
    choice: ["United Kingdom", "India", "Egypt", "South Africa"],
    answer: "United Kingdom",
  },
  {
    question: "From which country does the Oberhasli goat breed originate?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },
  {
    question: "Which country is the origin of the Toggenburg goat breed?",
    choice: ["Switzerland", "Germany", "France", "Italy"],
    answer: "Switzerland",
  },

  // Chicken Breeds

  {
    question: "Which country is the origin of the Leghorn chicken breed?",
    choice: ["Italy", "United States", "France", "United Kingdom"],
    answer: "Italy",
  },
  {
    question: "Where did the Rhode Island Red chicken breed originate?",
    choice: ["United States", "Canada", "United Kingdom", "Australia"],
    answer: "United States",
  },
  {
    question: "From which country does the Orpington chicken breed originate?",
    choice: ["United Kingdom", "United States", "France", "Germany"],
    answer: "United Kingdom",
  },
  {
    question: "Which country is the origin of the Plymouth Rock chicken breed?",
    choice: ["United States", "Canada", "United Kingdom", "Australia"],
    answer: "United States",
  },
  {
    question: "Where did the Sussex chicken breed originate?",
    choice: ["United Kingdom", "United States", "France", "Germany"],
    answer: "United Kingdom",
  },
  {
    question: "From which country does the Australorp chicken breed originate?",
    choice: ["Australia", "United States", "United Kingdom", "New Zealand"],
    answer: "Australia",
  },
  {
    question: "Which country is the origin of the Silkie chicken breed?",
    choice: ["China", "Japan", "India", "Thailand"],
    answer: "China",
  },
  {
    question: "Where did the Cornish chicken breed originate?",
    choice: ["United Kingdom", "United States", "France", "Germany"],
    answer: "United Kingdom",
  },
  {
    question: "From which country does the Brahma chicken breed originate?",
    choice: ["United States", "China", "India", "Thailand"],
    answer: "United States",
  },
  {
    question: "Which country is the origin of the Wyandotte chicken breed?",
    choice: ["United States", "Canada", "United Kingdom", "Australia"],
    answer: "United States",
  },

  // Duck Breeds

  {
    question: "Which country is the origin of the Pekin duck breed?",
    choice: ["China", "United States", "France", "United Kingdom"],
    answer: "China",
  },
  {
    question: "Where did the Muscovy duck breed originate?",
    choice: ["South America", "North America", "Europe", "Asia"],
    answer: "South America",
  },
  {
    question:
      "From which country does the Khaki Campbell duck breed originate?",
    choice: ["United Kingdom", "United States", "France", "Germany"],
    answer: "United Kingdom",
  },
  {
    question: "Which country is the origin of the Indian Runner duck breed?",
    choice: ["Indonesia", "China", "India", "Thailand"],
    answer: "Indonesia",
  },
  {
    question: "Where did the Rouen duck breed originate?",
    choice: ["France", "United States", "United Kingdom", "Germany"],
    answer: "France",
  },
  {
    question: "From which country does the Cayuga duck breed originate?",
    choice: ["United States", "Canada", "United Kingdom", "Australia"],
    answer: "United States",
  },
  {
    question: "Which country is the origin of the Swedish Blue duck breed?",
    choice: ["Sweden", "Norway", "Denmark", "Finland"],
    answer: "Sweden",
  },
  {
    question: "Where did the Welsh Harlequin duck breed originate?",
    choice: ["Wales", "Scotland", "Ireland", "England"],
    answer: "Wales",
  },

  // Meat Cut #'s and Processing
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
    question: "What is the NAMP for Primal rib?",
    choice: ["103", "109", "109d", "112a"],
    answer: "103",
  },
  {
    question: "What is the NAMP for Roast ready rib?",
    choice: ["103", "109", "109d", "112a"],
    answer: "109",
  },
  {
    question: "What is the NAMP for Export rib?",
    choice: ["103", "109", "109d", "112a"],
    answer: "109d",
  },
  {
    question: "What is the NAMP for Boneless ribeye lip on?",
    choice: ["103", "109", "109d", "112a"],
    answer: "112a",
  },
  {
    question: "What is the NAMP for Ribeye roll?",
    choice: ["103", "109", "112", "175"],
    answer: "112",
  },
  {
    question: "What is the NAMP for Bone-in strip loin?",
    choice: ["103", "109", "175", "180"],
    answer: "175",
  },
  {
    question: "What is the NAMP for Boneless striploin?",
    choice: ["103", "109", "175", "180"],
    answer: "180",
  },
  {
    question: "What is the NAMP for Tenderloin full fat on?",
    choice: ["103", "175", "189", "180"],
    answer: "189",
  },
  {
    question: "What is the NAMP for Tenderloin psmo?",
    choice: ["189", "175", "109d", "189a"],
    answer: "189a",
  },
  {
    question: "What is the NAMP for Tenderloin denuded?",
    choice: ["189", "175", "109d", "190a"],
    answer: "190a",
  },
  {
    question: "What is the NAMP for Tenderloin portion cut?",
    choice: ["189", "175", "109d", "1190a"],
    answer: "1190a",
  },

  // Food Safety and Diseases
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
    question: "What does E. coli infection do to a person?",
    choice: [
      "Causes severe stomach cramps, diarrhea (often bloody), and vomiting",
      "Leads to high fever and pneumonia",
      "Results in a skin rash and joint pain",
      "Causes neurological symptoms like confusion and seizures",
    ],
    answer:
      "Causes severe stomach cramps, diarrhea (often bloody), and vomiting",
  },
  {
    question:
      "What does Bovine Spongiform Encephalopathy (BSE) do to a person?",
    choice: [
      "Causes rapid mental deterioration and movement problems",
      "Leads to chronic fatigue and muscle weakness",
      "Results in severe respiratory distress and coughing",
      "Causes severe joint pain and arthritis",
    ],
    answer: "Causes rapid mental deterioration and movement problems",
  },
  {
    question: "What does Tuberculosis (TB) do to a person?",
    choice: [
      "Causes persistent cough, chest pain, and coughing up blood",
      "Leads to severe headaches and vision problems",
      "Results in sudden weight gain and bloating",
      "Causes intense itching and skin lesions",
    ],
    answer: "Causes persistent cough, chest pain, and coughing up blood",
  },
  {
    question: "What does Trichinosis do to a person?",
    choice: [
      "Causes muscle pain, fever, swelling around the eyes, and gastrointestinal issues",
      "Leads to hair loss and brittle nails",
      "Results in chronic liver damage and jaundice",
      "Causes severe allergic reactions and anaphylaxis",
    ],
    answer:
      "Causes muscle pain, fever, swelling around the eyes, and gastrointestinal issues",
  },
  {
    question: "What does Yersiniosis do to a person?",
    choice: [
      "Causes fever, abdominal pain, and diarrhea, which may be bloody",
      "Leads to persistent dizziness and balance problems",
      "Results in severe dehydration and kidney failure",
      "Causes chronic back pain and spinal issues",
    ],
    answer: "Causes fever, abdominal pain, and diarrhea, which may be bloody",
  },
  {
    question: "What does Hepatitis E do to a person?",
    choice: [
      "Causes liver inflammation, jaundice, fatigue, and nausea",
      "Leads to severe acne and skin infections",
      "Results in joint degeneration and osteoporosis",
      "Causes chronic bronchitis and persistent cough",
    ],
    answer: "Causes liver inflammation, jaundice, fatigue, and nausea",
  },
  {
    question: "What does Salmonellosis do to a person?",
    choice: [
      "Causes diarrhea, fever, stomach cramps, and vomiting",
      "Leads to severe migraines and vision loss",
      "Results in heart palpitations and arrhythmia",
      "Causes chronic insomnia and anxiety",
    ],
    answer: "Causes diarrhea, fever, stomach cramps, and vomiting",
  },
  {
    question: "What does Campylobacteriosis do to a person?",
    choice: [
      "Causes diarrhea (often bloody), fever, and abdominal cramps",
      "Leads to severe joint inflammation and arthritis",
      "Results in significant weight loss and malnutrition",
      "Causes severe respiratory issues and shortness of breath",
    ],
    answer: "Causes diarrhea (often bloody), fever, and abdominal cramps",
  },
  {
    question: "What does Avian Influenza do to a person?",
    choice: [
      "Causes flu-like symptoms, severe respiratory distress, and can be fatal",
      "Leads to loss of appetite and chronic fatigue",
      "Results in severe neurological issues like paralysis",
      "Causes intense skin itching and rashes",
    ],
    answer:
      "Causes flu-like symptoms, severe respiratory distress, and can be fatal",
  },
  {
    question: "What does Brucellosis do to a person?",
    choice: [
      "Causes fever, sweats, malaise, anorexia, headache, and muscle pain",
      "Leads to chronic kidney infections and urinary issues",
      "Results in severe hair loss and skin ulcers",
      "Causes intense abdominal pain and digestive problems",
    ],
    answer:
      "Causes fever, sweats, malaise, anorexia, headache, and muscle pain",
  },
  {
    question: "What does Q fever do to a person?",
    choice: [
      "Causes high fever, severe headache, fatigue, and muscle pain",
      "Leads to chronic coughing and chest pain",
      "Results in significant weight gain and obesity",
      "Causes persistent diarrhea and dehydration",
    ],
    answer: "Causes high fever, severe headache, fatigue, and muscle pain",
  },
  {
    question: "What does Listeriosis do to a person?",
    choice: [
      "Causes fever, muscle aches, nausea, and can lead to meningitis",
      "Leads to severe vision problems and blindness",
      "Results in chronic liver damage and cirrhosis",
      "Causes severe allergic reactions and swelling",
    ],
    answer: "Causes fever, muscle aches, nausea, and can lead to meningitis",
  },
  {
    question: "What does Toxoplasmosis do to a person?",
    choice: [
      "Causes flu-like symptoms, muscle pain, and can affect the brain",
      "Leads to severe joint pain and swelling",
      "Results in chronic lung infections and bronchitis",
      "Causes intense headaches and migraines",
    ],
    answer: "Causes flu-like symptoms, muscle pain, and can affect the brain",
  },

  // Questions about the primal cut each sub-primal belongs to
  {
    question: "Which primal cut does the Chuck Roll belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Chuck Shoulder Clod belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Chuck Tender belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Shoulder Top Blade belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question:
      "Which primal cut does the Shoulder Center (Ranch) Cut belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Under Blade Pot Roast belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Shoulder Arm Roast belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Ground Chuck belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Chuck",
  },
  {
    question: "Which primal cut does the Ribeye Roll belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Rib",
  },
  {
    question: "Which primal cut does the Ribeye, Lip-On belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Rib",
  },
  {
    question: "Which primal cut do the Back Ribs belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Rib",
  },
  {
    question: "Which primal cut do the Short Ribs belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Rib",
  },
  {
    question:
      "Which primal cut does the Ribeye Cap (Spinalis Dorsi) belong to?",
    choice: ["Chuck", "Rib", "Short Loin", "Round"],
    answer: "Rib",
  },
  {
    question: "Which primal cut does the Strip Loin belong to?",
    choice: ["Short Loin", "Chuck", "Rib", "Round"],
    answer: "Short Loin",
  },
  {
    question: "Which primal cut does the T-Bone Steak belong to?",
    choice: ["Short Loin", "Chuck", "Rib", "Round"],
    answer: "Short Loin",
  },
  {
    question: "Which primal cut does the Porterhouse Steak belong to?",
    choice: ["Short Loin", "Chuck", "Rib", "Round"],
    answer: "Short Loin",
  },
  {
    question: "Which primal cut does the Tenderloin belong to?",
    choice: ["Short Loin", "Chuck", "Rib", "Round"],
    answer: "Short Loin",
  },
  {
    question: "Which primal cut does the Filet Mignon belong to?",
    choice: ["Short Loin", "Chuck", "Rib", "Round"],
    answer: "Short Loin",
  },
  {
    question: "Which primal cut does the Top Sirloin Butt belong to?",
    choice: ["Sirloin", "Chuck", "Rib", "Round"],
    answer: "Sirloin",
  },
  {
    question: "Which primal cut does the Bottom Sirloin Butt belong to?",
    choice: ["Sirloin", "Chuck", "Rib", "Round"],
    answer: "Sirloin",
  },
  {
    question: "Which primal cut does the Tri-Tip belong to?",
    choice: ["Sirloin", "Chuck", "Rib", "Round"],
    answer: "Sirloin",
  },
  {
    question: "Which primal cut does the Ball Tip belong to?",
    choice: ["Sirloin", "Chuck", "Rib", "Round"],
    answer: "Sirloin",
  },
  {
    question: "Which primal cut does the Sirloin Bavette (Flap) belong to?",
    choice: ["Sirloin", "Chuck", "Rib", "Round"],
    answer: "Sirloin",
  },
  {
    question: "Which primal cut does the Top Round belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Bottom Round belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Eye of Round belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Round Tip belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Knuckle belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Sirloin Tip belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Rump Roast belong to?",
    choice: ["Round", "Chuck", "Rib", "Short Loin"],
    answer: "Round",
  },
  {
    question: "Which primal cut does the Brisket Point belong to?",
    choice: ["Brisket", "Chuck", "Rib", "Short Loin"],
    answer: "Brisket",
  },
  {
    question: "Which primal cut does the Brisket Flat belong to?",
    choice: ["Brisket", "Chuck", "Rib", "Short Loin"],
    answer: "Brisket",
  },
  {
    question: "Which primal cut does the Skirt Steak belong to?",
    choice: ["Plate", "Chuck", "Rib", "Short Loin"],
    answer: "Plate",
  },
  {
    question: "Which primal cut do the Short Ribs belong to?",
    choice: ["Plate", "Chuck", "Rib", "Short Loin"],
    answer: "Plate",
  },
  {
    question: "Which primal cut does the Hanger Steak belong to?",
    choice: ["Plate", "Chuck", "Rib", "Short Loin"],
    answer: "Plate",
  },
  {
    question: "Which primal cut does the Inside Skirt belong to?",
    choice: ["Plate", "Chuck", "Rib", "Short Loin"],
    answer: "Plate",
  },
  {
    question: "Which primal cut does the Outside Skirt belong to?",
    choice: ["Plate", "Chuck", "Rib", "Short Loin"],
    answer: "Plate",
  },
  {
    question: "Which primal cut does the Flank Steak belong to?",
    choice: ["Flank", "Chuck", "Rib", "Short Loin"],
    answer: "Flank",
  },
  {
    question: "Which primal cut does the Fore Shank belong to?",
    choice: ["Shank", "Chuck", "Rib", "Short Loin"],
    answer: "Shank",
  },
  {
    question: "Which primal cut does the Hind Shank belong to?",
    choice: ["Shank", "Chuck", "Rib", "Short Loin"],
    answer: "Shank",
  },
];
