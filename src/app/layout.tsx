import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link"; // Import the 'Link' component from the appropriate library
import { Roboto } from 'next/font/google'

import StyledComponentsRegistry from "@/lib/registry";

import { Header, Title, Subtitle, NavList } from "@/styles/layout/Header";
import Footer from "@/styles/layout/Footer";
import Body from "@/styles/layout/Body";
import Themer from "@/styles/layout/Themer";

import ThemeClient from "@/styles/theme/ThemeClient";

import '@/styles/global.css'; // Import the global styles from the appropriate file
import { json } from "stream/consumers";
import Head from "next/head";

export const metadata: Metadata = {
	title: "GREasy",
	description: "Personalized GRE flashcards directly to your inbox.",
	keywords: [
		"GRE",
		"GRE vocabulary",
		"GRE flashcards",
		"GRE flashcard app",
		"GRE study tools",
		"GRE prep",
		"GRE preparation",
		"GRE vocab builder",
		"GRE vocab flashcards",
		"GRE word list",
		"GRE word bank",
		"vocabulary flashcards",
		"GRE practice",
		"GRE exam prep",
		"online GRE study",
		"GRE app",
		"GREasy",
		"digital flashcards",
		"vocabulary builder",
		"GRE word study",
		"GRE verbal practice",
		"GRE study app",
		"email GRE flashcards",
		"GRE vocab newsletter",
		"GREasy vocab",
		"greasy GRE vocab",
		"GRE flashcard subscription",
		"GRE word of the day",
		"GRE flashcard review",
		"GRE learning",
		"GRE test preparation",
		"GRE word practice",
		"GRE vocab improvement"
	],
	openGraph: {
		siteName: "GREasy",
		title: "GREasy",
		description: "Personalized GRE flashcards directly to your inbox.",
		type: "website",
		locale: "en_US",
		url: "https://greasyvocab.com",
		images: [
			{
				url: "/opengraph-image.png",
				width: 800,
				height: 600,
				alt: "GREasy - Personalized GRE flashcards",
			}
		]
	},
	metadataBase: new URL("https://greasyvocab.com"),
	icons: [
		{ rel: "icon", href: "/favicon.ico", url: "/favicon.ico" },
	]
};

const JSONLD = 	{
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"name": "GREasy",
	"operatingSystem": "All",
	"applicationCategory": "EducationApplication",
	"description": "Personalized GRE flashcards directly to your inbox.",
	"url": "https://greasyvocab.com",
	"creator": {
		"@type": "Organization",
		"name": "GREasy"
	},
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "4.8",
		"reviewCount": "24"
	},
	"offers": {
		"@type": "Offer",
		"price": "0",
		"priceCurrency": "USD"
	},		
	"screenshot": "https://greasyvocab.com/opengraph-image.png",
	"softwareVersion": "1.0",
	"downloadUrl": "https://greasyvocab.com/download",
	"featureList": [
		"Personalized GRE flashcards",
		"Daily GRE vocabulary practice",
		"Email flashcard subscription"
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
						{/* For SEO */}
						<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify}}>
						</script>
						<h1 style={{
							display: 'none',
						}}>GREasy</h1>
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
							<Analytics />
						</Body>

						{/* Footer */}
						<Footer>
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
