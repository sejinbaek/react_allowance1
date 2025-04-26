import React from 'react'
import css from './TotalInOut.module.css'

const TotalInOut = ({ transactions }) => {
  // 총 수입을 구하는 함수
  const totalInCome = () => {
    return transactions.reduce((acc, cur) => {
      if (cur.type === 'income') {
        return acc + Number(cur.amount)
      } else {
        return acc
      }
    }, 0)
  }
  // 총 지출을 구하는 함수
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
        <p>{`₩ ${totalInCome().toLocaleString()}`}</p>
      </div>
      <div className={css.TotalExpense}>
        <h2>지출</h2>
        <p className={css.TotalExpense}>{`₩ ${totalExpense().toLocaleString()}`}</p>
      </div>
    </section>
  )
}

export default TotalInOut
