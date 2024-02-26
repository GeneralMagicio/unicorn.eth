import { getSubnameResolution } from '@/services/enService'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address') || ''
  const data = await getSubnameResolution({ address })
  return Response.json(data)
}
