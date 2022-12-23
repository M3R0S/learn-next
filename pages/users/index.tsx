import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("http://localhost:4000/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
};

interface User {
    id: string;
    name: string;
}

interface Users {
    users: User[];
}

export default function Users({ users }: Users) {
    const router = useRouter();
    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                        <button
                            onClick={() => router.push(`/users/${user.id}`)}
                        >
                            User
                        </button>
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/${user.name}`}>{user.id}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
