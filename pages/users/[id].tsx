import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface User {
    id: string;
    name: string;
}

export default function User({ user }: { user: User }) {
    return (
        <div>
            <h1>
                Пользователь
                {user.name}
            </h1>
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

    return {
        props: { user },
    };
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const resp = await fetch(`http://localhost:4000/users/${params?.id}`);
//     const user = await resp.json();

//     return {
//         props: { user },
//     };
// };
