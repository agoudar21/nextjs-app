/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import image1 from "/public/contact.png"
import Button from '@/components/button/Button'
const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src={image1} 
            alt='contact Image'
            fill={true}
            className={styles.image}
            />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input}/>
          <input type="text" placeholder='email' className={styles.input}/>
          <textarea type="text" placeholder='message' className={styles.textArea}/>
          <Button url="#" text="send"></Button>
        </form>
        
      </div>
    </div>
  )
}

export default contact


