export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/aboutme_img.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            Hello! I'm Eujean, a senior majoring in Computer Engineering at the Paul G. Allen School of Computer Science & Engineering, University of Washington, with an anticipated graduation in <b>December 2024</b>. My passions lie in distributed systems, game development, human-computer interaction, and computer vision.
            </p>
            <p className="hero--section-description">
            Currently, I am working as a research assistant at the UW Makeability Lab, where I design augmented reality prototypes for real-time sports equipment tracking, aiming to improve accessibility for individuals with low visions. Additionally, I am interning at Soma Reality, where I contribute to feature development for a social media app. I also have experience as a teaching assistant for CSE 369, where I taught digital circuit design, FPGA, and SystemVerilog.
            </p>
            <p className="hero--section-description">
            Beyond coding, I enjoy watching movies and dancing! I thrive on trying new things and adapt quickly to different environments, which keeps me excited about learning and growth.
            </p>
            <p className="hero--section-description">
            <b>I am currently seeking full-time opportunities starting after my graduation.</b>
            </p>
          </div>
        </div>
      </section>
    );
  }