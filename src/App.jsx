import "./App.css";
import avatarVideo from "./assets/Avatar1.mp4";
import whatsappVideo1 from "./assets/Avatar2.mp4";
import whatsappVideo2 from "./assets/Avatar3.mp4";
import whatsappVideo3 from "./assets/Avatar4.mp4";

function App() {
  const lawyerVideos = [
    { src: avatarVideo, name: "Kurbanov Ramil", experience: 6 },
    { src: whatsappVideo1, name: "Bahyt Adelya", experience: 3 },
    { src: whatsappVideo2, name: "Ratmir Zhukov", experience: 10 },
    { src: whatsappVideo3, name: "Bahyt Ayimzhan", experience: 4 }, // Reusing first video for 4th slot
  ];
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Law Firm — Judicial Defense</p>
          <h1>Protecting your rights with decisive courtroom defense</h1>
          <p className="hero__subhead">
            Strategic legal counsel for complex disputes, delivered by seasoned
            litigators.
          </p>
          <div className="hero__cta">
            <a className="button primary" href="#contact">
              Request a consultation
            </a>
            <a className="button ghost" href="#rights">
              Know your rights
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="rights" className="section rights">
          <div className="section__header">
            <h2>Understand your legal rights</h2>
            <p>Clear guidance before, during, and after litigation.</p>
          </div>
          <div className="grid grid-3">
            <article className="card">
              <h3>Due Process</h3>
              <p>
                We safeguard procedural fairness at every hearing, ensuring
                evidence and motions are handled correctly.
              </p>
            </article>
            <article className="card">
              <h3>Presumption of Innocence</h3>
              <p>
                The burden of proof is on the accuser. We reinforce this
                principle through rigorous advocacy.
              </p>
            </article>
            <article className="card">
              <h3>Right to Counsel</h3>
              <p>
                From investigations to verdicts, you have the right to
                representation that defends your interests.
              </p>
            </article>
          </div>
        </section>

        <section className="section videos">
          <div className="section__header">
            <h2>Meet our litigators</h2>
            <p>Experienced trial lawyers ready to advocate for you.</p>
          </div>
          <div className="grid grid-4">
            {lawyerVideos.map((lawyer, index) => (
              <article className="profile-card" key={`lawyer-${index}`}>
                <div className="video-wrapper">
                  <video
                    controls
                    poster=""
                    aria-label={`Lawyer introduction video ${index + 1}`}
                  >
                    <source src={lawyer.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3>{lawyer.name}</h3>
                <p>Experience: {lawyer.experience} years</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section__header">
            <h2>Client testimonials</h2>
            <p>Direct feedback from those we have represented.</p>
          </div>
          <div className="testimonials__list">
            <blockquote>
              “Their courtroom strategy was meticulous and transparent. I always
              knew the next step.”
              <cite>— Business Owner, Commercial Dispute</cite>
            </blockquote>
            <blockquote>
              “Professional, responsive, and unwavering. They defended my rights
              when it mattered most.”
              <cite>— Private Client, Civil Case</cite>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact__content">
            <h2>Ready to talk?</h2>
            <p>Choose a secure channel to reach our legal team.</p>
            <div className="contact__actions">
              <a
                className="button primary whatsapp"
                href="https://wa.me/+77714663901"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
              {/* <a
                className="button ghost"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram Chat
              </a> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
