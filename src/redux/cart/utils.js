export const addItemToCart = (items, newItem) => {
  const oldArray = [...items];
  const existingItem = oldArray.find(item => item.id === newItem.id)
  if (existingItem) {
    return [...oldArray.filter(item => item.id !== newItem.id), {
      ...existingItem,
      quantity: existingItem.quantity + 1
    }]
  }
  return [...oldArray, {
    ...newItem,
    quantity: 1
  }]
}