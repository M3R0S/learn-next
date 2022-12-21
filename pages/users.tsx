import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("http://localhost:4000/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

interface User {
    id: string;
    name: string;
}

interface Users {
    users: User[];
}

export default function Users({ users }: Users) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    );
}
