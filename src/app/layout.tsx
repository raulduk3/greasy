import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link"; // Import the 'Link' component from the appropriate library
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils';

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

const JSONLD = {
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
	"downloadUrl": "https://greasyvocab.com/",
	"featureList": [
		"Personalized GRE flashcards",
	]
};

const inter = Inter({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body className={cn("flex flex-col min-h-screen max-w-full overflow-x-hidden font-sans bg-slate-700 text-white", inter.className)}>
				<header className="flex flex-col items-center text-white">
					<Link href="/" className="text-6xl mt-5 font-bold no-underline">
						GR<span className="text-green-500">Easy</span>
					</Link>
					<h2 className="text-l text-center mx-4 my-2">Personalized GRE flashcards directly to your inbox 🎉</h2>
					<nav className="flex justify-center space-x-4 mt-2 mb-4">
						<Link href="/about" className="underline">
							About
						</Link>
						<Link href="/" className="underline">
							Home
						</Link>
						<Link href="/contact" className="underline">
							Contact
						</Link>
					</nav>
					<div className="w-full bg-red-600 text-white text-center text-sm py-1">
						<span>Genocide in Palestine is ongoing. Learn more and support: </span>
						<Link href="https://www.un.org/unispal/" className="underline" target="_blank">UNISPAL</Link>
						<span> | </span>
						<Link href="https://www.amnesty.org/en/latest/news/" className="underline" target="_blank">Amnesty International</Link>
						<span> | </span>
						<Link href="https://www.hrw.org/world-report/2024/country-chapters/israel-and-palestine" className="underline" target="_blank">Human Rights Watch</Link>
					</div>
				</header>
				<main className="flex flex-col flex-1 p-6 items-center justify-center w-full">
					{children}
					<Analytics />
					<script key={'ldjson-script'} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
				</main>
				<footer className="flex flex-col items-center p-4 mt-4 gap-2 text-sm">
					<div className="flex space-x-4">
						<Link href="/terms-of-service" className="no-underline">Terms of Service</Link>
					</div>
					<div className="flex space-x-4">
						<Link href="/terms-of-service" className="no-underline">Privacy</Link>
					</div>
					<div className="text-center">
						© 2024 GREasy | Created with love by ra
					</div>
				</footer>
			</body>
		</html>
	);
}