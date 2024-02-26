import { createCustomSubnameData } from '@/services/enService'

export async function PUT(request: Request) {
  const body = await request.json()
  const data = await createCustomSubnameData(body)
  return Response.json(data)
}
