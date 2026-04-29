import { ThemeProvider } from 'next-themes'

export default function RootLayout({children}){
    return(
        <html lang="pt-BR" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}