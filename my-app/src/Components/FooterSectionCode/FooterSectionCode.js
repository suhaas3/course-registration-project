import React from "react";
import { useNavigate } from "react-router-dom";
import './FooterSectionCode.css';

function FooterSectionCode() {

  const footerObj = [{
    image: "https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png"
  }
  ]

  const footLinks = [{
    link: "Privacy policy"
  }, {
    link: "Terms of use"
  }, {
    link: "contact us"
  }, {
    link: "Refund policy"
  }]

  const navigate = useNavigate();

     const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // or 'auto' for instant scroll
      });
    };

  return (
    <>
      <footer className="foot-container">
        <div className="footer-1">
          <button className="footer-button" onClick={scrollToTop}>launched by</button>
          <div className="foot-img-container">
            {footerObj.map((foot) => {
              return (
                <img className="footer-images" src={foot.image} onClick={scrollToTop} />
              )
            })}
          </div>

          <ul className="links-container">
            {footLinks.map(flink => {
              return (
                <li onClick={scrollToTop}>{flink.link}</li>
              )
            })}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default FooterSectionCode;