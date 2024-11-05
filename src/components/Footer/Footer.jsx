import './Footer.css'; 

export default function FooterComponent() {
    return (
        <footer className="footer bg-[#a2fbe58f] py-[60px] w-[100vw] flex justify-between">
            <div className="footer-column container mx-auto flex-1 flex items-center justify-center font-medium">
                <p className="text-[#0f6666]">Murci Store, calidad en lo nuestro</p>
            </div>
            <div className="footer-column container mx-auto flex-1 font-medium">
                <h3 className="text-[#0f6666]">Contáctenos</h3>
                <p className="text-[#0f6666]">Todo medio de pago</p>
                <p className="text-[#0f6666]">Envíos a todo Chile</p>
                <p className="text-[#0f6666]">Envíos Internacionales</p>
            </div>
        </footer>
    );
}
