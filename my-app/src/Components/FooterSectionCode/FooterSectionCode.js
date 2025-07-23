import React from "react";
import './FooterSectionCode.css';

function FooterSectionCode() {

  const footerObj = [{
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj25zYqL4_MbUGibcRX7WIwwjdjbpmkXvRowmwp8vU5skTbv-94lDUdKTot8JngKPebwuffxdclhJpSfOSQtMwPwOuS8SGdCKtDJcT6qNM4mKo-8E2fMn7CLe5ye-THgRYAFhOWZtKeGkQ/s0-rw/Instagram+Logo+-+Download+Free+Vector+PNG.png"
  },
  {
    image: "https://thumbs.dreamstime.com/b/isolated-linkedin-logo-vector-illustration-icon-minsk-belarus-march-142909970.jpg"
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

  return (
    <>
      <footer className="foot-container">
        <div className="footer-1">
          <button className="footer-button">launched by</button>
          <div className="foot-img-container">
            {footerObj.map((foot) => {
              return (
                <img className="footer-images" src={foot.image} />
              )
            })}
          </div>

          <ul className="links-container">
            {footLinks.map(flink => {
              return (
                <li>{flink.link}</li>
              )
            })}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default FooterSectionCode;