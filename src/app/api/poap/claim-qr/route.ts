import { poapService } from '@/services/poap'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const qr_hash = searchParams.get('qr_hash') || ''
  const token = searchParams.get('token') || ''
  try {
    const data = await poapService.getActionsClaimQr(
      {
        qr_hash,
      },
      token
    )
    return Response.json(data)
  } catch (err) {
    return Response.json({ error: 'An error has occured' })
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address') || ''
  const qr_hash = searchParams.get('qr_hash') || ''
  const secret = searchParams.get('secret') || ''
  const token = searchParams.get('token') || ''
  console.log({ qr_hash, address, secret, token })
  try {
    const data = await poapService.postActionsClaimQr(
      {
        address,
        qr_hash,
        secret,
        sendEmail: false,
      },
      token
    )
    return Response.json(data)
  } catch (err: any) {
    return Response.json(
      { message: err.response.data.message },
      { status: 400 }
    )
  }
}
