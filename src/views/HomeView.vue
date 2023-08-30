<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- N A V B A R -->
  <div class="navbar">
    <div class="left">
      <a href="#"><img src="../assets/images/logo.png" /></a>
    </div>

    <div class="right">
      <ul class="menu">
        <li class="dropdown">
          <a href="#">
            Our Services
            <img src="../assets/icons/majesticons_chevron-down.svg" class="dropdown-icon" />
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
                    <li>Software Development</li>
                  </ul>
                </ul>
              </li>
            </div>

            <div class="column">
              <!-- <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>-->
            </div>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">
            About
            <img src="../assets/icons/majesticons_chevron-down.svg" class="dropdown-icon" />
          </a>

          <!--<ul class="dropdown-menu">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
          -->
        </li>

        <li><a href="#career">Career</a></li>

        <li><img src="../assets/buttons/language.svg" alt="" /></li>
      </ul>
    </div>
  </div>
  <!-- N A V B A R -->

  <!-- H O M E -->
  <div class="home">
    <div class="left">
      <img src="../../src/assets/ornaments/lingkaran.svg" class="circle" />

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
      <img src="../../src/assets/images/Home.png" />
    </div>
  </div>
  <!-- H O M E -->

  <!-- O U R - S E R V I C E S -->
  <div class="our-services">
    <img src="../assets/ornaments/our-services/pattern.svg" class="pattern" />

    <h3>What We Have</h3>

    <h2>Our Services</h2>

    <div class="box">
      <div class="left">
        <div class="content">
          <img src="../assets/icons/our-servives/it-outsourcing.svg" class="icon" />

          <h4>IT Outsourcing</h4>

          <img src="../assets/ornaments/our-services/garis.svg" class="line" />

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
          <img src="../assets/icons/our-servives/digital-transformation.svg" class="icon" />
          <h4>Digital Transformation</h4>
          <img src="../assets/ornaments/our-services/garis.svg" class="line" />

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
  <div class="why-mgs">
    <h3>Why mgs ?</h3>

    <h2>Reason why mgs is the right place</h2>

    <div class="boxes">
      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Affordable</h4>

        <img src="../assets/ornaments/garis.svg" class="line" />

        <p>
          We can provide modular services and be done incrementally, it keepsour services
          affordable.
        </p>
      </div>

      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Customized</h4>

        <img src="../assets/ornaments/garis.svg" class="line" />

        <p>
          Provide services with technical and non-technical qualifications that are tailored to your
          needs, so that the services provided can be used efficiently.
        </p>
      </div>

      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Collaborative Process</h4>

        <img src="../assets/ornaments/garis.svg" class="line" />

        <p>
          Our approach of design thinking enables those of you who come from a non-IT background to
          be able to follow the process together.
        </p>
      </div>

      <div class="box">
        <img src="../assets/icons/why-mgs.svg" class="icon" />

        <h4>Continuous Support</h4>

        <img src="../assets/ornaments/garis.svg" class="line" />

        <p>
          After sales support that is continuous and guaranteed, so you can carry out regular
          maintenance and upgrades.
        </p>
      </div>
    </div>
  </div>
  <!-- W H Y - M G S -->

  <!-- A B O U T - U S -->
  <div class="about-us">
    <img src="../assets/ornaments/about-us.svg" class="pattern" />

    <div class="content">
      <img src="../assets/images/about-us.png" class="background" />

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
  <div class="our-purpose">
    <img src="../assets/ornaments/our-purpose.svg" />

    <p>Our Purpose</p>

    <h1>Technology Inclusivity</h1>
  </div>
  <!-- O U R - P U R P O S E -->

  <!-- J O I N - N O W -->
  <div class="join-now" id="career">
    <img src="../assets/images/join-now.png" />

    <div class="text">
      <h1>Build your Career while building inclusive technology with us</h1>

      <button class="join">Join Now</button>
    </div>
  </div>
  <!-- J O I N - N O W -->

  <!-- C O N T A C T -->
  <div class="contact-page"></div>
  <!-- C O N T A C T -->

  <!-- F O O T E R -->
  <div class="footer">
    <div class="footer-line"></div>
  </div>
  <!-- F O O T E R -->
</template>
