import QRCode from 'qrcode'

export async function generateQRDataUrl(token: string): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://nexora2027.vercel.app'
  const payload = `${baseUrl}/ticket/verify?token=${token}`
  return QRCode.toDataURL(payload, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 300,
    color: { dark: '#10152B', light: '#FFFFFF' },
  })
}

export async function generateQRBuffer(token: string): Promise<Buffer> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://nexora2027.vercel.app'
  const payload = `${baseUrl}/ticket/verify?token=${token}`
  return QRCode.toBuffer(payload, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 300,
    color: { dark: '#10152B', light: '#FFFFFF' },
  })
}
