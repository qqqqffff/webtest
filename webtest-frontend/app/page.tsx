import React from 'react'

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <title>Web Test</title>
            </head>
            <body>
                <noscript>
                    If you are seeing this message you do not have JS enable. JS is required for this app to work
                </noscript>
                <div>
                    {"something cool"}
                </div>
            </body>
        </html>
        
    )
}