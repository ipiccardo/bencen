'use client'


import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import ServiceCards from "../components/Service_Card/ServiceCard";
import UnmatchedCards from "../components/Unmatched_Card/UnmatchedCard";
import Hero from "../components/Hero/Hero";
import classes from './page.module.css'
import Header from "../components/Header/Header";
import Image from "next/image";
import Button from "../components/Ui/Button";
import AboutUsCard from "../components/AboutUs_Card/AboutUsCard";
import ClientCard from "../components/Clients_Card/ClientCard";
import NewsCard from "../components/News_Card/NewsCard";


const HomePage = () => {

  const [pantallaPequeña, setPantallaPequeña] = useState(false);
  const [pantallaMediana, setPantallaMediana] = useState(false);
  const [firtAndLastImage, setFirstAndLastImage] = useState({ width: 1344, heigth: 888 })
  const [otherImages, setOtherImages] = useState({ width: 1296, heigth: 960 })

  const handleResize = () => {
    setPantallaPequeña(window.innerWidth < 768)
    const screenWidth = window.innerWidth;
    console.log(screenWidth)

    if (screenWidth >= 1400) {
      setPantallaPequeña(false);
      setPantallaMediana(false)
      setFirstAndLastImage({ width: 1344, heigth: 888 });
      setOtherImages({ width: 1344, heigth: 960 })
    } else if (screenWidth >= 941) {
      setPantallaPequeña(false);
      setPantallaMediana(true)
      setFirstAndLastImage({ width: 938, heigth: 888 });
      setOtherImages({ width: 938, heigth: 960 })
    } else {
      setPantallaPequeña(true);
      setPantallaMediana(false)
    }
  };
  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
      {/* <NewsCard /> */}
      <div className={classes.homePageContainer}>
        <div className={classes.headerContainer}>
          <Header />
        </div>
        <div className={classes.firstSectionContainer}>
          <section>
            <div className={`${classes.FirstimageContainer} ${classes.widthImage}`}>
              {!pantallaMediana ?
                <Image width={firtAndLastImage.width} height={firtAndLastImage.heigth} src={"/images/withoutMark.png"} alt={""} />
                :
                <Image src={"/images/withoutMark.png"} alt={""} layout="fill" objectFit="cover" />
              }
            </div>
          </section>
          <div className={classes.serviceCardContainer}>
            <ServiceCards />
          </div>
          <section className={classes.secondSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.secondImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.aboutCardContainer}>
                  <AboutUsCard />
                  <div className={classes.aboutUsParagraphContainer}>
                    <h1>ABOUT US</h1>
                    <p>All Bencen, we are more than builders, we are creators of spaces that imspire.
                      Our journey in the realm of construction has been fueled by a passion for excellence.
                    </p>
                    <p>
                      From the drawing board to the final brick, we meticulously craft every project to reflect
                      innovation, quality, and client aspirations. Join us in shaping a world where vision meets
                      reality.
                    </p>
                    <button className={classes.aboutUsButton}>DISCOVER MORE ABOUT US</button>
                  </div>
                </div>
              </div>
              {!pantallaMediana ?
                <Image width={otherImages.width} height={otherImages.heigth} src={"/images/FrameTwoInside.png"} alt={""} />
                :
                <Image src={"/images/FrameTwoInside.png"} alt={""} layout="fill" objectFit="cover" />
              }

            </div>
          </section>
          <section className={classes.threeSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.unmatchedServicesContainer}>
                  <h1>UNMATCHED SERVICES</h1>
                  <button>GET FREE QUOTATION</button>
                </div>
                <UnmatchedCards />
              </div>
              {!pantallaMediana ?
                <Image width={1346} height={otherImages.heigth} src={"/images/FrameThree.png"} alt={""} />
                :
                <Image src={"/images/FrameThree.png"} alt={""} layout="fill" objectFit="cover" />
              }
            </div>
          </section>
          <section className={classes.fourSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>

                <div className={classes.clientCardContainer}>
                  <ClientCard />
                  <div className={classes.aboutUsParagraphContainer}>
                    <h1>SATISFIED CLIENTS WE SERVED FOR YEARS</h1>
                    <p>Our commitment to excellence and unwavering dedication have enabled us to build lasting relationships with individuals and businesses alike. Our track record of delivering exceptional service has not only met but exceeded the expectations of our valued clients.

                    </p>
                    <p>Their satisfaction is a testament to our expertise, reliability, and a deep-rooted commitment to their success.</p>
                    <button className={classes.aboutUsButton}>SEE ALL PROJECTS</button>
                  </div>
                </div>
              </div>
              {!pantallaMediana ?
                <Image width={otherImages.width} height={720} src={"/images/FrameFour.png"} alt={""} />
                :
                <Image src={"/images/FrameFour.png"} alt={""} layout="fill" objectFit="cover" />
              }
            </div>
          </section>
          <section className={classes.fiveSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.contactContainer}>
                  <h1>CONTACT</h1>
                  <p>Have questions or interested in collaborating with us? We'd love to hear from you! Our team is ready to assist you.</p>
                  <p>Click the 'Contact Us' button below to get in touch. Whether you're looking for information, exploring partnership opportunities, or want to join our team, we're here to help. Your inquiry is important to us, and we'll respond promptly. Let's connect and make great things happen together!</p>
                  <div className={classes.buttonContainer}>
                    <button className={classes.aboutUsButton}>CONTACT US</button>
                    <button className={classes.aboutUsButton}>WORK WITH US</button>
                  </div>
                </div>
              </div>
              {!pantallaMediana ?
                <Image width={otherImages.width + 2} height={720} src={"/images/FrameFive.png"} alt={""} />
                :
                <Image src={"/images/FrameFive.png"} alt={""} layout="fill" objectFit="cover" />
              }
            </div>
          </section>
          <section className={classes.sixSectionContainers}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>

                <div className={classes.newsContainer}>
                  <h1>LATEST NEWS</h1>
                  <NewsCard />
                </div>
              </div>
              {!pantallaMediana ?
                <Image width={otherImages.width} height={720} src={"/images/FrameSix.png"} alt={""} />
                :
                <Image src={"/images/FrameSix.png"} alt={""} layout="fill" objectFit="cover" />
              }
            </div>
          </section>
          <section className={classes.SevenSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              {!pantallaPequeña ?
                <Image width={firtAndLastImage.width} height={firtAndLastImage.heigth} src={"/images/FrameSevenInside.png"} alt={""} />
                :
                <Image src={"/images/FrameSevenInside.png"} alt={""} layout="fill" objectFit="cover" />
              }
            </div>
          </section>
        </div>
      </div >
      {/* <ServiceCards />
      <UnmatchedCards /> */}
    </>
  );
};

export default HomePage;
