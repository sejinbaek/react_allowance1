import NewTransaction from './components/NewTransaction'
import PostList from './components/PostList'
import TotalBalance from './components/TotalBalance'
import TotalInOut from './components/TotalInOut'

import React, { useState, useEffect } from 'react'

import './index.css'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  return (
    <div>
      <header className="hd">
        <h1>용돈기입장</h1>
      </header>
      <div className="container">
        <TotalBalance transactions={transactions} />
        <TotalInOut transactions={transactions} />
        <NewTransaction transactions={transactions} setTransactions={setTransactions} />
        <PostList transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  )
}

export default App
