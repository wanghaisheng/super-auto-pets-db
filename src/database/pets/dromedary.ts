import { Ability, Trigger, Pet } from "..";

function dromedaryAbility(level: number): Ability {
  return {
    description: `Start of turn: Give shop animals +${level}/+${level}`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      untilEndOfBattle: false,
      target: {
        kind: "EachShopAnimal",
      },
      attackAmount: level,
      healthAmount: level,
    },
  };
}

export const dromedary = {
  name: "Dromedary",
  tier: 2,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: dromedaryAbility(1),
  level2Ability: dromedaryAbility(2),
  level3Ability: dromedaryAbility(3),
} as Pet;