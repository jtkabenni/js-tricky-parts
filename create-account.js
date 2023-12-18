function createAccount(pin, amount = 0) {
  return {
    checkBalance(checkPin) {
      if (checkPin === pin) {
        return `$${amount}`;
      }
      return "Invalid PIN.";
    },
    deposit(checkPin, depositAmount) {
      if (checkPin === pin) {
        amount += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
      }

      return "Invalid PIN.";
    },
    withdraw(checkPin, withdrawAmount) {
      if (checkPin === pin) {
        const bal = amount - withdrawAmount;
        if (bal > 0) {
          amount -= withdrawAmount;
          return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      }
      return "Invalid PIN.";
    },

    changePin(checkPin, newPin) {
      if (checkPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };
