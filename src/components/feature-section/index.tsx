import Image from 'next/image'
import  React from 'react'
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
			<div className="flex w-full flex-col items-center justify-center gap-5 lg:justify-between lg:flex-row">
				<div className="">
					<Image src={image} alt="" height={328} width={441} />
				</div>
				<div className="flex flex-col justify-center items-center lg:items-start lg:justify-starttart gap-8 text-center lg:text-left">
					<div className='flex flex-col gap-4  justify-center items-center lg:items-start lg:justify-starttart'>
						<Heading as="h2" type="h2" className="text-darkGrey dark:text-white max-w-xl">
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
