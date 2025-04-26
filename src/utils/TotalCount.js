export const totalAmount = transactions => {
  const total = transactions.reduce((acc, cur) => {
    if (cur.type === 'income') {
      return acc + cur.amount
    } else {
      return acc - cur.amount
    }
  }, 0)

  return total
}
