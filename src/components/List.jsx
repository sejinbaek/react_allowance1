import React from 'react'
import css from './List.module.css'

const List = ({ transaction, setTransactions }) => {
  // console.log('List', transaction)
  //삭제 버튼 누르면 리스트 삭제
  const removeList = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      console.log('리스트가 삭제되었습니다')
      setTransactions(prev => {
        const newData = prev.filter(item => item !== transaction)
        return newData
      })
    }
  }

  return (
    <li
      className={`${css.list} ${transaction.type === 'income' ? css.incomeList : css.expenseList}`}
    >
      <p>{transaction.description}</p>
      <p>
        {transaction.type === 'income' ? '+' : '-'}
        {transaction.amount}
      </p>
      <button onClick={removeList}>삭제</button>
    </li>
  )
}

export default List
