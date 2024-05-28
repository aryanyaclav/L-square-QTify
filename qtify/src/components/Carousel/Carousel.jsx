import React, { useEffect } from 'react'
import Card from '../Card/Card'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import CarouselLeftNavigation from '../Navigation/CarouselLeftNavigation';
import CarouselRightNavigation from '../Navigation/CarouselRightNavigation';

const Controls = ({data}) => {
    const swiper = useSwiper()

    useEffect(() => {
        if(data.length > 0){
            swiper.slideTo(0)
        }
    }, [data, swiper])

    return <></>
}


export default function Carousel({ data, renderComponent }) {

    return(
        <Swiper
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
        allowTouchMove
      >
      {/* <Controls data={data}/> */}
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
        {data.map((item, index) => (
                <SwiperSlide key={index}>{renderComponent(item)}</SwiperSlide>
            ))}
      </Swiper>
    )

}
