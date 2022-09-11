const tl = gsap.timeline({ default: { duration: 0.75, ease: 'power3.out' } })

tl.fromTo(
  '.hero-img',
  { scale: 1.2, borderRadius: '0rem' },
  {
    scale: 1,
    borderRadius: '2rem',
    duration: 2.5,
    ease: 'elastic.out(1.5,1)',
    delay: 0.35,
  }
)
tl.fromTo('.cta1', { x: 120 }, { x: 0 }, '<20%')
tl.fromTo('.cta3', { x: 120 }, { x: 0 }, '<20%')
tl.fromTo('.cta2', { y: 120 }, { y: 0 }, '<20%')
tl.fromTo('.cta4', { x: -120 }, { x: 0 }, '<20%')
tl.fromTo('.cta6', { x: 180 }, { x: 0 }, '<20%')
tl.fromTo('.cta5', { y: 120 }, { y: 0 }, '<20%')
tl.fromTo('.cta-btn', { y: 120, opacity: 0 }, { y: 0, opacity: 1 }, '<')

const logo = document.querySelector('.logo')
const letters = logo.textContent.split('')

let spans = []

logo.textContent = ''
for (const letter of letters) {
  logo.innerHTML += `<span class = "letter">${letter}</span>`
  spans = document.querySelectorAll('.letter')
}

for (const span of spans) {
  span.style.display = 'inline-block'
}

gsap.fromTo(
  '.letter',
  { y: '100%' },
  { y: 0, delay: 2, stagger: 0.2, ease: 'back.out(4)' }
)
