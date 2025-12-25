import React from "react";
import banner from "../../../img/g.png";
import comm1 from "../../../img/comm1.png";
import comm2 from "../../../img/comm2.png";
import comm3 from "../../../img/comm3.png";

const styles = {
  main: {
    background: "#fff",
    minHeight: "100vh",
    fontFamily: "Montserrat, Arial, sans-serif",
    paddingBottom: "48px",
  },
  container: {
    maxWidth: "950px",
    margin: "0 auto",
    padding: "32px 16px 0 16px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "2.7rem",
    textAlign: "center",
    marginBottom: "0.2em",
    marginTop: "0.5em",
    letterSpacing: "0.5px",
  },
  headingEmp: {
    color: "#002366",
  },
  headingServ: {
    color: "#222",
  },
  headingComm: {
    color: "#efc94c",
  },
  subheading: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1.05rem",
    marginBottom: "1.2em",
    marginTop: "-0.5em",
  },
  paragraph: {
    fontSize: "1.08rem",
    lineHeight: 1.35,
    marginBottom: "0.7em",
    textAlign: "justify",
    fontFamily: "Montserrat, Arial, sans-serif",
  },
  imagesRow: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    marginTop: "36px",
    flexWrap: "wrap",
  },
  imgCard: {
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
    overflow: "hidden",
    width: "300px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "auto",
    height: "1000px", // Adjust as needed
    objectFit: "contain",
    borderRadius: "16px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
  },
  topImg: {
    display: "block",
    margin: "0 auto 32px auto",
    width: "500px",
    maxWidth: "90vw",
    height: "auto",
    objectFit: "contain",
    borderRadius: "24px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
  },
};

const About = () => (
  <div style={styles.main}>
    <div style={styles.container}>
      <img src={banner} alt="TaYouth Banner" style={styles.topImg} />
      <div style={styles.heading}>
        <span style={styles.headingEmp}>Empowerment.</span>{" "}
        <span style={styles.headingServ}>Service.</span>{" "}
        <span style={styles.headingComm}>Commitment.</span>
      </div>
      <div style={styles.subheading}>
        TaYouth embodies empowerment, service, and commitment, striving to uplift communities, inspire the youth, and create lasting positive change.
      </div>
      <div style={styles.paragraph}>
        TaYouth started as part of the Angat Buhay Literacy Hub (ABLH), where volunteers were initially limited to teaching within the learning hub. However, some volunteers wanted to extend their efforts beyond the classroom and create initiatives outside of teaching. This desire to expand their impact led to the formation of TaYouth, with Canva 101 becoming its first official project. The volunteers for Canva 101 were the same individuals from ABLH, marking the transition from a teaching-focused initiative to a broader youth-driven movement.
      </div>
      <div style={styles.paragraph}>
        As time passed, members of the core team—who were originally ABLH volunteers—decided to run in the Sangguniang Kabataan (SK) elections. They came together under the TaYouth name, using it as their official slate. However, despite their efforts, they were not elected. Even after the elections, their commitment to serving the community remained unwavering. TaYouth continued its projects and activities, proving that their advocacy was never tied to political power but rather to genuine volunteerism and youth empowerment.
      </div>
      <div style={styles.paragraph}>
        One of the key lessons learned along the way was the importance of remaining non-partisan. The organization had previously experienced instances where its projects were used for personal and political gain. Because of this, TaYouth made the conscious decision to stay independent, ensuring that the personal political preferences of its volunteers would not influence the organization's mission. This commitment to neutrality and service has allowed TaYouth to grow and thrive as a volunteer-driven initiative, dedicated solely to empowering the youth and uplifting communities.
      </div>
      <div style={styles.imagesRow}>
        <div style={styles.imgCard}>
          <img src={comm1} alt="Community 1" style={styles.img} />
        </div>
        <div style={styles.imgCard}>
          <img src={comm2} alt="Community 2" style={styles.img} />
        </div>
        <div style={styles.imgCard}>
          <img src={comm3} alt="Community 3" style={styles.img} />
        </div>
      </div>
    </div>
  </div>
);

export default About;
