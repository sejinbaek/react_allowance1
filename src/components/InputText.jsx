import React, { useState } from 'react'
import css from './InputText.module.css'

const InputText = ({ setTransactions }) => {
  const [inputText, setInputText] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [type, setType] = useState('income')

  const handleChange = e => {
    const { name, value } = e.target
    if (name === 'text') {
      setInputText(value)
    } else if (name === 'amount') {
      setInputAmount(value)
    } else if (name === 'type') {
      setType(value)
    }
  }

  const addList = () => {
    setTransactions(prev => {
      const maxId = prev.length > 0 ? Math.max(...prev.map(t => t.id)) : 0

      const newList = {
        id: maxId + 1,
        description: inputText,
        amount: Number(inputAmount),
        type: type,
        date: new Date().toISOString().slice(0, 10),
      }

      return [...prev, newList]
    })

    setInputText('') //초기화
    setInputAmount('')
    setType('income')
  }

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      addList()
    }
  }

  return (
    <div className={css.InputArea}>
      <p>텍스트</p>
      <input
        placeholder="내용을 입력하세요"
        name="text"
        value={inputText}
        onChange={handleChange}
      />
      <div className={css.radioBtn}>
        <label>
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === 'income'}
            onChange={handleChange}
          />
          수입
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === 'expense'}
            onChange={handleChange}
          />
          지출
        </label>
      </div>
      <input
        name="amount"
        placeholder="금액을 입력하세요"
        onChange={handleChange}
        value={inputAmount}
        onKeyUp={handleKeyUp}
      />

      <button
        className={css.addBtn}
        type="submit"
        onClick={addList}
        disabled={inputText === '' || inputAmount === '' || type === ''}
      >
        거래 추가
      </button>
    </div>
  )
}

export default InputText
