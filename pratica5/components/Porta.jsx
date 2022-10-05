import React from 'react'
import styles from '../styles/Porta.module.css'

function Porta(props) {
	return (
		<div className={styles.area}>
			<div className={styles.estrutura}>
				<div className={styles.porta}>
					<div className={styles.numero}>3</div>
				</div>
			</div>
      <div className={styles.chao}></div>
		</div>
	)
}

export default Porta
