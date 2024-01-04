import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStates'

export const Transaction = ({transaction}) => {
  console.log(transaction)
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-':'+'; 


  return (
    <li className={transaction.amount < 0 ? 'minus':'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button 
           onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  )
}
// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalStates';

// export const Transaction = ({ transaction }) => {
//   const { deleteTransaction } = useContext(GlobalContext);
//   const sign = transaction.amount < 0 ? '-' : '+';

//   const handleDelete = (evt) => {
//     console.log(transaction.id)
//     deleteTransaction(transaction.id);
//   };

//   return (
//     <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
//       {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
//       <button onClick={handleDelete} className="delete-btn">
//         x
//       </button>
//     </li>
//   );
// };
