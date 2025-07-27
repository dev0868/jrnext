import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { EnquiryModalProvider } from "./context/EnquiryModalContext";
import EnquiryModal from "./_components/EnqueryModal";

export const metadata = {
  title: "Journey Clone",
  description: "Travel the world with ease!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EnquiryModalProvider>
          <Header />
          <main>{children}</main>
          <EnquiryModal/>
          <Footer />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
