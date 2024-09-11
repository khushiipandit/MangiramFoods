// import React from 'react';
import Comp1 from '../components/Comp1';
// import OrganicFarmFood from './OrganicFarmFood';
import Comp5 from '../components/Comp5';
// import Comp3 from '../components/Comp3';
import Comp2 from '../components/Comp2';
// import Footer from '/src/components/Footer';

const AboutPage = () => {
  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'white',
      marginTop:"60px",
    },
    aboutHeader: {
      position: 'relative',
      
      Overflow:'visible',
      
      marginTop:'129px',
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
      marginLeft:'130px'
    },
    highlight: {
      color: 'black',
      fontWeight:'bold'
    },
    breadcrumb: {
      fontSize: '12px',
      color: '#888',
      marginTop: '0px',
      marginLeft:'130px'
    },
    aboutImage: {
      position: 'absolute',
      marginRight:'400px',
      top: '0', // Position the almond image at the top
      right: '0',
      backgroundImage: 'url("/src/images/badam.png")',
      backgroundPosition: 'right top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '600px',
      height: '200px',
    },
    aboutContent: {
      textAlign: 'center',
      margin: '50px 0',
    },
    imageContainer: {
      display: 'inline-block',
      marginTop:'60px'
    },
    image: {
      width: '150px',
    },
    image2:{
        width:"100%",
        marginTop:'-140px',
        position:'relative',
        zIndex:1,
        top:'55px',

    },
    contentText: {
      fontSize: '18px',
      marginTop: '20px',
      color: '#333',
    },

     containerStyle :{
      display: 'flex',
      height:'1100px',
      width:'100%',
      marginLeft:'0px',
      marginRight:'0px',
      marginTop:'-129px',
      
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '0px',
    },
    container_image_Style : {
      height:'11px',
      marginTop:'104px',
      marginBottom:'25px',
      marginLeft:'560px'
  
    },
  
     headerStyle: {
      color: '#505050',
      width:'700px',
      fontSize:'35px',
      marginTop:'-20px',
      marginLeft:'-123px',
      marginBottom: '0px',
     
    },
     headerStyle2 : {
      color: '#515153',
      fontWeight: 'bold',
      fontsize:'10px'
    },
  
     subHeaderStyle : {
        marginLeft:'-90px',
        marginRight:'200px',
      color: '#515153',
      fontSize: '15px',
      marginBottom: '30px'
    },
  
     descriptionStyle : {
      color: '#7a7a7a',
      fontSize: '17px',
      marginBottom: '190px',
      marginLeft:'40px',
      maxWidth: '600px',
      position: 'relative',
      top: '-5px', // Move the description text up
    },
  
    featureContainerStyle : {
      display: 'flex',
      justifyContent: 'space-between', // Space between circles
       // Align circles to the upper side
      gap: '10px',
      marginBottom: '40px',
      width: '100%',
      maxWidth: '1000px',
      position: 'relative',
    },
  
    featureBoxStyle : {
      textAlign: 'center',
      maxWidth: '220px',
      position: 'relative',
    },
  
     featureIconStyle : {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      display: 'inline-block',
      marginBottom: '20px',
      position: 'relative',
      
    },
  
     featureTextHeaderStyle : {
      fontSize: '18px',
      color: '#505050',
      marginBottom: '10px',
    },
  
     featureTextStyle : {
      color: '#7a7a7a',
      fontSize: '16px',
      maxWidth:'700px',
      marginBottom: '20px',
    },
  
    buttonStyle : {
      backgroundColor: '#ffffff',
      border: '2px solid #f5f5f5',
      borderRadius: '20px',
      padding: '10px 20px',
      color: '#b5b5b5',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  
     imageContainerStyle : {
      marginTop: '40px',
    },
  
      imageStyle : {
      width: '750px',
      height: 'auto',
    },
     leafStyleLeft : {
      position: 'absolute',
      left: '0',
      top: '150px',
      width: '150px', // Adjust size as per design
      height: 'auto',
    },
  
      leafStyleRight : {
      position: 'absolute',
      right: '0',
      top: '450px',
      width: '140px', // Adjust size as per design
      height: 'auto',
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
        {/* Top almond image */}
        <div style={styles.aboutImage}></div>
      </section>
      
      <section style={styles.aboutContent}>
      <img src="/src/images/wave.png" alt="Grapefruit" style={styles.image2} />

        <div style={styles.imageContainer}>
          {/* Bottom grapefruit image */}
          <img src="/src/images/icon-1.png" alt="Grapefruit" style={styles.image} />
        </div>
        <div style={styles.contentText}>
          <p>⭐⭐⭐ a taste of <span style={styles.highlight}>real food</span>⭐⭐⭐ </p>
        </div>
      </section>
      <div style={styles.containerStyle}>
      {/* Placeholder for the left leaf image */}
      

      {/* Placeholder for the right leaf image */}
      <img 
        src="/src/images/right_mint_leave.png" 
        alt="Right Leaf" 
        style={styles.leafStyleRight} 
      />
  <div style={styles.container_image_Style}> 
    <img 
      src="/src/images/chotipatti.png" 
      alt="Chotipatti" 
    />
  </div>
  
  <div style={{ display:'flex',justifyContent:'column' }}>
  <p style={styles.descriptionStyle}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
  </p>
  <div style={{ }}>
  <h1 style={styles.headerStyle}>we aree <span style={styles.headerStyle2}>organic farmfood</span></h1>
  <h3 style={styles.subHeaderStyle}>----ABOUT NATURIX FARMFOOD----</h3>
  </div>
  </div>
  


      <div style={styles.featureContainerStyle}>
        <div style={styles.featureBoxStyle}>
          <div style={{ ...styles.featureIconStyle,
            
            backgroundImage: `url('/src/images/feature-1.png')`, 
            width: '120px', // Adjust size
            height: '120px',
            marginTop: '0px', // Adjust position
            marginLeft:'-70px',
          }}></div>
          <h4 style={{ fontSize: '16px', color: '#505050', marginBottom: '10px', marginLeft: '-60px' }}>fresh from <span style={{ color: '#000000', fontWeight:'bold' }}>naturix farm</span></h4>
          <p style={{ color: '#7a7a7a', fontSize: '16px', marginBottom: '20px', marginLeft: '-60px', maxWidth:'700px',}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>
          <a href="#" style={{ backgroundColor: '#ffffff', border: '2px solid #f5f5f5', borderRadius: '20px', padding: '10px 20px', color: '#b5b5b5', cursor: 'pointer', textDecoration: 'none', marginLeft: '-60px' }}>READ MORE</a>
        </div>

        <div style={{ 
          ...styles.featureBoxStyle, 
          marginTop: '-90px', // Move the 2nd circle slightly above
          maxWidth:'700px',
          fontsize:'16px'
        }}>
          <div style={{ 
            ...styles.featureIconStyle, 
            
            backgroundImage: `url('/src/images/feature-2.png')`,  
            width: '120px', // Adjust size
            height: '120px',
            marginTop: '-20px', // Adjust position
          }}></div>
          <h4 style={styles.featureTextHeaderStyle}>100% <span style={{ color: '#000000', fontWeight:'bold' }}>organic goods</span></h4>
          <p style={styles.featureTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>
          <a href="#" style={styles.buttonStyle}>READ MORE</a>
        </div>

        <div style={{ 
          ...styles.featureBoxStyle, 
          marginTop: '-90px', // Align the 3rd circle with the 2nd
        }}>
          <div style={{ 
            ...styles.featureIconStyle, 
           
            backgroundImage: `url('/src/images/feature-3.png')`, 
            width: '120px', // Adjust size
            height: '120px',
            marginTop: '-20px', // Adjust position 
            marginRight:'-10px',
          }}></div>
          <h4 style={styles.featureTextHeaderStyle}>premium <span style={{ color: '#000000', fontWeight:'bold' }}>quality</span></h4>
          <p style={{ ...styles.featureTextStyle, width:'100%' ,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>
          <a href="#" style={styles.buttonStyle}>READ MORE</a>
        </div>

        <div style={styles.featureBoxStyle}>
          <div style={{ 
            ...styles.featureIconStyle, 
            
            backgroundImage: `url('/src/images/feature-4.png')`,  
            width: '120px', // Adjust size
            height: '120px',
            marginRight: '-10px', // Keep position 4th
            marginTop:'-6px',
          }}></div>
          <h4 style={{ ...styles.featureTextHeaderStyle, marginLeft: '5px' }}>100% <span style={{ color: '#000000', fontWeight:'bold' }}>natural</span></h4>
<p style={{ ...styles.featureTextStyle, marginLeft: '-0px' ,}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
</p>
<a href="#" style={{ ...styles.buttonStyle, marginLeft: '0px' }}>READ MORE</a>
        </div>
      </div>

      <div style={{ ...styles.imageContainerStyle, marginTop: '-85px' }}>
  <img 
    src="/src/images/feature.png" 
    alt="Organic Grapefruit" 
    style={styles.imageStyle} 
  />
</div>


    </div>
      <Comp5/>
      <div style={{ marginTop: '60px', flexGrow: 1, padding: '2px',marginLeft:'100px' }}>
                <Comp1 />
            </div>
      
      <Comp2 />
{/*  */}
    </div>
  );
};

export default AboutPage;
