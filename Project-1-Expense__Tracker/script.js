
const Balance = document.getElementById('Balance');
const Money_Plus = document.getElementById("Money-Plus");
const Money_Minus = document.getElementById("Money-Minus");
const  List = document.getElementById('list');
const Form = document.getElementById("Form");
const Text = document.getElementById("Text");
const Amount  = document.getElementById("amount");

const dummyTransactions = [ {id: 1, Text:"Flower",Amount:"-20"},
{id:2, Text:"Salary",Amount:"300"},
{id:3, Text:"Book",Amount:"-10"},
{id: 4, Text:"Camera",Amount:"150"}
]

let Transactions = dummyTransactions;

function addTranactionsDOM(transaction)
{
    const sign = transaction[1].Amount<0? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(
        transaction[1].Amount< 0  ? "Minus" : "Plus"
    );
    item.innerHTML = `${transaction[1].Text}<span> ${sign}${Math.abs(transaction[1].Amount)}</span>
<button class="delete-btn" onclick=""> x </button>`;
List.appendChild(item);
}
// function updateValues()
// {
//     const amounts  = Transactions.map(transaction => transaction.Amount);
//     // const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

// }
// INIT APP
// function Init()
// {
//     List.innerHTML = " ";
//     Transactions.forEach(addTranactionsDOM);
//     updateValues();
// }
addTranactionsDOM(Transactions);