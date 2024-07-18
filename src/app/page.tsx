import Portfolio from '~/components/portfolio-section'
import UspSection from '~/components/usp-section'

export default function Homr(): JSX.Element {
	return (
		<main className=" bg-white dark:bg-darkGrey">
			<Portfolio />
			<UspSection />
		</main>
	)
}
