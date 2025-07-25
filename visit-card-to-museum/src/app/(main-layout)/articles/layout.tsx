import {Inter} from "next/font/google";
import {Metadata} from "next";
import {ArticlesMenu} from "@/components/articles-menu";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <ArticlesMenu/>
            <div className="flex items-center justify-center min-h-screen">
                {children}
            </div>
        </>

    );
}
