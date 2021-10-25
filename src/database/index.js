"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yoinkId = exports.enumerateTable = exports.getStatusUrl = exports.getStatusId = exports.getFoodUrl = exports.getFoodId = exports.getPetUrl = exports.getPetId = exports.deserialiseDatabase = exports.serialiseDatabase = exports.getDatabase = void 0;
const utils_1 = require("../utils");
const apple_1 = require("./food/apple");
const cannedFood_1 = require("./food/cannedFood");
const chili_1 = require("./food/chili");
const chocolate_1 = require("./food/chocolate");
const cupcake_1 = require("./food/cupcake");
const garlic_1 = require("./food/garlic");
const honey_1 = require("./food/honey");
const meatBone_1 = require("./food/meatBone");
const melon_1 = require("./food/melon");
const milk_1 = require("./food/milk");
const mushroom_1 = require("./food/mushroom");
const pear_1 = require("./food/pear");
const pizza_1 = require("./food/pizza");
const saladBowl_1 = require("./food/saladBowl");
const sleepingPill_1 = require("./food/sleepingPill");
const steak_1 = require("./food/steak");
const sushi_1 = require("./food/sushi");
const ant_1 = require("./pets/ant");
const badger_1 = require("./pets/badger");
const bat_1 = require("./pets/bat");
const beaver_1 = require("./pets/beaver");
const beetle_1 = require("./pets/beetle");
const bison_1 = require("./pets/bison");
const blowfish_1 = require("./pets/blowfish");
const bluebird_1 = require("./pets/bluebird");
const buffalo_1 = require("./pets/buffalo");
const camel_1 = require("./pets/camel");
const cat_1 = require("./pets/cat");
const caterpillar_1 = require("./pets/caterpillar");
const chicken_1 = require("./pets/chicken");
const cow_1 = require("./pets/cow");
const crab_1 = require("./pets/crab");
const cricket_1 = require("./pets/cricket");
const crocodile_1 = require("./pets/crocodile");
const deer_1 = require("./pets/deer");
const dodo_1 = require("./pets/dodo");
const dog_1 = require("./pets/dog");
const dolphin_1 = require("./pets/dolphin");
const dragon_1 = require("./pets/dragon");
const dromedary_1 = require("./pets/dromedary");
const duck_1 = require("./pets/duck");
const eagle_1 = require("./pets/eagle");
const elephant_1 = require("./pets/elephant");
const fish_1 = require("./pets/fish");
const flamingo_1 = require("./pets/flamingo");
const fly_1 = require("./pets/fly");
const giraffe_1 = require("./pets/giraffe");
const goat_1 = require("./pets/goat");
const gorilla_1 = require("./pets/gorilla");
const hatchingChick_1 = require("./pets/hatchingChick");
const hedgehog_1 = require("./pets/hedgehog");
const hippo_1 = require("./pets/hippo");
const horse_1 = require("./pets/horse");
const kangaroo_1 = require("./pets/kangaroo");
const ladybug_1 = require("./pets/ladybug");
const leopard_1 = require("./pets/leopard");
const llama_1 = require("./pets/llama");
const lobster_1 = require("./pets/lobster");
const mammoth_1 = require("./pets/mammoth");
const microbe_1 = require("./pets/microbe");
const monkey_1 = require("./pets/monkey");
const mosquito_1 = require("./pets/mosquito");
const octopus_1 = require("./pets/octopus");
const otter_1 = require("./pets/otter");
const owl_1 = require("./pets/owl");
const ox_1 = require("./pets/ox");
const parrot_1 = require("./pets/parrot");
const peacock_1 = require("./pets/peacock");
const penguin_1 = require("./pets/penguin");
const pig_1 = require("./pets/pig");
const poodle_1 = require("./pets/poodle");
const puppy_1 = require("./pets/puppy");
const rabbit_1 = require("./pets/rabbit");
const rat_1 = require("./pets/rat");
const rhino_1 = require("./pets/rhino");
const rooster_1 = require("./pets/rooster");
const sauropod_1 = require("./pets/sauropod");
const scorpion_1 = require("./pets/scorpion");
const seal_1 = require("./pets/seal");
const shark_1 = require("./pets/shark");
const sheep_1 = require("./pets/sheep");
const shrimp_1 = require("./pets/shrimp");
const skunk_1 = require("./pets/skunk");
const sloth_1 = require("./pets/sloth");
const snail_1 = require("./pets/snail");
const snake_1 = require("./pets/snake");
const spider_1 = require("./pets/spider");
const squirrel_1 = require("./pets/squirrel");
const swan_1 = require("./pets/swan");
const tabbyCat_1 = require("./pets/tabbyCat");
const tiger_1 = require("./pets/tiger");
const tropicalFish_1 = require("./pets/tropicalFish");
const turkey_1 = require("./pets/turkey");
const turtle_1 = require("./pets/turtle");
const tyrannosaurus_1 = require("./pets/tyrannosaurus");
const whale_1 = require("./pets/whale");
const worm_1 = require("./pets/worm");
const pets = [
    // Tier 1
    ant_1.ant,
    beaver_1.beaver,
    beetle_1.beetle,
    bluebird_1.bluebird,
    cricket_1.cricket,
    duck_1.duck,
    fish_1.fish,
    horse_1.horse,
    ladybug_1.ladybug,
    mosquito_1.mosquito,
    otter_1.otter,
    pig_1.pig,
    sloth_1.sloth,
    // Tier 2
    bat_1.bat,
    crab_1.crab,
    dodo_1.dodo,
    dog_1.dog,
    dromedary_1.dromedary,
    elephant_1.elephant,
    flamingo_1.flamingo,
    hedgehog_1.hedgehog,
    peacock_1.peacock,
    rat_1.rat,
    shrimp_1.shrimp,
    spider_1.spider,
    swan_1.swan,
    tabbyCat_1.tabbyCat,
    // Tier 3
    badger_1.badger,
    blowfish_1.blowfish,
    caterpillar_1.caterpillar,
    camel_1.camel,
    hatchingChick_1.hatchingChick,
    giraffe_1.giraffe,
    kangaroo_1.kangaroo,
    owl_1.owl,
    ox_1.ox,
    puppy_1.puppy,
    rabbit_1.rabbit,
    sheep_1.sheep,
    snail_1.snail,
    tropicalFish_1.tropicalFish,
    turtle_1.turtle,
    whale_1.whale,
    // Tier 4
    bison_1.bison,
    buffalo_1.buffalo,
    deer_1.deer,
    dolphin_1.dolphin,
    hippo_1.hippo,
    llama_1.llama,
    lobster_1.lobster,
    monkey_1.monkey,
    penguin_1.penguin,
    poodle_1.poodle,
    rooster_1.rooster,
    skunk_1.skunk,
    squirrel_1.squirrel,
    worm_1.worm,
    // Tier 5
    chicken_1.chicken,
    cow_1.cow,
    crocodile_1.crocodile,
    eagle_1.eagle,
    goat_1.goat,
    microbe_1.microbe,
    parrot_1.parrot,
    rhino_1.rhino,
    scorpion_1.scorpion,
    seal_1.seal,
    shark_1.shark,
    turkey_1.turkey,
    // Tier 6
    cat_1.cat,
    dragon_1.dragon,
    fly_1.fly,
    gorilla_1.gorilla,
    leopard_1.leopard,
    mammoth_1.mammoth,
    octopus_1.octopus,
    sauropod_1.sauropod,
    snake_1.snake,
    tiger_1.tiger,
    tyrannosaurus_1.tyrannosaurus,
    // Summoned
    cricket_1.cricketSummoned,
    deer_1.busSummoned,
    fly_1.flySummoned,
    rat_1.dirtyRatSummoned,
    rooster_1.chick,
    sheep_1.ramSummoned,
    caterpillar_1.butterfly,
    honey_1.beeSummoned,
];
const foods = [
    // Tier 1
    apple_1.apple,
    honey_1.honey,
    // Tier 2
    cupcake_1.cupcake,
    meatBone_1.meatBone,
    sleepingPill_1.sleepingPill,
    // Tier 3
    garlic_1.garlic,
    saladBowl_1.saladBowl,
    // Tier 4
    cannedFood_1.cannedFood,
    pear_1.pear,
    // Tier 5
    chili_1.chili,
    chocolate_1.chocolate,
    sushi_1.sushi,
    // Tier 6
    melon_1.melon,
    mushroom_1.mushroom,
    pizza_1.pizza,
    steak_1.steak,
    // Summoned
    milk_1.milk,
];
const statuses = [
    {
        name: "Weak",
        image: {
            source: "noto-emoji",
            unicodeCodePoint: "\u{1F9A0}",
        },
        ability: {
            description: "Take 5 extra damage.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenDamaged" /* WhenDamaged */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: 5,
                appliesOnce: false,
            },
        },
    },
    {
        name: "Coconut Shield",
        image: { source: "twemoji", unicodeCodePoint: "\u{1F965}" },
        ability: {
            description: "Ignore damage once.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenDamaged" /* WhenDamaged */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: -Infinity,
                appliesOnce: true,
            },
        },
    },
    {
        name: "Honey Bee",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F36F}",
        },
        ability: {
            description: "Ignore damage once.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "Faint" /* Faint */,
            effect: {
                kind: "SummonPet",
                pet: honey_1.beeSummoned,
                team: "Friendly",
            },
        },
    },
    {
        name: "Bone Attack",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F356}",
        },
        ability: {
            description: "Attack for 5 more damage.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenAttacking" /* WhenAttacking */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: 5,
                appliesOnce: false,
            },
        },
    },
    {
        name: "Garlic Armor",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F9C4}",
        },
        ability: {
            description: "Take 2 less damage.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenDamaged" /* WhenDamaged */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: -2,
                appliesOnce: false,
            },
        },
    },
    {
        name: "Splash Attack",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F336}",
        },
        ability: {
            description: "Attack second enemy for 5 damage.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenAttacking" /* WhenAttacking */,
            effect: {
                kind: "SplashDamage",
                amount: 5,
            },
        },
    },
    {
        name: "Melon Armor",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F348}",
        },
        ability: {
            description: "Take 20 damage less, once.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenDamaged" /* WhenDamaged */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: -20,
                appliesOnce: true,
            },
        },
    },
    {
        name: "Extra Life",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F344}",
        },
        ability: {
            description: "Come back as a 1/1 after fainting",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "Faint" /* Faint */,
            effect: {
                kind: "RespawnPet",
                baseAttack: 1,
                baseHealth: 1,
            },
        },
    },
    {
        name: "Steak Attack",
        image: {
            source: "twemoji",
            unicodeCodePoint: "\u{1F969}",
        },
        ability: {
            description: "Attack for 20 more damage, once.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenAttacking" /* WhenAttacking */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: 20,
                appliesOnce: true,
            },
        },
    },
    {
        name: "Poison Attack",
        image: { source: "noto-emoji", unicodeCodePoint: "\u{1F95C}" },
        ability: {
            description: "Knock out any animal hit by this.",
            triggeredBy: {
                kind: "Self",
            },
            trigger: "WhenAttacking" /* WhenAttacking */,
            effect: {
                kind: "ModifyDamage",
                damageModifier: Infinity,
                appliesOnce: false,
            },
        },
    },
];
function getDatabase() {
    let database = { pets: {}, foods: {}, statuses: {} };
    pets.forEach((pet) => {
        const id = getPetId(pet);
        database.pets[id] = Object.assign(Object.assign({}, pet), { id });
    });
    foods.forEach((food) => {
        const id = getFoodId(food);
        database.foods[id] = Object.assign(Object.assign({}, food), { id });
    });
    statuses.forEach((status) => {
        const id = getStatusId(status);
        database.statuses[id] = Object.assign(Object.assign({}, status), { id });
    });
    return database;
}
exports.getDatabase = getDatabase;
function serialiseDatabase(db) {
    return JSON.stringify(db, null, 2);
}
exports.serialiseDatabase = serialiseDatabase;
function deserialiseDatabase(content) {
    return JSON.parse(content);
}
exports.deserialiseDatabase = deserialiseDatabase;
function getPetId(pet) {
    let name = typeof pet == "string" ? pet : pet.name;
    return `pet_${(0, utils_1.sanitiseName)(name)}`;
}
exports.getPetId = getPetId;
function getPetUrl(pet) {
    return `/pet/${(0, utils_1.sanitiseName)(pet.name)}`;
}
exports.getPetUrl = getPetUrl;
function getFoodId(food) {
    let name = typeof food == "string" ? food : food.name;
    return `food_${(0, utils_1.sanitiseName)(name)}`;
}
exports.getFoodId = getFoodId;
function getFoodUrl(food) {
    return `/food/${(0, utils_1.sanitiseName)(food.name)}`;
}
exports.getFoodUrl = getFoodUrl;
function getStatusId(status) {
    let name = typeof status == "string" ? status : status.name;
    return `status_${(0, utils_1.sanitiseName)(name)}`;
}
exports.getStatusId = getStatusId;
function getStatusUrl(status) {
    return `/status/${(0, utils_1.sanitiseName)(status.name)}`;
}
exports.getStatusUrl = getStatusUrl;
function enumerateTable(table) {
    return Object.entries(table).map((it) => it[1]);
}
exports.enumerateTable = enumerateTable;
function yoinkId(without) {
    return without.id;
}
exports.yoinkId = yoinkId;
