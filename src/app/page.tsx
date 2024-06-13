import Link from "next/link";

import { SplashContainer, Column, SplashImage, Headline, DetailText, CTAButton } from "@/styles/SplashStyles";

import SlideshowQuestionnaire from '@/components/SlideshowQuestionnaire';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';

const forms = [ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Home() {
	return (
		<>
			<SplashContainer>
                <Column>
                    <SplashImage src="/splash-image.jpg" alt="Engage with Vocabulary" />
                    <Headline>Master the GRE Vocabulary!</Headline>
                </Column>
                <Column>
                    <h2>Why GREasy?</h2>
                    <DetailText>Customize your learning experience with personalized GRE flashcards sent directly to your inbox.</DetailText>
                    <Link href="/questionnaire" passHref>
                        <CTAButton>Get Started</CTAButton>
                    </Link>
                </Column>
            </SplashContainer>
		</>
	);
}
