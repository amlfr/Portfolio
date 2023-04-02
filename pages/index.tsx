import Head from "next/head";
import styles from "./Home.module.scss";
import Home from "../components/Home/index";
import Layout from "../components/Layout/index";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Portfolio - Antony Martinez--Lalenec</title>
                <meta
                    name="description"
                    content="Je suis un développeur web à la recherche d'une alternance de 2 ans orienté front-end et particulièrement React, mais intéresser par le stack dans son entièreté."
                />
                <meta property="og:title" content="Antony Martinez--Lalenec" />
                <meta
                    property="og:description"
                    content="Je suis un développeur web à la recherche d'une alternance de 2 ans orienté front-end et particulièrement React, mais intéresser par le stack dans son entièreté."
                />
                <meta property="og:url" content="TODO" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Home />
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Page;
