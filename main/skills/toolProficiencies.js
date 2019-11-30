const alchemistsSupplies = {
  name: "Alchemist's Supplies",
  desc:
    "You're proficient with alchemist's supplies. Your proficiency bonus is added to any ability check you make to create and manipulate ingredients to make something useful."
};
const brewersSupplies = {
  name: "Brewer's Supplies",
  desc:
    "You're proficient with brewer's supplies. Your proficiency bonus is added to any ability check you make to brew fermented items."
};
const calligraphersSupplies = {
  name: "Calligrapher's Supplies",
  desc:
    "You're proficient with calligrapher's supplies. Your proficiency bonus is added to any ability check you make to create and manipulate written materials."
};
const carpentersTools = {
  name: "Carpenter's Tools",
  desc:
    "You're proficient with carpenter's tools. Your proficiency bonus is added to any ability check you make to create and manipulate wooden constructs."
};
const cartographersTools = {
  name: "Cartographer's Tools",
  desc:
    "You're proficient with cartographer's tools. Your proficiency bonus is added to any ability check you make to create, manipulate, and interpret maps."
};
const cobblersTools = {
  name: "Cobbler's Tools",
  desc:
    "You're proficient with cobbler's tools. Your proficiency bonus is added to any ability check you make to create and manipulate footware."
};
const cooksUtensils = {
  name: "Cook's Utensils",
  desc:
    "You're proficient with cook's utensils. Your proficiency bonus is added to any ability check you make to create and manipulate ingredients for the purposes of eating."
};
const glassblowersTools = {
  name: "Glassblower's Tools",
  desc:
    "You're proficient with glassblower's tools. Your proficiency bonus is added to any ability check you make to create and manipulate glass."
};
const jewelersTools = {
  name: "Jeweler's Tools",
  desc:
    "You're proficient with jeweler's tools. Your proficiency bonus is added to any ability check you make while handling gems, crystals, rare stones, and jewelry."
};
const leatherworkersTools = {
  name: "Leatherworker's Tools",
  desc:
    "You're proficient with leatherworker's tools. Your proficiency bonus is added to any ability check you make to create and manipulate leather."
};
const masonsTools = {
  name: "Mason's Tools",
  desc:
    "You're proficient with mason's tools. Your proficiency bonus is added to any ability check you make while working with stone and brick."
};
const paintersSupplies = {
  name: "Painter's Supplies",
  desc:
    "You're proficient with painter's supplies. Your proficiency bonus is added to any ability check you make to create and manipulate paint."
};
const pottersTools = {
  name: "Potter's Tools",
  desc:
    "You're proficient with potter's tools. Your proficiency bonus is added to any ability check you make to create and manipulate pottery."
};
const smithsTools = {
  name: "Smith's Tools",
  desc:
    "You're proficient with smith's tools. Your proficiency bonus is added to any ability check you make to create and manipulate metallic items."
};
const tinkersTools = {
  name: "Tinker's Tools",
  desc:
    "You're proficient with tinker's tools. Your proficiency bonus is added to any ability check you make to create and repair gadgets, machinery, and general mechanisms."
};
const weaversTools = {
  name: "Weaver's Tools",
  desc:
    "You're proficient with weaver's tools. Your proficiency bonus is added to any ability check you make to create and manipulate textiles."
};
const woodcarversTools = {
  name: "Woodcarver's Tools",
  desc:
    "You're proficient with woodcarver's tools. Your proficiency bonus is added to any ability check you make while working raw wooden resources."
};
const diceSet = {
  name: "Dice set",
  desc:
    "You're proficient with dice. Your proficiency bonus is added to any ability check you make while playing dice games."
};
const playingCardSet = {
  name: "Playing card set",
  desc:
    "You're proficient with playing cards. Your proficiency bonus is added to any ability check you make while playing card games."
};
const bagpipes = {
  name: "Bagpipes",
  desc:
    "You're proficient with playing the bagpipes. Your proficiency bonus is added to any ability check you make to play it."
};
const drum = {
  name: "Drum",
  desc:
    "You're proficient with playing the drum. Your proficiency bonus is added to any ability check you make to play it."
};
const dulcimer = {
  name: "Dulcimer",
  desc:
    "You're proficient with playing the dulcimer. Your proficiency bonus is added to any ability check you make to play it."
};
const flute = {
  name: "Flute",
  desc:
    "You're proficient with playing the flute. Your proficiency bonus is added to any ability check you make to play it."
};
const lute = {
  name: "Lute",
  desc:
    "You're proficient with playing the lute. Your proficiency bonus is added to any ability check you make to play it."
};
const lyre = {
  name: "Lyre",
  desc:
    "You're proficient with playing the lyre. Your proficiency bonus is added to any ability check you make to play it."
};
const horn = {
  name: "Horn",
  desc:
    "You're proficient with playing the horn. Your proficiency bonus is added to any ability check you make to play it."
};
const panFlute = {
  name: "Pan flute",
  desc:
    "You're proficient with playing the pan flute. Your proficiency bonus is added to any ability check you make to play it."
};
const shawm = {
  name: "Shawm",
  desc:
    "You're proficient with playing the shawm. Your proficiency bonus is added to any ability check you make to play it."
};
const viol = {
  name: "Viol",
  desc:
    "You're proficient with playing the viol. Your proficiency bonus is added to any ability check you make to play it."
};
const navigatorsTools = {
  name: "Navigator's Tools",
  desc:
    "You can chart a ship's course and follow navigation charts. In addition, your proficiency bonus is added to any ability check you make to avoid getting lost at sea."
};
const thievesTools = {
  name: "Thieve's Tools",
  desc:
    "You're proficient with thieve's tools. Your proficiency bonus is added to any ability check you make to disarm traps or open locks."
};
function vehicles(x) {
  return {
    name: "Vehicles(" + x + ")",
    desc:
      "You're proficient with " +
      x +
      " vehicles. Your proficiency bonus is added to any ability check you make to operate or ride all " +
      x +
      " vehicles or mounts."
  };
}

const toolProficiency = {
  artisansTools: {
    alchemistsSupplies: alchemistsSupplies,
    brewersSupplies: brewersSupplies,
    calligraphersSupplies: calligraphersSupplies,
    carpentersTools: carpentersTools,
    cartographersTools: cartographersTools,
    cobblersTools: cobblersTools,
    cookUtensils: cooksUtensils,
    glassblowersTools: glassblowersTools,
    jewelersTools: jewelersTools,
    leatherworkersTools: leatherworkersTools,
    masonsTools: masonsTools,
    paintersSupplies: paintersSupplies,
    pottersTools: pottersTools,
    smithsTools: smithsTools,
    tinkersTools: tinkersTools,
    weaversTools: weaversTools,
    woodcarversTools: woodcarversTools
  },
  gamingSets: { diceSet: diceSet, playingCardSet: playingCardSet },
  instruments: {
    drum: drum,
    bagpipes: bagpipes,
    dulcimer: dulcimer,
    flute: flute,
    lute: lute,
    lyre: lyre,
    horn: horn,
    panFlute: panFlute,
    shawm: shawm,
    viol: viol
  },
  navigatorsTools: navigatorsTools,
  thievesTools: thievesTools,
  vehicles: vehicles
};
