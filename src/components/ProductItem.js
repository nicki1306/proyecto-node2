import React from 'react';
import axios from 'axios';

const ProductItem = ({ product }) => {
    const handleAddToCart = async () => {
        try {
            await axios.post('http://localhost:8080/api/cart', { productId: product._id });
            alert('Producto agregado al carrito');
        } catch (error) {
            console.error('Error al agregar el producto al carrito:', error);
        }
    };

    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="mb-2">{product.description}</p>
            <p className="text-green-600 font-semibold mb-2">${product.price}</p>
            <p className="mb-4">Stock: {product.stock}</p>
            <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition"
            >
                <i className="fas fa-shopping-cart mr-2"></i>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ProductItem;
