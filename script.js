// Smooth scroll to contact section
function scrollToContact() {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    if (!section.classList.contains("hero-section")) {
      section.style.opacity = "0"
      section.style.transform = "translateY(50px)"
      section.style.transition = "all 0.8s ease-out"
      observer.observe(section)
    }
  })

  // Animate timeline items
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-30px)"
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`
    observer.observe(item)
  })

  // Animate tech cards
  const techCards = document.querySelectorAll(".tech-card")
  techCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`
    observer.observe(card)
  })
})

// Add hover effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)"
  })

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)"
  })
})
