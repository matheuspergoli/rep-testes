import create from 'zustand'
import { persist } from 'zustand/middleware'

interface DarkModeState {
	darkMode: boolean
	toggleDarkMode: () => void
}

const useDarkMode = create<DarkModeState>()(
	persist(
		(set) => ({
			darkMode: false,
			toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
		}),
		{
			name: 'dark-mode',
			getStorage: () => localStorage
		}
	)
)

export default useDarkMode
