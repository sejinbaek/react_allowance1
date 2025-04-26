import React from 'react'
import css from './TotalBalance.module.css'

const TotalBalance = ({ transactions }) => {
  console.log('transactions:', transactions)
  //지출이면 총 잔액에서 - => 고차함수 reduce 사용
  //수입이면 총 잔액에서 +
  const totalAmount = () => {
    const total = transactions.reduce((acc, cur) => {
      if (cur.type === 'income') {
        return acc + cur.amount
      } else {
        return acc - cur.amount
      }
    }, 0)

    return total
  }

  return (
    <section className={css.totalBalanceArea}>
      <h2>잔액</h2>
      {totalAmount() === 0 ? <p>잔액이 없는데요?</p> : <p>₩{totalAmount().toLocaleString()}</p>}
    </section>
  )
}

export default TotalBalance
