export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Eujean Lee
                        </span>{" "}
                        <br />
                    </h1>
                    <p className="hero--section-description">
                        <br /> A Senior Student Studying Computer Engineering at Paul G. Allen School of Computer Science & Engineering at the University of Washington
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" al1t="Hero Section" />
            </div>
        </section>
    )
}