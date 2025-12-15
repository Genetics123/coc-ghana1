/* ==============================================
   GLOBAL RESET & BASE STYLES
   ============================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-divider {
  width: 80px;
  height: 4px;
  background: #ffd700;
  margin: 20px auto;
  border: none;
  transition: width 0.4s ease;
}

.section-divider.animate {
  width: 150px;
}

/* ==============================================
   HEADER & NAVIGATION
   ============================================== */
.site-header {
  background: #004080;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.4s ease, padding 0.3s ease;
}

.site-header.scrolled {
  background: rgba(0, 64, 128, 0.95);
  backdrop-filter: blur(10px);
  padding: 10px 0;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1400px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.brand {
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 0;
  animation: fadeInLeft 1s ease forwards 0.3s;
}

.brand-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.brand-logo:hover {
  transform: scale(1.1) rotate(5deg);
}

.brand-text {
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

.brand-title {
  font-size: 1.3rem;
  margin: 0;
  font-weight: bold;
}

.main-nav {
  transition: all 0.4s ease;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav-list a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-list a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -6px;
  left: 0;
  background: #ffd700;
  transition: width 0.4s ease;
}

.nav-list a:hover::after {
  width: 100%;
}

.nav-list a:hover {
  color: #ffd700;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.3s ease;
}

.nav-toggle:hover {
  transform: rotate(90deg);
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .header-inner {
    padding: 15px;
  }

  .brand-logo {
    width: 50px;
    height: 50px;
  }

  .brand-title {
    font-size: 1.1rem;
  }

  .brand-subtitle {
    font-size: 0.85rem;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #004080;
    padding: 20px 0;
    text-align: center;
  }

  .main-nav.open {
    display: block;
    animation: slideDown 0.5s ease;
  }

  .nav-list {
    flex-direction: column;
    gap: 10px;
  }

  .nav-list a {
    display: block;
    padding: 15px;
    font-size: 1.3rem;
  }

  .nav-list a:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
    transition: all 0.3s ease;
  }

  .nav-toggle {
    display: block;
  }
}

@media (min-width: 769px) {
  .main-nav {
    display: block !important;
  }

  .nav-toggle {
    display: none;
  }
}

/* ==============================================
   HERO SECTION
   ============================================== */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  color: white;
  background: linear-gradient(rgba(0, 64, 128, 0.8), rgba(0, 64, 128, 0.8)), url('https://images.pexels.com/photos/1310560/pexels-photo-1310560.jpeg') center/cover no-repeat;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  opacity: 0;
  animation: fadeInUp 1.2s ease forwards 0.5s;
}

.hero-text h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

.hero-tagline {
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-style: italic;
}

.hero-verse blockquote {
  font-size: 1.4rem;
  font-style: italic;
  border-left: 5px solid #ffd700;
  padding-left: 25px;
  margin: 40px 0;
  opacity: 0;
  animation: fadeIn 1.5s ease forwards 1s;
}

.hero-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  opacity: 0;
  animation: fadeInRight 1.2s ease forwards 0.8s;
  transition: transform 0.6s ease;
}

.hero-image:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text h2 {
    font-size: 2.2rem;
  }
}

/* ==============================================
   VERSE BANNER
   ============================================== */
.verse-banner {
  background: #ffd700;
  color: #004080;
  padding: 25px 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  animation: slideInFromTop 1s ease;
}

/* ==============================================
   RESOURCES SECTION
   ============================================== */
.resources-search-input {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  display: block;
  padding: 14px 20px;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.resources-search-input:focus {
  border-color: #004080;
  box-shadow: 0 0 15px rgba(0, 64, 128, 0.2);
  outline: none;
}

.resources-grid {
  display: grid;
  gap: 25px;
  margin-top: 40px;
}

.resource-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.collapsible-header {
  background: #004080;
  color: white;
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  transition: background 0.3s ease;
}

.collapsible-header:hover {
  background: #003060;
}

.collapse-icon {
  transition: transform 0.4s ease;
}

.collapsible.open .collapse-icon {
  transform: rotate(180deg);
}

.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease;
  background: #f9f9f9;
}

.collapsible.open .collapsible-content {
  max-height: 1200px;
}

.collapsible-content ul {
  list-style: none;
  padding: 25px;
}

.collapsible-content li {
  padding: 10px 0;
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
  animation-delay: calc(0.1s * var(--i, 0));
}

.collapsible-content a {
  color: #004080;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.collapsible-content a:hover {
  color: #ffd700;
}

/* ==============================================
   GALLERY
   ============================================== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.gallery-grid img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.gallery-grid img:hover {
  transform: scale(1.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* ==============================================
   CONTACT
   ============================================== */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;
}

.contact-details {
  font-size: 1.1rem;
}

.contact-list {
  list-style: none;
  margin: 25px 0;
}

.contact-list li {
  padding: 12px 0;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.contact-list li:hover {
  transform: translateX(10px);
}

.contact-form-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
}

.contact-form-card:hover {
  transform: translateY(-10px);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  margin-bottom: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #004080;
  outline: none;
}

.contact-form button {
  background: #004080;
  color: white;
  padding: 14px 35px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.4s ease;
}

.contact-form button:hover {
  background: #ffd700;
  color: #004080;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 64, 128, 0.2);
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

/* ==============================================
   FOOTER
   ============================================== */
.site-footer {
  background: #004080;
  color: white;
  text-align: center;
  padding: 50px 20px;
  margin-top: 80px;
  opacity: 0;
  animation: fadeIn 1.5s ease forwards 0.5s;
}

.footer-subtext {
  margin-top: 15px;
  opacity: 0.9;
  font-style: italic;
}

/* ==============================================
   KEYFRAME ANIMATIONS
   ============================================== */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInFromTop {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
