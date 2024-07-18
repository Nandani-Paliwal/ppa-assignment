import { Federant } from 'next/font/google'
import Blog from '~/components/blog'
import CtaSection from '~/components/cta-section'
import Feature from '~/components/feature-section'
import Portfolio from '~/components/portfolio-section'
import Testimonials from '~/components/testimonials'
import UspSection from '~/components/usp-section'

export default function Homr(): JSX.Element {
	return (
		<main className=" bg-white dark:bg-darkGrey">
			<Portfolio />
			<UspSection />
			<Feature
				image="/assets/feature/rafiki.svg"
				title="The unseen of spending three years at Pixelgrade"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
			/>
			<Feature
				image="/assets/feature/pana.svg"
				title="How to design your site footer like we did"
				description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
			/>
			<Testimonials />
      <Blog />
      <CtaSection />
		</main>
	)
}
