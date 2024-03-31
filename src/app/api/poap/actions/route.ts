import { poapService } from '@/services/poap'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address') || ''
  try {
    const data = await poapService.getActionsScan({
      address,
    })
    return Response.json(data)
  } catch (err) {
    return Response.json({ error: err })
  }
}
