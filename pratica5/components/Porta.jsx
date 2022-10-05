import React from 'react'
import styles from '../styles/Porta.module.css'

function Porta(props) {
	const selecionada = props.selecionada ? styles.selecionada : ''

	return (
		<div className={styles.area}>
			<div className={`${styles.estrutura} ${selecionada}`}>
				<div className={styles.porta}>
					<div className={styles.numero}>3</div>
					<div className={styles.macaneta}></div>
				</div>
			</div>
			<div className={styles.chao}></div>
		</div>
	)
}

export default Porta
