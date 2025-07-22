import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto py-5">{children}</main>
      </body>
    </html>
  );
}
