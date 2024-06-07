import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link"; // Import the 'Link' component from the appropriate library

import './global.css';

export const metadata: Metadata = {
	title: "Greasy",
	description: "Personalized GRE flashcards directly to your inbox.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					{/* Header */}
					<Header>
						<Link href="/">
							<h1>Greasy</h1>
						</Link>
					</Header>
					
					{children}
					
					{/* Footer */}
					<Footer>
						<a href="/data-privacy">Data Privacy</a> | <a href="/terms-of-service">Terms of Service</a>
					</Footer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
