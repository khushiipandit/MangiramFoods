import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgOverflow } from 'react-icons/cg';

const ProductCard = ({ product }) => {
  const styles = {
    card: {
      width: '400px',
      height:'300px',
      padding: '20px',
      backgroundColor: 'white',
      marginLeft:'40px',
      marginRight:'40px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      Overflow:'visible',
    justifyContent: 'space-between',
      
      gap: '200px',
      alignItems: 'center',
    },
    leftIcons: {
      display: 'flex',
      flexDirection: 'column',
      
      alignItems: 'center',
      paddingRight: '10px',
      borderRight: '1px solid black',
      gap: '10px',
    },
    icon: {
      fontSize: '20px',
      color: '#888',
      cursor: 'pointer',
    },
    badgeContainer: {
      display: 'flex',
      gap: '10px',
    },
    badge: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '12px',
    },
    saleBadge: {
      backgroundColor: '#00C4CC',
    },
    productInfo: {
      flex: 1,
    },
    productSubtitle: {
      fontSize: '12px',
      color: '#666',
      marginBottom: '5px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    productTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
      textTransform: 'capitalize',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px',
    },
    newPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#4CAF50',
    },
    oldPrice: {
      fontSize: '16px',
      textDecoration: 'line-through',
      color: '#888',
    },
    productImage: {
      position:'relative',
      top:'7px',
      height: '200px',
      marginLeft: 'auto',
      zindex:'1'
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.leftIcons}>
        <i className="fas fa-heart" style={styles.icon}></i>
        <i className="fas fa-shopping-cart" style={styles.icon}></i>
        <i className="fas fa-share-alt" style={styles.icon}></i>
      </div>
      <div style={styles.productInfo}>
        <div style={styles.badgeContainer}>
          <span style={styles.badge}>NEW</span>
          <span style={{ ...styles.badge, ...styles.saleBadge }}>SALE</span>
        </div>
        <div style={styles.productSubtitle}>ORGANIC FRUITS</div>
        <div style={styles.productTitle}>fresh {product.name}</div>
        <div style={styles.priceContainer}>
          <span style={styles.newPrice}>${product.newPrice}</span>
          <span style={styles.oldPrice}>${product.oldPrice}</span>
        </div>
      </div>
      <img src={product.imageSrc} alt={product.name} style={styles.productImage} />
      
    </div>

    
  );
};

const Comp4 = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      marginTop: '50px',
      padding: '0 40px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '-40px',
      marginLeft:'50px',
      color: '#666',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    footer_image: {
      height: '80px',
      marginLeft:'720px',
      alignItems: 'center',
    },
  };

  const products = [
    {
      name: 'raspberry',
      imageSrc: '/src/images/deal-1.png', // replace with actual image path
      oldPrice: '65.00',
      newPrice: '50.00',
    },
    {
      name: 'pineapple',
      imageSrc: '/src/images/deal-2.png', // replace with actual image path
      oldPrice: '65.00',
      newPrice: '50.00',
    },
    {
      name: 'apple',
      imageSrc: '/src/images/deal-1.png', // replace with actual image path
      oldPrice: '75.00',
      newPrice: '60.00',
    },
    {
      name: 'banana',
      imageSrc: '/src/images/deal-2.png', // replace with actual image path
      oldPrice: '80.00',
      newPrice: '70.00',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div>

      
      <div {...sliderSettings} style={styles.container}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}

      </div>
      <div style={{ marginTop: '90px', color:'#f9f9ff9'}}>
          <img src="/src/images/spinach.png" alt="Organic Vegetables" style={{ width: '300px', maxWidth: '100%',marginLeft:'30px' }} />
         </div>


      <div style={styles.footer}>
          {/* Bottom grapefruit image */}
          <img src="/src/images/icon-1.png" alt="Grapefruit" style={styles.footer_image} />
        <div>⭐⭐⭐ a taste of <strong>real food</strong>⭐⭐ ⭐</div>
      </div>
    </div>
  );
};

export default Comp4;
