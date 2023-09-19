<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- N A V B A R -->
  <div class="navbar-home">
    <div class="left">
      <a href="/"><img src="../assets/images/logo/main.png" /></a>
    </div>

    <div class="right">
      <ul class="menu">
        <li class="dropdown">
          <a href="#">
            Our Services
            <img src="../assets/icons/dropdown.svg" class="dropdown-icon" />
          </a>

          <ul class="dropdown-menu">
            <div class="column">
              <li>
                <a href="#"><h4>IT Outsourcing</h4></a>

                <ul>
                  <li>Independent Staff Augmentation</li>
                  <ul>
                    <p>Team Augmentation</p>
                    <li>IT Managed Services</li>
                  </ul>
                </ul>
              </li>
            </div>

            <div class="column">
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </div>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">
            About
            <img src="../assets/icons/dropdown.svg" class="dropdown-icon" />
          </a>
        </li>

        <ul class="dropdown-menu">
          <li><a href="#">Lorem ipsum</a></li>
          <li><a href="#">Lorem ipsum</a></li>
          <li><a href="#">Lorem ipsum</a></li>
        </ul>

        <li><a href="#career-home">Career</a></li>

        <li><img src="../assets/buttons/language.svg" alt="" /></li>
      </ul>
    </div>
  </div>
  <!-- N A V B A R -->

  <!-- H O M E -->
  <div class="home">
    <div class="left">
      <img src="../../src/assets/ornaments/circle.svg" class="circle" />

      <div class="content">
        <h3>We Are Here</h3>

        <h1>IT Consultant & Outsourcing</h1>

        <p>
          We believe that technology is for every business.<br />
          From roadside stall business, to publicy listed business.<br />
          Elevate your business with technology.
        </p>

        <button class="contact">Contact Us</button>
      </div>
    </div>

    <div class="right">
      <img src="../../src/assets/images/home/main.png" />
    </div>
  </div>
  <!-- H O M E -->

  <!-- O U R - S E R V I C E S -->
  <div class="services-home">
    <img src="../assets/ornaments/pattern-left.svg" class="pattern" />

    <h3>What We Have</h3>

    <h2>Our Services</h2>

    <div class="box">
      <div class="left">
        <div class="content">
          <img src="../assets/icons/services/it-outsourcing.svg" class="icon" />

          <h4>IT Outsourcing</h4>

          <img src="../assets/ornaments/line-2.svg" class="line" />

          <p>
            Hire our best IT expert and tell us about your business needs. We will give the best
            solution for your business.
          </p>

          <button class="service-button-left">
            <img src="../assets/buttons/our-services.svg" />
          </button>
        </div>
      </div>

      <div class="right">
        <div class="content">
          <img src="../assets/icons/services/digital-transformation.svg" class="icon" />
          <h4>Digital Transformation</h4>
          <img src="../assets/ornaments/line-2.svg" class="line" />

          <p>
            Digital transformation can be seen as a threat or an opportunity for a business
            opportunities through our digital transformation services.
          </p>

          <button class="service-button-right">
            <img src="../assets/buttons/our-services.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- O U R - S E R V I C E S -->

  <!-- W H Y - M G S -->
  <div class="reason-home">
    <h3>Why mgs ?</h3>

    <h2>Reason why mgs is the right place</h2>

    <div class="boxes">
      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Affordable</h4>

        <img src="../assets/ornaments/line-1.svg" class="line" />

        <p>
          We can provide modular services and be done incrementally, it keepsour services
          affordable.
        </p>
      </div>

      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Customized</h4>

        <img src="../assets/ornaments/line-1.svg" class="line" />

        <p>
          Provide services with technical and non-technical qualifications that are tailored to your
          needs, so that the services provided can be used efficiently.
        </p>
      </div>

      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Collaborative Process</h4>

        <img src="../assets/ornaments/line-1.svg" class="line" />

        <p>
          Our approach of design thinking enables those of you who come from a non-IT background to
          be able to follow the process together.
        </p>
      </div>

      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Continuous Support</h4>

        <img src="../assets/ornaments/line-1.svg" class="line" />

        <p>
          After sales support that is continuous and guaranteed, so you can carry out regular
          maintenance and upgrades.
        </p>
      </div>
    </div>
  </div>
  <!-- W H Y - M G S -->

  <!-- A B O U T - U S -->
  <div class="about-home">
    <img src="../assets/ornaments/pattern-right.svg" class="pattern" />

    <div class="content">
      <img src="../assets/images/home/about.png" class="background" />

      <div class="box">
        <h2>About Us</h2>

        <p>
          As an Information Technology Outsourcing or (IT Outsourcing) company, we help your
          business to grow through qualified human resources.
        </p>

        <a href="About" class="button">
          <span class="text">About Our Company</span>
        </a>
      </div>
    </div>
  </div>
  <!-- A B O U T - U S -->

  <!-- O U R - P U R P O S E -->
  <div class="purpose-home">
    <img src="../assets/ornaments/purpose.svg" />

    <p>Our Purpose</p>

    <h1>Technology Inclusivity</h1>
  </div>
  <!-- O U R - P U R P O S E -->

  <!-- J O I N - N O W -->
  <div class="career-home" id="career-home">
    <img src="../assets/images/home/career.png" />

    <div class="text">
      <h1>Build your Career while building inclusive technology with us</h1>

      <button class="join">Join Now</button>
    </div>
  </div>
  <!-- J O I N - N O W -->

  <!-- C O N T A C T -->
  <div class="contact-home" id="contact-home">
    <div class="content">
      <div class="left">
        <div class="left-content">
          <div class="text">
            <h4>Contact Us</h4>

            <h1>Haven’t gotten what you want yet ?</h1>
          </div>

          <div class="data">
            <div class="data-content">
              <div class="data-icon">
                <img src="../assets/icons/contact/call.svg" />
              </div>

              <div class="data-text">
                <h5>Call</h5>

                <p>0274 4299 535</p>
                <p>+ 62 877 203 203 94</p>
              </div>
            </div>

            <div class="data-content">
              <div class="data-icon">
                <img src="../assets/icons/contact/email.svg" />
              </div>

              <div class="data-text">
                <div class="email">
                  <h5>Email</h5>

                  <p>info@megagiga.co.id</p>
                </div>
              </div>
            </div>

            <div class="data-content">
              <div class="data-icon">
                <img src="../assets/icons/contact/location.svg" />
              </div>

              <div class="data-text">
                <h5>Location</h5>

                <p>Pondok Permai Wirosaban B10, Jl. Ki Ageng Pemanahan Bantul Yogyakarta 55191</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="contact-box">
          <form class="contact-form">
            <input type="text" placeholder="Name" class="input-field" />

            <input type="email" placeholder="Email" class="input-field" />

            <input type="tel" placeholder="Phone" class="input-field" />

            <textarea placeholder="Your Message" class="input-field textarea"></textarea>

            <div class="sisa"></div>

            <div class="button">
              <a href="" class="send">Send</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- C O N T A C T -->

  <!-- F O O T E R -->
  <div class="footer">
    <div class="content">
      <img src="../assets/images/logo/footer.png" class="footer-logo" />

      <p class="paragraph">
        As an Information Technology Outsourcing (IT Outsourcing) company, we help your business to
        grow through qualified human resources.
      </p>

      <div class="all-menu">
        <div class="menu">
          <div class="list">
            <h3>Services</h3>

            <ul>
              <li>IT Outsourcing</li>

              <li>Digital Transformation</li>

              <li>Career</li>
            </ul>
          </div>
        </div>

        <div class="menu">
          <div class="list">
            <h3>Contact</h3>

            <ul>
              <li><a href="about" class="white-text">MGS</a></li>

              <li><a href="about" class="white-text">History</a></li>

              <li><a href="about" class="white-text">Our Team</a></li>
            </ul>
          </div>
        </div>

        <div class="menu">
          <div class="list">
            <h3>Contact</h3>

            <ul>
              <li><a href="#contact-home" class="white-text">Call</a></li>

              <li><a href="#contact-home" class="white-text">Email</a></li>

              <li><a href="#contact-home" class="white-text">Location</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-line"></div>

      <div class="footer-icons">
        <img src="../assets/icons/footer/linkedin.svg" />

        <img src="../assets/icons/footer/facebook.svg" />

        <img src="../assets/icons/footer/instagram.svg" />

        <img src="../assets/icons/footer/twitter.svg" />
      </div>

      <div class="button-sitemap">
        <a href="Sitemap"><img src="../assets/buttons/sitemap.svg" /></a>
      </div>
    </div>
  </div>
  <!-- F O O T E R -->
</template>
