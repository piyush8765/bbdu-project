import "./Recruiters.css";

import tcs from "../../assets/images/recruiters/tcs.png";
import infosys from "../../assets/images/recruiters/infosys.png";
import wipro from "../../assets/images/recruiters/wipro.png";
import accenture from "../../assets/images/recruiters/accenture.png";
import capgemini from "../../assets/images/recruiters/capgemini.png";
import cognizant from "../../assets/images/recruiters/cognizant.png";
import ibm from "../../assets/images/recruiters/ibm.png";
import hcl from "../../assets/images/recruiters/hcl.png";

const Recruiters = () => {
  return (
    <section className="recruiters">

      <h5>TOP RECRUITERS</h5>

      <h2>Our Students Work At</h2>

      <div className="slider">

        <div className="slide-track">

          <img src={tcs} alt="TCS" />
          <img src={infosys} alt="Infosys" />
          <img src={wipro} alt="Wipro" />
          <img src={accenture} alt="Accenture" />
          <img src={capgemini} alt="Capgemini" />
          <img src={cognizant} alt="Cognizant" />
          <img src={ibm} alt="IBM" />
          <img src={hcl} alt="HCL" />

          {/* Repeat for infinite scroll */}

          <img src={tcs} alt="TCS" />
          <img src={infosys} alt="Infosys" />
          <img src={wipro} alt="Wipro" />
          <img src={accenture} alt="Accenture" />
          <img src={capgemini} alt="Capgemini" />
          <img src={cognizant} alt="Cognizant" />
          <img src={ibm} alt="IBM" />
          <img src={hcl} alt="HCL" />

        </div>

      </div>

    </section>
  );
};

export default Recruiters;