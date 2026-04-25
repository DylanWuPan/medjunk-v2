import {Resend} from 'resend'
import {NextRequest, NextResponse} from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {name, phone, email, zip, details, website} = body

    if (!name || !phone || !email) {
      return NextResponse.json({error: 'Missing required fields'}, {status: 400})
    }

    // 🛡️ Honeypot check (bots will fill this hidden field)
    if (website) {
      return NextResponse.json({success: true})
    }

    await resend.emails.send({
      from: 'quote-request@medjunk.com',
      to: 'medfieldjunk@gmail.com',
      bcc: 'dylanpan56@gmail.com',
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>New Quote Request</title>
          </head>
          <body style="margin:0;padding:0;background:#f6f7f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 16px;">
              <tr>
                <td align="center">
                  <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);">

                    <!-- Header -->
                    <tr>
                      <td style="background:linear-gradient(135deg,#20a86c,#1a8f5c);padding:28px 36px;">
                        <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.85);font-weight:600;">Medfield Junk</p>
                        <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.4px;">New Quote Request</h1>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="background:#ffffff;padding:32px 40px;">

                        ${field('', 'Name', name)}
                        ${field('', 'Phone', phone)}
                        ${field('', 'Email', email)}
                        ${field('', 'ZIP Code', zip || 'Not provided')}

                        <!-- Details block -->
                        <div style="margin-top:8px;">
                          <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#9ca3af;font-weight:500;">Details</p>
                          <div style="background:#f9f9f8;border:1px solid #e5e5e5;border-radius:8px;padding:14px 16px;">
                            <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${details || 'No additional details provided.'}</p>
                          </div>
                        </div>

                      </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                      <td style="background:#ffffff;padding:0 40px 20px;border-radius:0 0 12px 12px;">
                        <div style="border-top:1px solid #f0f0f0;padding-top:24px;">
                          <a href="tel:${phone}" style="display:inline-block;background:#20a86c;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:11px 18px;border-radius:8px;">
                            Call ${name.split(' ')[0]}
                          </a>
                          <a href="mailto:${email}" style="display:inline-block;background:#f3f4f6;color:#111111;text-decoration:none;font-size:13px;font-weight:600;padding:11px 18px;border-radius:8px;margin-left:10px;">
                            Send Email
                          </a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:0px 40px 10px;text-align:center;">
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
      tags: [
        {
          name: 'type',
          value: 'quote_request',
        },
      ],
    })

    return NextResponse.json({success: true})
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({error: 'Failed to send email'}, {status: 500})
  }
}

function field(_icon: string, label: string, value: string) {
  return `
    <div style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
      <p style="margin:0 0 3px;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:#9ca3af;font-weight:500;">
        ${label}
      </p>
      <p style="margin:0;font-size:14px;color:#111827;font-weight:500;">
        ${value}
      </p>
    </div>
  `
}
