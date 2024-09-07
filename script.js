const civilizations = {

      "English": {
        "description": "The English are a balanced civilization with a strong economy and powerful military capabilities. They excel at ranged combat, particularly with their powerful archers. They are known for their efficient economy and unique bonuses like the 'Trade Guild' which increases trade cart speed and carrying capacity.",
        "uniqueUnits": [
          {
            "name": "Longbowman",
            "description": "A powerful ranged unit that excels against infantry. They have a longer range and higher attack than standard archers, making them ideal for ranged combat.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Long Range", "High Damage"],
            "weaknesses": ["Siege Units", "Cavalry"]
          },
          {
            "name": "Warwolf",
            "description": "A powerful siege weapon that can quickly destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage and ability to bypass enemy defenses.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Conquistador",
            "description": "A heavy cavalry unit with high attack and armor. They are effective against infantry, particularly against archers and spearmen. They can also be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "Anti-Infantry", "High Damage", "Armor"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Hand Cannoneer",
            "description": "A cheap ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Cheap", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Heavy Scorpion",
            "description": "A powerful siege weapon with a high rate of fire and a long range. They are effective against buildings and fortified units, and can be used to harass enemy troops.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Rate of Fire", "Long Range"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          }
        ]
      },
      "French": {
        "description": "The French are a formidable civilization known for their powerful cavalry and unique gunpowder units. They excel in both offense and defense and have a powerful late-game economy. They are particularly strong against archers and spearmen due to their unique bonuses.",
        "uniqueUnits": [
          {
            "name": "Coureur des Bois",
            "description": "A fast and agile scout unit that can be used to scout, harass, and gather resources. They are also effective against archers and spearmen due to their unique bonus.",
            "strengths": ["Fast Movement", "Scout", "Harassment", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Weak Attack", "Low Health"]
          },
          {
            "name": "Eagle Warrior",
            "description": "A powerful anti-infantry unit that can also be used to counter archers. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Anti-Infantry", "Anti-Archers", "High Attack", "Fast Movement", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Cavalry"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "French Paladin",
            "description": "A heavy cavalry unit with a powerful charge attack. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "Charge Attack", "Anti-Infantry", "Anti-Archers", "Fast Movement"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Rus": {
        "description": "The Rus are a civilization known for their strong economy and powerful defensive capabilities. They excel at building strong defenses and have unique bonuses that make them particularly good at defending against attacks. They are also known for their strong cavalry and siege units.",
        "uniqueUnits": [
          {
            "name": "Strelets",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Boyar",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Knyaz",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Holy Roman Empire": {
        "description": "The Holy Roman Empire is a civilization known for its powerful military and strong economy. They excel at both offense and defense, and have unique bonuses that make them particularly strong against archers and spearmen.",
        "uniqueUnits": [
          {
            "name": "Teutonic Knight",
            "description": "A powerful heavy cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Landsknecht",
            "description": "A powerful infantry unit with high attack and armor. They are effective against archers and spearmen, and can be used to counter other infantry units.",
            "strengths": ["High Attack", "Armor", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Cavalry", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Imperial Skirmisher",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          }
        ]
      },
      "Mongols": {
        "description": "The Mongols are a civilization known for their powerful cavalry and unique bonuses that make them particularly strong in the early game. They excel at flanking and harassing enemy forces, and can quickly overwhelm their opponents with their superior mobility.",
        "uniqueUnits": [
          {
            "name": "Keshik",
            "description": "A fast and agile scout unit that can be used to scout, harass, and gather resources. They are also effective against archers and spearmen due to their unique bonus.",
            "strengths": ["Fast Movement", "Scout", "Harassment", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Weak Attack", "Low Health"]
          },
          {
            "name": "Mangudai",
            "description": "A powerful ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Trebuchet",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Khan",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Delhi Sultanate": {
        "description": "The Delhi Sultanate is a civilization known for its powerful military and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Man-at-Arms",
            "description": "A powerful infantry unit with high attack and armor. They are effective against archers and spearmen, and can be used to counter other infantry units.",
            "strengths": ["High Attack", "Armor", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Cavalry", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Ghuri War Elephant",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Tughlaq",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Chinese": {
        "description": "The Chinese are a civilization known for their powerful economy and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Chu Ko Nu",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Imperial Camel Rider",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Imperial Skirmisher",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          }
        ]
      },
      "Abbasid Caliphate": {
        "description": "The Abbasid Caliphate is a civilization known for its powerful economy and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Camel Archer",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Mameluke",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Ghulam",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Japanese": {
        "description": "The Japanese are a civilization known for their powerful economy and unique bonuses that make them particularly strong in the early game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Samurai",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Naginata",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Trebuchet",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          }
        ]
      },
      "Ottoman Empire": {
        "description": "The Ottoman Empire is a civilization known for its powerful military and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Janissary",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Sipahi",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Bombard Cannon",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          }
        ]
      },
      "Malay": {
        "description": "The Malay are a civilization known for their powerful economy and unique bonuses that make them particularly strong in the early game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Karambit Warrior",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Mahout",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Trebuchet",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          }
        ]
      },
      "Abbassid Caliphate": {
        "description": "The Abbassid Caliphate is a civilization known for its powerful economy and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Camel Archer",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Mameluke",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Ghulam",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Delhi Sultanate": {
        "description": "The Delhi Sultanate is a civilization known for its powerful military and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Man-at-Arms",
            "description": "A powerful infantry unit with high attack and armor. They are effective against archers and spearmen, and can be used to counter other infantry units.",
            "strengths": ["High Attack", "Armor", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Cavalry", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Ghuri War Elephant",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Tughlaq",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Rus": {
        "description": "The Rus are a civilization known for their strong economy and powerful defensive capabilities. They excel at building strong defenses and have unique bonuses that make them particularly good at defending against attacks. They are also known for their strong cavalry and siege units.",
        "uniqueUnits": [
          {
            "name": "Strelets",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Boyar",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Knyaz",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Holy Roman Empire": {
        "description": "The Holy Roman Empire is a civilization known for its powerful military and strong economy. They excel at both offense and defense, and have unique bonuses that make them particularly strong against archers and spearmen.",
        "uniqueUnits": [
          {
            "name": "Teutonic Knight",
            "description": "A powerful heavy cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Landsknecht",
            "description": "A powerful infantry unit with high attack and armor. They are effective against archers and spearmen, and can be used to counter other infantry units.",
            "strengths": ["High Attack", "Armor", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Cavalry", "Siege Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Imperial Skirmisher",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          }
        ]
      },
      "Mongols": {
        "description": "The Mongols are a civilization known for their powerful cavalry and unique bonuses that make them particularly strong in the early game. They excel at flanking and harassing enemy forces, and can quickly overwhelm their opponents with their superior mobility.",
        "uniqueUnits": [
          {
            "name": "Keshik",
            "description": "A fast and agile scout unit that can be used to scout, harass, and gather resources. They are also effective against archers and spearmen due to their unique bonus.",
            "strengths": ["Fast Movement", "Scout", "Harassment", "Anti-Archers", "Anti-Spearmen"],
            "weaknesses": ["Weak Attack", "Low Health"]
          },
          {
            "name": "Mangudai",
            "description": "A powerful ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Trebuchet",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Khan",
            "description": "A powerful cavalry unit with high attack and armor. They are effective against infantry and archers, and can be used to scout enemy positions.",
            "strengths": ["Heavy Cavalry", "High Attack", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          }
        ]
      },
      "Chinese": {
        "description": "The Chinese are a civilization known for their powerful economy and unique bonuses that make them particularly strong in the late game. They excel at building strong defenses and have unique units that are effective against both infantry and cavalry.",
        "uniqueUnits": [
          {
            "name": "Chu Ko Nu",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for both offense and defense, and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          },
          {
            "name": "Siege Onager",
            "description": "A powerful siege weapon with a high rate of fire that can destroy enemy buildings and units. They are particularly effective against buildings and fortified units due to their high damage.",
            "strengths": ["Siege Warfare", "Anti-Buildings", "Anti-Fortified Units", "High Damage", "High Rate of Fire"],
            "weaknesses": ["Anti-Siege Units", "Cavalry"]
          },
          {
            "name": "Imperial Camel Rider",
            "description": "A powerful unit with high health and armor. They are effective against infantry and archers, and can be used to break through enemy defenses.",
            "strengths": ["High Health", "Armor", "Anti-Infantry", "Anti-Archers"],
            "weaknesses": ["Anti-Cavalry Units", "Siege Units"]
          },
          {
            "name": "Imperial Skirmisher",
            "description": "A ranged unit that is effective against both infantry and cavalry. They are a good option for early-game skirmishes and can be upgraded to become even more powerful.",
            "strengths": ["Ranged Combat", "Anti-Infantry", "Anti-Cavalry", "Can be Upgraded"],
            "weaknesses": ["Siege Units", "Elite Units"]
          }
        ]
      },    // Add data for other civilizations here
};

const civilizationCardsContainer =
    document.getElementById("civilization-cards");
const civilizationInfoSection = document.getElementById("civilization-info");
const civilizationSelect = document.getElementById("civilization-select"); // Get the select element

// Function to create a civilization card
function createCivilizationCard(civilizationName) {
    const civilization = civilizations[civilizationName];

    const card = document.createElement("div");
    card.classList.add("civilization-card");
    card.innerHTML = `
        <h3>${civilizationName}</h3>
        <p>${civilization.description}</p>
    `;

    card.addEventListener("click", () => {
        displayCivilizationDetails(civilizationName);
    });

    return card;
}

// Function to display civilization details
function displayCivilizationDetails(civilizationName) {
    const civilization = civilizations[civilizationName];

    civilizationInfoSection.innerHTML = `
        <h2>${civilizationName}</h2>
        <p>${civilization.description}</p>
        <h3>Unique Units:</h3>
        <ul>
            ${civilization.uniqueUnits
                .map(
                    (unit) => `
                <li>
                    <h4>${unit.name}</h4>
                    <p>${unit.description}</p>
                    <p><strong>Strengths:</strong> ${unit.strengths.join(", ")}</p>
                    <p><strong>Weaknesses:</strong> ${unit.weaknesses.join(", ")}</p>
                </li>
            `,
                )
                .join("")}
        </ul>
    `;
}

// Populate civilization cards and dropdown
for (const civilizationName in civilizations) {
    const card = createCivilizationCard(civilizationName);
    civilizationCardsContainer.appendChild(card);

    // Add civilization name to the dropdown
    const option = document.createElement("option");
    option.value = civilizationName;
    option.text = civilizationName;
    civilizationSelect.appendChild(option);
}

// Add dropdown event listener
civilizationSelect.addEventListener("change", () => {
    const selectedCivilization = civilizationSelect.value;
    displayCivilizationDetails(selectedCivilization);
});
