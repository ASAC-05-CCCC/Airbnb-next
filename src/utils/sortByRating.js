const sortByHighRatings = reviews => {
  return [...reviews].sort((a, b) => b.ratings - a.ratings)
}

const sortByLowRatings = reviews => {
  return [...reviews].sort((a, b) => a.ratings - b.ratings)
}

export { sortByHighRatings, sortByLowRatings }
