import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div
              aria-label="Green &amp; Circular Home"
              className="navigation-logo"
            >
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title navigation-brand-text">
                <span>{/*locale-SectionTitle_BXBAEJ*/}</span>
              </span>
            </div>
          </a>
          <div className="navigation-desktop-links">
            <a href="#solution">
              <div className="navigation-link">
                <span>
                  <span>{/*locale-text_fCq9CC*/}</span>
                </span>
              </div>
            </a>
            <a href="#impact">
              <div className="navigation-link">
                <span>
                  <span>{/*locale-text_Z2y-dJ*/}</span>
                </span>
              </div>
            </a>
            <a href="#digital-twin">
              <div className="navigation-link">
                <span>
                  <span>{/*locale-text_zeydQF*/}</span>
                </span>
              </div>
            </a>
            <a href="#leasing">
              <div className="navigation-link">
                <span>
                  <span>{/*locale-text_HOjzeA*/}</span>
                </span>
              </div>
            </a>
            <a href="#contact">
              <div className="btn-sm btn-primary btn">
                <span>
                  <span>{/*locale-text_Mda4Ge*/}</span>
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <button
            id="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="icon-menu"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <a href="/">
            <div
              aria-label="Green &amp; Circular Home"
              className="navigation-logo"
            >
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title navigation-brand-text">
                <span>{/*locale-SectionTitle_8eI9jc*/}</span>
              </span>
            </div>
          </a>
          <button
            id="mobile-close"
            aria-label="Close menu"
            className="navigation-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-mobile-list">
            <a href="#solution">
              <div className="navigation-mobile-link">
                <span className="nav-number">
                  <span>{/*locale-NavNumber_Q4QM0w*/}</span>
                </span>
                <span className="nav-text">
                  <span>{/*locale-NavText_-CzSac*/}</span>
                </span>
              </div>
            </a>
            <a href="#impact">
              <div className="navigation-mobile-link">
                <span className="nav-number">
                  <span>{/*locale-NavNumber_zI_rwo*/}</span>
                </span>
                <span className="nav-text">
                  <span>{/*locale-NavText_REj3Lv*/}</span>
                </span>
              </div>
            </a>
            <a href="#digital-twin">
              <div className="navigation-mobile-link">
                <span className="nav-number">
                  <span>{/*locale-NavNumber_ntuitc*/}</span>
                </span>
                <span className="nav-text">
                  <span>{/*locale-NavText_JcQJ4r*/}</span>
                </span>
              </div>
            </a>
            <a href="#leasing">
              <div className="navigation-mobile-link">
                <span className="nav-number">
                  <span>{/*locale-NavNumber_PpNdpy*/}</span>
                </span>
                <span className="nav-text">
                  <span>{/*locale-NavText_nazYpP*/}</span>
                </span>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-footer">
            <a href="#contact">
              <div className="btn-primary btn btn-lg">
                <span>
                  <span>{/*locale-text_JMAbHg*/}</span>
                </span>
              </div>
            </a>
            <p className="navigation-tagline section-content">
              <span>{/*locale-SectionContent_m85Utj*/}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link, .navigation-mobile-link, .navigation-logo {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const body = document.body

  function openMenu() {
    mobileOverlay.classList.add("is-active")
    mobileToggle.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  // Close menu when clicking a link
  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link, .btn")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  // Handle scroll effect for glassmorphism
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation-wrapper")
    if (window.scrollY > 20) {
      nav.style.boxShadow = "var(--shadow-level-1)"
    } else {
      nav.style.boxShadow = "none"
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
