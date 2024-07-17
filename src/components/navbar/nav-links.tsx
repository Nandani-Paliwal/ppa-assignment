import { navLinksData } from './data'


const NavLinks = () => {
	return navLinksData.map(({ label }) => (
		<span
			key={label}

			className="hover:decoration-secondary-900 relative space-x-9 cursor-pointer rounded-lg px-3 text-sm font-medium text-neutral-600 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300 transition-colors hover:delay-[0ms]"
		>
			<span className="relative z-10">{label}</span>
		</span>
	))
}

export default NavLinks
