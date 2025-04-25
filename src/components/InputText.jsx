import React, { useState } from 'react'
import css from './InputText.module.css'

const InputText = ({ setTransactions }) => {
  const [inputText, setInputText] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [type, setType] = useState('income')

  const onChangeText = e => {
    setInputText(e.target.value)
  }
  const onChangeAmount = e => {
    setInputAmount(e.target.value)
  }
  const onChangeType = e => {
    setType(e.target.value)
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

  return (
    <div className={css.InputArea}>
      <p>텍스트</p>
      <input placeholder="내용을 입력하세요" onChange={onChangeText} value={inputText} />
      <div className={css.radioBtn}>
        <label>
          <input
            type="radio"
            name="radio"
            value="income"
            checked={type === 'income'}
            onChange={onChangeType}
          />
          수입
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="expense"
            checked={type === 'expense'}
            onChange={onChangeType}
          />
          지출
        </label>
      </div>
      <input placeholder="금액을 입력하세요" onChange={onChangeAmount} value={inputAmount} />

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
