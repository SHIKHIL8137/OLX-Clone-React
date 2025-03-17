import React, { useState, useEffect } from 'react';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data)); 
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-3 relative bg-white">
          <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
          
          {/* Featured Badge */}
          <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold text-white px-2 py-1 rounded">
            FEATURED
          </span>
          
          {/* Heart Icon */}
          <FontAwesomeIcon
            icon={faHeart}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer"
          />
          
          {/* Product Details */}
          <div className="mt-2">
            <p className="text-lg font-bold text-gray-900">
              ₹ {new Intl.NumberFormat('en-IN').format(product.price * 100)}
            </p>
            <p className="text-sm text-gray-600">{product.title}</p>
            <p className="text-sm font-semibold text-gray-700 truncate">
              {product.description.length > 50 ? product.description.substring(0, 50) + "..." : product.description}
            </p>
            <p className="text-xs text-gray-500 mt-1">Category: {product.category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitleCard;
