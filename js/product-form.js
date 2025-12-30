import { db, storage } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

form.addEventListener("submit", async e => {
  e.preventDefault();
  const file = foto.files[0];
  const storageRef = ref(storage, "products/" + Date.now() + file.name);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  await addDoc(collection(db, "products"), {
    nama: nama.value,
    harga: harga.value,
    desc: desc.value,
    foto: url
  });
  alert("Produk tersimpan");
});