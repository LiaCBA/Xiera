import { useCallback } from "react";
import styles from "./Jobs.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { cardElenet, carElement } from "../../../data/card";
export default function Jobs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className={styles.jobsContainer}>
      <div className={styles.jobsTopContainer}>
        <div className={styles.jobsContainerLeftSide}>
          <p className={styles.purpleTitle}>J O B S &nbsp; N E A R &nbsp; M E</p>
          <h2 className={styles.title}>Featured Jobs</h2>
          <p className={styles.employment}>Employee and Employment Company.</p>
        </div>
        <div className={styles.jobsContainerRightSide}>
          <button className={styles.embla__next} onClick={scrollPrev}>
            <img src="/images/svg/Arrow.svg" alt="Arrow" />
          </button>
          <button className={styles.embla__prev} onClick={scrollNext}>
            <img src="/images/svg/Arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            {cardElenet.map((eachElement) => (
              <div className={styles.card}>
                <div className={styles.brandContainer}>
                  <div className={styles.imageContainer}>
                    <img src={eachElement.image} alt="" />
                  </div>
                  <div>
                    <p className={styles.brandName}>{eachElement.company}</p>
                    <p className={styles.postedTime}>{eachElement.posted}</p>
                  </div>
                </div>
                <div className={styles.companyDescription}>
                  <h2>{eachElement.position}</h2>
                </div>
                <div className={styles.locationMainContainer}>
                  <div className={styles.locationContainer}>
                    <img src={eachElement.locationIcon} alt={eachElement.location} />
                    <p>{eachElement.location}</p>
                  </div>
                  <div className={styles.typeContainer}>{eachElement.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.embla__slide}>
            {carElement.map((eachElement) => (
              <div className={styles.card}>
                <div className={styles.brandContainer}>
                  <div className={styles.imageContainer}>
                    <img src={eachElement.image} alt="" />
                  </div>
                  <div>
                    <p className={styles.brandName}>{eachElement.company}</p>
                    <p className={styles.postedTime}>{eachElement.posted}</p>
                  </div>
                </div>
                <div className={styles.companyDescription}>
                  <h2>{eachElement.position}</h2>
                </div>
                <div className={styles.locationMainContainer}>
                  <div className={styles.locationContainer}>
                    <img src={eachElement.locationIcon} alt={eachElement.location} />
                    <p>{eachElement.location}</p>
                  </div>
                  <div className={styles.typeContainer}>{eachElement.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
