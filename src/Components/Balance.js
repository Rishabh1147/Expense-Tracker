import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalStates'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map(transactions => transactions.amount);
  const total = amount.reduce((acc,item) => (acc += item),0).toFixed(2);

  return (
    <>
        <h4>Your Balance</h4>
        <h1>{total}</h1>
        
    </>
  )}
