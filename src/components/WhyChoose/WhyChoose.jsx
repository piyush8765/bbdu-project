import "./WhyChoose.css";
import { FaAward, FaGraduationCap, FaUsers, FaBriefcase } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="why">

      <div className="why-left">

        <h5>WHY CHOOSE BBDU</h5>

        <h2>Creating Future Leaders Through Quality Education</h2>

        <p>
          Babu Banarasi Das University offers world-class education,
          experienced faculty, excellent placements and modern campus
          facilities to prepare students for successful careers.
        </p>

      </div>

      <div className="why-right">

        <div className="why-card">
          <FaAward className="icon" />
          <h3>NAAC Accredited</h3>
          <p>Recognized for quality education.</p>
        </div>

        <div className="why-card">
          <FaGraduationCap className="icon" />
          <h3>Experienced Faculty</h3>
          <p>Highly qualified professors.</p>
        </div>

        <div className="why-card">
          <FaUsers className="icon" />
          <h3>50000+ Students</h3>
          <p>One of India's largest campuses.</p>
        </div>

        <div className="why-card">
          <FaBriefcase className="icon" />
          <h3>Excellent Placements</h3>
          <p>Top recruiters visit every year.</p>
        </div>

      </div>

    </section>
  );
};

export default WhyChoose;