import { db } from "./firebase.js";
import { addDoc, collection, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const form = document.getElementById("checkoutForm");

// contoh data produk (nanti dari klik produk)
const produk = {
  id: "abc123",
  nama: "Hampers Lebaran",
  harga: 250000
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nama: nama.value,
    wa: wa.value,
    alamat: alamat.value,
    customIsi: custom.value,
    produkId: produk.id,
    produkNama: produk.nama,
    total: produk.harga,
    status: "pending",
    createdAt: serverTimestamp()
  };

  await addDoc(collection(db, "orders"), data);

  // kirim WA ke admin
  const msg = encodeURIComponent(
    `ORDER BARU\n\nNama: ${data.nama}\nProduk: ${data.produkNama}\nTotal: Rp ${data.total}`
  );

  window.open(`https://wa.me/628xxxx?text=${msg}`, "_blank");

  alert("Pesanan berhasil dikirim!");
  form.reset();
});
