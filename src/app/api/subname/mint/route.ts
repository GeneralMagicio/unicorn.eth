import { createSubname } from '@/services/enService'

export async function POST(request: Request) {
  const body = await request.json()
  const data = await createSubname(body)
  return Response.json(data)
}
