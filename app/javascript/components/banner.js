import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Le Wagon","Change your life", "Learn to code"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
