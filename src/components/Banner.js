import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.paparact.com/gi1" alt="img1" />
        </div>

        <div>
          <img loading="lazy" src="https://links.paparact.com/6ff" alt="img2" />
        </div>

        <div>
          <img loading="lazy" src="https://links.paparact.com/7ma" alt="img3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
