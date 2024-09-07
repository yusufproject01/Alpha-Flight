import { NextResponse } from "next/server"


export async function GET() {
    const data = {
        message: "Hello, Next.js!",
        success: true,
    }
    return NextResponse.json(data)
}

// export async function POST(request: Request) {
//     const requestBody = await request.json()
//     const respionseMessage = {
//         message: "Hello, Next.js!",
//         success: true,
//     }
//     return NextResponse.json(respionseMessage)
// }