import { ethers } from "hardhat";

async function main() {
  // Dán địa chỉ contract bạn vừa deploy
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const contract = await ethers.getContractAt("VinamilkTrace", contractAddress);

  // Kiểm tra thông tin lô sữa có id = 1
  const batch = await contract.getBatch(1);

  console.log("📦 Thông tin lô sữa:");
  console.log(`- ID: ${batch.id}`);
  console.log(`- Tên: ${batch.name}`);
  console.log(`- Ngày SX: ${batch.productionDate}`);
  console.log(`- Nhà máy: ${batch.factory}`);
  console.log(`- IPFS Hash: ${batch.ipfsHash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
