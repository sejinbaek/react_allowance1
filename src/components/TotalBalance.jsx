import React from 'react'
import css from './TotalBalance.module.css'
import { totalAmount } from '../utils/TotalCount'

const TotalBalance = ({ transactions }) => {
  const total = totalAmount(transactions)
  console.log('transactions:', transactions)

  return (
    <section className={css.totalBalanceArea}>
      <h2>잔액</h2>
      {total === 0 ? <p>잔액이 없는데요?</p> : <p>{`₩ ${total.toLocaleString()}`}</p>}
    </section>
  )
}

export default TotalBalance
