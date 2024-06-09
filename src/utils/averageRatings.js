const averageRatings = data => {
  if (data.length === 0) return 0
  const sum = data.reduce((acc, current) => acc + current.rating, 0)
  const average = sum / data.length
  return average
}

export default averageRatings
