const sortByHighRatings = reviews => {
  return [...reviews].sort((a, b) => b.rating - a.rating)
}

const sortByLowRatings = reviews => {
  return [...reviews].sort((a, b) => a.rating - b.rating)
}

export { sortByHighRatings, sortByLowRatings }
