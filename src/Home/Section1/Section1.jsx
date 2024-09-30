import styles from './section1.module.css';

const Section1 = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.heading1}>Let us find your</h1>
                    <h1 className={styles.heading2}>Forever Food.</h1>
                    <p className={styles.pera}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className={styles.button}>
                        <button className={styles.SearchNow}>Search Now</button>
                        <button className={styles.Knowmore}>Know more</button>
                    </div>
                </div>
                <div className={styles.right}>


                </div>
            </div>
        </div>
    )
}
export default Section1