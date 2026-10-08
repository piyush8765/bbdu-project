import "./News.css";

const news = [
  {
    date: "20 July 2026",
    title: "Admissions Open for 2026-27",
    desc: "Apply now for Undergraduate and Postgraduate programs.",
  },
  {
    date: "15 July 2026",
    title: "Campus Placement Drive",
    desc: "Top companies are visiting for recruitment this month.",
  },
  {
    date: "10 July 2026",
    title: "Annual Tech Fest",
    desc: "Students showcase innovative projects and ideas.",
  },
];

const News = () => {
  return (
    <section className="news">
      <h5>LATEST NEWS</h5>
      <h2>News & Events</h2>

      <div className="news-grid">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;