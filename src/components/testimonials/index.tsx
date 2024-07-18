import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { Heading } from '../design-system/heading'
import { Paragraph } from '../design-system/paragraph'

export default function Testimonials() {
	const clientList = [
		{
			logo: '/assets/client-logo/logo1.svg'
		},
		{
			logo: '/assets/client-logo/logo2.svg'
		},
		{
			logo: '/assets/client-logo/logo3.svg'
		},
		{
			logo: '/assets/client-logo/logo4.svg'
		},
		{
			logo: '/assets/client-logo/logo5.svg'
		},
		{
			logo: '/assets/client-logo/logo6.svg'
		}
	]

	return (
		<section className="mx-auto flex max-w-7xl items-center px-5 py-8 md:px-10  md:py-20 lg:px-16">
			<div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:justify-between">
				<div className="">
					<Image
						src="/assets/testimonials/main-image.png"
						alt=""
						height={326}
						width={326}
						className="shadow-lg"
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-8 lg:items-start lg:justify-start">
					<div className="flex flex-col items-center justify-center gap-3 text-center lg:items-start lg:justify-start lg:text-left">
						<Paragraph type="para-2" className="max-w-3xl font-medium text-grey">
							Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
							sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
							Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
							molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
							nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
							quis tristique nulla sodales. Suspendisse eget lorem eu turpis
							vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
							vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
							efficitur libero condimentum id. Curabitur id nibh id sem dignissim
							finibus ac sit amet magna.
						</Paragraph>
						<div className="flex flex-col gap-1 text-center lg:text-left">
							<Heading as="h4" type="h4" className="max-w-xl text-primary">
								Tim Smith
							</Heading>
							<Paragraph type="para-2" className="text-lightGrey">
								British Dragon Boat Racing Association
							</Paragraph>
						</div>
					</div>
					<div className="flex w-full flex-col md:flex-row justify-center items-center md:justify-between gap-3">
						<div className="hidden flex-row justify-between gap-5 md:flex xl:gap-14">
							{clientList.map((item, id) => (
								<Image
									src={item.logo}
									alt="client logo"
									height={48}
									width={48}
									className="h-10 w-auto "
									key={id}
								/>
							))}
						</div>
						{/* mobile */}
						<div className="flex flex-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:hidden">
							<div className="flex flex-shrink-0 animate-slide items-center justify-around  whitespace-nowrap">
								{clientList.map((item, index) => (
									<div
										className="slide px-4 opacity-75 hover:opacity-100"
										key={index}
									>
										<Image
											src={item.logo}
											alt="client-logo"
											height={48}
											width={48}
											className="h-10 w-auto"
										/>
									</div>
								))}
							</div>
							<div className="flex flex-shrink-0 animate-slide items-center justify-around  whitespace-nowrap">
								{clientList.map((item, index) => (
									<div
										className="slide px-4 opacity-75 hover:opacity-100"
										key={index}
									>
										<Image
											src={item.logo}
											alt="client-logo"
											height={48}
											width={48}
											className="h-10 w-auto"
										/>
									</div>
								))}
							</div>
						</div>
						<Link href="" className="flex items-center gap-1">
							<Heading as="h4" type="h4" className="text-primary">
								Meet all customers
							</Heading>
							<span>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
										stroke="#4CAF4F"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
