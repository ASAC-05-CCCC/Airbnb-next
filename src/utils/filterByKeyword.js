const filterByKeyword = (data, keyword) => {
  if (!keyword.trim()) {
    return data
  }
  return data.filter(item => item.message.toLowerCase().includes(keyword.toLowerCase()))
}

export default filterByKeyword
