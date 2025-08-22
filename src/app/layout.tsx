import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider/theme-provider";
import Header from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Footer from "@/components/footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-googlePoppins",
});

export const metadata: Metadata = {
    title: "phoenix Global",
    description: "We bring an electrical flare",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.className} antialiased`}>
                {/* Immediate loader */}
                {/* <div
                    suppressHydrationWarning
                    id="initial-loader"
                    className="fixed inset-0 w-full h-full bg-background flex items-center justify-center z-[9999]"
                >
                    <div className="w-14 h-14 bg-[url('/images/logo.png')] animate-spin"></div>
                </div> */}

                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div
                        className="w-full min-h-screen flex justify-center"
                        // id="app-content"
                        // style={{ display: "none" }}
                    >
                        <div className="w-full">
                            {/* <TopContact /> */}
                            <Header />
                            {children}
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
                <TailwindIndicator />
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.addEventListener('load', function () {
                document.getElementById('initial-loader').style.display = 'none';
                document.getElementById('app-content').style.display = 'block';
              });
            `,
                    }}
                /> */}
            </body>
        </html>
    );
}
