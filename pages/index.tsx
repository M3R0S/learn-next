import Head from "next/head";
import Link from "next/link";

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
            <Link href="/users">Пользователи</Link>
        </>
    );
}
