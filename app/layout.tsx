import Link from "next/link";
import Nav from "./components/Nav";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen"> {children}</main>
       
        <footer className="p-4 bg-slate-600 flex ">
          <p>footer menus</p>
          <Link href='/'>Home</Link>
        </footer>
      </body>
    </html>
  );
}
