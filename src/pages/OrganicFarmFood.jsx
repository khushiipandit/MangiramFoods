import React from 'react';

const OrganicFarmFood = () => {

  const products = [
    {
      id: 1,
      title: "organic fruits",
      items: "52 items",
      color: "#f8d4d7", // Light red
      image: "path/to/fruit-icon.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "fresh vegetables",
      items: "35 items",
      color: "#d7e8d4", // Light green
      image: "path/to/vegetable-icon.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "organic breads",
      items: "23 items",
      color: "#f8e4d4", // Light orange
      image: "path/to/bread-icon.png", // Replace with actual image path
    },

   
  ];

  const containerStyle = {
    display: 'flex',
    height:'1100px',
    width:'100%',
    marginLeft:'0px',
    marginRight:'0px',
    
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f9f9f5',
    padding: '0px',
  };
  const container_image_Style = {
    height:'11px',
    marginTop:'100px',
    marginBottom:'0px',
    marginLeft:'35px'

  }

  const headerStyle = {
    color: '#505050',
    fontSize:'45px',
    marginTop:'0px',
    marginBottom: '0px',
   
  };
  const headerStyle2 = {
    color: '#515153',
    fontWeight: 'bold',
    fontsize:'10px'
  };

  const subHeaderStyle = {
    color: '#515153',
    fontSize: '15px',
    marginBottom: '30px'
  };

  const descriptionStyle = {
    color: '#7a7a7a',
    fontSize: '17px',
    marginBottom: '190px',
    maxWidth: '900px',
    position: 'relative',
    top: '-5px', // Move the description text up
  };

  const featureContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space between circles
     // Align circles to the upper side
    gap: '10px',
    marginBottom: '40px',
    width: '100%',
    maxWidth: '1000px',
    position: 'relative',
  };

  const featureBoxStyle = {
    textAlign: 'center',
    maxWidth: '220px',
    position: 'relative',
  };

  const featureIconStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    display: 'inline-block',
    marginBottom: '20px',
    position: 'relative',
    
  };

  const featureTextHeaderStyle = {
    fontSize: '18px',
    color: '#505050',
    marginBottom: '10px',
  };

  const featureTextStyle = {
    color: '#7a7a7a',
    fontSize: '16px',
    maxWidth:'700px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#ffffff',
    border: '2px solid #f5f5f5',
    borderRadius: '20px',
    padding: '10px 20px',
    color: '#b5b5b5',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const imageContainerStyle = {
    marginTop: '40px',
  };

  const imageStyle = {
    width: '750px',
    height: 'auto',
  };
  const leafStyleLeft = {
    position: 'absolute',
    left: '0',
    top: '150px',
    width: '150px', // Adjust size as per design
    height: 'auto',
  };

  const leafStyleRight = {
    position: 'absolute',
    right: '0',
    top: '450px',
    width: '140px', // Adjust size as per design
    height: 'auto',
  };
  

  return (
    <div style={containerStyle}>
      {/* Placeholder for the left leaf image */}
      <img 
        src="/src/images/left_mint_leave.png" 
        alt="Left Leaf" 
        style={leafStyleLeft} 
      />

      {/* Placeholder for the right leaf image */}
      <img 
        src="/src/images/right_mint_leave.png" 
        alt="Right Leaf" 
        style={leafStyleRight} 
      />
  <div style={container_image_Style}> {/* Add margin to create space between image and heading { color: '#000000', fontWeight: 'bold',fontsize:'150px' }*/}
    <img 
      src="/src/images/chotipatti.png" 
      alt="Chotipatti" 
    />
  </div>
  <h1 style={headerStyle}>we are <span style={headerStyle2}>organic farmfood</span></h1>
  <h3 style={subHeaderStyle}>----ABOUT Mangiram FARMFOOD----</h3>
  <p style={descriptionStyle}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
  </p>



      <div style={featureContainerStyle}>
        <div style={featureBoxStyle}>
          <div style={{ 
            ...featureIconStyle, 
            
            backgroundImage: `url('/src/images/feature-1.png')`, 
            width: '120px', // Adjust size
            height: '120px',
            marginTop: '0px', // Adjust position
            marginLeft:'-70px',
          }}></div>
          <h4 style={{ fontSize: '16px', color: '#505050', marginBottom: '10px', marginLeft: '-60px' }}>fresh from <span style={{ color: '#000000', fontWeight:'bold' }}>Mangiram farm</span></h4>
          <p style={{ color: '#7a7a7a', fontSize: '16px', marginBottom: '20px', marginLeft: '-60px', maxWidth:'700px',}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>
          <a href="#" style={{ backgroundColor: '#ffffff', border: '2px solid #f5f5f5', borderRadius: '20px', padding: '10px 20px', color: '#b5b5b5', cursor: 'pointer', textDecoration: 'none', marginLeft: '-60px' }}>READ MORE</a>
        </div>

        <div style={{ 
          ...featureBoxStyle, 
          marginTop: '-90px', // Move the 2nd circle slightly above
          maxWidth:'700px',
          fontsize:'16px'
        }}>
          <div style={{ 
            ...featureIconStyle, 
            
            backgroundImage: `url('/src/images/feature-2.png')`,  
            width: '120px', // Adjust size
            height: '120px',
            marginTop: '-20px', // Adjust position
          }}></div>
          <h4 style={featureTextHeaderStyle}>100% <span style={{ color: '#000000', fontWeight:'bold' }}>organic goods</span></h4>
          <p style={featureTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>
          <a href="#" style={buttonStyle}>READ MORE</a>
        </div>

        <div style={{ 
          ...featureBoxStyle, 
          marginTop: '-90px', // Align the 3rd circle with the 2nd
        }}>
          <div style={{ 
            ...featureIconStyle, 
           
            backgroundImage: `url('/src/images/feature-3.png')`, 
            width: '120px', // Adjust size
            height: '120px',
            marginTop: '-20px', // Adjust position 
            marginRight:'-10px',
          }}></div>
          <h4 style={featureTextHeaderStyle}>premium <span style={{ color: '#000000', fontWeight:'bold' }}>quality</span></h4>
          <p style={{ ...featureTextStyle, width:'100%' ,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>
          <a href="#" style={buttonStyle}>READ MORE</a>
        </div>

        <div style={featureBoxStyle}>
          <div style={{ 
            ...featureIconStyle, 
            
            backgroundImage: `url('/src/images/feature-4.png')`,  
            width: '120px', // Adjust size
            height: '120px',
            marginRight: '-10px', // Keep position 4th
            marginTop:'-6px',
          }}></div>
          <h4 style={{ ...featureTextHeaderStyle, marginLeft: '5px' }}>100% <span style={{ color: '#000000', fontWeight:'bold' }}>natural</span></h4>
<p style={{ ...featureTextStyle, marginLeft: '-0px' ,}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
</p>
<a href="#" style={{ ...buttonStyle, marginLeft: '0px' }}>READ MORE</a>
        </div>
      </div>

      <div style={{ ...imageContainerStyle, marginTop: '-85px' }}>
  <img 
    src="/src/images/feature.png" 
    alt="Organic Grapefruit" 
    style={imageStyle} 
  />
</div>


    </div>
  );
};

export default OrganicFarmFood;
