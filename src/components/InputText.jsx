import React, { useState } from 'react'
import css from './InputText.module.css'
import { totalAmount } from '../utils/TotalCount'

const InputText = ({ transactions, setTransactions }) => {
  const [inputText, setInputText] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [type, setType] = useState('income')
  const [errors, setErrors] = useState({
    text: '',
    amount: '',
  })

  // handleChange 하나로 코드 간소화
  const handleChange = e => {
    const { name, value } = e.target

    const inputMap = {
      text: setInputText,
      amount: setInputAmount,
      type: setType,
    }

    if (inputMap[name]) {
      inputMap[name](value)
    }
  }

  const addList = () => {
    let hasError = false
    let newErrors = { text: '', amount: '' }

    // 잔액 0일 때 지출 내역 추가 막기
    const total = totalAmount(transactions)
    if (total === 0 && type === 'expense') {
      alert('외상은 안돼요')
      return
    }

    // 금액 유효성 검사
    if (inputText.length < 2 || inputText.length > 10) {
      newErrors.text = '텍스트는 2 ~ 10자 사이로 입력해주세요'
      hasError = true
    }

    // 텍스트 유효성 검사
    if (isNaN(Number(inputAmount))) {
      newErrors.amount = '금액은 숫자로만 입력해주세요'
      hasError = true
    }
    setErrors(newErrors)

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
      addList()
    }
  }

  return (
    <div className={css.InputArea}>
      <div className={css.field}>
        <p>텍스트</p>
        <input
          placeholder="내용을 입력하세요"
          name="text"
          value={inputText}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoFocus
          className={errors.text ? css.inputErr : ''}
        />
        {errors.text && <p className={css.error}>{errors.text}</p>}
      </div>
      <div className={css.radioBtnArea}>
        <label className={css.radioBtn}>
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === 'income'}
            onChange={handleChange}
          />
          수입
        </label>
        <label className={css.radioBtn}>
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
      <div className={css.field}>
        <input
          name="amount"
          placeholder="금액을 입력하세요"
          onChange={handleChange}
          value={inputAmount}
          onKeyUp={handleKeyUp}
          className={errors.amount ? css.inputErr : ''}
        />
        {errors.amount && <p className={css.error}>{errors.amount}</p>}
      </div>

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
