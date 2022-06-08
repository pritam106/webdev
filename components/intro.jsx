import React from 'react'
import Image from 'next/image' 
import Circle from "../components/circle.jsx"
import styles from '../styles/Intro.module.css'
const Intro = () => {
  return (
      <div className={styles.container}>
          <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
          <Circle backgroundColor="#01c686"  right="-40vh" />
          <div className={styles.card}>
              <h1 className={styles.title}>
                  <span className={styles.brand}>AV0CAD0</span> DIGITAL PRODUCT AGENCY
              </h1>
              <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eligendi distinctio laudantium!</p>
            <button className={styles.button}>Discover</button>
          </div>
          <div className={styles.card}>
              <Image src="/img/avocado.png" width="100%" height="100%" layout='fill' alt="image"/>
          </div>
      </div>
  
  )
}

export default Intro