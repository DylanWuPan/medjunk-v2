import {Resend} from 'resend'
import {NextRequest, NextResponse} from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {name, phone, email, zip, details} = body

    if (!name || !phone || !email) {
      return NextResponse.json({error: 'Missing required fields'}, {status: 400})
    }

    await resend.emails.send({
      from: 'quote-request@medjunk.com',
      to: 'medfieldjunk@gmail.com',
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>New Quote Request</title>
          </head>
          <body style="margin:0;padding:0;background:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 16px;">
              <tr>
                <td align="center">
                  <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

                    <!-- Header -->
                    <tr>
                      <td style="background:#20a86c;border-radius:12px 12px 0 0;padding:32px 40px;">
                        <p style="margin:0 0 8px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#111111;font-weight:500;">Medfield Junk</p>
                        <h1 style="margin:0;font-size:22px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;">New Quote Request</h1>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="background:#ffffff;padding:32px 40px;">

                        <!-- Alert bar -->
                        <div style="background:#f0fdf8;border:1px solid #a7f3d0;border-left:3px solid #20a86c;border-radius:8px;padding:12px 16px;margin-bottom:28px;">
                          <p style="margin:0;font-size:13px;color:#065f46;">
                            ✦ &nbsp;A customer just submitted a quote request. Reach out soon!
                          </p>
                        </div>

                        ${field('👤', 'Name', name)}
                        ${field('📞', 'Phone', phone)}
                        ${field('✉️', 'Email', email)}
                        ${field('📍', 'ZIP Code', zip || 'Not provided')}

                        <!-- Details block -->
                        <div style="margin-top:8px;">
                          <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;font-weight:500;">📝 &nbsp;Details</p>
                          <div style="background:#f9f9f8;border:1px solid #e5e5e5;border-radius:8px;padding:14px 16px;">
                            <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${details || 'No additional details provided.'}</p>
                          </div>
                        </div>

                      </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                      <td style="background:#ffffff;padding:0 40px 32px;border-radius:0 0 12px 12px;">
                        <div style="border-top:1px solid #f0f0f0;padding-top:24px;">
                          <a href="tel:${phone}" style="display:inline-block;background:#20a86c;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 20px;border-radius:6px;">
                            Call ${name.split(' ')[0]}
                          </a>
                          <a href="mailto:${email}" style="display:inline-block;background:#f4f4f0;color:#111111;text-decoration:none;font-size:13px;font-weight:500;padding:10px 20px;border-radius:6px;margin-left:8px;">
                            Send Email
                          </a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:24px 40px 0;text-align:center;">
                        <p style="margin:0;font-size:11px;color:#9ca3af;">
                          Medfield Junk · Massachusetts &nbsp;·&nbsp; This email was sent automatically from your quote form.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    })

    return NextResponse.json({success: true})
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({error: 'Failed to send email'}, {status: 500})
  }
}

function field(icon: string, label: string, value: string) {
  return `
    <div style="display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:14px;margin-top:1px;">${icon}</span>
      <div>
        <p style="margin:0 0 2px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;font-weight:500;">${label}</p>
        <p style="margin:0;font-size:14px;color:#111111;font-weight:500;">${value}</p>
      </div>
    </div>
  `
}
