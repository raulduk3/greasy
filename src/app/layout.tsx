import type { Metadata } from "next";
import Link from "next/link"; // Import the 'Link' component from the appropriate library
import { Roboto } from 'next/font/google'

import StyledComponentsRegistry from "@/lib/registry";

import { Header, Title, Subtitle, NavList } from "@/styles/layout/Header";
import Footer from "@/styles/layout/Footer";
import Body from "@/styles/layout/Body";
import Themer from "@/styles/layout/Themer";

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
								<Title>GR<span>Easy</span></Title>
							</Link>
							<Subtitle>Personalized GRE flashcards directly to your inbox 🎉</Subtitle>
							<NavList>
								<li><Link href="/about">About</Link></li>
								<li><Link href="/">Home</Link></li>
								<li><Link href="/contact">Contact</Link></li>
							</NavList>
						</Header>

						{/* Main content */}
						<Body>
							{children}
						</Body>

						{/* Footer */}
						<Footer>
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
