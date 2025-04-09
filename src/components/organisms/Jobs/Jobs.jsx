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
            <svg className={styles.leftButton}>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.24264 11.8033L0.46967 7.03031C0.176777 6.73741 0.176777 6.26254 0.46967 5.96965L5.24264 1.19668C5.53553 0.903784 6.01041 0.903784 6.3033 1.19668C6.59619 1.48957 6.59619 1.96444 6.3033 2.25734L2.81066 5.74998H14C14.4142 5.74998 14.75 6.08576 14.75 6.49998C14.75 6.91419 14.4142 7.24998 14 7.24998H2.81066L6.3033 10.7426C6.59619 11.0355 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                fill="#152137"
              />
            </svg>
          </button>
          <button className={styles.embla__prev} onClick={scrollNext}>
            <svg className={styles.rightButton}>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.24264 11.8033L0.46967 7.03031C0.176777 6.73741 0.176777 6.26254 0.46967 5.96965L5.24264 1.19668C5.53553 0.903784 6.01041 0.903784 6.3033 1.19668C6.59619 1.48957 6.59619 1.96444 6.3033 2.25734L2.81066 5.74998H14C14.4142 5.74998 14.75 6.08576 14.75 6.49998C14.75 6.91419 14.4142 7.24998 14 7.24998H2.81066L6.3033 10.7426C6.59619 11.0355 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                fill="#152137"
              />
            </svg>
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
                    <img src={eachElement.image} alt={eachElement.company} />
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
                    <img
                      className={styles.companyLogo}
                      src={eachElement.image}
                      alt={eachElement.company}
                    />
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
