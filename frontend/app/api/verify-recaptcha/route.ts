import {NextRequest, NextResponse} from 'next/server'

export async function POST(req: NextRequest) {
  const {recaptchaToken} = await req.json()

  if (!recaptchaToken) {
    return NextResponse.json({success: false, error: 'Missing token'}, {status: 400})
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`,
    {method: 'POST'},
  )

  const data = await verifyRes.json()

  // v3 returns a score — 0.0 (bot) to 1.0 (human). 0.5 is a safe threshold.
  if (!data.success || data.score < 0.5) {
    return NextResponse.json({success: false, score: data.score}, {status: 200})
  }

  return NextResponse.json({success: true, score: data.score})
}
