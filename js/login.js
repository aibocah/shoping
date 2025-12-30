import { auth } from "./auth.js";
import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await signInWithEmailAndPassword(auth, email.value, password.value);
  location.href = "dashboard.html";
});
