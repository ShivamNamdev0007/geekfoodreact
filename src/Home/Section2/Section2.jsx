import styles from './Section2.module.css';
const Section2 = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.left}>
                    <img className="" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                    <h1>
                        hellow
                    </h1>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>

                    <p className={styles.pera}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                     <button className={styles.GetinTouch}>Get in Touch</button>
                </div>
            </section>
        </>
    )
}
export default Section2;