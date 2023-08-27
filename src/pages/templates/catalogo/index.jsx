
import "./css/styles.css"
import CarCard from "./images/car-card.png"
import About from "./images/about.png"
import CarHeader from "./images/car-header.png"
import Instagram from "./images/instagram.png"
import Facebook from "./images/facebook.png"
import Feature from "./images/feature-planet.png"


const Catalogo = () => {
  return (
    <div className="container-catalogo">
      <header className="header-catalogo">
        <div className="content-catalogo">
          <nav className="nav-catalogo">
            <p className="brand">dev<strong>superior</strong></p>
            <ul>
              <li><a href="#catalog">Catalog</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#feature">Features</a></li>
              <button>Login</button>
            </ul>
          </nav>
          <div className="header-block">
            <div className="text">
              <h2>The perfect car for you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                asperiores?
              </p>
            </div>
            <img src={CarHeader} alt="Car" />
          </div>
        </div>
      </header>
      <section className="catalog" id="catalog">
        <div className="content">
          <div className="title-wrapper-catalog">
            <p>Find what you want</p>
            <h3>Catalog</h3>
          </div>
          <div className="filter-card">
            <input
              type="text"
              className="search-input"
              placeholder="Choose your favorite model"
            />
            <button className="search-button">Search</button>
          </div>
          <div className="card-wrapper">
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CarCard} alt="Car" />
              <div className="card-content">
                <h3>Audi Supra TT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">I want this!</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <div className="title-wrapper-about">
            <p>Know about us</p>
            <h3>About</h3>
          </div>
          <div className="about-content">
            <div className="left">
              <img src={About} alt="About" />
            </div>
            <div className="right">
              <h3>Join technology and mobility</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ut inventore magni repellendus ab ad itaque facere. A
                tenetur quam, nobis tempore illum laborum ipsa fuga, itaque
                possimus repellat ad perspiciatis, velit reiciendis eos facilis
                sapiente blanditiis quas officia hic beatae quibusdam! Quod
                eligendi porro possimus voluptatum ad ipsum sapiente soluta,
                maiores nobis tenetur adipisci officiis nisi illum quae natus
                nostrum tempora accusantium blanditiis? Rem nesciunt illum
                dolorum, perferendis quos consequatur suscipit cumque fugiat alias
                sint repellat qui adipisci error est distinctio doloribus labore
                sunt modi eos odio quibusdam dicta. Dignissimos voluptate illum
                possimus quo. Ducimus repellat doloribus quisquam quidem?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="content">
          <div className="title-wrapper-features">
            <p>What you can do</p>
            <h3>Features</h3>
          </div>
          <div className="feature-card-block">
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-catalogo">
        <div className="main">
          <div className="content footer-links">
            <div className="footer-company">
              <h4>Company</h4>
              <h6>About</h6>
              <h6>Contact</h6>
            </div>
            <div className="footer-rental">
              <h4>Rental</h4>
              <h6>Self-Drive</h6>
              <h6>Chauffer-Driven</h6>
              <h6>Help</h6>
            </div>
            <div className="footer-social">
              <h4>Stay connected</h4>
              <div className="social-icons">
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
              </div>
            </div>
            <div className="footer-contact">
              <h4>Contact US</h4>
              <h6>+55 31 988776655</h6>
              <h6>contato@devsuperior.com.br</h6>
              <h6>Nome da Rua, belo horizonte MG</h6>
            </div>
          </div>
        </div>
        <div className="last">DevSuperior 2021 - Use like you want</div>
      </footer>
    </div>
  )
}

export default Catalogo