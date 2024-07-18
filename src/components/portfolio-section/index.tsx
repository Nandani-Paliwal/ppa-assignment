import Image from 'next/image'
import { Paragraph } from '../design-system/paragraph'
import { Heading } from '../design-system/heading'

export default function Portfolio() {
	const logoList = [
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
		},
		{
			logo: '/assets/client-logo/logo3.svg'
		}
	]

	return (
		<div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden px-4 py-16 text-center md:px-6 ">
			<div className="flex flex-col items-center justify-center  gap-4">
				<Heading type="h2" className=" text-darkGrey dark:text-white">
					Our Clients
				</Heading>
				<Paragraph type="para-3" weight="normal" className="text-grey  ">
					We have been working with some Fortune 500+ clients
				</Paragraph>
			</div>
			{/* desktop */}
			<div className="mx-auto hidden w-full text-secondary md:flex">
				<div className="mx-auto flex w-4/5 items-center justify-between gap-4">
					{logoList.map((item, index) => (
						<Image
							src={item.logo}
							alt="client logo"
							height={48}
							width={48}
							className="h-10 w-auto"
							key={index}
						/>
					))}
				</div>
			</div>
			{/* mobile */}
			<div className="flex flex-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:hidden">
				<div className="flex flex-shrink-0 animate-slide items-center justify-around  whitespace-nowrap">
					{logoList.map((logoitem, index) => (
						<div className="slide px-4 opacity-75 hover:opacity-100" key={index}>
							<Image
								src={logoitem.logo}
								alt="client-logo"
								height={48}
								width={48}
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
								height={48}
								width={48}
								className="h-10 w-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
