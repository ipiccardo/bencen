import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.css";

export const metadata = {
  title: "Bencen",
  description: "Bencen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
