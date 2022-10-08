import React from 'react'
import PortaModel from '../model/porta'
import styles from '../styles/Porta.module.css'

interface PortaProps {
	porta: PortaModel
}

function Porta({ porta }: PortaProps) {
	const selecionada = porta.selecionada ? styles.selecionada : ''

	return (
		<div className={styles.area}>
			<div className={`${styles.estrutura} ${selecionada}`}>
				<div className={styles.porta}>
					<div className={styles.numero}>{porta.numero}</div>
					<div className={styles.macaneta}></div>
				</div>
			</div>
			<div className={styles.chao}></div>
		</div>
	)
}

export default Porta
