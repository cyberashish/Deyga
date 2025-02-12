
import "./globals.scss";
import PrelineScript from "./Components/PrelineScript";


export const metadata = {
  title: "Deyga naturals",
  description: "Deyga is a one stop solution for your organic health and wellness care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden" >{children}
      </body>
      <PrelineScript/>
    </html>
  );
}
