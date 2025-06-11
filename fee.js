function getTransactionFee(amount) {
  let fee = amount * 0.015;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  console.log("Calculated Transaction Fee: KES " + fee);
  return fee;
}

function getTotalDebit(amount, fee) {
  let total = amount + fee;
  console.log("Total amount to be debited: KES " + total);
  return total;
}

function transactionFeeEstimator() {
  let amountInput = prompt("Unatuma Ngapi? (KES):");
  let amount = Number(amountInput);

  console.log("transactionFeeEstimator");
  console.log("Sending KES " + amount + ":");

  let fee = getTransactionFee(amount);
  getTotalDebit(amount, fee);

  console.log("");
  console.log("Send Money Securely! 📱");
}

transactionFeeEstimator();