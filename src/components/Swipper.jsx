import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '../images/Avatar_1.png'
import img3 from '../images/Avatar_3.png'
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../tailwind.config.js'

// const fullConfig = resolveConfig(tailwindConfig)

// console.log(fullConfig.theme.screens.md)

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/modules/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import Image from 'next/image'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function App() {
  const [swiperRef, setSwiperRef] = useState(0)

  const swiperlist = [
    {
      id: 0,
      img: <Image src={img1} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is first slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 1,
      img: <Image src={img3} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is second slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 2,
      img: <Image src={img1} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is third slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 3,
      img: <Image src={img3} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'This is fourth slide.',
      subtitle: 'A subtitle',
    },
  ]

  return (
    <>
      <div>
        <div className="flex flex-col items-center px-5 sm:flex-row sm:items-start sm:px-10">
          <div className="h-40 w-40">{swiperlist[swiperRef].img}</div>
          <span className="flex flex-col pl-0 pb-10 sm:pl-10">
            <p className="pt-5 text-center text-2xl font-bold sm:text-left">
              {swiperlist[swiperRef].name}
            </p>
            <p className="py-5 text-center sm:text-left">
              {swiperlist[swiperRef].title}
            </p>
            <p className="text-center sm:text-left">
              {swiperlist[swiperRef].subtitle}
            </p>
          </span>
        </div>
      </div>
      <div className="px-5 sm:px-10">
        <Swiper
          onSlideChange={(swiper) => setSwiperRef(swiper.activeIndex)}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
        >
          <SwiperSlide>
            Slide 1 Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </SwiperSlide>
          <SwiperSlide>
            Slide 1 Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </SwiperSlide>
          <SwiperSlide>
            Slide 1 Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </SwiperSlide>
          <SwiperSlide>
            Slide 1 Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
