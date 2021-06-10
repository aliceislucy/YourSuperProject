import React from "react";
import "./../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer id="footer" className="footer">
        <div className="iconsrs">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-pinterest-square"></i>
        </div>

        <div>
          <i class="fas fa-phone-square-alt"></i>
          <p>7/7 Qupport</p>
        </div>
        <div>
          <i class="fas fa-clock"></i>
          <p>30 Day Garantee</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
