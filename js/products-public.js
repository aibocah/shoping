import { db } from "./firebase.js";
import { collection, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const grid = document.getElementById("productGrid");

const snap = await getDocs(collection(db, "products"));

snap.forEach(doc => {
  const p = doc.data();

  grid.innerHTML += `
    <div class="card">
      <img src="${p.foto}" class="product-img">

      <h3>${p.nama}</h3>
      <p>${p.desc || ""}</p>
      <strong>Rp ${Number(p.harga).toLocaleString("id-ID")}</strong>

      <button class="btn-primary full"
        onclick="bukaCheckout('${p.nama}', ${p.harga})">
        Pesan
      </button>
    </div>
  `;
});
