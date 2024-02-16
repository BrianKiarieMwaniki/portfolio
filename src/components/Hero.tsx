import React from 'react'
import { hero_bg} from '../assets/images';

type Props = {}

const Hero = (props: Props) => {
  return (
    <section style={{backgroundImage:`url(${hero_bg})`}}>
        Hero
    </section>
  )
}

export default Hero