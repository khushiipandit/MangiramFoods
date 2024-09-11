import React from 'react';

const Comp5 = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f9f9f9',  position: 'relative', marginTop:'100px',height:'1000px'}}>
      <section style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Leaves */}
        <div style={{ marginLeft:'-160px',marginBottom:'-50px'}}>
          <img src="/src/images/left_mint_leave.png" alt="Leaves" style={{ width: '150px' }} />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '16px', color: '#333', marginBottom: '-10px' ,marginTop:'10px',fontWeight:'bold',}}>
            naturix <span style={{ color: '#333',fontWeight:'normal' }}>organic farmfood since 1990</span> 
          </h1>
          <div style={{ marginTop: '-20px' , gap:'0px'}}>
            <div style={{ fontSize: '10px',backgroundColor:'white', fontWeight: 'bold', color: '#333', position:'relative',zIndex:1,top:'45px',maxWidth:'180px',marginLeft:'400px'  }}>100% ORGANIC GUARANTEE</div>
            <h2 style={{ fontSize: '48px',color: '#333', marginLeft:'405px' ,display:'flex',flexDirection:'row',position: 'relative',
      Overflow:'visible',}}>
                <span style={{fontWeight:'normal' }}>
                WE DO <span style={{fontWeight:'bold' }}>HEALTHY</span>
                </span>
                
                 </h2>
          </div>
        </div>
        

        <p style={{ margin: '30px auto', maxWidth: '900px', fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
          laoreet dolore magna aliquam erat volutpat.veniam, quis nostrud exerci tation 
          ullamcorper suscipit lobortis nisl ex ea commodo consequat. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.
        </p>
        
        


        <div style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
              <h3 style={{ fontSize: '18px', color: '#333', margin: '5px 0' }}>Gabriel Johnson</h3>
              <p style={{ fontSize: '14px', color: '#7BB241' }}>Naturix Owner</p>
            </div>
            
          
          <div>
            <img src="/src/images/katori.png" alt="Signature" style={{ width: '100%', marginBottom: '10px' }} />
            
            
          </div>
        </div>

        <div style={{ position: 'relative', marginTop: '-80px' }}>
          <img src="/src/images/spinach.png" alt="Organic Vegetables" style={{ width: '300px', maxWidth: '100%',marginLeft:'-170px' }} />
          
        </div>

        <p style={{ fontSize: '28px', marginTop: '-190px', color: '#333', fontStyle: 'italic' }}>Live Organic, Live Healthy</p>

        
      </section>
    </div>
  );
};

export default Comp5;
