import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import styled from "styled-components";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Body from "./layout/Body";

import Link from "next/link"; // Import the 'Link' component from the appropriate library

import '@/styles/global.css'; // Import the global styles from the appropriate file
import ThemeClient from "./ThemeClient";

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
			<StyledComponentsRegistry>
				<ThemeClient>
					<Body>
							{/* Header */}
							<Header>
								<Link href="/">
									<h1>Gr<span>easy</span></h1>
								</Link>
								<h4>Personalized GRE flashcards directly to your inbox 🎉</h4>
							</Header>
							
							{/* Main content */}
							{children}

							{/* Footer */}
							<Footer>
								<a href="/data-privacy">Data Privacy</a> 
								<a href="/terms-of-service">Terms of Service</a>
							</Footer>
					</Body>
				</ThemeClient>
			</StyledComponentsRegistry>
		</html>
	);
}
