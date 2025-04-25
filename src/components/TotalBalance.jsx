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
      <span>₩{totalAmount().toLocaleString()}</span>
    </section>
  )
}

export default TotalBalance
