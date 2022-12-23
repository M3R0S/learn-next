import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import cl from "./user.module.scss";
import variables from "styles/_var.module.scss";
import Image, { StaticImageData } from "next/image";
import img from "public/images/photo_2022-12-15_20-58-11.jpg";
import { images } from "./const";

interface User {
    id: string;
    name: string;
    image: string;
}

export default function User({ user }: { user: User }) {
    return (
        <div>
            <h1 className={cl.title}>
                Пользователь
                {user.name}
                {""}
                {variables.colorBlack}
            </h1>
            <br />
            <Image src={img} alt="Photo" priority />
            <h2>{process.env.NEXT_PUBLIC_COLOR}</h2>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const resp = await fetch("http://localhost:4000/users");
    const users: User[] = await resp.json();

    const paths = users.map(({ id }) => ({
        params: {
            id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

interface Props {
    params: {
        id: string;
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const resp = await fetch(`http://localhost:4000/users/${params?.id}`);
    const user = await resp.json();

    if (!resp.ok) {
        throw new Error("Failed load " + resp.status);
    }

    return {
        props: { user },
        revalidate: 10,
    };
};
