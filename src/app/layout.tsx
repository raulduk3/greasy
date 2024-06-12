import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import styled from "styled-components";

import Header from "@/styles/layout/Header";
import Footer from "@/styles/layout/Footer";
import Body from "@/styles/layout/Body";

import Themer from "@/styles/theme/Themer";
import ThemeClient from "../styles/theme/ThemeClient";

import Link from "next/link"; // Import the 'Link' component from the appropriate library

import '@/styles/global.css'; // Import the global styles from the appropriate file

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
					<Themer>
							{/* Header */}
							<Header>
								<Link href="/">
									<h1>GR<span>Easy</span></h1>
								</Link>
								<h4>Personalized GRE flashcards directly to your inbox 🎉</h4>
							</Header>
							
							{/* Main content */}
							<Body>
								{children}
							</Body>

							{/* Footer */}
							<Footer>
								<div>
									<Link href="/questionaire">Generate</Link> 
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
