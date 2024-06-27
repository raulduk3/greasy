import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link"; // Import the 'Link' component from the appropriate library
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils/utils';

import '@/styles/global.css'; // Import the global styles from the appropriate file
import Header from "@/components/Header";

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
				<Header></Header>
				<main className="flex flex-col grow flex-1 items-center mt-[5rem] pb-24 gap-24 justify-start w-full h-full">
					{children}
					<Analytics />
					<script key={'ldjson-script'} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
				</main>
				<footer className="flex flex-col text-black  bg-white items-center p-6 gap-2 text-sm">
					<nav className="flex justify-center space-x-4 mb-2">
						<Link href="/donation" className="underline">
							Donation
						</Link>
						<Link href="/feedback" className="underline">
							Feedback
						</Link>
					</nav>
					<div className="flex space-x-4">
						<Link href="/terms-of-service" className="">Terms of Service</Link>
					</div>
					<div className="flex space-x-4">
						<Link href="/privacy" className="">Privacy</Link>
					</div>
					<div className="text-center">
						© 2024 GREasy | Created with love by ra
					</div>
				</footer>
			</body>
		</html>
	);
}