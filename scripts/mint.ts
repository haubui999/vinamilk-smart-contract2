import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const contract = await ethers.getContractAt("VinamilkTrace", contractAddress);

  const tx = await contract.createBatch(
    "Sữa tươi tiệt trùng Vinamilk 180ml",
    "2025-10-08",
    "Nhà máy Bình Dương",
    "QmABC123xyzIPFSHash"
  );

  // ethers v6: chờ giao dịch hoàn tất
  await tx.wait();

  console.log("✅ Lô sữa đã được tạo thành công!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
