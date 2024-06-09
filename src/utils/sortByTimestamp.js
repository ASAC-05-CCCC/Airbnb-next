const sortByTimestamp = reviews => {
  // @ts-ignore
  return [...reviews].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
}

export default sortByTimestamp
