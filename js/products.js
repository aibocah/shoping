import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const snap = await getDocs(collection(db, "products"));
snap.forEach(d => {
  productList.innerHTML += `<li>${d.data().nama}</li>`;
});