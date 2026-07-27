export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Column: Heading & Subtitle */}
        <div className="hero-content">
          <h1>Serenico Spaces</h1>
          <p>Designing Your Dream Living</p>
        </div>

        {/* Right Column: Arched Interior Window Frame */}
        <div className="hero-image-wrapper">
          <div className="hero-arch-frame">
            <img
              src="/images/bedroom-hero.jpg"
              alt="Serenico Spaces Bedroom Interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
