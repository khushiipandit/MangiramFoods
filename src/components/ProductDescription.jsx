import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.name === productId);
  
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '10 auto', textAlign: 'center',marginLeft:'400px',border:'3px solid #6a5b6e',borderRadius:'15px',marginRight:'400px', }}>
        <div style={{ marginLeft:'200px',border:'3px solid #6a5b6e',borderRadius:'15px',marginRight:'200px',backgroundColor:'#f9f9f9' }}>
           
        <img src={product.imageSrc} alt={product.name} style={{ width: '300px' }} />
        
        </div>
      
      <h1><strong>{product.name}</strong></h1>
      <p>{product.description || 'This is a delicious organic fruit.'}</p>
      <p>
        <strong>Price:</strong> ${product.newPrices} 
        {product.oldPrices && <span style={{ textDecoration: 'line-through', color: 'grey', marginLeft: '10px' }}>${product.oldPrice}</span>}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px',fontSize:"20px" }}>
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div style={{ marginTop: '20px',backgroundColor:'#00afb9',border:'3px solid #f9f9f9',borderRadius:'15px',width:'500px',marginLeft:'80px' }}>
      <button style={{ marginTop: '10px',color:'black',textAlign:'center',marginBottom:'10px' }}>Add to Cart</button>
      </div>
      <div style={{ marginTop: '20px',backgroundColor:'#00afb9',border:'3px solid #f9f9f9',borderRadius:'15px',width:'500px',marginLeft:'80px'  }}>
      <button style={{ marginTop: '10px',color:'black',textAlign:'center',marginBottom:'10px' }}>Add to Wishlist</button>
      </div>
      
      
    </div>
    

  );
};

export default ProductDescription;
