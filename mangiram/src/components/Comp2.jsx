import React from 'react';

const Comp2 = () => {
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
    marginBottom: '20px',
  };

  const descriptionTextStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '20px',
  };

  const productCardContainerStyle = {
    display: 'flex',
    gap: '20px',
    flexBasis: '50%',
    justifyContent: 'space-between',
  };

  const cardStyle = {
    flexBasis: '30%',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const cardImageStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto 20px',
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
          115+ <span style={cardTitleEmphasisStyle}>organic juices</span> and <br /> organic tea
        </h1>
        <p style={descriptionTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Right section: Product cards */}
      <div style={productCardContainerStyle}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
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
