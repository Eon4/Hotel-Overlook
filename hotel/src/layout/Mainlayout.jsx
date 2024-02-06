import { Outlet } from "react-router-dom";
import { Navbar } from '../components/Navigation/navbar'
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";

export const MainLayout = () => {
    return(
        <main>
            <Navbar/>
            <Header />

            <Outlet/>
            <Footer/>
        </main>
    )
}