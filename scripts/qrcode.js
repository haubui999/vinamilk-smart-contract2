import QRCode from "qrcode";
import fs from "fs";

async function generateQR() {
  // Đây là URL IPFS bạn muốn gắn vào QR
  const metadataURL = "https://ipfs.io/ipfs/QmABC123xyzIPFSHash";

  // Tạo folder metadata nếu chưa có
  if (!fs.existsSync("./metadata")) {
    fs.mkdirSync("./metadata");
  }

  // Tạo file QR code
  await QRCode.toFile("./metadata/qrcode.png", metadataURL);

  console.log("✅ QR Code đã được tạo tại: metadata/qrcode.png");
}

generateQR().catch((err) => console.error(err));
