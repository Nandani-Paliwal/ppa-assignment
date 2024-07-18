'use client'
import Image from 'next/image'
import React, { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { Heading } from '../design-system/heading'
import { Paragraph } from '../design-system/paragraph'

const content = [
	{
		title: (
			<>
				Lessons and Insights <span className="block text-primary">from 8 Years</span>
			</>
		),
		description: 'Where to grow your business as a photographer: site or social media?',
		imageSrc: '/assets/hero/Illustration1.svg'
	},
	{
		title: (
			<>
				Tools to Streamline{' '}
				<span className="block text-primary">Your Business Operations</span>
			</>
		),
		description: 'Discover the best software solutions to manage your business efficiently.',
		imageSrc: '/assets/hero/Illustration2.svg'
	},
	{
		title: (
			<>
				Effective Marketing{' '}
				<span className="block text-primary">Strategies for Growth</span>{' '}
			</>
		),
		description:
			'Learn the most impactful ways to market your business and attract more customers.',
		imageSrc: '/assets/hero/Illustration3.svg'
	}
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
	type: 'spring',
	mass: 3,
	stiffness: 400,
	damping: 50
}

const HeroSection = () => {
	const [contentIndex, setContentIndex] = useState(0)

	const dragX = useMotionValue(0)

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get()

			if (x === 0) {
				setContentIndex(pv => {
					if (pv === content.length - 1) {
						return 0
					}
					return pv + 1
				})
			}
		}, AUTO_DELAY)

		return () => clearInterval(intervalRef)
	}, [dragX])

	const onDragEnd = () => {
		const x = dragX.get()

		if (x <= -DRAG_BUFFER && contentIndex < content.length - 1) {
			setContentIndex(pv => pv + 1)
		} else if (x >= DRAG_BUFFER && contentIndex > 0) {
			setContentIndex(pv => pv - 1)
		}
	}

	return (
		<section className="relative flex flex-col items-center overflow-hidden  bg-gray-950 px-5 py-8  md:px-10 md:py-20 lg:px-16">
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0
				}}
				style={{
					x: dragX
				}}
				animate={{
					translateX: `-${contentIndex * 100}%`
				}}
				transition={SPRING_OPTIONS}
				onDragEnd={onDragEnd}
				className="flex cursor-grab items-center active:cursor-grabbing bg-green-300"
			>
				<Content contentIndex={contentIndex} />
			</motion.div>

			<Dots contentIndex={contentIndex} setContentIndex={setContentIndex} />
		</section>
	)
}

const Content = ({ contentIndex }: { contentIndex: number }) => {
	return (
		<>
			{content.map((item, idx) => {
				return (
					<motion.div
						key={idx}
						animate={{
							scale: contentIndex === idx ? 0.95 : 0.85
						}}
						transition={SPRING_OPTIONS}
						className=" flex flex-col items-center bg-pink-600"
					>
						<div className="item-center mx-auto flex max-w-7xl flex-col  justify-center gap-8 lg:items-start lg:justify-start">
							<div className="item-center flex flex-col justify-center gap-3 lg:items-start lg:justify-start">
								<Heading as="h1" type="h1" className="text-darkGrey">
									{item.title}
								</Heading>
								<Paragraph type="para-2" className="text-lightGrey">
									{item.description}
								</Paragraph>
							</div>
							<div>
								<Image src={item.imageSrc} alt="" height={407} width={391} />
							</div>
						</div>
					</motion.div>
				)
			})}
		</>
	)
}

const Dots = ({
	contentIndex,
	setContentIndex
}: {
	contentIndex: number
	setContentIndex: Dispatch<SetStateAction<number>>
}) => {
	return (
		<div className="mt-4 flex w-full justify-center gap-2">
			{content.map((_, idx) => {
				return (
					<button
						key={idx}
						onClick={() => setContentIndex(idx)}
						className={`h-3 w-3 rounded-full transition-colors ${
							idx === contentIndex ? 'bg-primary' : 'bg-primaryTint-3'
						}`}
					/>
				)
			})}
		</div>
	)
}

export default HeroSection
