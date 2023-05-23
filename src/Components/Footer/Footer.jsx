import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
function Footer() {
  // const navigate=useNavigate();
  return (
    <div id="footerhover">
      <div id="footer">
        <div>
          {/* <h6
            className="footerHeader"
          >
            (+91)-8826002054
          </h6> */}
          <h6
          style={{
            color: 'white',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '40px',
            marginTop: '10px',
          }}
        >
          About us
        </h6>
          <h2>Founded in 2015 to focus on supplying high quality standard, precise,<br/>
          reliable and durable products by procuring standard components through its trusted global network </h2>
      
         <div style={{
          marginTop:'20px',
          marginLeft: '-15px'
        }}>
        <img 
        style={{width: '10%',
        height: '10%',
        borderRadius: '10px'
    
      }}
        // src="https://reiprotools.files.wordpress.com/2017/12/jidokalogo.png?w=385" />
        src="http://localhost:3000/static/media/jakoda2.2258d7d8328959fcfe8a.png" />
         </div>
        </div>
        <div>
         {}
        </div>
         {<div>
         
          <h6
          style={{
            color: 'white',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '40px',
            marginTop: '10px',
          }}
        >
           Head Office
        </h6>
          <h2>Jidoka</h2>
          <h2>P564, MEWLA MAHARAJPUR,</h2>
          <h2>MATHURA ROAD, FARIDABAD 121001, HARYANA</h2>
          <h2 style={{color:"white"
          }}>sales@ipsarthillp.com</h2>
          <br />
          <h2 style={{color:"white", marginTop:"5%"}}>Copyright © 2023 <span>JIDOKA</span> All Rights Reserved</h2>
        </div>}
      </div>
      {<div className='infinixFooter' style={{marginBottom:"-1px"}} id="copyright">
      </div> }



    </div>
  );
}

export default Footer;
