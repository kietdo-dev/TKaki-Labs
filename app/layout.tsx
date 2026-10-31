import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'TKaki-Labs — Quần short kaki nam',
    template: '%s — TKaki-Labs',
  },
  description:
    'Khám phá quần short kaki nam TKaki-Labs, được sản xuất bởi xưởng may gia đình. Xem ảnh sản phẩm, hướng dẫn chọn size và thông tin liên hệ.',
  keywords: [
    'quần short kaki nam',
    'quần short nam',
    'TKaki-Labs',
    'quần short kaki Hóc Môn',
  ],
  applicationName: 'TKaki-Labs',
  category: 'fashion',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'TKaki-Labs',
    title: 'TKaki-Labs — Quần short kaki nam',
    description:
      'Quần short kaki nam được sản xuất bởi xưởng may gia đình TKaki-Labs.',
    images: [{ url: '/assets/products/short/cover.webp', width: 1200, height: 800, alt: 'Quần short kaki TKaki-Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TKaki-Labs — Quần short kaki nam',
    description:
      'Quần short kaki nam được sản xuất bởi xưởng may gia đình TKaki-Labs.',
    images: ['/assets/products/short/cover.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: { icon: '/assets/logo.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preload" href="/assets/products/short/cover.webp" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
