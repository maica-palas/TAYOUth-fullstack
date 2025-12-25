import React from "react";
import logo from "../../../img/t-logo.png";
import pic1 from "../../../img/pic1.jpg";
import pic2 from "../../../img/pic2.jpg";
import pic3 from "../../../img/pic3.jpg";
import pic4 from "../../../img/pic4.jpg";
import picture from "../../../img/g.png";
import founderImg from "../../../img/f1.jpg";
import eventImg from "../../../img/f2.jpg";
import groupImg from "../../../img/f3.jpg";
import handImg from "../../../img/goal.jpg";
import mapImg from "../../../img/mapping.png";
import { useNavigate } from "react-router-dom";

const style = `
.home-main {
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  background: #fff;
  min-height: 100vh;
}
  
.home-content {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  
  }
  
.home-img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    display: flex;
    margin-bottom: 10px;
    
  }

.announcement-header {
  background: #FFD966;
  text-align: center;
  padding: 32px 0 0 0;
}
.announcement-logo {
  width: 320px;
  height: auto;
  margin-bottom: 0;
}
.announcement-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0;
  letter-spacing: 1px;
}
.announcement-section {
  margin: 32px 0 0 0;
  text-align: center;
}
.announcement-headline {
  font-size: 2rem;
  font-weight: 900;
  margin: 32px 0 0 0;
}
.announcement-headline .blue {
  color: #0a1970;
}
.announcement-headline .yellow {
  color: #eac03a;
}
.announcement-subtitle {
  font-size: 1rem;
  font-weight: 700;
  margin: 12px 0 0 0;
}
.announcement-boxes {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin: 40px auto 0 auto;
  max-width: 1200px;
}
.announcement-box {
  flex: 1;
  background: #f7f7f7;
  border: 10px solid #eac03a;
  border-radius: 12px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 16px;
}
.announcement-box h2 {
  font-size: 2rem;
  font-weight: 900;
  margin: 0 0 16px 0;
}

/* About Section */
.about-header {
  background: #FFD966;
  width: 100%;
  padding: 0;
  margin-top: 48px;
  min-height: 160px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.about-content {
  background-color: #FFD966;
  text-align: center;
  
}

.about-logo {
  width: 400px;
  height: auto;
  margin-top: 50x;
}
.about-h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0;
}


.about-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.about-header-icon {
  font-size: 2.5rem;
  color: #FFA500;
  margin-right: 8px;
}
.about-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 0 0 0;
  text-align: center;
}
.about-images-row {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 32px;
}
.about-img {
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
@media (max-width: 1000px) {
  .about-images-row {
    flex-direction: column;
    gap: 16px;
  }
  .about-img {
    width: 100%;
    height: 180px;
  }
}
.about-headline {
  font-size: 2rem;
  font-weight: 900;
  margin: 0 0 18px 0;
}
.about-headline .blue {
  color: #0a1970;
}
.about-headline .yellow {
  color: #eac03a;
}
.about-paragraph {
  font-size: 1.3rem;
  color: #222;
  margin: 0 auto;
  max-width: 1000px;
  line-height: 1.5;
  text-align: center;
}
/* founder section */
..found-section {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #fff;
  padding-bottom: 40px;
  color: #222;
}

.found-header {
  background: #ffe14d;
  padding: 0;
  text-align: center;
}

.tayouth-highlight {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #0a174e;
  margin-bottom: 0;
  margin-top: 0;
  display: inline-block;
}

.tayouth-highlight .yellow {
  color: #ffe14d;
}

.found-header .subtitle {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  color: #111;
}

.found-main {
  display: flex;
  gap: 48px;
  padding: 48px 0 0 0;
  max-width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
}

.found-images {
  flex: 1.1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
}

.main-img {
  width: 480px;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.found-thumbs {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.found-thumbs img {
  width: 220px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.found-bio {
  flex: 1.5;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.found-bio h2 {
  color: #0a174e;
  font-size: 2.3rem;
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 0;
}

.found-quote {
  color: #f7b500;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 18px;
  margin-top: 4px;
}

.found-bio p,
.found-paragraph {
  text-align: left;
  font-size: 1.18rem;
  line-height: 1.7;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 600px;
}

@media (max-width: 1200px) {
  .found-main {
    flex-direction: column;
    gap: 32px;
    padding: 32px 10px 0 10px;
  }
  .found-images {
    align-items: center;
  }
  .main-img {
    width: 100%;
    max-width: 400px;
  }
  .found-thumbs img {
    width: 140px;
    height: 80px;
  }
}
`;

const AboutSection = () => (
  <>
    <div className="about-header">
      <h1 className="about-h1">About</h1>
      <img src={logo} alt="TAYOUTH logo" className="about-logo" />
    </div>
    <div className="about-section">
      <div className="about-images-row">
        <img src={pic1} alt="TaYouth event 1" className="about-img" />
        <img src={pic2} alt="TaYouth event 2" className="about-img" />
        <img src={pic3} alt="TaYouth event 3" className="about-img" />
        <img src={pic4} alt="TaYouth event 4" className="about-img" />
      </div>
      <div className="about-headline">
        <span className="blue">Service.</span> Growth.{" "}
        <span className="yellow">impact.</span>
      </div>
      <div className="about-paragraph">
        TaYouth is more than just a youth organization—it is a movement fueled
        by passion, purpose, and the drive to create meaningful change. Rooted
        in service, we believe that every act of kindness, no matter how small,
        has the power to transform lives and uplift communities. We are a
        collective of young changemakers who see challenges as opportunities,
        using our skills, creativity, and dedication to make a lasting impact.
        Through collaboration, innovation, and a shared commitment to empowering
        others, we turn ideas into action, ensuring that no voice is left
        unheard and no potential is left untapped. Beyond service, TaYouth is a
        space for growth—where leaders are shaped, potentials are nurtured, and
        dreams are turned into reality. We believe that true impact starts from
        within, and by continuously learning, evolving, and challenging
        ourselves, we strengthen our ability to lead and inspire. Whether
        through advocacy, skills training, or hands-on initiatives, we strive to
        create sustainable change that goes beyond temporary solutions. With
        hearts full of passion and a vision for a better tomorrow, we are
        building a future where youth are the driving force of transformation.
        No limits. No boundaries. Just unstoppable action for a better world.
      </div>
    </div>
  </>
);

const MapCommunitySection = () => {
  const navigate = useNavigate();
  return (
    <div className="map-community-section">
      <style>{`
        .map-community-section {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 0px;
          background: #fff;
          padding: 50px 10px 20px 10px;
          max-width: 1800px;
          margin: 0 auto 80px auto;
          box-sizing: border-box;
        }
        .map-community-left {
          flex: 1.2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-img {
          width: 650px;
          height: 520px;
          object-fit: contain;
          background: #fff;
          display: block;
          margin: 0 32px 0 0;
        }
        .map-community-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
        .map-community-buttons {
          display: flex;
          gap: 60px;
          margin-bottom: 48px;
        }
        .map-community-btn {
          background: #222;
          color: #fff;
          border: none;
          border-radius: 16px;
          padding: 32px 80px;
          font-size: 2rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .map-community-btn:hover {
          background: #444;
        }
        .map-community-desc {
          font-size: 1.8rem;
          color: #222;
          text-align: center;
          max-width: 600px;
        }
        @media (max-width: 1200px) {
          .map-community-section {
            flex-direction: column;
            align-items: center;
            gap: 48px;
            padding: 32px 8px;
            max-width: 100%;
          }
          .map-img {
            width: 100%;
            max-width: 650px;
            height: auto;
          }
          .map-community-desc {
            max-width: 100%;
          }
          .map-community-buttons {
            gap: 24px;
          }
        }
      `}</style>
      <div className="map-community-left">
        <img src={mapImg} alt="Lucena City Map" className="map-img" />
      </div>
      <div className="map-community-right">
        <div className="map-community-buttons">
          <button className="map-community-btn" onClick={() => navigate("/donateform")}>Donate</button>
          <button className="map-community-btn" onClick={() => navigate("/join")}>Volunteer</button>
        </div>
        <div className="map-community-desc">
          TaYouth believes in the power of individuals coming together to make a lasting difference. Whether through volunteering, donating, or spreading awareness, every effort counts in shaping a better future for children and communities.
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <div className="home-main">
    <style>{style}</style>
    <div className="home-content">
      <img src={picture} alt="TaYouth Banner" className="home-img" />
    </div>
    <div className="announcement-header">
      <img src={logo} alt="TAYOUTH logo" className="announcement-logo" />
      <div className="announcement-title">Announcements</div>
    </div>
    <div className="announcement-section">
      <div className="announcement-headline">
        <span className="blue">Empowering youth</span>, building communities,
        and <span className="yellow">making an impact together</span>
      </div>
      <div className="announcement-subtitle">
        TaYouth embodies empowerment, service, and commitment, striving to
        uplift communities, inspire the youth, and create lasting positive
        change.
      </div>
      <div className="announcement-boxes">
        <div className="announcement-box">
          <h2>Announcement</h2>
        </div>
        <div className="announcement-box">
          <h2>Volunteer Spotlight</h2>
        </div>
      </div>
    </div>
    <AboutSection />
    <Founder />
    <div className="barangay-arangkada-section">
      <style>{`
        .barangay-arangkada-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          background: #fff;
          padding: 48px 32px 48px 32px;
          max-width: 1200px;
          margin: 0 auto 48px auto;
          border-radius: 0;
        }
        .barangay-arangkada-left {
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          min-width: 0;
        }
        .barangay-arangkada-title {
          font-size: 2.7rem;
          font-weight: 900;
          color: #0a1970;
          margin-bottom: 0.7rem;
          margin-top: 0;
          line-height: 1.1;
        }
        .barangay-arangkada-subtitle {
          font-size: 2.7rem;
          font-weight: 900;
          color: #eac03a;
          margin-bottom: 1.5rem;
          margin-top: 0;
          line-height: 1.1;
        }
        .barangay-arangkada-desc {
          font-size: 1.5rem;
          color: #222;
          line-height: 1.7;
          font-weight: 400;
          margin-bottom: 0;
          margin-top: 0;
          max-width: 900px;
        }
        .barangay-arangkada-right {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .barangay-arangkada-img {
          width: 480px;
          height: 520px;
          object-fit: cover;
          border-radius: 16px;
          border: 6px solid #ffe066;
          box-sizing: border-box;
          background: #fff;
          margin: 0 auto;
          max-width: 100%;
        }
        @media (max-width: 900px) {
          .barangay-arangkada-section {
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
            padding: 24px 8px;
          }
          .barangay-arangkada-right {
            justify-content: center;
          }
          .barangay-arangkada-img {
            width: 100%;
            height: auto;
            margin: 0 auto;
            max-width: 480px;
          }
          .barangay-arangkada-desc {
            max-width: 100%;
          }
        }
      `}</style>
      <div className="barangay-arangkada-left">
        <div className="barangay-arangkada-title">Barangay Arangkada Goal:</div>
        <div className="barangay-arangkada-subtitle">Expanding Our Reach</div>
        <div className="barangay-arangkada-desc">
          TaYouth envisions a future where every barangay in Lucena City benefits from dedicated volunteer efforts that uplift children and communities. With the "Barangay Arangkada Goal," we extend our initiatives across multiple barangays, ensuring that our advocacy reaches those who need it the most. By implementing educational programs, resource distribution, and community engagement activities, we aim to provide children with access to opportunities that empower them to grow. Our mission is to inspire positive change, strengthen communities, and ensure that no child is left behind in their pursuit of a brighter future.
        </div>
      </div>
      <div className="barangay-arangkada-right">
        <img src={handImg} alt="Goal" className="barangay-arangkada-img" />
      </div>
    </div>
    <MapCommunitySection />
  </div>
);  
const Founder = () => (
  <div className="tayouth-container">
    <style>{`
      .tayouth-container {
        font-family: 'Montserrat', Arial, sans-serif;
        background: #fff;
        padding: 0;
        margin: 0;
      }
      .tayouth-header {
        background: #FFD966;
        width: 100%;
        padding: 0;
        margin-top: 48px;
        min-height: 160px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .tayouth-logo {
        height: 80px !important;
        width: auto;
        margin-bottom: 0 !important;
        margin-top: 0;
      }
      .tayouth-header h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 0;
      }
      .tayouth-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 60px 5vw 60px 5vw;
        gap: 72px;
        margin-left: auto;
        margin-right: auto;
      }
      .tayouth-photos {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        max-width: 520px;
        justify-content: flex-start;
        margin-top: 0;
        padding-top: 0;
      }
      .main-photo {
        width: 100%;
        height: auto;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 4px 24px rgba(0,0,0,0.10);
      }
      .sub-photos {
        display: flex;
        gap: 24px;
      }
      .sub-photos img {
        width: 48%;
        height: auto;
        border-radius: 12px;
        object-fit: cover;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      }
      .tayouth-bio {
        flex: 2;
        max-width: 700px;
        margin-top: 0;
        padding-top: 0;
        text-align: center;
      }
      .tayouth-bio .name {
        color: #1a237e;
        font-size: 2.2rem;
        font-weight: 900;
        letter-spacing: 1px;
      }
      .tayouth-bio .subtitle {
        color: #ffc107;
        font-size: 1.1rem;
        font-weight: 800;
      }
      .tayouth-bio .quote {
        font-style: italic;
        font-size: 1.1rem;
      }
      .tayouth-bio p {
        margin-top: 24px;
        font-size: 1.4rem;
        line-height: 1.7;
        color: #222;
        max-width: 700px;
      }
      @media (max-width: 1200px) {
        .tayouth-content {
          flex-direction: column;
          align-items: center;
          gap: 48px;
        }
        .tayouth-photos, .tayouth-bio {
          max-width: 100%;
        }
        .tayouth-header h2 {
          font-size: 2.2rem;
        }
        .tayouth-bio .name {
          font-size: 2.2rem;
        }
        .tayouth-bio .subtitle {
          font-size: 1.2rem;
        }
        .tayouth-bio p {
          font-size: 1.1rem;
        }
      }
    `}</style>
    <div className="tayouth-header">
      <img src={logo} alt="TAYOUTH logo" className="tayouth-logo" />
      <h2>Founder and President</h2>
    </div>
    <div className="tayouth-content">
      <div className="tayouth-photos">
        <img src={founderImg} alt="Founder speaking" className="main-photo" />
        <div className="sub-photos">
          <img src={eventImg} alt="Volunteering 1" />
          <img src={groupImg} alt="Volunteering 2" />
        </div>
      </div>
      <div className="tayouth-bio">
        <h1>
          <span className="name">Michael John C. Serna</span>
          <br />
          <span className="subtitle">
            <span className="quote">"The visionary behind TAYOUth impact"</span>
          </span>
        </h1>
        <p>
          Michael John C. Serna, known as MJ, is the founder and president of TaYouth. A graduate of NU Laguna and Asia Pacific College with a major in Marketing and Advertising, MJ has combined his expertise in digital marketing, event management, and public service to lead transformative initiatives. Driven by a passion for service and youth empowerment, he built the organization not just to support communities but to inspire and create a lasting impact on the lives of young people. As a dedicated youth leader, he has spearheaded programs that have benefited over 1,000 children in Lucena City, focusing on education, community development, and social outreach. His unwavering commitment to volunteerism and sustainable change continues to shape TaYouth's mission, ensuring that more communities receive the support and opportunities they need to thrive.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
