import React from 'react';
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/icon_euro.svg?react' 
import Navigation from '../components/navigation'
import ContactForm from '../components/contactform'
import Footer from '../components/footer'
import './home.css'
const Home = (props) => {
const { t } = useTranslation()
  return (
    <div className="home-container1">
      <Helmet>
        <title>Supportive General Newt</title>
        <meta property="og:title" content="Supportive General Newt" />
        <link
          rel="canonical"
          href="https://supportive-general-newt-3x4vnt.teleporthq.app/"
        />
      </Helmet>
      <Navigation locale={props?.locale ?? ''}></Navigation>
      <section className="hero-section">
        <div className="hero-media-container">
          <video
            src="https://videos.pexels.com/video-files/30899795/13211144_640_360_25fps.mp4"
            loop={true}
            muted={true}
            poster="https://images.pexels.com/videos/30899795/pictures/preview-0.jpg"
            autoPlay={true}
            playsInline={true}
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-text-block">
            <h1 className="hero-title home-hero-title">
             <span>{t('HeroTitle_LCQAHG')}</span>
            </h1>
            <p className="hero-subtitle home-hero-subtitle">
              <span>{t('HeroSubtitle_xLSnD7')}</span>
            </p>
            <div className="hero-cta-group">
              <a href="#contact">
                <div className="btn-primary btn btn-lg">
                  <span>
                    <span>{t('text_BHn0sd')}</span>
                  </span>
                </div>
              </a>
              <a href="#product">
                <div className="btn-outline btn btn-lg">
                  <span>
                    <span>{t('text_JO2diJ')}</span>
                  </span>
                </div>
              </a>
            </div>
            <div className="hero-badges">
              <div className="hero-badge-item">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>
                  <span>{t('text_w1f-Lt')}</span>
                </span>
              </div>
              <div className="hero-badge-item">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>
                  <span>{t('text_mpqVWU')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="product" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">
              <span>{t('SectionTitle_1vOsv2')}</span>
            </h2>
            <p className="section-subtitle">
              <span>{t('SectionSubtitle_V8SFHu')}</span>
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">
                <span>{t('FeatureTitle_mQZiik')}</span>
              </h3>
              <p className="section-content">
                <span>{t('SectionContent_hVtRPO')}</span>
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="feature-title">
                <span>{t('FeatureTitle_V9EY8N')}</span>
              </h3>
              <p className="section-content">
                <span>{t('SectionContent_CuWB-L')}</span>
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle r="2" cx="17" cy="18"></circle>
                  <circle r="2" cx="7" cy="18"></circle>
                </svg>
              </div>
              <h3 className="feature-title">
                <span>{t('FeatureTitle_sFNaA3')}</span>
              </h3>
              <p className="section-content">
                <span>{t('SectionContent_cnsxlU')}</span>
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
		<Logo className="navigation-logo-svg" />
              </div>
              <h3 className="feature-title">
                <span>{t('FeatureTitle_6KjSnR')}</span>
              </h3>
              <p className="section-content">
                <span>{t('SectionContent_SEjcHi')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="digital-twin" className="process-section">
        <div className="process-container">
          <div className="process-intro">
            <h2 className="section-title">
              <span>{t('SectionTitle_wDfz3P')}</span>
            </h2>
            <p className="section-subtitle">
              <span>{t('SectionSubtitle_pf-etR')}</span>
            </p>
          </div>
          <div className="steps-wrapper">
            <div className="step-item">
              <div className="step-number">
                <span>
                  <span>{t('text_VcWBzC')}</span>
                </span>
              </div>
              <div className="step-content">
                <h3 className="step-title">
                  <span>{t('StepTitle_uZoHyv')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_Kr8Tbf')}</span>
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>
                  <span>{t('text_JnI4g_')}</span>
                </span>
              </div>
              <div className="step-content">
                <h3 className="step-title">
                  <span>{t('StepTitle_PRmNiZ')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_tA-DLd')}</span>
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>
                  <span>{t('text_K6znVS')}</span>
                </span>
              </div>
              <div className="step-content">
                <h3 className="step-title">
                  <span>{t('StepTitle_sM3u5N')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_4_TiJ8')}</span>
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>
                  <span>{t('text_mQ21RG')}</span>
                </span>
              </div>
              <div className="step-content">
                <h3 className="step-title">
                  <span>{t('StepTitle_WXkrTn')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_Rk9bZO')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="impact" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">
                <span>
                  <span>{t('text_ih7vYL')}</span>
                </span>
              </div>
              <div className="stat-label">
                <span>
                  <span>{t('text_prcWea')}</span>
                </span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                <span>
                  <span>{t('text_krn5yN')}</span>
                </span>
              </div>
              <div className="stat-label">
                <span>
                  <span>{t('text_1-63Cu')}</span>
                </span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                <span>
                  <span>{t('text_Q9qmUV')}</span>
                </span>
              </div>
              <div className="stat-label">
                <span>
                  <span>{t('text__B3thc')}</span>
                </span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                <span>
                  <span>{t('text_J83smf')}</span>
                </span>
              </div>
              <div className="stat-label">
                <span>
                  <span>{t('text_fg9tNA')}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="stats-text">
            <h2 className="section-title">
              <span>{t('SectionTitle_JY7IPu')}</span>
            </h2>
            <p className="section-content">
              <span>{t('SectionContent_OY4cOR')}</span>
            </p>
          </div>
        </div>
      </section>
      <section className="case-studies-section">
        <div className="case-studies-container">
          <div className="case-studies-header">
            <h2 className="section-title">
              <span>{t('SectionTitle_cvcjc3')}</span>
            </h2>
            <p className="section-subtitle">
              <span>{t('SectionSubtitle_5OZyUI')}</span>
            </p>
          </div>
          <div className="cases-grid">
            <div className="case-card">
              <img
                alt="Autocariste installation"
                src="https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="case-image"
              />
              <div className="case-overlay">
                <h3 className="case-title">
                  <span>{t('CaseTitle_x0B4mD')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_TL34xa')}</span>
                </p>
              </div>
            </div>
            <div className="case-card">
              <img
                alt="VUL maintenance"
                src="https://images.pexels.com/photos/19319639/pexels-photo-19319639.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="case-image"
              />
              <div className="case-overlay">
                <h3 className="case-title">
                  <span>{t('CaseTitle_f_OjB6')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent__QUF6I')}</span>
                </p>
              </div>
            </div>
            <div className="case-card">
              <img
                alt="Industrial engineering"
                src="https://images.pexels.com/photos/34207359/pexels-photo-34207359.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="case-image"
              />
              <div className="case-overlay">
                <h3 className="case-title">
                  <span>{t('CaseTitle_ynpS2I')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_tFFDJC')}</span>
                </p>
              </div>
            </div>
            <div className="case-card">
              <img
                alt="Mechanical machinery"
                src="https://images.pexels.com/photos/34718925/pexels-photo-34718925.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="case-image"
              />
              <div className="case-overlay">
                <h3 className="case-title">
                  <span>{t('CaseTitle_0J-5JA')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_Akn-sn')}</span>
                </p>
              </div>
            </div>
            <div className="case-card">
              <img
                alt="Factory line"
                src="https://images.pexels.com/photos/17937669/pexels-photo-17937669.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="case-image"
              />
              <div className="case-overlay">
                <h3 className="case-title">
                  <span>{t('CaseTitle_UgO_I5')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_QAdMti')}</span>
                </p>
              </div>
            </div>
            <div className="case-card">
              <img
                alt="Engineer workshop"
                src="https://images.pexels.com/photos/9242211/pexels-photo-9242211.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="case-image"
              />
              <div className="case-overlay">
                <h3 className="case-title">
                  <span>{t('CaseTitle_RcKNfP')}</span>
                </h3>
                <p className="section-content">
                  <span>{t('SectionContent_9SfVea')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">
            <span>{t('SectionTitle_xjAddf')}</span>
          </h2>
          <div className="testimonial-rail">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                <span>{t('TestimonialQuote_NxKrm9')}</span>
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>{t('AuthorName_1ujkpO')}</span>
                </span>
                <span className="author-role">
                  <span>{t('AuthorRole_4eaOUf')}</span>
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                <span>{t('TestimonialQuote_ke2gfz')}</span>
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>{t('AuthorName_j20feG')}</span>
                </span>
                <span className="author-role">
                  <span>{t('AuthorRole_5Kpfie')}</span>
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                <span>{t('TestimonialQuote_JZYrz7')}</span>
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>{t('AuthorName_Yr0rkk')}</span>
                </span>
                <span className="author-role">
                  <span>{t('AuthorRole_6BNA_x')}</span>
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                <span>{t('TestimonialQuote_1tN5-U')}</span>
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>{t('AuthorName_9Zj8ZL')}</span>
                </span>
                <span className="author-role">
                  <span>{t('AuthorRole_n7Zw3C')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="leasing" className="cta-section">
        <div className="cta-container">
          <div className="cta-card-wrapper">
            <div className="cta-content">
              <h2 className="section-title">
                <span>{t('SectionTitle__Obt9d')}</span>
              </h2>
              <p className="section-content">
                <span>{t('SectionContent_-dAXIW')}</span>
              </p>
              <div className="cta-actions">
                <a href="#contact">
                  <div className="btn-xl btn btn-accent">
                    <span>
                      <span>{t('text_O0uA9A')}</span>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-xl btn-outline btn">
                    <span>
                      <span>{t('text_2ONJh2')}</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-decoration">
              <svg
                fill="none"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
                height="120"
                stroke="var(--color-accent)"
                opacity="0.2"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-split">
            <div className="contact-info">
              <h2 className="section-title">
                <span>{t('SectionTitle_wn3M5s')}</span>
              </h2>
              <p className="section-content">
                <span>{t('SectionContent_dfIQaA')}</span>
              </p>
              <div className="contact-details">
                <div className="detail-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>
                    <span>{t('text_RKeELt')}</span>
                  </span>
                </div>
                <div className="detail-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>
                    <span>{t('text_J7xylM')}</span>
                  </span>
                </div>
                <div className="detail-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
      i            >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" x2="12" y1="22.08" y2="12"></line>
                  </svg>
                  <span>
                    <span>{t('text_Pb934W')}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
            <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="green-circular-interactions">
(function(){
  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const heroMedia = document.querySelector(".hero-media-container")
    if (heroMedia) {
      heroMedia.style.transform = \`translateY(\${scroll * 0.3}px)\`
    }
  })

  // Simple scroll animation for feature cards
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".feature-card, .step-item, .stat-card, .case-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })

  // Testimonial rail horizontal scroll with mouse wheel
  const rail = document.querySelector(".testimonial-rail")
  if (rail) {
    rail.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        rail.scrollLeft += e.deltaY
      }
    })
  }

  // Form success feedback simulation
  //const contactForm = document.querySelector(".contact-form")
  //if (contactForm) {
  //  contactForm.addEventListener("submit", (e) => {
  //    // Native validation handles the rest
 //     // This is just for UX feedback
 //     const btn = contactForm.querySelector("button")
 //     btn.innerText = "Envoi en cours..."
 //     btn.disabled = "true"

      
      // In a real scenario, the form action would handle the POST
      // Here we just simulate the visual transition
 //     setTimeout(() => {
 //       btn.innerText = "Message envoyé !"
 //       btn.style.backgroundColor = "#2ecc71"
 //     }, 1500)
 //   })
 // }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer locale={props?.locale ?? ''}></Footer>
    </div>
  )
}

export default Home
