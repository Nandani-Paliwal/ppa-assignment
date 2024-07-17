import Image from 'next/image'
import { Paragraph } from '../design-system/paragraph'
import { Heading } from '../design-system/heading'

export default function Portfolio() {
	const logoList = [
		{
			logo: '/assets/portfolio-logo/logo1.svg'
		},
		{
			logo: '/assets/portfolio-logo/logo2.svg'
		},
		{
			logo: '/assets/portfolio-logo/logo3.svg'
		},
		{
			logo: '/assets/portfolio-logo/logo4.svg'
		},
		{
			logo: '/assets/portfolio-logo/logo5.svg'
		},
		{
			logo: '/assets/portfolio-logo/logo6.svg'
		},
		{
			logo: '/assets/portfolio-logo/logo7.svg'
		}

	]

	return (
		<div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden py-16 px-4 md:px-6 text-center ">
			<div className="flex flex-col items-center justify-center gap-4">
				<Heading type='h2' className=" text-darkGrey ">
					Our Clients
				</Heading>
				<Paragraph type='para-3' weight='normal' className='text-grey '>
				We have been working with some Fortune 500+ clients
				</Paragraph>
			</div>
			{/* desktop */}
			<div className="text-secondary mx-auto hidden md:flex w-full">
					<div className="mx-auto flex items-center justify-between gap-4 w-4/5">
						{logoList.map((item, id) => (
							
								<Image
									src={item.logo}
									alt="client logo"
									height={1000}
									width={1000}
									className="h-10 w-auto"
								/>
						
						))}
					</div>
				</div>
				{/* mobile */}
			<div className="flex md:hidden flex-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
				<div className="flex flex-shrink-0 animate-slide items-center justify-around  whitespace-nowrap">
					{logoList.map((logoitem, index) => (
						<div className="slide px-4 opacity-75 hover:opacity-100" key={index}>
							<Image
								src={logoitem.logo}
								alt="client-logo"
								height={1000}
								width={1000}
								className="h-10 w-auto"
							/>
						</div>
					))}
				</div>
				<div className="flex flex-shrink-0 animate-slide items-center justify-around  whitespace-nowrap">
					{logoList.map((logoitem, index) => (
						<div className="slide px-4 opacity-75 hover:opacity-100" key={index}>
							<Image
								src={logoitem.logo}
								alt="client-logo"
								height={1000}
								width={1000}
								className="h-10 w-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
