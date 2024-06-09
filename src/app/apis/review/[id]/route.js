import path from 'path'
import fs from 'fs'

export async function GET(req, context) {
  const id = context.params.id
  const filePath = path.join(process.cwd(), 'public', 'json', 'review.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(jsonData)
  const room = data.filter(room => room.post_id === parseInt(id, 10))
  return new Response(JSON.stringify(room), {
    status: 200,
    headers: {
      'Content-Type': 'roomData/json',
    },
  })
}
