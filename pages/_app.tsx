import "./globals.scss";
import type { AppProps } from "next/app";
import { Syne } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

// Sets ups types to use layout with typescript
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

//Sets up the font

const syne = Syne({ subsets: ["latin"] });

/* export default function App({ Component, pageProps }: AppProps) */
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <style jsx global>
                {`
                    html {
                        font-family: ${syne.style.fontFamily};
                    }

                    input {
                        font-family: ${syne.style.fontFamily};
                    }
                `}
            </style>

            <Component {...pageProps} />
        </>
    );
};

export default App;
