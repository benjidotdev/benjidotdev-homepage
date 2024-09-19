import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import {ReactNode} from 'react'
import clsx from 'clsx'
import Header from '@/app/components/header/Header'

const supra = localFont({
  src: [
    {
      path: '../public/static/fonts/suprapower/Suprapower-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/suprapower/Suprapower-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/suprapower/Suprapower-Heavy.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-supra'
})

const poppins = localFont({
  src: [
    {
      path: '../public/static/fonts/poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../public/static/fonts/poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: "Benji.dev - User-focused Product Designer and JavaScript Developer",
  description: "Homepage of benji.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        poppins.className,
        supra.variable,
        "flex flex-col flex-grow items-center justify-center"
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
