import Navbar from "../Navbar/Navbar";
import '../Header/Header.css'
export default function HeaderComponent() {
    const Logo = 'Logo.png'
    return (
        <div className="container mx-auto max-w-[1170px]">
            <div className="flex h-[130px] items-center justify-between">
                <div><img src={Logo} alt="Logo" class = "logo" /></div>
                <div><Navbar /></div>
            </div>
        </div>
    );
}
