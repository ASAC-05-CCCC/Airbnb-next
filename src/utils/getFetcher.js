export const getFetcher = url => {
  const response = fetch(url, {
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data)

  return response
}
