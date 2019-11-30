const alert = {
  name: "Alert",
  desc: "You are always on the lookout for danger.",
  prerequisites: [],
  benefits: [
    [
      "You gain a +5 bonus to initiative.",
      () => {
        character.initiative += 5;
      }
    ],
    ["You can’t be surprised while you are conscious."],
    [
      "Other creatures don’t gain advantage on attack rolls against you as a result of being hidden from you."
    ]
  ]
};
const athlete = {
  name: "Athlete",
  desc: "You have undergone extensive physical training.",
  prerequisites: [],
  choice: ["Strength", "Dexterity"],
  benefits: [
    [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      () => {
        if (
          character.feats.athlete.choice === "Strength" &&
          character.stats.str < 20
        ) {
          () => {
            str + 1;
          };
        }
        if (
          character.feats.athlete.choice === "Dexterity" &&
          character.stats.dex < 20
        ) {
          () => {
            dex + 1;
          };
        }
      }
    ],
    [
      "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
    ],
    [
      "Climbing doesn’t halve your speed.",
      () => {
        character.movement.climbing = character.movement.climbing * 2;
      }
    ],
    ["When you are prone, standing up uses only 5 feet of your movement."]
  ]
};
const actor = {
  name: "Actor",
  desc: "You are skilled at mimicry and dramatics.",
  prerequisites: [],
  benefits: [
    [
      "Increase your Charisma score by 1, to a maximum of 20.",
      () => {
        if (character.stats.cha < 20) {
          character.stats.cha += 1;
        }
      }
    ],
    [
      "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."
    ],
    [
      "You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person."
    ]
  ]
};
const charger = {
  name: "Charger",
  desc: "Charging the enemy is one of your favored tactics.",
  prerequisites: [],
  benefits: [
    [
      "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack’s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
    ]
  ]
};
const crossbowExpert = {
  name: "Crossbow Expert",
  desc: "You have become excedingly deadly with the crossbow.",
  prerequisites: [],
  benefits: [
    [
      "When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding."
    ],
    [
      "Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls."
    ],
    [
      "You ignore the loading quality of crossbows with which you are proficient."
    ]
  ]
};
const defensiveDuelist = {
  name: "Defensive Duelist",
  desc: "You have learned the art of parrying.",
  prerequisites: [dex(13)],
  benefits: [
    [
      "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
    ]
  ]
};
const dualWielder = {
  name: "Dual Wielder",
  desc: "You master fighting with two weapons.",
  prerequisites: [],
  benefits: [
    [
      "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
      () => {
        if (
          (character.equippedWeapons.left &&
            character.equippedWeapons.right) === anyOnehandedWeapon
        ) {
          character.ac += 1;
        }
      }
    ],
    [
      "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren’t light.",
      () => {
        weaponOptions.onehandedWeaponOptions = anyOnehandedWeapon;
      }
    ],
    [
      "You can draw or stow two one-handed weapons when you would normally b e able to draw or stow only one."
    ]
  ]
};
const dungeonDelver = {
  name: "Dungeon Delver",
  desc:
    "You become alert to the hidden traps and secret doors found in many dungeons.",
  prerequisites: [],
  benefits: [
    [
      "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
    ],
    [
      "You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors."
    ],
    ["You have advantage on saving throws made to avoid or resist traps."],
    ["You have resistance to the damage dealt by traps"],
    [
      "You can search for traps while travelling at a normal pace, instead of only at a slow pace."
    ]
  ]
};
const durable = {
  name: "Durable",
  desc: "You have become hardy and resilient.",
  prerequisites: [],
  benefits: [
    [
      "Increase your Constitution score by 1, to a maximum of 20.",
      () => {
        if (character.stats.con < 20) {
          character.stats.con += 1;
        }
      }
    ],
    [
      "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
    ]
  ]
};
function elementalAdept(x) {
  return {
    name: "Elemental Adept",
    desc: "Your command over an elemental magic is exceptional.",
    prerequisites: [spellcaster],
    benefits: [
      [
        "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type. "
      ]
    ]
  };
}
function grappler(x) {
  return {
    name: "Grappler",
    desc:
      "You’ve developed the skills necessary to hold your own in close-quarters grappling.",
    prerequisites: [str(13)],
    benefits: [
      [
        "You have advantage on attack rolls against a creature you are grappling."
      ],
      [
        "You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends."
      ],
      [
        "Creatures that are one size larger than you don’t automatically succeed on checks to escape your grapple."
      ]
    ]
  };
}
const greatWeaponMaster = {
  name: "Great Weapon Master",
  desc:
    "You’ve learned to put the weight of a weapon to you advantage, letting its momentum em power your strikes.",
  prerequisites: [],
  benefits: [
    [
      "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action."
    ],
    [
      "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a - 5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
    ],
    [
      "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a - 5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
    ]
  ]
};
const healer = {
  name: "Healer",
  desc:
    "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight.",
  prerequisites: [],
  benefits: [
    [
      "When you use a healer’s kit to stabilize a dying creature, that creature also regains 1 hit point."
    ],
    [
      "As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s maximum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest."
    ]
  ]
};
const heavilyArmored = {
  name: "Heavily Armored",
  desc: "You have trained to master the use of heavy armor.",
  prerequisites: [mediumArmorProficiency],
  benefits: [
    ["Increase your Strength score by 1, to a maximum of 20."],
    ["You gain proficiency with heavy armor."]
  ]
};
const heavyArmorMaster = {
  name: "Heavy Armor Master",
  desc: "You can use your arm or to deflect strikes that would kill others.",
  prerequisites: [heavyArmorProficiency],
  benefits: [
    ["Increase your Strength score by 1, to a maximum of 20."],
    [
      " While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non magical weapons is reduced by 3."
    ]
  ]
};
const inspiringLeader = {
  name: "Inspiring Leader",
  desc:
    "You are a natural leader, and those by your side grow stronger in your presence.",
  prerequisites: [cha(13)],
  benefits: [
    [
      "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can’t gain temporary hit points from this feat again until it has finished a short or long rest."
    ]
  ]
};
const keenMind = {
  name: "Keen Mind",
  desc:
    "You have a mind that can track time, direction, and detail with uncanny precision.",
  prerequisites: [],
  benefits: [
    ["Increase your Intelligence score by 1, to a maximum of 20."],
    ["You always know which way is north."],
    [
      "You always know the number of hours left before the next sunrise or sunset."
    ],
    [
      "You can accurately recall anything you have seen or heard within the past month."
    ]
  ]
};
const lightlyArmored = {
  name: "Lightly Armored",
  desc: "You have trained to master the use of light armor.",
  prerequisites: [],
  benefits: [
    ["Increase your Strength or Dexterity score by 1, to a maximum of 20."],
    ["You gain proficiency with light armor."]
  ]
};
const linguist = {
  name: "Linguist",
  desc: "You have studied languages and codes.",
  prerequisites: [],
  benefits: [
    ["Increase your Intelligence score by 1, to a maximum of 20."],
    ["You learn three languages of your choice."],
    [
      "You can ably create written ciphers. Others can’t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
    ]
  ]
};
const lucky = {
  name: "Lucky",
  desc:
    "You have inexplicable luck that seems to kick in at just the right moment.",
  prerequisites: [],
  benefits: [
    [
      "You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker’s roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest."
    ]
  ]
};
const mageSlayer = {
  name: "Mage Slayer",
  desc:
    "You have practiced techniques useful in melee combat against spellcasters.",
  prerequisites: [],
  benefits: [
    [
      "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature."
    ],
    [
      "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration."
    ],
    [
      "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
    ]
  ]
};
const magicInitiate = {
  name: "Magic Initiate",
  desc: "You have learned fundamental magic of a magical order.",
  prerequisites: [],
  benefits: [
    [
      "You learn two cantrips of your choice from that class’s spell list. In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid: or Intelligence for wizard."
    ]
  ]
};
const martialAdept = {
  name: "Martial Adept",
  desc:
    "You have martial training that allows you to perform special com bat maneuvers. ",
  prerequisites: [],
  benefits: [
    [
      "You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver’s effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)."
    ],
    [
      "If you already have superiority dice, you gain one more; otherwise, you have one superiority die, which is a d6. This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
    ]
  ]
};
const mediumArmorMaster = {
  name: "Medium Armor Master",
  desc: "You have practiced moving in medium armor",
  prerequisites: [mediumArmorProficiency],
  benefits: [
    [
      "Wearing medium armor doesn’t impose disadvantage on your Dexterity (Stealth) checks."
    ],
    [
      "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
    ]
  ]
};
const mobile = {
  name: "Mobile",
  desc: "You are exceptionally speedy and agile.",
  prerequisites: [],
  benefits: [
    ["Your speed increases by 10 feet"],
    [
      "When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn."
    ],
    [
      "When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest o f the turn, whether you hit or not."
    ]
  ]
};
const moderatelyArmored = {
  name: "Moderately Armored",
  desc: "You have trained to master the use of medium armor and shields.",
  prerequisites: [lightArmorProficiency],
  benefits: [
    ["Increase your Strength or Dexterity score by 1, to a maximum of 20."],
    ["You gain proficiency with medium armor and shields."]
  ]
};
const mountedCombatant = {
  name: "Mounted Combatant",
  desc: "You are a dangerous foe to face while mounted.",
  prerequisites: [],
  benefits: [
    [
      "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount."
    ],
    ["You can force an attack targeted at your mount to target you instead."],
    [
      "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
    ]
  ]
};
const observant = {
  name: "Observant",
  desc: "You are quick to notice details of your environment.",
  prerequisites: [],
  benefits: [
    ["Increase your Intelligence or Wisdom score by 1, to a maximum of 20."],
    [
      "If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips"
    ],
    [
      "You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
    ]
  ]
};
const polearmMaster = {
  name: "Polearm Master",
  desc: "You can keep your enemies at bay with reach weapons.",
  prerequisites: [],
  benefits: [
    [
      "When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon’s damage die for this attack is a d4, and the attack deals bludgeoning damage."
    ],
    [
      "While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach."
    ]
  ]
};
const resilient = {
  name: "Resilient",
  desc: "You have strengthened yourself in an ability.",
  prerequisites: [],
  benefits: [
    ["Increase the chosen ability score by 1, to a maximum of 20."],
    ["You gain proficiency in saving throws using the chosen ability."]
  ]
};
const ritualCaster = {
  name: "Ritual Caster",
  desc: "You have learned a number of spells that you can cast as rituals.",
  prerequisites: [int(13), wis(13)], //// OR
  benefits: [
    [
      "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them. When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class’s spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard. If you come across a spell in written form, such as a magical spell scroll or a wizard’s spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell’s level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it."
    ]
  ]
};
const savageAttacker = {
  name: "Savage Attacker",
  desc: "Your attacks have an uncanny ability to wound.",
  prerequisites: [],
  benefits: [
    [
      "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total."
    ]
  ]
};
const sentinel = {
  name: "Sentinel",
  desc:
    "You have mastered techniques to take advantage of every drop in any enemy’s guard.",
  prerequisites: [],
  benefits: [
    [
      "When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn."
    ],
    [
      "Creatures within 5 feet of you provoke opportunity attacks from you even if they take the Disengage action before leaving your reach."
    ],
    [
      "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
    ]
  ]
};
const sharpshooter = {
  name: "Sharpshooter",
  desc:
    "You have mastered ranged weapons and can make shots that others find im possible.",
  prerequisites: [],
  benefits: [
    [
      "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls."
    ],
    ["Your ranged weapon attacks ignore half cover and three-quarters cover."],
    [
      "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a - 5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
    ]
  ]
};
const shieldMaster = {
  name: "Shield Master",
  desc: "You use shields not just for protection but also for offense.",
  prerequisites: [],
  benefits: [
    [
      "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield."
    ],
    [
      "If you aren’t incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you."
    ],
    [
      "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
    ]
  ]
};
const skilled = {
  name: "Skilled",
  desc: "You are more skilled than most.",
  prerequisites: [],
  benefits: [
    [
      "You gain proficiency in any combination of three skills or tools of your choice."
    ]
  ]
};
const skulker = {
  name: "Skulker",
  desc: "You are expert at slinking through shadows.",
  prerequisites: [dex(13)],
  benefits: [
    [
      "You can try to hide when you are lightly obscured from the creature from which you are hiding."
    ],
    [
      "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position."
    ],
    [
      "Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight."
    ]
  ]
};
const spellSniper = {
  name: "Spell Sniper",
  desc:
    "You have learned techniques to enhance your attacks with certain kinds of spells.",
  prerequisites: [spellcaster],
  benefits: [
    [
      "Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
    ],
    [
      "When you cast a spell that requires you to make an attack roll, the spell’s range is doubled."
    ],
    ["Your ranged spell attacks ignore half cover and three-quarters cover."],
    ["You learn one cantrip that requires an attack roll."]
  ]
};
const tavernBrawler = {
  name: "Tavern Brawler",
  desc:
    "You are accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand.",
  prerequisites: [],
  benefits: [
    ["Increase your Strength or Constitution score by 1, to a maximum of 20."],
    ["You are proficient with improvised weapons and unarmed strikes."],
    ["Your unarmed strike uses a d4 for damage."],
    [
      "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
    ]
  ]
};
const tough = {
  name: "Tough",
  desc: "You are unusually hard to take down.",
  prerequisites: [],
  benefits: [
    [
      "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
    ]
  ]
};
const warCaster = {
  name: "War Caster",
  desc: "You have practiced casting spells in the midst of combat.",
  prerequisites: [spellcaster],
  benefits: [
    [
      "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage."
    ],
    [
      "You can perform the somatic components of spells even when you have weapons or a shield in one or both hands."
    ],
    [
      "When a hostile creature’s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature"
    ]
  ]
};
const weaponMaster = {
  name: "Weapon Master",
  desc: "You have practiced extensively with a variety of weapons.",
  prerequisites: [],
  benefits: [
    ["Increase your Strength or Dexterity score by 1, to a maximum of 20."],
    ["You gain proficiency with four weapons of your choice."]
  ]
};

const feats = {
  alert: alert,
  athlete: athlete,
  actor: actor,
  charger: charger,
  crossbowExpert: crossbowExpert,
  defensiveDuelist: defensiveDuelist,
  dualWielder: dualWielder,
  dungeonDelver: dungeonDelver,
  durable: durable,
  elementalAdept: elementalAdept,
  grappler: grappler,
  greatWeaponMaster: greatWeaponMaster,
  healer: healer,
  heavilyArmored: heavilyArmored,
  heavyArmorMaster: heavyArmorMaster,
  inspiringLeader: inspiringLeader,
  keenMind: keenMind,
  lightlyArmored: lightlyArmored,
  linguist: linguist,
  lucky: lucky,
  mageSlayer: mageSlayer,
  magicInitiate: magicInitiate,
  martialAdept: martialAdept,
  mediumArmorMaster: mediumArmorMaster,
  mobile: mobile,
  moderatelyArmored: moderatelyArmored,
  mountedCombatant: mountedCombatant,
  observant: observant,
  polearmMaster: polearmMaster,
  resilient: resilient,
  ritualCaster: ritualCaster,
  savageAttacker: savageAttacker,
  sentinel: sentinel,
  sharpshooter: sharpshooter,
  shieldMaster: shieldMaster,
  skilled: skilled,
  skulker: skulker,
  spellSniper: spellSniper,
  tavernBrawler: tavernBrawler,
  tough: tough,
  warCaster: warCaster,
  weaponMaster: weaponMaster
};
