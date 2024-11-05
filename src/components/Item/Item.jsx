import { Link } from "react-router-dom";
import '../Item/Item.css';

export default function Item({id, name, price, img}){
    const imgBanner = './fondo.jpg';
        return(
        <div className="flex flex-col items-center my-[10px] mx-[10px]"  style={{ backgroundImage: `url(${imgBanner})` }}>
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" className="product-img" /> </Link>
            <Link to={`/products/${id}`} className="text-[25px] font-medium my-[15px] tracking-[3px] uppercase text-[#7d797b] hover:text-[rgb(180,101,233)]">{name}</Link>
            <h4 className="text-[18px] font-bold mb-[20px]">$ {price}</h4>
        </div>
    )
}