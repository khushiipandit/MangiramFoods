import React, { useState } from 'react';
import Comp1 from '../components/Comp1';
import OrganicFarmFood from './OrganicFarmFood';
import Comp5 from '../components/Comp5';
import Comp3 from '../components/Comp3';
import Comp2 from '../components/Comp2';

const Shop = () => {
  const [price, setPrice] = useState(500);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const products = [
    {
      name: 'organic mushroom',
      price: '$50.00',
      originalPrice: '$65.00',
      image: '/src/images/mashroom.png',
    },
    {
      name: 'organic onion',
      price: '$50.00',
      originalPrice: '$65.00',
      image: '/src/images/onion.png',
    },
    {
      name: 'organic cherry',
      price: '$50.00',
      originalPrice: '$65.00',
      image: '/src/images/cherryy.png',
    },
    {
      name: 'organic pineapple',
      price: '$50.00',
      originalPrice: '$65.00',
      image: '/src/images/pinapple.png',
    },
  ];

  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'white',
      marginTop: "60px",
    },
    aboutHeader: {
      position: 'relative',
      overflow: 'visible',
      marginTop: '129px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f0f4ed',
      padding: '40px',
      overflow: 'hidden',
    },
    aboutTitle: {
      fontSize: '36px',
      color: '#333',
      marginLeft: '130px'
    },
    highlight: {
      color: 'black',
      fontWeight: 'bold'
    },
    breadcrumb: {
      fontSize: '12px',
      color: '#888',
      marginTop: '0px',
      marginLeft: '130px'
    },
    aboutImage: {
      position: 'absolute',
      marginRight: '400px',
      top: '0',
      right: '0',
      backgroundImage: 'url("/src/images/badam.png")',
      backgroundPosition: 'right top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '600px',
      height: '200px',
    },
    image2: {
      width: "100%",
      marginTop: '-90px',
      position: 'relative',
      zIndex: 1,
      top: '55px',
    },
    containerStyle: {
      display: 'flex',
      height: '10px',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fff',
    },
    card: {
      textAlign: 'center',
      border: '1px solid #eaeaea',
      width: '300px',
      height: '500px',
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '120px',
      height: '320px',
      marginBottom: '28px',
      marginLeft: '80px',
      marginTop: '10px',
    },
    image_box: {
      width: '140px',
      height: '217px',
      marginBottom: '40px',
    },
    title_box: {
      backgroundColor: 'white',
      marginTop: '-60px',
      marginLeft: '-15px',
      height: '170px',
      width: '300px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginLeft: '5px',
      marginBottom: '10px',
      marginTop: '140px',
    },
    price: {
      backgroundColor: 'white',
      fontSize: '16px',
      color: '#333',
      marginLeft: '5px',
      marginTop: '10px',
    },
    discountPrice: {
      color: '#28a745',
      fontWeight: 'bold',
    },
    originalPrice: {
      color: '#999',
      textDecoration: 'line-through',
      marginLeft: '10px',
    },
    categoryText: {
      fontSize: '13px',
      color: '#888',
      fontWeight: '300',  // Light font
      marginRight: '30px',
    },
  };

  return (
    <div style={styles.aboutPage}>
      <section style={styles.aboutHeader}>
        <div>
          <h1 style={styles.aboutTitle}>
            about <span style={styles.highlight}>naturix</span> farmfood
          </h1>
          <div style={styles.breadcrumb}>
            <span>HOME / ABOUT</span>
          </div>
        </div>
        <div style={styles.aboutImage}></div>
      </section>
      <img src="/src/images/wave.png" alt="Grapefruit" style={styles.image2} />

      <div style={styles.containerStyle}>
        {/* Your content goes here */}
      </div>

      <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: '140px', marginRight: '130px', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={styles.categoryText}>CATEGORIES</span>
            <select style={{ padding: "5px", borderRadius: "12px", border: "1px solid #ddd" }}>
              <option>All product</option>
              {/* Add more options here if needed */}
            </select>
          </div>

          <div>
          <span style={styles.categoryText}>SORT BY</span>
            <select style={{ padding: "5px", borderRadius: "12px", border: "1px solid #ddd" }}>
              <option>Popular item</option>
              {/* Add more sorting options */}
            </select>
          </div>

          <img
            src="/src/images/logo-2.png"
            alt="Organic Freshh Food"
            style={{ borderRadius: "50%", padding: "10px", marginLeft: '-10px' }}
          />

          <div>
          <span style={styles.categoryText}>BY PRICE</span>
            <select style={{ padding: "5px", borderRadius: "12px", border: "1px solid #ddd" }}>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", }}>
            <label style={{ marginRight: "10px",fontWeight: '300' }}>Price</label>
            <input
              type="range"
              min="10"
              max="1000"
              value={price}
              onChange={handlePriceChange}
              style={{ marginRight: "10px" }}
            />
            <span>${price}</span>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.image_box}>
              <img src={product.image} alt={product.name} style={styles.image} />
            </div>
            <div style={styles.title_box}>
              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.price}>
                <span style={styles.discountPrice}>{product.price}</span>{' '}
                <span style={styles.originalPrice}>{product.originalPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
