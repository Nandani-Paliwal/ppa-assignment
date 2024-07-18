'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { clsx } from 'clsx'
import Link from 'next/link'


const FloatingNavbar = () => {
	const navItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Service',
			href: '/#service'
		},
		{
			name: 'Feature',
			href: '/'
		},
		{
			name: 'Product',
			href: '/'
		},
		{
			name: 'Testimonial',
			href: '/#testimonial'
		},
		{
			name: 'FAQ',
			href: '/'
		},
	]

	const { scrollYProgress } = useScroll()

	const [visible, setVisible] = useState(false)

	useMotionValueEvent(scrollYProgress, 'change', current => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			// @ts-expect-error	
			const direction = current - scrollYProgress.getPrevious()

			if (scrollYProgress.get() < 0.05) {
				setVisible(false)
			} else {
				if (direction < 0) {
					setVisible(true)
				} else {
					setVisible(false)
				}
			}
		}
	})

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 1,
					y: -100
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0
				}}
				transition={{
					duration: 0.2
				}}
				className="fixed inset-x-0 top-10 z-[5000] mx-auto hidden max-w-fit items-center justify-center space-x-4 rounded-full border border-black/[0.7] dark:border-white/[0.2] bg-white dark:bg-black py-2 pl-8  pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:flex"
			>
				{navItems.map((navItem: any, idx: number) => (
					<Link
						key={`link=${idx}`}
						href={navItem.href}
						className={clsx(
							'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300'
						)}
					>
						<span className="hidden text-sm sm:block">{navItem.name}</span>
					</Link>
				))}
				<Link
					href=""
					target="_blank"
					className="hidden lg:block"
					title="contact-us"
				>
					<button className="relative rounded-full  px-4 py-2 text-sm font-medium bg-primary hover:bg-primaryShade-3 text-white">
						<span>Login</span>
					</button>
				</Link>
			</motion.div>
		</AnimatePresence>
	)
}

export default FloatingNavbar
