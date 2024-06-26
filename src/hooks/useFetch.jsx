import useSWR, { mutate } from 'swr'

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

const useFetch = url => {
  const baseUrl = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}${url}`

  const { data, error, isLoading } = useSWR(baseUrl, getFetcher)

  return { data, error, isLoading, mutate }
}
export default useFetch

export async function updateData(url, data) {
  // Update local cache
  await mutate(url, data, false)

  // Revalidate (fetch fresh data from server)
  await mutate(url)
}
