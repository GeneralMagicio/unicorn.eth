import { createTextRecord, getSubnameMetadata } from '@/services/enService'

export async function PUT(request: Request) {
  const body = await request.json()
  const data = await createTextRecord(body)
  return Response.json(data)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const label = searchParams.get('label') || ''
  const key = searchParams.get('key') || ''
  try {
    const data = await getSubnameMetadata({ label, key })
    return Response.json(data)
  } catch (err) {
    return Response.json({ record: null })
  }
}
