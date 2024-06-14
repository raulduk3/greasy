import type { Metadata } from "next";
import Link from "next/link"; // Import the 'Link' component from the appropriate library
import { Roboto } from 'next/font/google'

import StyledComponentsRegistry from "@/lib/registry";

import Header from "@/styles/layout/Header";
import Footer from "@/styles/layout/Footer";
import Body from "@/styles/layout/Body";

import Themer from "@/styles/theme/Themer";
import ThemeClient from "@/styles/theme/ThemeClient";

import '@/styles/global.css'; // Import the global styles from the appropriate file

export const metadata: Metadata = {
	title: "GREasy",
	description: "Personalized GRE flashcards directly to your inbox.",
	metadataBase: new URL("https://greasyvocab.com"),
	icons: [
		{ rel: "icon", href: "/favicon.ico", url: "/favicon.ico" },
	]
};

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={roboto.className}>
			<StyledComponentsRegistry>
				<ThemeClient>
					<Themer>
						{/* Header */}
						<Header>
							<Link href="/">
								<h1>GR<span>Easy</span></h1>
							</Link>
							<h4>Personalized GRE flashcards directly to your inbox 🎉</h4>
							<ul style={{
								display: 'flex',
								flexDirection: 'row',
								gap: '3vw',
								justifyContent: 'space-evenly',
								textAlign: 'center',
								listStyle: 'none',
								padding: 0,
								margin: '20px',
								textDecoration: 'underline',
							}}>
								<li><Link href="/about">About</Link></li>
								<li><Link href="/questionnaire">Generate</Link></li>
								<li><Link href="/contact">Contact Us</Link></li>
							</ul>
						</Header>

						{/* Main content */}
						<Body>
							{children}
						</Body>

						{/* Footer */}
						<Footer>
							<div>
								<Link href="/questionnaire">Generate</Link>
							</div>
							<div>
								<Link href="/data-privacy">Data Privacy</Link>
							</div>
							<div>
								<Link href="/terms-of-service">Terms of Service</Link>
							</div>
							<div>
								© 2024 GREasy
								|
								Created with love by ra
							</div>
						</Footer>
					</Themer>
				</ThemeClient>
			</StyledComponentsRegistry>
		</html>
	);
}
