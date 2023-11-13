import {type NextRequest} from 'next/server'
import axios from "axios";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const place_id = searchParams.get('place_id')
    const res = await axios.get(`${process.env.NEXT_PUBLIC_GOOGLE_PLACE_DETAIL_API}?fields=address_components&place_id=${place_id}&key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await res.data

    return Response.json(data)
}