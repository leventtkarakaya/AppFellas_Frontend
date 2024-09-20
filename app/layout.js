import "./globals.css";
import ProviderRedux from "@/app/redux/provider";

export const metadata = {
  title: "AirCraft",
  description: "AirCraft Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <ProviderRedux>{children}</ProviderRedux>
      </body>
    </html>
  );
}
