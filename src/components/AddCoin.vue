<template>
  <div id="secondContainer">
    <h1 class="main-title">Add Coins</h1>
    <form id="userForm">
      <div class="form-group">
        <label for="coin1">Coin Name:</label>
        <input type="text" id="coin1" required placeholder="Enter Coin" />
      </div>
      <div class="form-group">
        <label for="ticker1">Ticker:</label>
        <input type="text" id="ticker1" required placeholder="Valid Ticker" />
      </div>
      <div class="form-group">
        <label for="buy1">Buy Price:</label>
        <input type="number" id="buy1" required placeholder="Buy Price" />
      </div>
      <div class="form-group">
        <label for="quant1">Buy Quantity:</label>
        <input type="number" id="quant1" required placeholder="Quantity" />
      </div>
      <button id="savebutton" type="button" @click="savetofs">
        <strong>Save</strong>
      </button>
    </form>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  methods: {
    async savetofs() {
      console.log("IN AC");

      let coin = document.getElementById("coin1").value;
      let ticker = document.getElementById("ticker1").value;
      let buyPrice = document.getElementById("buy1").value;
      let buyQuantity = document.getElementById("quant1").value;

      alert("Saving your data for Coin : " + coin);

      try {
        await setDoc(doc(db, "Portfolio", coin), {
          Coin: coin,
          Ticker: ticker,
          Buy_Price: buyPrice,
          Buy_Quantity: buyQuantity,
        });

        window.location.reload(); // Reload the page after saving
      } catch (error) {
        console.error("Error adding doc: ", error);
      }
    },
  },
};
</script>

<style scoped>
/* Form Container */
#secondContainer {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 80%;
}

/* Form Styling */
#userForm {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

/* Ensures label stays on the left side of the input field */
.form-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
}

/* Labels positioned to the left */
label {
  font-weight: 600;
  font-size: 18px;
  color: #333;
  min-width: 120px;
  text-align: right;
  margin-right: 10px;
}

/* Inputs remain flexible and take remaining space */
input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
}

input:focus {
  border-color: #00c3ff;
  box-shadow: 0 0 5px rgba(0, 114, 255, 0.5);
  outline: none;
}

/* Buttons */
button {
  display: block;
  margin: 15px auto;
  background: linear-gradient(to right, #5685d7, #155db4);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

button:hover {
  background: linear-gradient(to right, #224f9d, #072b57);
  transform: translateY(-2px);
}
</style>
