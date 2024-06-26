import { NextResponse } from 'next/server'
import Data from '../../../../public/json/Accommodation.json'

export async function GET(request, context) {
  // const url = new URL(request.url)
  // const categoryId = url.searchParams.get('category')

  return NextResponse.json(Data.accommodationInfo)
}
