import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/modules/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function App() {
  const [swiperRef, setSwiperRef] = useState(0)

  useEffect(() => {
    console.log('swipeRef changed to:' + swiperRef)
  }, [swiperRef])

  const swiperlist = [
    {
      id: 0,
      img: (
        <img
          src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
          width={300}
          height={200}
          className="pb-5"
          alt="alsdkjf"
        />
      ),
      name: 'Meet Sam',
      title: 'This is first slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 1,
      img: (
        <img
          src="https://www.pngplay.com/wp-content/uploads/10/Avatar-The-Last-Airbender-PNG-Photo-Image.png"
          width={300}
          height={200}
          className="pb-5"
          alt="alsdkjf"
        />
      ),
      name: 'Meet Sam',
      title: 'This is second slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 2,
      img: (
        <img
          src="https://www.transparentpng.com/thumb/aang/eZK3Lb-mundonick-avatar-aang.png"
          width={300}
          height={200}
          className="pb-5"
          alt="alsdkjf"
        />
      ),
      name: 'Meet Sam',
      title: 'This is third slide.',
      subtitle: 'A subtitle',
    },
    {
      id: 3,
      img: (
        <img
          src="https://wiki.supercombo.gg/images/7/7d/NASB_aang_character.png"
          width={300}
          height={200}
          className="pb-5"
          alt="alsdkjf"
        />
      ),
      name: 'Meet Sam',
      title: 'This is fourth slide.',
      subtitle: 'A subtitle',
    },
  ]

  return (
    <>
      <div>
        <div className="flex">
          {swiperlist[swiperRef].img}
          <span className="ml-8 flex flex-col">
            <p className="text-2xl font-bold">{swiperlist[swiperRef].name}</p>
            <p className="py-10">{swiperlist[swiperRef].title}</p>
            <p>{swiperlist[swiperRef].subtitle}</p>
          </span>
        </div>
      </div>
      <Swiper
        onSlideChange={(swiper) => setSwiperRef(swiper.activeIndex)}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
      >
        <SwiperSlide>
          Slide 1 Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </SwiperSlide>
        <SwiperSlide>
          Slide 2 Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </SwiperSlide>
        <SwiperSlide>
          Slide 3 Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </SwiperSlide>
        <SwiperSlide>
          Slide 4 Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </SwiperSlide>
      </Swiper>
    </>
  )
}
