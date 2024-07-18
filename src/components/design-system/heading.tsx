import React from 'react'
import { clsx } from 'clsx'

export interface HeadingProps {
	as?: keyof JSX.IntrinsicElements
	type?: 'h1' | 'h2' | 'h3' | 'h4'
	className?: string
	children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({
	as: Heading = 'h2',
	type = '',
	className = '',
	children
}) => {
	const headingStyles: { [key: string]: string } = {
		h1: 'text-h2 md:text-h1 font-semibold',
		h2: 'text-h3 md:text-h2 font-semibold',
		h3: 'text-h4 md:text-h3 font-semibold',
		h4: 'text-para-1 md:text-h4 font-semibold'
	}

	return <Heading className={clsx(headingStyles[type], className)}>{children}</Heading>
}

export { Heading }
