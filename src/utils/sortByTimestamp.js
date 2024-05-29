const sortortByTimestamp = reviews => {
  const sortByTimestamp = data => {
    // @ts-ignore
    return [...data].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  }
  return sortByTimestamp(reviews)
}

export default sortortByTimestamp
