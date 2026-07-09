import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon Configuration */}
        <link rel="icon" type="image/x-icon" href="/MultiMian-Studio/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/MultiMian-Studio/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/MultiMian-Studio/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/MultiMian-Studio/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/MultiMian-Studio/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/MultiMian-Studio/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/MultiMian-Studio/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
