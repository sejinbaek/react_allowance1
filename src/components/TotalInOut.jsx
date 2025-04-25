import React from 'react'
import css from './TotalInOut.module.css'

const TotalInOut = ({ transactions }) => {
  console.log('TotalInOut', transactions)
  const totalInCome = () => {
    return transactions.reduce((acc, cur) => {
      if (cur.type === 'income') {
        return acc + Number(cur.amount)
      } else {
        return acc
      }
    }, 0)
  }

  const totalExpense = () => {
    const total = transactions.reduce((acc, cur) => {
      if (cur.type === 'expense') {
        return acc + Number(cur.amount)
      } else {
        return acc
      }
    }, 0)
    return total
  }

  return (
    <section className={css.TotalInOutArea}>
      <div className={css.TotalInCome}>
        <h2>수입</h2>
        <span>₩{totalInCome().toLocaleString()}</span>
      </div>
      <div className={css.TotalExpense}>
        <h2>지출</h2>
        <span className={css.TotalExpense}>₩{totalExpense().toLocaleString()}</span>
      </div>
    </section>
  )
}

export default TotalInOut
