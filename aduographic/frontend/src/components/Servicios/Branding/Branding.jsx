import "./BrandingStyled.css";



const Branding = () => {
    return (
      <section className="branding-section py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* Left Column */}
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column h-100 gap-4">
                {/* Text Content */}
                <div className="content-card p-4 flex-grow-1">
                  <h1 className="mb-4">Branding</h1>
                  <p className="mb-4">
                    En A Dúo no creamos solo un logo lindo, diseñamos marcas completas
                    que cuentan historias, inspiran y conectan con su audiencia. Lo mejor
                    que sabemos hacer.
                    <br />
                    Mirá todo lo que incluye:
                  </p>
                  <button className="info-button">quiero + info</button>
                </div>
                
                {/* Image Card */}
                <div 
                  className="image-card" 
                  style={{ 
                    backgroundImage: 'url("/brading/23.jpg")',
                  }}
                />
              </div>
            </div>
            {/* Right Column */}
            <div className="col-12 col-lg-6">
              <div className="right-image-container">
                <img
                  src="/brading/24.jpg"
                  alt="Branding showcase"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Branding;