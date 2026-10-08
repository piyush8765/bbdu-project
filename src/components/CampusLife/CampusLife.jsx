import "./CampusLife.css";
import campusImg from "../../assets/images/campus.jpg";

const CampusLife = () => {
  return ( 
    <section className="campus">

      <div className="campus-left">
        <h5>CAMPUS LIFE</h5>

        <h2>Experience an Amazing Campus</h2>

        <p>
          Modern classrooms, innovation labs, sports facilities,
          cultural events, hostels and a vibrant student community
          make learning enjoyable at BBD University.
        </p>

        <button>Explore Campus</button>
      </div>

      <div className="campus-right">
        <div className="img-box">
          <img src={campusImg} alt="Campus" />
        </div>
      </div>

    </section>
  );
};

export default CampusLife;