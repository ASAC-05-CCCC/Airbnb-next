import path from 'path'
import fs from 'fs'

export async function GET(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'json', 'Review.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(jsonData)

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'review/json',
    },
  })
}
