export const addItemToCart = (items, newItem) => {
  const oldArray = [...items];
  const existingItem = oldArray.find(item => item.id === newItem.id)
  if (existingItem) {
    return [...oldArray.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)]
  }
  return [...oldArray, {
    ...newItem,
    quantity: 1
  }]
}
export const removeItemFromCart = (items, removedItem) => {
  const oldArray = [...items];
  const existingItem = oldArray.find(item => item.id === removedItem.id)
  if (existingItem && existingItem.quantity > 1) {
    return [...oldArray.map(item => existingItem.id === item.id ? { ...item, quantity: item.quantity - 1 } : item)]
  } else {
    return [...oldArray.filter(item => item.id !== removedItem.id)]
  }
}