import Header from "../Header/index";
import Footer from "../Footer/index";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
