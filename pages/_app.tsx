import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "components/Layout";
import { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <style jsx global>
                {`
                    html {
                        font-family: ${roboto.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </Layout>
    );
}

//! Составной макет

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//     getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWidthLayout = AppProps & {
//     Component: NextPageWithLayout;
// };

// export default function App({ Component, pageProps }: AppPropsWidthLayout) {
//     const getLayout = Component.getLayout ?? ((page) => page);

//     return getLayout(<Component {...pageProps} />);
// }
