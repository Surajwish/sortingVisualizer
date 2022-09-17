import React from 'react'
import styles from './Chart.module.css'

function Chart({ arr }) {

    return <>
        <div id={styles.container}>
            <div id={styles.chart}>
                {arr.map((item, id) => {
                    return <div key={id} className={styles.bar} style={{ height: `${item}%` }}>
                    </div>
                })}
            </div>
            <div id={styles.index}>
                {arr.map((item, id) => {
                    return <div key={id} className={styles.num}>
                        {item}
                    </div>
                })}
            </div>
        </div>
    </>
}

export default Chart