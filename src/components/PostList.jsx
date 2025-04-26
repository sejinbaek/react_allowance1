import React from 'react'
import List from './List'
import css from './PostList.module.css'

const PostList = ({ transactions, setTransactions }) => {
  return (
    <section className={css.listArea}>
      <h2>내역</h2>
      <div className={`${css.list}`}>
        {transactions.map(transaction => (
          <List transaction={transaction} setTransactions={setTransactions} key={transaction.id} />
        ))}
      </div>
    </section>
  )
}

export default PostList
