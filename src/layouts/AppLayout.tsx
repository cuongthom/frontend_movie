import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const AppLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
