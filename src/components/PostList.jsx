import React from 'react'
import List from './List'
import css from './PostList.module.css'

const PostList = ({ transactions, setTransactions }) => {
  console.log('PostList', transactions)
  return (
    <section className={css.listArea}>
      <h2>내역</h2>
      <div className={css.list}>
        {transactions.map((transaction, i) => (
          <List transaction={transaction} setTransactions={setTransactions} key={i} />
        ))}
      </div>
    </section>
  )
}

export default PostList
