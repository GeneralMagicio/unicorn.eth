import { getUserPOAPs } from "@/services/poap"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const address = searchParams.get('address')

  if (!address)
    return new Response(`You need to provide an address`, {
      status: 400,
    })

  try {
    const response = await getUserPOAPs(address)

    return Response.json(response)
  } catch (error) {
    console.error(error)
    return new Response(`Internal error`, {
      status: 500,
    })
  }
}
