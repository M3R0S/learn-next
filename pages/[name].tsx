import { GetServerSideProps } from "next";

interface User {
    id: string;
    name: string;
}

export default function UserName({ user }: { user: User[] }) {
    return (
        <div>
            <h1>
                Пользователь. Поиск по имени
                {user[0].name}
            </h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const resp = await fetch(
        `http://localhost:4000/users?name=${params?.name}`
    );
    const user = await resp.json();

    return {
        props: { user },
    };
};
