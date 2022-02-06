import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0x38d867D0763693Fb39BFDFBA43beB32711e0f499";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "White Swan",
        description:
          "A highly certain event with three principal characteristics: it is certain; it carries an impact that can easily be estimated; and, after the fact, we concoct an explanation that recognizes the certainty of occurrence, but again, shifts the focus to errors in judgment or some other human form of causation.",
        image: readFileSync("./assets/white-swan.jpg"),
        properties: {
          rarity: "Common",
          predictability: 10,
        },
      },
      supply: 70,
    },
    {
      metadata: {
        name: "Grey Swan",
        description:
          "A highly probable event with three principal characteristics: it is predictable; it carries an impact that can easily cascade; and, after the fact, we concoct an explanation that recognizes the probability of occurrence, but shifts the focus to errors in judgment or some other human form of causation.",
        image: readFileSync("./assets/grey-swan.jpg"),
        properties: {
          rarity: "Uncommon",
          predictability: 4,
        },
      },
      supply: 25,
    },
    {
      metadata: {
        name: "Black Swan",
        description:
          "A highly improbable event with three principal characteristics: it is unpredictable; it carries a massive impact; and, after the fact, we concoct an explanation that makes it appear less random, and more predictable, than it was.",
        image: readFileSync("./assets/black-swan.jpg"),
        properties: {
          rarity: "Rare",
          predictability: 0,
        },
      },
      supply: 5,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
