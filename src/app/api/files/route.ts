import axios from 'axios'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File
    data.append('file', file)
    data.append('pinataMetadata', JSON.stringify({ name: 'File to upload' }))
    const res = await axios.post(
      process.env.NEXT_PUBLIC_PINATA_UPLOAD_URL!,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      }
    )
    const { IpfsHash } = res.data
    return NextResponse.json({ IpfsHash }, { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
