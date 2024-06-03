import type { Metadata } from "next";
import { Inter,PT_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/seo/GoogleAnalytics";

const inter = PT_Sans({weight:"700",subsets:['latin']});

export const metadata: Metadata = {
  title: 'Portfolio 2024',
  description: 'Nwekar Sharif portfolio 2024',
  icons:[
     {
      url: 'https://res.cloudinary.com/dvcktacid/image/upload/v1717458757/cloqbgqzuwoajoqgbuf3.png',
      

     }
  ],
  openGraph: {
    title: 'Nwekar Sharif - Portfolio 2024',
    description: 'Nwekar Sharif portfolio 2024',
    images: [
      {
        url: 'https://res.cloudinary.com/dvcktacid/image/upload/v1717458757/cloqbgqzuwoajoqgbuf3.png',
        width: 800,
        height: 600,
        alt: 'Nwekar Sharif Portfolio 2024',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nwekar Sharif - Portfolio 2024',
    description: 'Nwekar Sharif portfolio 2024',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}</body>
    </html>
  );
}
