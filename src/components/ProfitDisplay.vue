<template>
  <div id="thirdContainer">
    <h1 id="main-title">Current portfolio</h1>

    <table id="table" class="auto-index">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Coin</th>
          <th>Ticker</th>
          <th>Buy_Price</th>
          <th>Buy_Quantity</th>
          <th>Current_Price</th>
          <th>Profit</th>
          <th>Options</th>
        </tr>
      </thead>
    </table>
    <br /><br />

    <h2 class="section-title">
      Your Total Profit is: <span id="totalProfit"></span>
    </h2>
  </div>
</template>


<script>
import CoinGecko from "coingecko-api";
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);
const CoinGeckoClient = new CoinGecko();

export default {
  mounted() {
    async function display() {
      let allDocuments = await getDocs(collection(db, "Portfolio"));

      let totalProfit = 0;
      let index = 1;

      allDocuments.forEach((docs) => {
        let documentData = docs.data();

        let coin = documentData.Coin;
        let ticker = documentData.Ticker;
        let buyPrice = documentData.Buy_Price;
        let buyQuantity = documentData.Buy_Quantity;

        let table = document.getElementById("table");
        let row = table.insertRow(index);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        cell1.innerHTML = index;
        cell2.innerHTML = coin;
        cell3.innerHTML = ticker;
        cell4.innerHTML = buyPrice;
        cell5.innerHTML = buyQuantity;
        cell6.innerHTML = 0;
        cell7.innerHTML = 0;

        cell7.className = "profits";

        let deleteButton = document.createElement("button");

        deleteButton.id = String(coin);
        deleteButton.className = "bwt";
        deleteButton.innerHTML = "Delete";

        cell8.appendChild(deleteButton);
        deleteButton.onclick = function () {
          deleteInstrument(coin);
        };

        profitCalculator(ticker, cell6, cell7, buyPrice, buyQuantity, () => {
          document.getElementById("totalProfit").innerText = `$${totalProfit}`;
        });

        async function profitCalculator(
          ticker,
          cell6,
          cell7,
          buyPrice,
          buyQuantity,
          updateTotalProfit
        ) {
          try {
            ticker = ticker.toLowerCase(); // Ensure lowercase for CoinGecko API

            let response = await fetch(
              `https://api.coingecko.com/api/v3/simple/price?ids=${ticker}&vs_currencies=usd`
            );
            let data = await response.json();

            if (data[ticker] && data[ticker].usd) {
              let latestPrice = data[ticker].usd;

              cell6.innerHTML = latestPrice;
              cell7.innerHTML = Math.round(
                buyQuantity * (latestPrice - parseFloat(buyPrice))
              );

              totalProfit += parseFloat(cell7.innerHTML);
              document.getElementById("totalProfit").innerHTML =
                "Total Profit is : $" + totalProfit;
            } else {
              console.error(
                "No price data available from CoinGecko for:",
                ticker
              );
              cell6.innerHTML = "N/A";
              cell7.innerHTML = "N/A";
            }
          } catch (error) {
            console.error("Error fetching from CoinGecko:", error);
          }
          updateTotalProfit();
        }

        index += 1;
      });
    }

    display();

    async function deleteInstrument(coin) {
      alert("You are going to delete " + coin);
      await deleteDoc(doc(db, "Portfolio", coin));
      console.log("Document successfully deleted!", coin);
      let tb = document.getElementById("table");
      while (tb.rows.length > 1) {
        tb.deleteRow(1);
      }
      document.getElementById("totalProfit").innerHTML = "";
      display();
    }
  },
};
</script>
  
<style scoped>
#thirdContainer {
  margin: auto;
  width: 90%;
}
#thirdContainer h1 {
  background: linear-gradient(135deg, #b8cef5, #155db4);
  color: white;
  padding: 15px;
  border-radius: 12px;
  font-size: 2.2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}
</style>
  