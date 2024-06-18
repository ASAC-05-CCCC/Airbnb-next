// @ts-nocheck
const convertStarCountsToRatings = starCounts => {
  return Object.keys(starCounts)
    .sort((a, b) => b - a) // 키를 내림차순으로 정렬
    .map(star => ({
      stars: Number(star),
      percentage: starCounts[star],
    }))
}

export default function calculateStarCounts(reviews) {
  // 각 별점 초기화
  const starCounts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  }

  // 리뷰가 없는 경우 0%로 초기화된 객체 반환
  if (reviews.length === 0) {
    return convertStarCountsToRatings(starCounts)
  }

  // 각 별점 개수 세기
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      starCounts[review.rating]++
    }
  })

  // 전체 리뷰 수
  const totalReviews = reviews.length

  // 각 별점 비율 계산 (전체 합이 100이 되도록)
  Object.keys(starCounts).forEach(star => {
    starCounts[star] = (starCounts[star] / totalReviews) * 100
  })

  return convertStarCountsToRatings(starCounts)
}
