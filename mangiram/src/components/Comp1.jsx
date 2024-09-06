

const Comp1 = () => {
  const cardStyle = {
    maxWidth: '100px', // Increased width to avoid text wrapping
    padding: '30px',
    textAlign: 'center',
    border: '1px solid #eaeaea',
    margin: '0 5px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    flex: '1', // Adjusting flex to distribute space evenly
  };

  const imageStyle = {
    width: '140px',
    height: '120px',
    margin: 'auto -20px 0',
    
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    whiteSpace: 'nowrap', // Prevents line breaks in the text
  };

  const itemCountStyle = {
    color: 'green',
    fontSize: '14px',
  };

  const sectionTitleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: '16px',
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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', gap: '40px', }}>
      {/* Product Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flex: '1' }}>
        {products.map((product, index) => (
          <div key={index} style={cardStyle}>
            <img src={product.image} alt={product.title} style={imageStyle} />
            <h3 style={titleStyle}>{product.title}</h3>
            <p style={itemCountStyle}>{product.items}</p>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div style={{ maxWidth: '1500px', marginLeft: 'auto', flex: '1', textAlign: 'left' ,marginRight:'100px'}}>
        <h2 style={{ color: '#999', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
          Fresh from our farm
        </h2>
        <h1 style={sectionTitleStyle}>
          220+ <span style={{ fontWeight: 'normal' }}>fruits, vegetables</span> & lot more
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
