import "./globals.css";
import { Metadata } from "next";
import { DataProvider } from "@/contexts/GeneralContext";
import MyThemeProvider from "@/general/MyThemeProvider";

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
        <MyThemeProvider>
          <DataProvider>{children}</DataProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
}
