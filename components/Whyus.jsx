/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Whyus.module.css"

const Whyus = () => {
  return (
    <div className="container mt-4 pt-4 mb-4 pb-4">
      <h1 className={styles.header}>Why Bitc?</h1>
      <hr className={styles.hr} />
      <div className="row ml-1 mr-1 mt-4 pt-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/beginner_friendly.svg" alt="" /></div>
          <div className={styles.subheading}>Best Products</div>
          <p className={styles.para}>
            Our products are aimed to solve and make our customers life easy.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/screen.svg" alt="" /></div>
          <div className={styles.subheading}>Smooth Designs</div>
          <p className={styles.para}>
            We are connected to our roots so does our design.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/hill.svg" alt="" /></div>
          <div className={styles.subheading}>Providing Opportunities</div>
          <p className={styles.para}>
            We are aiming to provide jobs and Opportunities for people 
            to let them grow and success with us.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Whyus