import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import imgBanner from '/fondo.jpg';        

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);
    
    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const precioTotal = product.price * quantity;

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }

    if (!product) {
        return <div>No disponible</div>;
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${imgBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                margin: 0,  
                padding: 0, 
            }}
        >
            <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-10 max-w-[900px] w-full">
                <div className="grid grid-cols-2 gap-10">
                    <div className="pr-[30px]">
                        <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]' />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-gray-800 font-medium uppercase'>{product.name}</h1>
                        <p className='text-[20px] text-gray-700 my-[20px]'>{product.description}</p>
                        <div>
                            <h3>Tallas disponibles:</h3>
                            <ul className='flex text-gray-800'>
                                {(product.sizes || []).map((size, index) => (
                                    <li key={index}
                                        className='rounded-full border-[1px] w-[40px] h-[40px] flex items-center justify-center text-[20px]
                                        bg-[#ecbcec] text-[#a6a5a6] hover:bg-[#8db8f1] hover:text-white'>
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className='text-[20px] text-gray-800 my-[20px]'>Stock: {product.stock}</p>
                        <div className='flex text-gray-800'>
                            <button 
                                onClick={decrementQuantity} 
                                className='rounded-s-full bg-[#ecbcec] text-[#a6a5a6] text-[20px] px-[20px] py-[5px] hover:bg-[#8db8f1]'
                                disabled={product.stock === 0}
                            > 
                                - 
                            </button>
                            <p className='text-[20px] px-[10px] text-gray-800'>{quantity}</p>
                            <button 
                                onClick={incrementQuantity} 
                                className='rounded-e-full bg-[#ecbcec] text-[#a6a5a6] text-[20px] px-[20px] py-[5px] hover:bg-[#8db8f1]'
                                disabled={product.stock === 0}
                            > 
                                + 
                            </button>
                        </div>
                        
                        <p className='text-[20px] my-[20px] text-gray-800'>Precio: ${product.price}</p>
                        <p className='text-[20px] my-[20px] text-gray-800'>Precio Total: ${precioTotal}</p>
                        <button className={`rounded-full text-[20px] px-[20px] py-[5px] 
                        ${product.stock === 0 ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-[#ecbcec] text-[#a6a5a6] hover:bg-[#8db8f1]'}`}
                        disabled={product.stock === 0}>
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
