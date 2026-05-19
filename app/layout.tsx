import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource-variable/mulish";
import "@fontsource-variable/mulish/wght-italic.css";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Nav from "@/components/Nav"



export const metadata: Metadata = {
  title: "Hills Portfolio",
  description: "Software Engineer",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
