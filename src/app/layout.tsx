import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.css";
import ThemeContextProvider from "./context/context";

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
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

