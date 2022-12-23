import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Layout {
    children: React.ReactNode;
}

export const Layout = ({ children }: Layout) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
