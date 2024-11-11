import React from "react";
import Img1 from "./thali.png";
import Img2 from "./biryani.png";
import Img3 from "./dal.png";
import Img4 from "./samosa.png";
import Img5 from "./palak.png";
import Img6 from "./chicken.png";

const Food = () => {
  return (
    <div>
      <h1>
        <u>Food of India:</u>
      </h1>
      <p>
        India doesn't have an official national dish because its cuisine is
        diverse and varies by culture, religion, and social class. However, many
        consider khichdi to be the national dish because it's a popular dish
        that's eaten by people of all states.
        <ul>
          <li>Thali</li>
          <li>Biryani</li>
          <li>Dal Makhni</li>
          <li>Samosa</li>
          <li>Palak Paneer</li>
          <li>Chicken Tikka</li>
        </ul>
      </p>
      <h3>
        <u>Popular food of India:</u>
      </h3>
      <div style={styles.container}>
        <img src={Img1} alt="Sample" style={styles.image1} />
        <p style={styles.paragraph}>
          <h3>1.Thali</h3>
          Thali is also used to refer to an Indian-style meal made up of a
          selection of various dishes which are served on a platter. Thali is
          also used in south Asia for ceremonial purposes.
        </p>
      </div>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          <h3>2.Biryani</h3>
          Biryani is a mixed rice dish, mainly popular in South Asia. It is made
          with rice, some type of meat and spices. To cater to vegetarians, in
          some cases, it is prepared by substituting vegetables or paneer for
          the meat. Sometimes eggs or potatoes are also added
        </p>
        <img src={Img2} alt="Sample" style={styles.image1} />
      </div>
      <div style={styles.container}>
        <img src={Img3} alt="Sample" style={styles.image1} />
        <p style={styles.paragraph}>
          <h3>3. Dal Makahni</h3>
          Dal makhani is an Indian dish originating in Delhi. A relatively
          modern variation of traditional lentil dishes, it is made with urad
          dal and other pulses, and includes butter and cream.
        </p>
      </div>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          <h3>4. Samosa</h3>A samosa from the Persian word Sambosag is a fried
          South Asian and West Asian snack. It is a pastry with a savory
          filling, mostly vegetables, spiced potatoes, onions, peas, also meat,
          or fish. It is made into different shapes, including triangular, cone,
          or crescent, depending on the region.
        </p>
        <img src={Img4} alt="Sample" style={styles.image1} />
      </div>
      <div style={styles.container}>
        <img src={Img5} alt="Sample" style={styles.image1} />
        <p style={styles.paragraph}>
          <h3>5. Palak Paneer</h3>
          Palak paneer or palak chhena is an Indian dish consisting of chhena or
          paneer in a thick paste made from puréed spinach, called palak in
          Hindi, Marathi, Gujarati, and other Indian languages. The terms palak
          chhena and saag chhena are sometimes used interchangeably in
          restaurants in the Anglosphere
        </p>
      </div>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          <h3>6. Chicken Tikka</h3>
          Chicken tikka is a chicken dish popular in India, Bangladesh, Pakistan
          and the United Kingdom. It is traditionally small pieces of boneless
          chicken baked using skewers on a brazier called angeethi or over
          charcoal after marinating in Indian spices and dahi —essentially a
          boneless version of tandoori chicken
        </p>
        <img src={Img6} alt="Sample" style={styles.image1} />
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

export default Food;
