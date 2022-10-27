import React from 'react'
import { motion } from 'framer-motion'

const SecondRulesBlock = () => {
  const Animations = {
    initial: 'initial',
    animate: 'animate',
    variants: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: { duration: 0.8 },
      },
    },
  }
  return (
    <div>
      <motion.div {...Animations}>
        <div className="grid grid-cols-1">
          <img
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            width={300}
            height={200}
            className="m-auto pb-5"
            alt="alsdkjf"
          />
          {/* <Image src={img} width="300" height="300" /> */}
          <div className="mx-auto max-w-screen-sm">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SecondRulesBlock
