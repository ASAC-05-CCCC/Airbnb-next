/**
 *
 * CSR & SSR 에서 모두 사용 가능하지만,
 * CSR은 Hook 으로 만든 useFetch를 사용하자
 *
 * @param {* } url : ex) `/rooms/${id}`
 * @returns
 */
export const FetchApi = async url => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
  const data = await res.json()

  return { data }
}
