import "./globals.css";

// Configure base URL for metadata, automatically resolving Vercel's environment variables
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'));

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "The Dot | Digital Excellence",
    template: "%s | The Dot"
  },
  description: "Crafting digital excellence, one dot at a time. Specializing in Web Development, SMM, Photography, and AI solutions.",
  keywords: ["Digital Agency", "Web Development", "Social Media Management", "Photography", "AI Solutions", "The Dot", "Marketing"],
  authors: [{ name: "The Dot" }],
  creator: "The Dot",
  publisher: "The Dot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Dot | Digital Excellence",
    description: "Crafting digital excellence, one dot at a time. Specializing in Web Development, SMM, Photography, and AI solutions.",
    url: baseUrl,
    siteName: "The Dot",
    images: [
      {
        url: "/og-image.jpg", // Create this image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "The Dot - Digital Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dot | Digital Excellence",
    description: "Crafting digital excellence, one dot at a time. Web Development, SMM, Photography, and AI solutions.",
    images: ["/og-image.jpg"],
    creator: "@thedot", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) to help search engines understand your site
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'The Dot',
    description: 'Crafting digital excellence, one dot at a time. Web Development, SMM, Photography, and AI solutions.',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    sameAs: [
      'https://www.linkedin.com/company/thedot',
      'https://www.instagram.com/thedot'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
