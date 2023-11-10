import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import ReduxProvider from "../../state/provider";
import {PrimeReactProvider} from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Google Maps API',
    description: 'Google Maps API for search and display places',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <PrimeReactProvider>
            <ReduxProvider>
                {children}
            </ReduxProvider>
        </PrimeReactProvider>
        </body>

        </html>
    )
}

