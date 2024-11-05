import ItemList from "../ItemList/ItemList";

export default function HomePage() {
    const imgBanner = './fondo.jpg';
    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${imgBanner})` }}>
                <div className="container text-center max-w-[800px] p-4 bg-transparent rounded-md">
                <h1 className="title-shadow text-[#f37bc5] font-medium text-[50px] leading-[80px] uppercase mb-4">
                                    BIENVENIDO A MURCI STORE </h1>
                    <h3 className="text-teal-600 text-[18px] leading-[30px] from-neutral-800 bg-transparent">
                        Este es el lugar ideal para encontrar ropa y accesorios especiales para consentir a tu mascota.
                        Nos apasiona ofrecerte productos únicos que combinan estilo y comodidad para que tu compañero peludo siempre luzca increíble.
                        Explora nuestra colección y dale a tu mejor amigo el toque especial que se merece. ¡Tu mascota siempre merece lo mejor!
                    </h3>
                </div> 
            </div>
                <ItemList />
            </div>
    );
}
