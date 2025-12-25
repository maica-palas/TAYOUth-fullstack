import React from "react";

const TaYouthFounder = () => (
  <div className="tayouth-container">
    <style>{`
      .tayouth-container {
        font-family: 'Montserrat', Arial, sans-serif;
        background: #fff;
        padding: 0;
        margin: 0;
      }
      .tayouth-header {
        background: #ffe066;
        padding: 32px 0 16px 0;
        text-align: center;
      }
      .tayouth-logo {
        font-size: 2.5rem;
        font-weight: 800;
        color: #1a237e;
        letter-spacing: 2px;
      }
      .tayouth-logo .tm {
        font-size: 1rem;
        vertical-align: super;
      }
      .tayouth-header h2 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        color: #111;
      }
      .tayouth-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 40px 5vw;
        gap: 48px;
      }
      .tayouth-photos {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        max-width: 400px;
      }
      .main-photo {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
      .sub-photos {
        display: flex;
        gap: 12px;
      }
      .sub-photos img {
        width: 48%;
        border-radius: 8px;
        object-fit: cover;
      }
      .tayouth-bio {
        flex: 2;
        max-width: 700px;
      }
      .tayouth-bio .name {
        color: #1a237e;
        font-size: 2.2rem;
        font-weight: 800;
      }
      .tayouth-bio .subtitle {
        color: #ffc107;
        font-size: 1.2rem;
        font-weight: 700;
      }
      .tayouth-bio .quote {
        font-style: italic;
      }
      .tayouth-bio p {
        margin-top: 18px;
        font-size: 1.15rem;
        line-height: 1.7;
        color: #222;
      }
      @media (max-width: 900px) {
        .tayouth-content {
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .tayouth-photos, .tayouth-bio {
          max-width: 100%;
        }
      }
    `}</style>
    <div className="tayouth-header">
      <span className="tayouth-logo">TAYOU<span className="tm">™</span></span>
      <h2>Founder and President</h2>
    </div>
    <div className="tayouth-content">
      <div className="tayouth-photos">
        <img src="f1.jpg" alt="Founder speaking" className="main-photo" />
        <div className="sub-photos">
          <img src="f2.jpg" alt="Volunteering 1" />
          <img src="f3.jpg" alt="Volunteering 2" />
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

export default TaYouthFounder; 