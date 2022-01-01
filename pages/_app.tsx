import Head from "next/head";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Prompt | A Project Management Tool For Your Team</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;