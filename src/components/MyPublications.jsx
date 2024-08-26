import data from "../data/index.json";

export default function MyPublications() {
  return (
    <section className="portfolio--section" id="MyPublications">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="skills-section--heading">Publications</h1>
        </div>
      </div>
      <div className="publication--section--container">
        {data?.publications?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.img} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <p className="text-sm publication--conference">{item.conference}</p>
                <h3 className="publication--section--title">{item.title}</h3>
                {/* <p className="text-md">{item.authors}</p> */}
                <p className="text-md">
                {item.authors.split(", ").map((author, index) => (
                    <span key={index}>
                    {author === "Eujean Lee" ? <strong>{author}</strong> : author}
                    {index < item.authors.split(", ").length - 1 && ", "}
                    </span>
                ))}
                </p>
              </div>
              <p className="text-sm publication--link">
              {item.pdf && (
                <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm portfolio--link"
                >
                PDF
                </a>
            )}
            {item.doi && (
                <a
                href={item.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm portfolio--link"
                >
                DOI
                </a>
            )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}