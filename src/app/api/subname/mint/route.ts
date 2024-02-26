import { createCustomSubnameData } from '@/services/enService'

export async function POST(request: Request) {
  const body = await request.json()
  const data = await createCustomSubnameData(body)
  return Response.json(data)
}
