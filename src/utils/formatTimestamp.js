// @ts-nocheck
const formatTimestamp = reviews => {
  const currentDate = new Date()

  return reviews.map(review => {
    const targetDate = new Date(review.timestamp)
    const diffTime = Math.abs(currentDate - targetDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const isSameYear = currentDate.getFullYear() === targetDate.getFullYear()

    if (diffDays <= 6) {
      return {
        ...review,
        timestamp: `${diffDays}일 전`,
      }
    } else if (diffDays <= 13) {
      return {
        ...review,
        timestamp: '1주 전',
      }
    } else if (diffDays <= 20) {
      return {
        ...review,
        timestamp: '2주 전',
      }
    } else if (diffDays <= 27) {
      return {
        ...review,
        timestamp: '3주 전',
      }
    } else if (isSameYear) {
      return {
        ...review,
        timestamp: `${currentDate.getFullYear()}년 ${targetDate.getMonth() + 1}월`,
      }
    } else {
      return {
        ...review,
        timestamp: `${targetDate.getFullYear()}년 ${targetDate.getMonth() + 1}월`,
      }
    }
  })
}

export default formatTimestamp
