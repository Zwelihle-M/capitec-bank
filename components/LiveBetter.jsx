import Image from 'next/image'
import React from 'react'
import { livebetter } from "../Data";
import styles, { layout } from "../pages/style";
import LiveBetterLogo from "../assets/LiveBetter.svg"
import Button from "./Button";
import LiveBetterMockup from "../assets/LiveBetterMockup2.png"

const LiveBetter = () => {
  return (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <div>
          <Image src={LiveBetterLogo} alt="live better logo" />
        </div>
        {livebetter.map((live) => (
          <div key={live.id}>
            <h1 className={` mt-5 text-gradient text-6xl bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 bg-clip-text text-transparent`}>
              {live.title}
              <br className="sm:block hidden" />
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {live.content}
            </p>
          </div>
        ))}

        <div className='mt-10'>
        <Button />

        </div>

    </div>
    <div className={`${layout.sectionImg} flex-col`}>
        <Image
          src={LiveBetterMockup}
          alt="live better"
          width={300}
          height={650}
          quality={100}
        className="iphone14 animate-bounce"/>
      </div>

    </section>
  )
}

export default LiveBetter