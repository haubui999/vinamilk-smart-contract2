import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("VinamilkTrace");
  const contract = await factory.deploy();

  // ethers v6: chờ deploy bằng waitForDeployment()
  await contract.waitForDeployment();

  // ethers v6: lấy địa chỉ bằng getAddress()
  const address = await contract.getAddress();
  console.log(`✅ Contract deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
