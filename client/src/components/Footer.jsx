import React from "react";
import "./../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer id="footer" className="footer">
        <div className="iconsrs">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest-square"></i>
        </div>
        <div className="icons2">
          <div>
            <i class="fas fa-phone-square-alt"></i>
          </div>
          <p>7/7 Support</p>
          <div>
            <i class="fas fa-clock"></i>
          </div>
          <p>30 Day Garantee</p>
        </div>
        <div>
          <img className="imgapple" src="https://cdn.shopify.com/s/files/1/1556/2685/files/footer-ios-app-store.svg?v=16863381991236104805" alt="" />
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
