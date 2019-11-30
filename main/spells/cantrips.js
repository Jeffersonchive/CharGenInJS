const acidSplash = {
  name: "acidSplash",
  desc:
    "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
  concentration: false,
  school: "Conjuration",
  castingTime: "1 action",
  range: 60,
  area: undefined,
  targets: "1 or 2 adjacent targets",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels: undefined
};

const bladeWard = {
  name: "bladeWard",
  desc:
    "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
  concentration: false,
  school: "Abjuration",
  castingTime: "1 round",
  range: 0,
  area: undefined,
  targets: "Self",
  components: ["V", "S", "", ""],
  duration: "1 round",
  ritual: false,
  atHigherLevels: undefined
};

const chillTouch = {
  name: "chillTouch",
  desc:
    "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
  concentration: false,
  school: "Necromancy",
  castingTime: "1 action",
  range: 120,
  area: undefined,
  targets: "1 creature",
  components: ["V", "S", "", ""],
  duration: "1 round",
  ritual: false,
  atHigherLevels:
    "This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

const dancingLights = {
  name: "dancingLights",
  desc:
    "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range.",
  concentration: true,
  school: "Evocation",
  castingTime: "1 action",
  range: 120,
  area: undefined,
  targets: undefined,
  components: ["V", "S", "M", "a bit of phosphorus or wychwood, or a glowworm"],
  duration: "up to 1 minute",
  ritual: false,
  atHigherLevels: undefined
};

const druidCraft = {
  name: "druidCraft",
  desc: [
    "Whispering to the spirits of nature, you create one of the following effects within range:",
    "You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb  for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.",
    " You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.",
    "You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect  must fit in a 5-foot cube.",
    " You instantly light or snuff out a candle, a torch, or a small campfire."
  ],
  concentration: false,
  school: "Transmutation",
  castingTime: "1 action",
  range: 30,
  area: undefined,
  targets: undefined,
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels: undefined
};

const eldritchBlast = {
  name: "eldritchBlast",
  desc:
    "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
  concentration: false,
  school: "Evocation",
  castingTime: "1 action",
  range: 120,
  area: undefined,
  targets: "1 creature or object",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
};

const fireBolt = {
  name: "fireBolt",
  desc:
    "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.",
  concentration: false,
  school: "Evocation",
  castingTime: "1 action",
  range: 120,
  area: undefined,
  targets: "1 creature or object",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};

const friends = {
  name: "friends",
  desc:
    "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn’t hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM’s discretion), depending on the nature of your interaction with it.",
  concentration: true,
  school: "Enchantment",
  castingTime: "1 action",
  range: 0,
  area: undefined,
  targets: "1 non-hostile creature",
  components: [
    "V",
    "S",
    "M",
    "a small amount of makeup applied to the face as this spell is cast"
  ],
  duration: "up to one minute",
  ritual: false,
  atHigherLevels: undefined
};

const guidance = {
  name: "guidance",
  desc:
    "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
  concentration: true,
  school: "Divination",
  castingTime: "1 action",
  range: 5,
  area: undefined,
  targets: "1 willing creature",
  components: ["V", "S", "", ""],
  duration: "up to one minute",
  ritual: false,
  atHigherLevels: undefined
};

const light = {
  name: "light",
  desc:
    "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
  concentration: false,
  school: "Evocation",
  castingTime: "1 action",
  range: 5,
  area: "a 10 foot cube",
  targets: "1 target entirely within",
  components: ["V", "", "M", "a firefly or phosphorescent moss"],
  duration: "1 hour",
  ritual: false,
  atHigherLevels: undefined
};

const mageHand = {
  name: "mageHand",
  desc:
    "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can’t attack, activate magical items, or carry more than 10 pounds.",
  concentration: false,
  school: "Conjuration",
  castingTime: "1 action",
  range: 30,
  area: undefined,
  targets: undefined,
  components: ["V", "S", "", ""],
  duration: "1 minute",
  ritual: false,
  atHigherLevels: undefined
};

const mending = {
  name: "mending",
  desc:
    "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object.",
  concentration: false,
  school: "Transmutation",
  castingTime: "1 minute",
  range: 5,
  area: undefined,
  targets: "1 object",
  components: ["V", "S", "M", "two lodestones"],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels: undefined
};

const message = {
  name: "message",
  desc:
    "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.",
  concentration: false,
  school: "Transmutation",
  castingTime: "1 action",
  range: 120,
  area: undefined,
  targets: "1 creature",
  components: ["V", "S", "M", "a short piece of copper wire"],
  duration: "1 round",
  ritual: false,
  atHigherLevels: undefined
};

const minorIllusion = {
  name: "minorIllusion",
  desc:
    "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an objectsuch as a chair, muddy footprints, or a small chestit must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
  concentration: false,
  school: "Illusion",
  castingTime: "1 action",
  range: 30,
  area: "5 foot cube",
  targets: undefined,
  components: ["V", "S", "M", "a bit of fleece"],
  duration: "1 minute",
  ritual: false,
  atHigherLevels: undefined
};

const poisonSpray = {
  name: "poisonSpray",
  desc:
    "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.",
  concentration: false,
  school: "Conjuration",
  castingTime: "1 action",
  range: 10,
  area: undefined,
  targets: "1 creature",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels: undefined
};

const prestidigitation = {
  name: "prestidigitation",
  desc: [
    "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:",
    "You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.",
    "You instantaneously light or snuff out a candle, a torch, or a small campfire.",
    "You instantaneously clean or soil an object no larger than 1 cubic foot.",
    "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.",
    "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.",
    "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.",
    "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
  ],
  concentration: false,
  school: "Transmutation",
  castingTime: "1 action",
  range: 10,
  area: undefined,
  targets: undefined,
  components: ["V", "S", "", ""],
  duration: "1 hour",
  ritual: false,
  atHigherLevels: undefined
};

const produceFlame = {
  name: "produceFlame",
  desc:
    "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.",
  concentration: false,
  school: "Conjuration",
  castingTime: "1 action",
  range: 0,
  area: undefined,
  targets: undefined,
  components: ["V", "S", "", ""],
  duration: "10 minutes",
  ritual: false,
  atHigherLevels: undefined
};

const rayOfFrost = {
  name: "rayOfFrost",
  desc:
    "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
  concentration: false,
  school: "Evocation",
  castingTime: "1 action",
  range: 60,
  area: undefined,
  targets: "1 creature",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "At Higher Levels. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

const resistance = {
  name: "resistance",
  desc:
    "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends.",
  concentration: true,
  school: "Abjuration",
  castingTime: "1 action",
  range: 5,
  area: undefined,
  targets: "1 willing creature",
  components: ["V", "S", "M", "a miniature cloak"],
  duration: "up to 1 minute",
  ritual: false,
  atHigherLevels: undefined
};

const sacredFlame = {
  name: "sacredFlame",
  desc:
    "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
  concentration: false,
  school: "Evocation",
  castingTime: "1 action",
  range: 60,
  area: undefined,
  targets: "1 creature",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

const shillelagh = {
  name: "shillelagh",
  desc:
    "The wood of a club or quarterstaff you are holding is imbued with nature’s power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon’s damage die becomes a d8. The weapon also becomes magical, if it isn’t already. The spell ends if you cast it again or if you let go of the weapon.",
  concentration: false,
  school: "Transmutation",
  castingTime: "1 bonus action",
  range: 5,
  area: undefined,
  targets: "1 club or quarterstaff",
  components: [
    "V",
    "S",
    "M",
    "mistletoe, a shamrock leaf, and a club or quarterstaff"
  ],
  duration: "1 minute",
  ritual: false,
  atHigherLevels: undefined
};

const shockingGrasp = {
  name: "shockingGrasp",
  desc:
    "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can’t take reactions until the start of its next turn.",
  concentration: false,
  school: "Evocation",
  castingTime: "1 action",
  range: 5,
  area: undefined,
  targets: "1 creature",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

const spareTheDying = {
  name: "spareTheDying",
  desc:
    "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
  concentration: false,
  school: "Necromancy",
  castingTime: "1 action",
  range: 5,
  area: undefined,
  targets: "1 living creature with at 0 HP",
  components: ["V", "S", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels: undefined
};

const thaumaturgy = {
  name: "thaumaturgy",
  desc: [
    "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:",
    " Your voice booms up to three times as loud as normal for 1 minute.",
    "You cause flames to flicker, brighten, dim, or change color for 1 minute.",
    "You cause harmless tremors in the ground for 1 minute.",
    "You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.",
    "You instantaneously cause an unlocked door or window to fly open or slam shut.",
    "You alter the appearance of your eyes for 1 minute.",
    "If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
  ],
  concentration: false,
  school: "Transmutation",
  castingTime: "1 action",
  range: 30,
  area: undefined,
  targets: undefined,
  components: ["V", "", "", ""],
  duration: "1 minute",
  ritual: false,
  atHigherLevels: undefined
};

const thornWhip = {
  name: "thornWhip",
  desc:
    "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.",
  concentration: false,
  school: "Transmutation",
  castingTime: "1 action",
  range: 30,
  area: undefined,
  targets: undefined,
  components: ["V", "S", "M", "the stem of a plant with thorns"],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

const trueStrike = {
  name: "trueStrike",
  desc:
    "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target’s defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn’t ended.",
  concentration: true,
  school: "Divination",
  castingTime: "1 action",
  range: 30,
  area: undefined,
  targets: "1 creature",
  components: ["", "S", "", ""],
  duration: "1 round",
  ritual: false,
  atHigherLevels: undefined
};

const viciousMockery = {
  name: "viciousMockery",
  desc:
    "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
  concentration: false,
  school: "Enchantment",
  castingTime: "1 action",
  range: 60,
  area: undefined,
  targets: "1 creature",
  components: ["V", "", "", ""],
  duration: "Instantaneous",
  ritual: false,
  atHigherLevels:
    "This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};

const bard = [
  bladeWard,
  dancingLights,
  friends,
  light,
  mageHand,
  mending,
  message,
  minorIllusion,
  prestidigitation,
  trueStrike,
  viciousMockery
];

const cleric = [
  guidance,
  light,
  mending,
  resistance,
  sacredFlame,
  spareTheDying,
  thaumaturgy
];

const druid = [
  druidCraft,
  guidance,
  mending,
  produceFlame,
  resistance,
  shillelagh,
  thornWhip
];

const paladin = {};

const ranger = {};

const sorcerer = [
  acidSplash,
  bladeWard,
  chillTouch,
  dancingLights,
  fireBolt,
  friends,
  light,
  mageHand,
  mending,
  message,
  minorIllusion,
  prestidigitation,
  rayOfFrost,
  shockingGrasp,
  trueStrike
];

const warlock = [
  bladeWard,
  chillTouch,
  eldritchBlast,
  friends,
  mageHand,
  minorIllusion,
  prestidigitation,
  trueStrike
];

const wizard = [
  acidSplash,
  bladeWard,
  chillTouch,
  dancingLights,
  fireBolt,
  friends,
  light,
  mageHand,
  mending,
  message,
  minorIllusion,
  poisonSpray,
  prestidigitation,
  rayOfFrost,
  shockingGrasp,
  trueStrike
];

const cantrips = {
  bard: bard,
  cleric: cleric,
  druid: druid,
  paladin: paladin,
  ranger: ranger,
  sorcerer: sorcerer,
  warlock: warlock,
  wizard: wizard
};
