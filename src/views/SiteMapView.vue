<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- N A V B A R -->
  <div class="navbar">
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
            <img src="../assets/icons/dropdown.svg" class="dropdown-icon" />
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

  <!-- S I T E M A P -->
  <div class="sitemap">
    <h2>Sitemap</h2>

    <div class="box">
      <div class="group">
        <h3>Our Services</h3>

        <div class="link">
          <a href="#" class="link-1">IT Outsourcing</a>

          <a href="#" class="link-2">Digital Transformation</a>
        </div>
      </div>

      <div class="group">
        <h3>About</h3>

        <div class="link">
          <a href="/Home/Aboutmgs" class="link-1">About mgs</a>

          <a href="/HomeAbout/History" class="link-2">History</a>

          <a href="Home/About/OurTeam" class="link-3">Our Team</a>

          <a href="Home/About/CaseStudy" class="link-4">Case Study</a>
        </div>
      </div>

      <div class="group">
        <h3>Career</h3>

        <div class="link">
          <a href="#" class="link-1">Career home</a>
        </div>
      </div>

      <div class="group">
        <h3>Contact</h3>

        <div class="link">
          <a href="#" class="link-1">Contact us</a>
        </div>
      </div>
    </div>
  </div>
  <!-- S I T E M A P -->

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
              <li>Call</li>

              <li>Email</li>

              <li>Location</li>
            </ul>
          </div>
        </div>

        <div class="menu">
          <div class="list">
            <h3>Contact</h3>

            <ul>
              <li>Call</li>

              <li>Email</li>

              <li>Location</li>
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
        <a href="#"><img src="../assets/buttons/sitemap.svg" /></a>
      </div>
    </div>
  </div>
  <!-- F O O T E R -->
</template>
