import Image from 'next/image'
import type React from 'react'
import { Heading } from '../design-system/heading'
import { Paragraph } from '../design-system/paragraph'
import Button from '../design-system/button'

const Feature: React.FC<{ title: string; description: string; image: string }> = ({
	title,
	description,
	image
}) => {
	return (
		<section className="mx-auto flex max-w-7xl items-center px-5 py-8 md:px-10  md:py-20 lg:px-16">
			<div className="flex w-full flex-col lg:items-center gap-5 lg:justify-between lg:flex-row">
				<div className="">
					<Image src={image} alt="" height={328} width={441} />
				</div>
				<div className="flex flex-col items-start justify-start gap-8">
					<div className='flex flex-col gap-4'>
						<Heading as="h2" type="h2" className="text-darkGrey max-w-xl">
							{title}
						</Heading>
						<Paragraph type="para-3" className="text-grey max-w-xl">
							{description}
						</Paragraph>
					</div>
                    <div><Button>Learn More</Button></div>
				</div>
			</div>
		</section>
	)
}

export default Feature
