import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const HomePage: React.FC = () => {
  const iconStyle: React.CSSProperties = { padding: 5, fontSize: 120 };

  return (
    <div className="container text-center">
      <h1>Sample Portfolio</h1>

      <img src={profileImage} className="profileImage" alt="profileImage" />

      <p>
        ポートフォリオの一例です。Typescript、Reactあたりの勉強のために作成。
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 className="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
              </span>
              <h4 className="my-3">ECサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
                <FontAwesomeIcon style={iconStyle} icon={faCalendar} />
              </span>
              <h4 className="my-3">レスポンシブサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                <FontAwesomeIcon style={iconStyle} icon={faCoffee} />
              </span>
              <h4 className="my-3">ウェブセキュリティ</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="text-center">
          <h1 className="title">スキル</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={reactImage} alt="react" />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={jsImage} alt="HTML-CSS" />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={firebaseImage} alt="firebase" />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" className="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
