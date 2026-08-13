import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IGNOS Hardware Sponsorship",
  description:
    "A hardware sponsorship brief for InfraGrid-NexusOS, an independent college-student-built GPU compute orchestration project.",
  authors: [{ name: "Anthony Yancy" }],
  creator: "Anthony Yancy",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
