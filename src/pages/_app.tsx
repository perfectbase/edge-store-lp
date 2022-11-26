import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { League_Spartan, Kalam } from "@next/font/google";
import Head from "next/head";
import Script from "next/script";
import { env } from "../env/client.mjs";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-main",
});

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-hand",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Head>
        <title>Edge Store</title>
      </Head>
      <div className={`${leagueSpartan.variable} ${kalam.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default trpc.withTRPC(MyApp);
