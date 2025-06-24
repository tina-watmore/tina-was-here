import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function SkillsCarousel() {
    const logos = [
    { src: 'https://cdn.simpleicons.org/html5', alt: 'HTML' },
    { src: 'https://cdn.simpleicons.org/css', alt: 'CSS' },
    { src: 'https://cdn.simpleicons.org/less', alt: 'LESS' },
    { src: 'https://cdn.simpleicons.org/sass', alt: 'SASS' },
    { src: 'https://cdn.simpleicons.org/javascript', alt: 'Javascript' },
    { src: 'https://cdn.simpleicons.org/react', alt: 'React' },
    { src: 'https://cdn.simpleicons.org/.net', alt: '.NET' },
    { src: 'https://cdn.simpleicons.org/canva', alt: 'Canva' },
    { src: 'https://cdn.simpleicons.org/figma', alt: 'Figma' }
    ];

  return (
    <Swiper
      className="skills-carousel"
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={3}
      speed={6500}
      loop={true}
      freeMode={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 5 },
        768: { slidesPerView: 6 },
        1024: { slidesPerView: 8 }
      }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo.src} alt={logo.alt} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}