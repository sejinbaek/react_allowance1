import React from 'react'
import InputText from './InputText'

const NewTransaction = ({ transactions, setTransactions }) => {
  return (
    <section>
      <h2>새로운 거래 추가</h2>
      <InputText transactions={transactions} setTransactions={setTransactions} />
    </section>
  )
}

export default NewTransaction
