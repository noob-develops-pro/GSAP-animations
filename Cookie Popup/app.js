const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power1.out' } })
const button = document.querySelector('button')

tl.fromTo(
  '.cookie-container',
  { scale: 0 },
  { scale: 1, duration: 1.5, ease: 'elastic.out(1,0.4)' }
)
tl.fromTo(
  '.cookie',
  { x: -100, rotation: '-45deg' },
  { x: 0, rotation: '0deg' },
  '<50%'
)
tl.fromTo('.text-box', { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, '<')

tl.fromTo(
  '.cookie',
  { y: 0 },
  { y: -20, rotation: '-15deg', yoyo: true, repeat: -1 }
)
tl.fromTo(
  '#crumbs',
  { y: 0 },
  { y: -20, rotation: '-15deg', yoyo: true, repeat: -1 },
  '<'
)

button.addEventListener('click', () => {
  tl.to('.cookie-container', {
    y: 80,
    opacity: 0,
    duration: 0.75,
  })
})
