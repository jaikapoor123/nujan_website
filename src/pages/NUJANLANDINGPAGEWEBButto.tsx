import { FunctionComponent, useCallback } from "react";
import "./NUJANLANDINGPAGEWEBButto.css";
const NUJANLANDINGPAGEWEBButto: FunctionComponent = () => {
  const onNUJANLANDINGPAGEWEBButtoClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='nujanText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []
  );

  return (
    <article
      className="nujan-landing-page-web-butto"
      onClick={onNUJANLANDINGPAGEWEBButtoClick}
    >
      <div className="footer">
        <div className="footer-child" />
        <div className="all-rights-reserved"> © 2023. All rights reserved.</div>
        <div className="nujan">Nujan</div>
        <a className="appstore" href="theappstore.com" />
        <img className="path14-icon" alt="" src="/path14@2x.png" />
        <div className="about-us">About us</div>
        <div className="terms">Terms</div>
        <div className="privacy">Privacy</div>
        <div className="contact-us">Contact us</div>
      </div>
      <div className="content">
        <b className="hey-there-im-container">
          <p className="co-ol">Co ol</p>
          <p className="co-ol">Sp ace</p>
        </b>
        <div className="the-new">The new</div>
        <div className="iphone-13">
          <video className="screen" controls>
            <source src="/website_vns broll with logo-2-2-3.mp4" />
          </video>
          <img className="pink-icon" alt="" src="/pink@2x.png" />
        </div>
      </div>
      <div className="header">
        <a className="image-1" href="theappstore.com" />
        <img className="image-icon" alt="" src="/path14@2x.png" />
        <div className="nujan1" data-scroll-to="nujanText">
          Nujan
        </div>
      </div>
    </article>
  );
};

export default NUJANLANDINGPAGEWEBButto;
