import './App.css';
import LinkBox from './_component/linkbox.js'
import Container from './_component/container.js';

function App() {
  return (
    <div className="App">
      <Container> 
        <LinkBox/> 
      </Container>
    </div>
  );
}

for (let i = 0; i < 200; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(star);
    animateStar(star);
}

function animateStar(star) {
    let duration = Math.random() * 3000 + 500;
    let delay = Math.random() * 3000;
    star.style.transition = `all ${duration}ms linear ${delay}ms`;
    star.style.opacity = '0';
    setTimeout(() => {
        star.style.transform = `translate(${Math.random() * window.innerWidth - star.offsetLeft}px, ${Math.random() * window.innerHeight - star.offsetTop}px)`;
        star.style.opacity = '1';
        star.addEventListener('transitionend', () => {
            star.style.transition = '';
            star.style.transform = '';
            star.style.opacity = '';
            animateStar(star);
        }, { once: true });
    }, delay);
}

export default App;
