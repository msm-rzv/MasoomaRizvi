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
