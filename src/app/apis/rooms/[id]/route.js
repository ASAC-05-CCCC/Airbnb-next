import path from 'path'
import fs from 'fs'

export async function GET(req, context) {
  //
  const roomId = context.params.id
  const filePath = path.join(process.cwd(), 'public', 'json', 'Accommodation.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')

  const roomDataList = JSON.parse(jsonData).accommodationInfo

  // roomId에 대한 데이터 객체
  const eachRoom = roomDataList.filter(each => {
    return each.accommodationId === +roomId
  })[0]

  return new Response(JSON.stringify(eachRoom), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // return NextResponse.json(jsonData)
}
