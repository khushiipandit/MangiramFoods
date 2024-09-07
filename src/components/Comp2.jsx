import  { useState } from 'react';

const Comp2 = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // State to track which card is hovered

  const products = [
    {
      id: 1,
      title: 'organic juices',
      items: '26 items',
      image: '/src/images/juce.png', // Replace with actual image path
    },
    {
      id: 2,
      title: 'dried juices',
      items: '31 items',
      image: '/src/images/cup.png', // Replace with actual image path
    },
    {
      id: 3,
      title: 'organic tea',
      items: '17 items',
      image: '/src/images/tea.png', // Replace with actual image path
    },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#fff',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const textContainerStyle = {
    flexBasis: '50%',
    marginTop:'-10px',
    marginLeft:'-50px',
    marginRight:'20px'
    
  };

  const headerTextStyle = {
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '2px',
    color: '#999',
    marginBottom: '10px',
  };

  const titleTextStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    lineHeight: '1.2',
    marginTop:'10px',
    marginBottom: '20px',
  };

  const descriptionTextStyle = {
    fontSize: '18px',
    width: '570px',
    lineHeight: '1.6',
    color: '#666',
    marginTop:'5px',
    marginBottom: '20px',
  };

  const productCardContainerStyle = {
    display: 'flex',
    gap: '25px',
    flexBasis: '50%',
    marginLeft: '-50px',
    marginRight:'-50px',
    justifyContent: 'space-between',
  };

  const cardStyle = (isHovered) => ({
    Width: '219px',
    height:'281px',
    flex:'1',
   
    gap: '2px',
    padding: '8px',
    
    margin: '0 auto 80px auto',
    textAlign: 'center',
    border: `1px solid ${isHovered ? 'green' : '#eaeaea'}`, // Green border on hover
    borderRadius: '10px',
    boxShadow: isHovered
      ? '0 8px 16px rgba(0, 128, 0, 0.3)' // Green shadow on hover
      : 'none', // No shadow by default
    transition: 'border-color 0.3s, box-shadow 0.3s', // Smooth transition
  });

  const cardImageStyle = {
    width: '140px',
    height: '120px',
    marginLeft: '10px ',
    marginBottom:'40px',
    marginTop:'15px',
    marginRight:'80px'
  };

  const cardTitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const cardItemStyle = {
    fontSize: '14px',
    color: 'green',
  };

  const cardTitleEmphasisStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      {/* Left section: Text */}
      <div style={textContainerStyle}>
        <p style={headerTextStyle}>Fresh from our farm</p>
        <h1 style={titleTextStyle}>
          <span style={{ fontWeight: 'normal' }}>115+ </span>
          <span style={cardTitleEmphasisStyle}>organic juices</span>
          <span style={{ fontWeight: 'normal' }}> and </span>
          <br /> organic tea
        </h1>
        <p style={descriptionTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Right section: Product cards */}
      <div style={productCardContainerStyle}>
        {products.map((product, index) => (
          <div
            key={product.id}
            style={cardStyle(hoverIndex === index)} // Apply hover styles dynamically
            onMouseEnter={() => setHoverIndex(index)} // Set hover index on mouse enter
            onMouseLeave={() => setHoverIndex(null)} // Remove hover index on mouse leave
          >
            <img src={product.image} alt={product.title} style={cardImageStyle} />
            <h3 style={cardTitleStyle}>
              {product.title.split(' ')[0]}{' '}
              <span style={cardTitleEmphasisStyle}>{product.title.split(' ')[1]}</span>
            </h3>
            <p style={cardItemStyle}>{product.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp2;
