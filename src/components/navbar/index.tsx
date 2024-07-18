'use client'

import Link from 'next/link'
import { Popover, Transition, type PopoverButtonProps } from '@headlessui/react'
import Button from '../design-system/button'
import Navlinks from './nav-links'
import React, { type SVGAttributes, Fragment } from 'react'
import { navLinksData } from './data'
import Image from 'next/image'
import ToggleTheme from '../toggle-theme'

function MenuIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M5 6h14M5 18h14M5 12h14"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function ChevronUpIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M17 14l-5-5-5 5"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const MobileNavLink: React.FC<PopoverButtonProps<'span'>> = ({ children, ...props }) => {
	return (
		<Popover.Button
			as={'span'}
			className="block text-lg font-medium leading-7 tracking-tight text-neutral-600 hover:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-300"
			{...props}
		>
			{children}
		</Popover.Button>
	)
}

export default function Navbar() {
	return (
		<Popover className="relative z-[999] w-full bg-silver dark:bg-black/30">
			<div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
				<div className="mt-2 flex w-full items-center justify-between  px-2 lg:space-x-10">
					<Link
						href="/"
						aria-label="Home"
						className="h-auto w-auto select-none"
						title="home"
					>
						<Image
							src={'/assets/logo/logo.svg'}
							draggable={false}
							alt="Nexcent-logo"
							height={20}
							width={110}
							className="flex dark:hidden"
						/>
						<Image
							src={'/assets/logo/dark-logo.svg'}
							draggable={false}
							alt="Nexcent-logo"
							height={20}
							width={110}
							className="hidden dark:flex"
						/>
					</Link>
					{/* Desktop Links */}
					<div className="hidden items-center justify-center lg:flex lg:gap-10 ">
					 {/* @ts-ignore */}
						<Navlinks />
					</div>

					<div className="hidden w-fit items-center justify-start gap-3 lg:flex">
						<Link href="#">
							<Button size="small" variant="tertiary">
								Login
							</Button>
						</Link>
						<Link href="#">
							<Button size="small" className="rounded-md">
								Sign up
							</Button>
						</Link>
						<ToggleTheme />
					</div>
					
					<div className="-my-2 -mr-2 lg:hidden flex gap-2 items-center justify-between">
						<Popover.Button
							className="active:stroke-secondary-900 relative z-[999]  inline-flex items-center rounded-lg hover:bg-gray-200 stroke-secondary p-2 hover:stroke-darkGrey  dark:stroke-white dark:hover:bg-black/50 [&:not(:focus-visible)]:focus:outline-none"
							aria-label="Toggle site navigation"
						>
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
            <ToggleTheme />
					</div>
				</div>
			</div>
			{/* mobile */}
			<Transition
				as={Fragment}
				enter="transform transition ease-in-out duration-500 sm:duration-700"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transform transition ease-in-out duration-500 sm:duration-700"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 z-[999] origin-top-right transform transition lg:hidden"
				>
					<div className="divide-y-2 divide-neutral-300 rounded-lg bg-silver ring-1 ring-black ring-opacity-5 dark:divide-neutral-800 dark:bg-black">
						<div className="px-5 pb-6 pt-5">
							<div className="flex items-center justify-between">
								<div>
									<Link
										href="/"
										aria-label="Home"
										className="h-auto w-auto select-none"
										title="home"
									>
										<Image
											src={'/assets/logo/logo.svg'}
											draggable={false}
											alt="Nexcent-logo"
											height={20}
											width={110}
											className="flex dark:hidden"
										/>
										<Image
											src={'/assets/logo/dark-logo.svg'}
											draggable={false}
											alt="Nexcent-logo"
											height={20}
											width={110}
											className="hidden dark:flex"
										/>
									</Link>
								</div>
								<div className="-mr-2">
									<Popover.Button
										className="active:stroke-secondary-900 bg-buttonbg relative z-10 inline-flex items-center rounded-lg hover:bg-gray-200 stroke-secondary p-2  dark:stroke-white  dark:hover:bg-black/50 [&:not(:focus-visible)]:focus:outline-none"
										aria-label="Toggle site navigation"
									>
										<span className="sr-only">Close menu</span>
										<ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
						</div>
						<div className="items-center space-y-6 px-5 py-6">
							<div className="flex flex-col space-y-4 text-center">
								{navLinksData.map(({ label }, index) => {
									return (
										<MobileNavLink className={'cursor-pointer'} key={index}>
											{label}
										</MobileNavLink>
									)
								})}
							</div>
							<div className="flex flex-1 items-center justify-center gap-3  lg:hidden">
								<Link href="#">
									<Button size="small" variant="tertiary">
										Login
									</Button>
								</Link>
								<Link href="#">
									<Button size="small">Sign up</Button>
								</Link>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}
