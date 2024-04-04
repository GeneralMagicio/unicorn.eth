import { poapService } from '@/services/poap'

export async function POST(request: Request) {
  try {
    const data = await poapService.postOauthToken()
    return Response.json(data)
  } catch (err) {
    return Response.json({ err })
  }
}
