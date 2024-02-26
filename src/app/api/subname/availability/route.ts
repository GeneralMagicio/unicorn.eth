import { getIsNameAvailable } from '@/services/enService'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const label = searchParams.get('label') || ''
  if (label) {
    const data = await getIsNameAvailable({ label })
    console.log({ data })
    return Response.json(data)
  }
  return Response.json({ isAvailable: false })
}
