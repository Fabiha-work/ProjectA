import React from "react";
import Img1 from "./it.png";
import Img2 from "./mars.png";
import Img3 from "./chandra.png";

const Tech = () => {
  return (
    <div>
      <h1
        style={{
          textDecoration: "underline",
        }}
      >
        Technology in India:
      </h1>
      <br /> <br />
      <h3>1. Information Technology of India:</h3>
      <div style={styles.container}>
        <img src={Img1} alt="Sample" style={styles.image1} />
        <p style={styles.paragraph}>
          The information technology (I.T.) industry in India comprises
          information technology services and business process outsourcing.[1]
          The share of the IT-BPM sector in the GDP of India is 7.4% in FY
          2022.[2][3] The IT and BPM industries' revenue is estimated at US$ 245
          billion in FY 2023.[4][5][6] The domestic revenue of the IT industry
          is estimated at $51 billion, and export revenue is estimated at $194
          billion in FY 2023.[5][6] The IT–BPM sector overall employs 5.4
          million people as of March 2023.[7][5][6] In December 2022, Union
          Minister of State for Electronics and IT Rajeev Chandrasekhar, in a
          written reply to a question in Rajya Sabha informed that IT units
          registered with state-run Software Technology Parks of India (STPI)
          and Special Economic Zones have exported software worth Rs 11.59 lakh
          crore in 2021–22.[8][9]
        </p>
      </div>
      <br /> <br /> <br />
      <h3>2. Space Eploration:</h3>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          <h5>A.Mars Orbit Mission: </h5>
          The Mars Orbiter Mission, also called "Mangalyaan",[26] was launched
          on 5 November 2013 by the Indian Space Research Organisation
          (ISRO).[27][28][29] It is India's first interplanetary mission,[30]
          making ISRO the fourth space agency to reach Mars, after the Soviet
          space program, NASA, and the European Space Agency.[31] The first
          Asian nation to reach Mars orbit and the first nation to do so on its
          first attempt was India
        </p>
        <img src={Img2} alt="Sample" style={styles.image1} />
      </div>
      <div style={styles.container}>
        <img src={Img3} alt="Sample" style={styles.image1} />
        <p style={styles.paragraph}>
          <h5>B. Chandrayaan Programme:</h5>
          On 18 November 2008, the Moon Impact probe was released from
          Chandrayaan-1 at a height of 100 km (62 mi). During its 25-minute
          descent, Chandra's Altitudinal Composition Explorer (CHACE) recorded
          evidence of water in 650 mass spectra readings gathered during this
          time.[35] On 24 September 2009 Science journal reported that the
          Chandrayaan-1 had detected water ice on the Moon.[36] Chandrayaan-2
          was launched on 22 July 2019. It was a partial success: The team
          wanted to send an additional lander with rover Vikram with the
          original orbiter in it, to mark India's terrestrial presence on Moon,
          but the signal connection was lost about 2.1 km (1.3 mi) above the
          lunar surface. Over several months team tried to resume contact with
          lander, but ended up with no success. Later, by the late February
          2020, it was claimed that an Indian software engineer from Chennai
          living in USA studied the NASA data of the proposed crashed site and
          found the Lander.
        </p>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },
  image1: {
    width: "400px",
    height: "200px",
    marginRight: "20px",
  },
};

export default Tech;
