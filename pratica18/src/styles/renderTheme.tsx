import { render } from '@testing-library/react'
import { theme } from '../styles/global'
import { ThemeProvider } from 'styled-components'

function renderTheme(props: any) {
	return render(<ThemeProvider theme={theme}>{props.children}</ThemeProvider>)
}

export default renderTheme
