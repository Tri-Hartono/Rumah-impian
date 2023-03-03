import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import CardCarousel from './CardCarousel';
import { DataProperti } from '../../../Asset/DataProperti';

function CarouselSwiper() {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <>
      <div className=" relative">
        <div className="px-setting flex items-center justify-between">
          <h1 className="text-green-900">Properti Rumah</h1>
          <Link to="/properti" className="bg-green-900 px-4 py-2 text-white rounded-sm text-center">
            Lihat Semua
          </Link>
        </div>
        <div
          className="py-4 md:py-10 
      flex items-center justify-center w-full pl-8 md:pl-32 lg:pl-48 2xl:pl-0 "
        >
          <Swiper
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            grabCursor={true}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Navigation, Keyboard]}
            className="mySwiper"
            speed={200}
            observer={true}
            observeParents={true}
            parallax={true}
            preventClicks={true}
            preventClicksPropagation={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 20,
              },
            }}
          >
            {DataProperti.map((item) => (
              <SwiperSlide key={item.id}>
                <CardCarousel item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <FontAwesomeIcon className="swiperPrev" icon={faAngleLeft} ref={swiperNavPrevRef} />
          <FontAwesomeIcon className="swiperNext" icon={faAngleRight} ref={swiperNavNextRef} />
        </div>
      </div>
    </>
  );
}
export default CarouselSwiper;
