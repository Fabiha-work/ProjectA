import Img5 from "./red.png";
import Img1 from "./taj.png";
import React from "react";
import Img2 from "./Hawa.png";
import Img3 from './beach.png'

const Tourism = () => {
  return (
    <div>
      <h1 style={{
        textDecoration: 'underline'
      }}>Tourism in India:</h1>
      <div style={styles.container}>
        <img src={Img5} alt="Sample" style={styles.image1} />
        <p style={styles.paragraph}>
          <h3>1. Red Fort</h3>
          The Red Fort, also known as Lal Qila is a historic fort in Delhi,
          India, that historically served as the main residence of the Mughal
          emperors. Emperor Shah Jahan commissioned construction of the Red Fort
          on 12 May 1639, when he decided to shift his capital from Agra to
          Delhi. <br />
          On 15 August 1947, the first Prime Minister of India, Jawaharlal
          Nehru, raised the Indian flag above the Lahori Gate. Every year on
          India's Independence Day (15 August), the prime minister hoists the
          Indian tricolour flag at the fort's main gate and delivers a
          nationally broadcast speech from its ramparts through the Public
          Address System of Indian Army Corps of Signals.
        </p>
      </div>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          <h3>2. Taj Mahal</h3>
          The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ -/ TAHJ mə-HAHL, TAHZH -⁠,
          Hindi: [taːdʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white
          marble mausoleum on the right bank of the river Yamuna in Agra, Uttar
          Pradesh, India. It was commissioned in 1631 by the fifth Mughal
          emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved
          wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The
          tomb is the centrepiece of a 17-hectare (42-acre) complex, which
          includes a mosque and a guest house, and is set in formal gardens
          bounded on three sides by a crenellated wall. <br />
          <br />
          Construction of the mausoleum was completed in 1648, but work
          continued on other phases of the project for another five years. The
          first ceremony held at the mausoleum was an observance by Shah Jahan,
          on 6 February 1643, of the 12th anniversary of the death of Mumtaz
          Mahal. The Taj Mahal complex is believed to have been completed in its
          entirety in 1653 at a cost estimated at the time to be around ₹5
          million, which in 2023 would be approximately ₹35 billion (US$77.8
          million).
        </p>
        <img src={Img1} alt="Sample" style={styles.image2} />
      </div>
      <div style={styles.container}>
        <img src={Img2} alt="Sample" style={styles.image1} />
        <p>
          <h3>3. Hawa Mahal</h3>
          The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
          Built from red and pink sandstone, it is on the edge of the City
          Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa
          Mahal is known as the “ palace of winds “. Maharaja Sawai Pratap Singh
          built it palace in 1799. Hawa Mahal is considered to be unique as it
          has many small windows and balconies that seem like a honeycomb.
          <br />
          <br />
          [1 The structure was built in 1799 by the Maharaja Sawai Pratap Singh,
          grandson of Maharaja Sawai Jai Singh, the founder of the city of
          Jhunjhunu in the state of Rajasthan.[2] He was so inspired by the
          unique structure of Khetri Mahal that he built this grand and
          historical palace.
        </p>
      </div>
      <div style={styles.container}>
        <p>
          <h3>3. Goa</h3>
          Goa (/ˈɡoʊə/;[9] Konkani: [ɡõːj]; Portuguese: [ˈɡoɐ] ⓘ) is a state on
          the southwestern coast of India within the Konkan region,
          geographically separated from the Deccan highlands by the Western
          Ghats.[10][11] It is bound by the Indian states of Maharashtra to the
          north, and Karnataka to the east and south, with the Arabian Sea in
          the west. It is India's smallest state by area and fourth-smallest by
          population. Goa has the highest GDP per capita among all Indian
          states,[6][12] two and a half times as high as the GDP per capita of
          the country as a whole.[13] The Eleventh Finance Commission of India
          named Goa the best-placed state because of its infrastructure, and
          India's National Commission on Population rated it as having the best
          quality of life in India (based on the commission's "12
          Indicators").[13] It is the second-highest ranking among Indian states
          in the human development index.[7]
        </p>
        <img src={Img3} alt="Sample" style={styles.image2} />
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
    height: "250px",
    marginRight: "20px",
  },
  image2: {
    width: "600px",
    height: "300px",
    marginLeft: "20px",
  },
};

export default Tourism;
