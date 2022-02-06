import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xD2F185a976A1018567BD6B33940807b0B546A1D9';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}