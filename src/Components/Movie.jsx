import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img1 from "./bolly.png";
import Img2 from "./mother.png";
import Img3 from "./mughal.png";
import Img4 from "./movie.png";
import Img5 from "./ddlj.png";
import Img6 from "./sholay.png";
import Img7 from "./pk.png";

const Movie = () => {
  return (
    <div>
      <h1 style={{ textDecoration: "underline", paddingBottom: "40px" }}>
        Indian Entertainment Industry:
      </h1>

      <div style={styles.container}>
        <img src={Img1} alt="Sample" style={styles.image1} />
        <p style={{ padding: "20px" }}>
          <h2>
            <u>Bollywood:</u>
          </h2>
          Hindi cinema, popularly known as Bollywood and formerly as Bombay
          cinema,[1] refers to the film industry based in Mumbai, engaged in
          production of motion pictures in Hindi language. The popular term
          Bollywood is a portmanteau of "Bombay" (former name of Mumbai) and
          "Hollywood". The industry is a part of the larger Indian cinema, which
          also includes South Indian cinema and other smaller film
          industries.[2][3][4] The term 'Bollywood', often mistakenly used to
          refer to Indian cinema as a whole, only refers to Hindi-language
          films, with Indian cinema being an umbrella term that includes all the
          film industries in the country, each offering films in diverse
          languages and styles.
        </p>
      </div>
      <h2 style={{paddingBottom:'40px',
        paddingLeft:'20px'
      }}><u>Popular Movies of Bollywood:</u></h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Card style= {styles.card }>
          <Card.Img
            variant="top"
            src={Img2}
            height={200}
            width={200}
            alt="spi"
          />
          <Card.Body>
            <Card.Title>Mother India</Card.Title>
            <Card.Text>
              Radha, a poor but righteous woman, struggles to raise her children
              while going up against Sukhilala, a greedy moneylender. Despite
              the many hurdles she faces, she refuses to sacrifice her
              integrity.
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={styles.card }>
          <Card.Img
            variant="top"
            src={Img3}
            height={200}
            width={200}
            alt="spi"
          />
          <Card.Body>
            <Card.Title>Mughal-E-Azam</Card.Title>
            <Card.Text>
              Salim, an emperor's son, falls in love with a beautiful courtesan.
              Even though he is determined to be with her, his father decides to
              break them apart.
              <br /> <br /> <br /> <br />
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={styles.card }>
          <Card.Img
            variant="top"
            src={Img4}
            height={200}
            width={200}
            alt="spi"
          />
          <Card.Body>
            <Card.Title>3-Idiots</Card.Title>
            <Card.Text>
              In college, Farhan and Raju form a great bond with Rancho due to
              his refreshing outlook. Years later, a bet gives them a chance to
              look for their long-lost friend whose existence seems rather
              elusive.
              <br /> <br />
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={styles.card }>
          <Card.Img
            variant="top"
            src={Img5}
            height={200}
            width={200}
            alt="spi"
          />
          <Card.Body>
            <Card.Title>DDLJ</Card.Title>
            <Card.Text>
              Raj and Simran meet during a trip across Europe and the two fall
              in love. However, when Raj learns that Simran is already promised
              to another, he follows her to India to win her and her father
              over.
              <br /> <br />
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={styles.card }>
          <Card.Img
            variant="top"
            src={Img6}
            height={200}
            width={200}
            alt="spi"
          />
          <Card.Body>
            <Card.Title>Sholay</Card.Title>
            <Card.Text>
              Jai and Veeru, two ex-convicts, are hired by Thakur Baldev Singh,
              a retired policeman, to help him nab Gabbar Singh, a notorious
              dacoit, who has spread havoc in the village of Ramgarh.
              <br /> <br />
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
        <Card style={styles.card }>
          <Card.Img
            variant="top"
            src={Img7}
            height={200}
            width={200}
            alt="spi"
          />
          <Card.Body>
            <Card.Title>PK</Card.Title>
            <Card.Text>
              An innocent alien lands on Earth but loses his communication
              device. He meets Jaggu, a heartbroken reporter, and tries to find
              his device. With time, he raises many thought-provoking questions.
              <br /> <br />
            </Card.Text>
            <Button variant="primary">Explore More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
const styles = {
  image1: {
    width: "1260px",
    height: "400px",
  },
  card: {
    display: 'flex',
    overflow: 'auto',
    width: "18rem"

  }
};

export default Movie;
