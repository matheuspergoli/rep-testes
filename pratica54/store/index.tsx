import create from 'zustand'

interface ICountStore {
	count: number
	increment: () => void
	decrement: () => void
}

const useCountStore = create<ICountStore>()((set) => ({
	count: 0,
	increment: () => set((state: any) => ({ count: state.count + 1 })),
	decrement: () => set((state: any) => ({ count: state.count - 1 }))
}))

export default useCountStore
