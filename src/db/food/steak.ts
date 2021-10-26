import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { steakAttack } from "../statusEffects/steakAttack";

export const steak: Food = {
  ...getFoodIdentifiers("Steak"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F969}",
  },
  tier: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Steak Attack.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ApplyStatus",
      to: {
        kind: "PurchaseTarget",
      },
      status: steakAttack.id,
    },
  },
};