import { Helmet } from "react-helmet"
import React from "react"
export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://www.spookytech.com",
                "name": "Spooky technologies",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+5-601-785-8543",
                  "contactType": "Customer Support"
                }
              }
            `}
        </script>
      </Helmet>
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    </div>
  )
}
