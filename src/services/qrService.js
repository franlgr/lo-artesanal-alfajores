import QRCode from 'qrcode-generator';
// import store from '../store'; 

export function generateQRCode(url) {
//   const userId = store.getters.getUser._id;
  const qr = QRCode(0, 'L');
  qr.addData(`${url}`);
  qr.make();

  return qr.createDataURL();
}
