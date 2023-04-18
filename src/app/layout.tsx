import { TrpcProvider } from "../utils/trpcProvider";
import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter();

import "../styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <TrpcProvider>
        <body>
          {children}
          <Analytics />
        </body>
      </TrpcProvider>
    </html>
  );
};

export default RootLayout;
