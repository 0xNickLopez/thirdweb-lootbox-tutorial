import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  const bundleModuleAddress = '0x38d867D0763693Fb39BFDFBA43beB32711e0f499'; // your bundle module address
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = '0xD2F185a976A1018567BD6B33940807b0B546A1D9'; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Getting all NFTs from bundle...');
  const nftsInBundle = await bundleModule.getAll();

  console.log('NFTs in bundle:');
  console.log(nftsInBundle);

  console.log('Creating a pack containing the NFTs from bundle...');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Reverse Turkey Pack!',
      image: readFileSync('./assets/black-swan.jpg'),
    },
    assets: nftsInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log('Pack created!')
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}