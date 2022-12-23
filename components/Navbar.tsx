import Link from "next/link";

export const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/">Главная</Link>
                <Link href="/users">Пользователи</Link>
            </nav>
        </header>
    );
};
