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

const Home = () => {
//   const navigate = useNavigate();

//   const location = useLocation();
//   const { pathname } = location;
//   const { t } = useTranslation();

  return (
    <>
<div class="hero_area">

<section class="slider_section ">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail_box">
                    <h1>
                      Reviews Promotion Service

                    </h1>
                    <p>
                      Buy Real Reviews Promotions with quick delivery
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        Contact Us
                      </a>
                      <a href="" class="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={sliderImg} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        
      </div>
    </section>


<section class="about_section ">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src={aboutImg2} alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
              Here at KinReviews, we have one of the best Reviews promotion services you will find in the industry. Check it out today!
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section class="service_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container">
        <h2>
          Our Services
        </h2>
        <p>
          Grow your business with us, we provide the support you need to maximize your growth potential.
        </p>
      </div>

      <div class="service_container">
        
        <div class="box">
          <div class="img-box">
            <img src={s2} alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Tripadvisor Reviews

            </h5>
           
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src={s3} alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              TrustPilot Reviews
            </h5>
          
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src={s1} alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Google Reviews
            </h5>
           
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src={s4} alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              
            SiteJabber Reviews
            </h5>
        
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src={s5} alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Others Websites Reviews
            </h5>
            <p>
             If you need any others websites reviews

            <br/>
              Please contact us, We'll make for you customs solutions !
              
             </p>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
 
  <section class="work_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          How We Work!
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="detail_container">
            <div class="box b-1">
              <div class="top-box">
                <div class="icon-box">
                  <img src={workI1} alt=""/>
                </div>
                <h5>
                  We Generate A Good Idea First
                </h5>
              </div>
              <div class="bottom-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div class="box b-1">
              <div class="top-box">
                <div class="icon-box">
                  <img src={workI2} alt=""/>
                </div>
                <h5>
                  Then We Start Applying Ideas
                </h5>
              </div>
              <div class="bottom-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src={workImg} alt=""/>
          </div>
        </div>
      </div>

      <div class="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>

 <section class="team_section layout_padding2-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          Meet The Team
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="team_container">
      <div class="box b-1">
        <div class="img-box">
          <img src={t1} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
            Yokit Den
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <div class="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
              <img src={twitter} alt=""/>
            </a>
            <a href="">
              <img src={instagram} alt=""/>
            </a>
            <a href="">
              <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div class="box b-2">
        <div class="img-box">
          <img src={t2} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
            Morde Den
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <div class="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
              <img src={twitter } alt=""/>
            </a>
            <a href="">
              <img src={linkedin} alt=""/>
            </a>
            <a href="">
              <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div class="box b-3">
        <div class="img-box">
          <img src={t3} alt=""/>
        </div>
        <div class="detail-box">
          <h5>
            Marry Doki
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <div class="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
            <img src={twitter } alt=""/>
            </a>
            <a href="">
            <img src={linkedin} alt=""/>
            </a>
            <a href="">
            <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>  <section class="client_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          Testimonial
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="box">
              <div class="img-box">
                <img src={client} alt=""/>
              </div>
              <div class="detail-box">
                <h6>
                  Normal distribution
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of
                  letters, as opposed to using 'Content here, content here', making it look
                </p>
                <img src={quote} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="box">
              <div class="img-box">
                <img src={client} alt=""/>
              </div>
              <div class="detail-box">
                <h6>
                  Normal distribution
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of
                  letters, as opposed to using 'Content here, content here', making it look
                </p>
                <img src={quote} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="box">
              <div class="img-box">
                <img src={client} alt=""/>
              </div>
              <div class="detail-box">
                <h6>
                  Normal distribution
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of
                  letters, as opposed to using 'Content here, content here', making it look
                </p>
                <img src={quote} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>

  </section> 

  <div class="footer_bg">

    <section class="contact_section layout_padding" id="contactLink">
      <div class="container">
        <div class="heading_container">
          <h2>
            Get In touch
          </h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-8 mx-auto">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" id="inputName4" placeholder="Name "/>
                </div>
                <div class="form-group col-md-6">
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email id"/>
                </div>

              </div>
              <div class="form-row">
                <div class="form-group col">
                  <input type="text" class="form-control" id="inputSubject4" placeholder="Subject"/>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="inputMessage" placeholder="Message"/>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>



    <section class="info_section layout_padding2">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_logo">
              <h3>
                Seotech
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indidunt ut labore et
                dolore magna
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_links">
              <h4>
                BASIC LINKS
              </h4>
              <ul class="  ">
                <li class=" active">
                  <a class="" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="">
                  <a class="" href="about.html"> About</a>
                </li>
                <li class="">
                  <a class="" href="service.html"> Services </a>
                </li>
                <li class="">
                  <a class="" href="#contactLink">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_contact">
              <h4>
                CONTACT DETAILS
              </h4>
              <a href="">
                <div class="img-box">
                  <img src={telephoneWhite} width="12px" alt=""/>
                </div>
                <p>
                  +01 1234567890
                </p>
              </a>
              <a href="">
                <div class="img-box">
                  <img src={envelopeWhite}width="18px" alt=""/>
                </div>
                <p>
                  demo@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_form ">
              <h4>
                NEWSLETTER
              </h4>
              <form action="">
                <input type="email" placeholder="Enter your email"/>
                <button>
                  Subscribe
                </button>
              </form>
              <div class="social_box">
                <a href="">
                  <img src={infoFb } alt=""/>
                </a>
                <a href="">
                  <img src={infoTwitter } alt=""/>
                </a>
                <a href="">
                  <img src={infoLinkedin }alt=""/>
                </a>
                <a href="">
                  <img src={infoYoutube } alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <section class="container-fluid footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </section>

  </div>
</div>
</>
);
};

export default Home;
