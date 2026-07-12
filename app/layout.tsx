import Providers from "./providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xai — The Infinite Intelligence Layer",
  description:
    "Xai transforms raw enterprise data into autonomous AI automation through a real-time neural synthesis workspace.",
  openGraph: {
    title: "Xai — The Infinite Intelligence Layer",
    description:
      "Real-time neural synthesis for complex enterprise data environments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
