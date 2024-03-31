import { poapService } from '@/services/poap'

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token') || ''
  if (token) {
    const data = await poapService.postEventQRCodes(token)
    return Response.json(data)
  }
  return Response.json({ error: 'An error has occured' })
}
