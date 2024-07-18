import Image from 'next/image'
import { Heading } from '../design-system/heading'
import { Paragraph } from '../design-system/paragraph'
import Link from 'next/link'

export default function Blog() {
	const blogList = [
		{
			title: 'Creating Streamlined Safeguarding Processes with OneRen',
			alt: 'A girl working at the laptop ',
			src: '/assets/blog/image1.png'
		},
		{
			title: 'What are your safeguarding responsibilities and how can you manage them?',
			alt: 'A laptop and some papers on the table',
			src: '/assets/blog/image2.png'
		},
		{
			title: 'Revamping the Membership Model with Triathlon Australia',
			alt: 'Some educational content being displayed on the laptop',
			src: '/assets/blog/image3.png'
		}
	]
	return (
		<section className=" flex items-center px-5 py-8 md:px-10  md:py-20 lg:px-16">
			<div className="mx-auto  flex w-full max-w-7xl flex-col items-center gap-10 ">
				<div className="flex flex-col items-center justify-center gap-4 text-center">
					<Heading as="h2" type="h2" className=" text-darkGrey dark:text-white">
						Caring is the new marketing
					</Heading>
					<Paragraph type="para-2" className="max-w-2xl  text-grey">
						The Nexcent blog is the best place to read about the latest membership
						insights, trends and more. See who's joining the community, read about how
						our community are increasing their membership income and lot's more.{' '}
					</Paragraph>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-4">
					{blogList.map((item, id) => (
						<div className="flex flex-col items-center justify-center" key={id}>
							<Image
								src={item.src}
								alt={item.alt}
								height={286}
								width={368}
								className="rounded-lg"
							/>
							<div className="-mt-10 flex flex-col items-center justify-center text-center  rounded-lg bg-silver p-4 gap-4 shadow-lg max-w-[230px] md:max-w-[317px]">
								<Heading as="h4" type="h4" className=" text-grey fomt-medium">
									{item.title}
								</Heading>
								<Link href="" className="flex items-center gap-1">
									<Paragraph type="para-2" className="text-primary">
										Readmore
									</Paragraph>
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
					))}
				</div>
			</div>
		</section>
	)
}
