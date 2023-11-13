import {type NextRequest} from 'next/server'
import axios from "axios";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const res = await axios.get(`${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API}?input=${query}&key=${process.env.NEXT_PUBLIC_API_KEY}&types=geocode&components=country:us`)
    const data = await res.data

    return Response.json(data)
}