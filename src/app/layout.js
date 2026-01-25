import "./globals.css";

export const metadata = {
  title: "The Dot | Digital Excellence",
  description: "Crafting digital excellence, one dot at a time. Web Development, SMM, Photography, and AI solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
