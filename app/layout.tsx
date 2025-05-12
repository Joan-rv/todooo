import "@/styles/global.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "todooo",
  description: "A simple todooo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
