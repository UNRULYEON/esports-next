import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Footer, ThemeProvider } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "eSports Next",
  description: "eSports Next",
};

export default async function RootLayout({
  children,
  matchDetails,
}: Readonly<{
  children: React.ReactNode;
  matchDetails: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="grid grid-rows-[1fr,auto] p-3 sm:p-6">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main
              className="flex flex-1 flex-row overflow-auto"
              data-vaul-drawer-wrapper
            >
              {children}
              {matchDetails}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
