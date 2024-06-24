import path from 'path'
import fs from 'fs'

/**\
 * * 1. 현재 브라우저의 rooms id를 가져온다.
 * ? 접속한 url에서 rooms 정보를 받아온다. (pathname or searchParam 을 통해)
 *
 */

export const fetchRoomData = () => {
  //json 파일 fetch -> 추후 spring api 받는 로직으로 변경
  const filePath = path.join(process.cwd(), 'public', 'json', 'Accommodation.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')

  const roomDataList = JSON.parse(jsonData).accommodationInfo
  return roomDataList
}
