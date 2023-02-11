import React from 'react'
import { UNCATEGORIZED_ID, useAccount } from '../context/AccountContext'
import Card from './Card'

function UncategorizedCard(props) {
    const {getAccountExpenses} = useAccount()
    const amount = getAccountExpenses(UNCATEGORIZED_ID).reduce(
        (total, expense) => total + expense.amount, 0
    )
    if (amount === 0) return null
  return (
    <Card amount={amount} name="Прочее" {...props} hideButton/>
  )
}

export default UncategorizedCard