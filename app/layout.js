import "./globals.css";

export const metadata = {
  title: "AirCraft",
  description: "AirCraft Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
