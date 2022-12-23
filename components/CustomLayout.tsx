import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface CustomLayout {
    children: React.ReactNode;
}

export const CustomLayout = ({ children }: CustomLayout) => {
    return (
        <>
            <section>{children}</section>
        </>
    );
};
