import React, { useState } from 'react'
import css from './InputText.module.css'

const InputText = ({ setTransactions }) => {
  const [inputText, setInputText] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [type, setType] = useState('income')
  const [textErr, setTextErr] = useState('')
  const [amountErr, setAmountErr] = useState('')

  // handleChange 하나로 코드 간소화
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
    let hasError = false
    // 금액 유효성 검사
    if (inputText.length < 2 || inputText.length > 10) {
      setTextErr('텍스트는 2 ~ 10자 사이로 입력해주세요')
      hasError = true
    } else {
      setTextErr('')
    }

    // 텍스트 유효성 검사
    if (isNaN(Number(inputAmount))) {
      setAmountErr('금액은 숫자로만 입력해주세요')
      hasError = true
    } else {
      setAmountErr('')
    }

    if (hasError) return

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
      if (inputText.trim() !== '' && inputAmount.trim() !== '' && type.trim() !== '') addList()
      else {
        alert('모든 필드를 입력해주세요')
      }
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
        className={textErr ? css.inputErr : ''}
      />
      {textErr && <p style={{ color: 'red' }}>{textErr}</p>}
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
        className={amountErr ? css.inputErr : ''}
      />
      {amountErr && <p style={{ color: 'red' }}>{amountErr}</p>}

      <button
        className={css.addBtn}
        type="submit"
        onClick={addList}
        disabled={inputText.trim() === '' || inputAmount.trim() === '' || type === ''}
      >
        거래 추가
      </button>
    </div>
  )
}

export default InputText
