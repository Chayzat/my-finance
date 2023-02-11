import React from "react";
import { useAccount } from "../context/AccountContext";
import Card from "./Card";

function TotalCard() {
  const {expenses, accounts} = useAccount()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = accounts.reduce((total, account) => total + account.max, 0)

  if (max === 0 ) return null
  return (
    <Card amount={amount} name="Всего:" max={max} hideButtons/>
  );
}

export default TotalCard;
