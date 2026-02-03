const steps = [
  { id: "discover", trackerId: "step-discover" },
  { id: "define", trackerId: "step-define" },
  { id: "develop", trackerId: "step-develop" },
  { id: "deliver", trackerId: "step-deliver" }
];

function checkVisibleSections() {
  steps.forEach(step => {
    const section = document.getElementById(step.id);
    const tracker = document.getElementById(step.trackerId);
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > 0;
    tracker.classList.toggle('active', isVisible);
  });
}

window.addEventListener('scroll', checkVisibleSections);
window.addEventListener('load', checkVisibleSections);

// Scroll animation for research insights panels
const researchPanels = document.querySelectorAll('.research-insights .panel');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

researchPanels.forEach(panel => {
    observer.observe(panel);
});

// Observe design principles panels for scroll animation
const observeDesignPrinciples = () => {
  const panels = document.querySelectorAll('.design-principles .panel');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  panels.forEach(panel => observer.observe(panel));
};

// Call this when DOM is ready
document.addEventListener('DOMContentLoaded', observeDesignPrinciples);
