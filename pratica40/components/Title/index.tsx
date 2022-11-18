function Title(props: { children: string }) {
	return (
		<h1
			className={`
				text-4xl 
				text-center
				font-bold 
				mb-5
				mx-auto 
				w-fit
				after:content-[""]
				after:block
				after:w-1/2
				after:h-2
				after:mx-auto
				after:mt-1
				after:rounded-md
				after:bg-main-black`}>
			{props.children}
		</h1>
	)
}

export default Title
