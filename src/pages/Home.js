import React from 'react';
import Products from '../components/Products';
const Home = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',flexDirection:'column'}}>
      <h2 className='heading'>Product Page</h2>
      <section style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80%',flexDirection:'column'}}>
        <h3>Listed Products</h3>
        <Products/>
      </section>
    </div>
  );
}

export default Home;
