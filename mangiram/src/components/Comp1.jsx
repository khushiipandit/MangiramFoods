import  { useState } from 'react';

const Comp1 = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // State to track which card is hovered

  const cardStyle = (isHovered) => ({
    Width: '219px',
    height:'281px',
    padding: '8px',
    
    textAlign: 'center',
    border: `1px solid ${isHovered ? 'green' : '#eaeaea'}`, // Green border on hover
    margin: '0 5px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    flex: '1',
    boxShadow: isHovered
      ? '0 8px 16px rgba(0, 128, 0, 0.3)' // Green shadow on hover
      : 'none', // No shadow by default
    transition: 'border-color 0.3s, box-shadow 0.3s', // Smooth transition
  });

  const imageStyle = {
    width: '140px',
    height: '120px',
    marginLeft: ' 3px ',
    marginTop:'17px',
    
    marginBottom: '40px',
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    marginLeft:'-15px',
    whiteSpace: 'nowrap', // Prevents line breaks in the text
  };

  const itemCountStyle = {
    color: 'green',
    fontSize: '14px',
  };

  const sectionTitleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop:'10px'
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: '18px',
    lineHeight: '1.6',
  };

  const products = [
    {
      image: '/src/images/straw.png', // Replace with actual images
      title: 'organic fruits',
      items: '52 items',
    },
    {
      image: '/src/images/tamatar.png', // Replace with actual images
      title: 'fresh vegetables',
      items: '35 items',
    },
    {
      image: '/src/images/bun.png', // Replace with actual images
      title: 'organic breads',
      items: '23 items',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', gap: '40px' }}>
      {/* Product Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flex: '1' }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={cardStyle(hoverIndex === index)} // Apply hover styles dynamically
            onMouseEnter={() => setHoverIndex(index)} // Set hover index on mouse enter
            onMouseLeave={() => setHoverIndex(null)} // Remove hover index on mouse leave
          >
            <img src={product.image} alt={product.title} style={imageStyle} />
            <h3 style={titleStyle}>{product.title}</h3>
            <p style={itemCountStyle}>{product.items}</p>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div style={{ maxWidth: '1500px', marginLeft: 'auto', flex: '1', textAlign: 'left', marginRight: '100px',marginTop:'2px' }}>
        <h2 style={{ color: '#999', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
          Fresh from our farm
        </h2>
        <h1 style={sectionTitleStyle}>
          <span style={{ fontWeight: 'normal' }}>220+ </span>
          <span style={{ fontWeight: 'bold' }}>fruits, vegetables</span>
          <span style={{ fontWeight: 'normal' }}> &</span> lot more
        </h1>
        <p style={descriptionStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Comp1;
