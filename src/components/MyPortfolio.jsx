import data from "../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="skills-section--heading">Projects</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--card--content">
              <div>
                <h2 className="portfolio--section--title">{item.title}</h2>
                <p className="text-md">{item.description}</p>
              </div>
              <div> 
                <p className="portfolio--section--tech">
                  <span className="tech-label">Technologies Used:</span> {item.technologies}
                </p>              
              </div>
              <p className="text-sm portfolio--link">
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm portfolio--link"
                  >
                    {item.type === 'Website' ? 'Try It Out' : 'View In Github'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  </a>) :
                  null
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}