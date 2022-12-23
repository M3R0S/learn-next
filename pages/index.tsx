import { CustomLayout } from "components/CustomLayout";
import { Layout } from "components/Layout";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Learn Next</title>
            </Head>
            <h1>Главная</h1>
        </>
    );
}

//! Сложный макет

// export const Home: NextPageWithLayout = () => {
//     return (
//         <>
//             <Head>
//                 <meta
//                     name="viewport"
//                     content="width=device-width, initial-scale=1"
//                 />
//                 <title>Learn Next</title>
//             </Head>
//             <h1>Главная</h1>
//         </>
//     );
// };

// Home.getLayout = function getLayout(page: ReactElement) {
//     return (
//         <Layout>
//             <CustomLayout>{page}</CustomLayout>
//         </Layout>
//     );
// };

// export default Home;
