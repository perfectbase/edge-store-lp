import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { League_Spartan, Kalam } from "@next/font/google";
import Head from "next/head";

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
