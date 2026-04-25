import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DefaultBackground } from "@/components/ui/default-background";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "다짐 캡슐",
    description:
        "마음속으로만 했던 다짐, 전하지 못했던 진심, 이루고자 하는 목표. 이곳 다짐 캡슐에서 편하게 이야기 해보아요.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="font-sans antialiased">
                <DefaultBackground />
                {children}

                {process.env.NODE_ENV === "production" && <Analytics />}
            </body>
        </html>
    );
}
