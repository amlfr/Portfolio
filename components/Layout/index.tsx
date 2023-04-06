import Header from "../Header/index";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
