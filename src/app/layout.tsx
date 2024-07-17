import './globals.css'
import { Inter } from "next/font/google";
import LocomotiveScroll  from '@/locomotive-scroll'
import StandardLayout from '@/layouts/standard-layout'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en"  className="light min-h-screen" style={{ colorScheme: 'light' }}>
			<body className={inter.className}>
				<LocomotiveScroll />
				<StandardLayout>{children}</StandardLayout>
			</body>
		</html>
	)
}