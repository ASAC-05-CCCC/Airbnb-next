import path from 'path'
import fs from 'fs'
// import { NextResponse } from 'next/server'

export async function GET(req, context) {

  const id = context.params.id
  const filePath = path.join(process.cwd(), 'public', 'json', 'Data.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  // const jsonData = fs.readFileSync('/public/json/Data.json', 'utf8')
  // console.log(jsonData.path)
  const data = JSON.parse(jsonData)
  const room = data.accommodationInfo.find(room => room.accommodationId === parseInt(id, 10));

  return new Response(JSON.stringify(room), {
    status: 200,
    headers: {
      'Content-Type': 'roomData/json',
    },
  })

  // return NextResponse.json(jsonData)
}