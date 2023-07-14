import "./globals.css";
import { Metadata } from "next";
import { DataProvider } from "@/contexts/GeneralContext";

export const metadata: Metadata = {
  title: `آمارسین`,
  description: "نرم افزار مالی داتیس",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-vazir rtl">
      <body>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
