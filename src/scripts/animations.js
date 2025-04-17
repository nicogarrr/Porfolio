import anime from 'animejs';

// Hero Section Animation
export function animateHero() {
  anime.timeline()
    .add({
      targets: '.hero-title',
      opacity: [0,1],
      translateY: [50,0],
      easing: 'easeOutExpo',
      duration: 1200
    })
    .add({
      targets: '.hero-badge',
      opacity: [0,1],
      scale: [0.8, 1],
      easing: 'spring(1, 80, 10, 0)',
      duration: 800
    }, '-=800')
    .add({
      targets: '.hero-social',
      opacity: [0,1],
      translateX: [-30,0],
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
      duration: 600
    }, '-=700');
}

// Title Section Animation
export function animateTitleSection() {
  anime({
    targets: '.title-animated',
    opacity: [0,1],
    translateY: [30,0],
    delay: anime.stagger(60),
    easing: 'easeOutExpo',
    duration: 700
  });
  anime({
    targets: '.title-icon-animated',
    scale: [0.5, 1],
    rotate: [0, 360],
    opacity: [0,1],
    easing: 'easeOutElastic(1, .8)',
    duration: 900
  });
}

// Projects Card Animation
export function animateProjectCards() {
  anime({
    targets: '.project-card',
    opacity: [0,1],
    translateY: [60,0],
    delay: anime.stagger(120),
    easing: 'easeOutExpo',
    duration: 800
  });
}

// Skills Chips Animation
export function animateSkillsChips() {
  anime({
    targets: '.skill-chip',
    opacity: [0,1],
    scale: [0.6,1],
    delay: anime.stagger(70),
    easing: 'spring(1, 80, 10, 0)',
    duration: 600
  });
}

// Experience Timeline Animation
export function animateExperience() {
  anime({
    targets: '.experience-item',
    opacity: [0,1],
    translateX: [-40,0],
    delay: anime.stagger(120),
    easing: 'easeOutExpo',
    duration: 700
  });
  anime({
    targets: '.timeline-dot',
    scale: [0.5, 1],
    opacity: [0,1],
    easing: 'spring(1, 80, 10, 0)',
    duration: 600
  });
}

// Hover Effects (to be used inline in components)
export function addHoverAnime(selector, animation) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      anime.remove(el);
      animation(el, true);
    });
    el.addEventListener('mouseleave', () => {
      anime.remove(el);
      animation(el, false);
    });
  });
}

export function projectCardHover(el, enter) {
  anime({
    targets: el,
    scale: enter ? 1.04 : 1,
    boxShadow: enter
      ? '0 8px 32px 0 rgba(99,102,241,0.25)'
      : '0 2px 8px 0 rgba(0,0,0,0.08)',
    duration: 400,
    easing: 'easeOutExpo'
  });
}

export function skillChipHover(el, enter) {
  anime({
    targets: el,
    scale: enter ? 1.1 : 1,
    duration: 300,
    easing: 'easeOutBack'
  });
}
