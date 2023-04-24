import aboutDots from '../../images/about-dots.png';
import aboutImg from '../../images/about-img.png';
import aboutImg2 from '../../images/about-img2.png';
import call from '../../images/call.png';
import client from '../../images/client.png';
import envelopeWhite from '../../images/envelope-white.png';
import fb from '../../images/fb.png';
import footerBg from '../../images/footer-bg.png';
import heroBg from '../../images/hero-bg.png';
import infoFb from '../../images/info-fb.png';
import infoLinkedin from '../../images/info-linkedin.png';
import infoTwitter from '../../images/info-twitter.png';
import infoYoutube from '../../images/info-youtube.png';
import insta from '../../images/insta.png';
import instagram from '../../images/instagram.png';
import leftAngle from '../../images/left-angle.png';
import linkedin from '../../images/linkedin.png';
import locationWhite from '../../images/location-white.png';
import location from '../../images/location.png';
import mail from '../../images/mail.png';
import menu from '../../images/menu.png';
import nextWhite from '../../images/next-white.png';
import next from '../../images/next.png';
import phone from '../../images/phone.png';
import play from '../../images/play.png';
import prevWhite from '../../images/prev-white.png';
import prev from '../../images/prev.png';
import quote from '../../images/quote.png';
import rightAngle from '../../images/right-angle.png';
import s1 from '../../images/s-1.png';
import s2 from '../../images/s-2.png';
import s3 from '../../images/s-3.png';
import s4 from '../../images/s-4.png';
import s5 from '../../images/s-5.png';
import searchIcon from '../../images/search-icon.png';
import shopBg from '../../images/shop-bg.jpg';
import sliderImg from '../../images/slider-img.png';
import t1 from '../../images/t-1.png';
import t2 from '../../images/t-2.png';
import t3 from '../../images/t-3.png';
import telephoneWhite from '../../images/telephone-white.png';
import twitter from '../../images/twitter.png';
import user from '../../images/user.png';
import workI1 from '../../images/work-i1.png';
import workI2 from '../../images/work-i2.png';
import workImg from '../../images/work-img.png';


import { useNavigate, useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
//   const navigate = useNavigate();

//   const location = useLocation();
//   const { pathname } = location;
//   const { t } = useTranslation();

  return (
    <>

     <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              Seotech
            </span>
          </a>
        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html"> Services </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contactLink">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="quote_btn-container ">
              <a href="">
                <img src="images/call.png" alt=""/>
                <span>
                  Call : + 01 1234567890
                </span>
              </a>
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
</nav>
</div>

    </header>

</>
);
};

export default Navbar;
