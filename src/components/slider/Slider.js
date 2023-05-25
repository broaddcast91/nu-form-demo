import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const homeBanners = [
  // {
  //   id: 1,
  //   img: require('../../assets/banners/smartwheels-gudipadwa.webp'),
  // },  {
  //   id: 2,
  //   img: require('../../assets/banners/smartwheels-holi-banner.webp'),
  // },
  {
    id: 1,
    img: require('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/arena-new-banner-dec23.webp'),
  },
  {
    id: 2,
    img: require('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/arena-new-banner-dec23.webp'),
  },
];

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className='homescreen_slider mx-10 rounded'
      >
        {homeBanners.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              className='h-full w-full bg-black'
              alt={item.id}
            />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className='absolute left-10 top-1/2 z-10 bg-white rounded-lg p-3 cursor-pointer'
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className='absolute right-10 top-1/2 z-10 bg-white rounded-lg p-3 cursor-pointer'
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
}

export default Slider;
