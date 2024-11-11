import React from "react";
import Card from "./Card";
import Carousel from "react-bootstrap/Carousel";
import Img2 from "./taj.png";
import Img3 from "./fest.png";
import Img4 from "./tiger.png";
import Img5 from "./food.png";
import Img6 from "./techno.png";
import Img7 from "./movie.png";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={Img2} height={600} width={1260} text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} height={600} width={1260} text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img4} height={600} width={1260} text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img5} height={600} width={1260} text="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img6} height={600} width={1260} text="Fifth slide" />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img7} height={600} width={1260} text="Sixth slide" />
          <Carousel.Caption>
            <h3>Sixth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 style={{
        paddingTop:'40px',
        paddingLeft:'20px'
      }}>
        <u>India:</u>
      </h1>
      <p style={{
        paddingLeft:'20px'
      }}>
        India, officially the Republic of India,[j][20] is a country in South
        Asia. It is the seventh-largest country in the world by area and the
        most populous country. Bounded by the Indian Ocean on the south, the
        Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it
        shares land borders with Pakistan to the west;[k] China, Nepal, and
        Bhutan to the north; and Bangladesh and Myanmar to the east. In the
        Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives;
        its Andaman and Nicobar Islands share a maritime border with Thailand,
        Myanmar, and Indonesia.
      </p>
      <h1></h1>
      <Card />
    </div>
  );
};

export default Home;
