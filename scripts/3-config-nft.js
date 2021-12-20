import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x8c378E2b7104696e25f2cC86DA0a4504162c6632",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Super Saiyan Goku",
        description: "This NFT will give you access to DragonBall Z DAO!",
        image: readFileSync("scripts/assets/goku1.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()