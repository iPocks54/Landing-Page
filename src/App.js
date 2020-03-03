import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import ControlledForm from "./components/Form/ControlledForm";
import Backdrop from "./components/Backdrop/Backdrop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { ScrollTo } from "react-scroll-to";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main>
          <div className="image">
            <Jumbotron className="myjumbotron">
              <h1 className="hstyle">Bienvenue chez Sunset-Seller!</h1>
              <p className="pstyle">
                Le site numéro 1 de vente de coucher de soleil !
              </p>
              <ScrollTo>
                {({ scroll }) => (
                  <Button
                    className="buttonstyle"
                    onClick={() => scroll({ x: 20, y: 1600 })}
                  >
                    Commander
                  </Button>
                )}
              </ScrollTo>
            </Jumbotron>
          </div>
        </main>
        <div className="box">
          <container>
            <div class="row justify-content-md-center">
              <Jumbotron className="myjumbotron2" fluid>
                <div class="row">
                  <div class="row justify-content-md-center">
                    <div className="image1">
                      <Image
                        src="https://img.freepik.com/photos-gratuite/magnifique-coucher-soleil-colore_1048-2416.jpg?size=626&ext=jpg"
                        roundedCircle
                        width="350vh"
                        fluid
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div className="image1d">
                      <p className="descriptionstyle">
                        Sunset-Seller propose une variété exceptionelle de
                        couchers de soleil à livrer directement à votre
                        domicile. En seulement quelques clics vous pourrez
                        contempler n'importe quel type de coucher de soleil chez
                        vous, qu'il soit tropical, nuageux ou en bord de mer.
                        Depuis maintenant 3 ans, nous sommes les leaders sur ce
                        marché et nous travaillons sans relâche pour le rester
                        en améliorant toujours notre service.
                        <br />
                        Actuellement nous possèdons 23 modèles importés des
                        quatres coins du monde que vous pouvez choisir en
                        fonction de votre personnalité grâce à notre test très
                        avancé ou bien tout simplement par préférence. Nous
                        avons également une formule cadeau pour un coucher de
                        soleil à offrir à vos proches.
                      </p>
                    </div>
                  </div>
                </div>
              </Jumbotron>
            </div>
            <div class="row justify-content-md-center">
              <div
                class="col-md-auto"
                style={{
                  backgroundColor: "rgba(202, 22, 19, 0.105)",
                  paddingTop: "10px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.466)"
                }}
              >
                <div className="carouseldiv">
                  <Carousel
                    className="mycarousel"
                    infiniteLoop="true"
                    dynamicHeight="true"
                    autoPlay="true"
                    transitionTime="1500"
                    fluid
                  >
                    <div>
                      <img src="https://i.pinimg.com/originals/1f/10/e4/1f10e4f863759c69d0fa0b9eda158c5b.jpg" />
                      <p className="legend">Le Tropical</p>
                    </div>
                    <div>
                      <img src="https://image.winudf.com/v2/image/Y29tLkx3cE1hc3Rlci5TQ2l0eTI1N19zY3JlZW5zaG90c18zXzdjOTc5ZjVh/screen-3.jpg?fakeurl=1&type=.jpg" />
                      <p className="legend">Le haut urbain</p>
                    </div>
                    <div>
                      <img src="https://image.winudf.com/v2/image/Y29tLlFhaXJlZW5BemtpYS5iZWFjaHN1bnNldC5TdW5zZXRCZWFjaFdhbGxwYXBlcl9zY3JlZW5fOV8xNTM1MjkzNTkyXzA1MA/screen-9.jpg?fakeurl=1&type=.jpg" />
                      <p className="legend">Talassun</p>
                    </div>
                    <div>
                      <img src="https://steemitimages.com/DQmajJVX1b1pyMxviiSnfzELXCthHGFpZkoRZpykLiVUAei/image.png" />
                      <p className="legend">Au chalet</p>
                    </div>
                    <div>
                      <img src="https://i.ytimg.com/vi/CDU_J--oFxE/maxresdefault.jpg" />
                      <p className="legend">Mode avion</p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div class="row justify-content-md-center">
              <ControlledForm></ControlledForm>
            </div>
          </container>
        </div>
        <div class="d-flex flex-column">
          <footer class="stylefooter">
            <div>
              <a href="">SunCompany</a>
              <span className="pstyle">&copy; 2020 Start-upWorld.</span>
            </div>
            <div class="ml-auto">
              <span className="pstyle">Powered by </span>
              <a href="">SunCompany</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
