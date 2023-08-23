<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <img src="../assets/images/Main-Logo.png" alt="Company Logo" />
    </div>
    <div class="navbar-right">
      <ul class="menu-list">
        <li class="dropdown">
          <a href="#">
            Our Services
            <img src="../assets/icon/majesticons_chevron-down.svg" class="dropdown-icon" />
          </a>
          <ul class="dropdown-menu">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#">
            About
            <img src="../assets/icon/majesticons_chevron-down.svg" class="dropdown-icon" />
          </a>
          <ul class="dropdown-menu">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
        </li>
        <li><a href="#">Career</a></li>
        <li><img src="../assets/button/Language.svg" alt="" /></li>
      </ul>
    </div>
  </div>

  <div class="home">
    <div class="home-left">
      <div class="lingkaran">
        <img src="../../src/assets/lingkaran.svg" />
      </div>
      <div class="home-left-content">
        <h3>We Are Here</h3>
        <h1>IT Consultant & Outsourcing</h1>
        <p>
          We believe that technology is for every business.<br />
          From roadside stall business, to publicy listed business.<br />
          Elevate your business with technology.
        </p>
        <button class="contact-button">Contact Us</button>
      </div>
    </div>
    <div class="home-right">
      <img src="../../src/assets/images/Home.png" />
    </div>
  </div>

  <div class="our-services">
    <h3>What We Have</h3>
    <h2>Our Services</h2>
    <div class="box-our-services">
      <div class="box-our-services-left"></div>
      <div class="box-our-services-right"></div>
    </div>
  </div>
</template>
