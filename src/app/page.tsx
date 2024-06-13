import Link from "next/link";

import { SplashContainer, Column, SplashImage, Headline, DetailText, CTAButton, Hero } from "@/styles/SplashStyles";

import SlideshowQuestionnaire from '@/components/SlideshowQuestionnaire';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';
import Image from "next/image";
import styled from "styled-components";

const forms = [ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Home() {
    return (
        <>
            <Hero>
                <div>
                    <h1>Generate bundles of flashcards with tailored sentences.</h1>
                    <p>Using LLM technology, we take personal data you provide and generate up to one hundred flashcards at your chosen difficulty level.</p>
                    <Link href="/questionnaire" passHref>
                        <CTAButton>Start!</CTAButton>
                    </Link>
                    <p>After you finish our survey, check your email for the formatted PDF of flashcards.</p>
                </div>
                <Image src="/hero_01.jpeg" alt="Engage with Vocabulary" width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}>
                </Image>
            </Hero>
            <SplashContainer>
                <Column style={{
                    width: '40%',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Image src="/gre_prep.jpeg" alt="Engage with Vocabulary" width={0} height={0} sizes="25vw" style={{
                        width: '50%',
                        height: 'auto',
                    }} />
                    <div style={{
                        padding: '2vmin',
                        textAlign: 'left',
                    }}>
                        <Headline style={{margin: 0}}>Personalize your GRE Learning Experiences!</Headline>
                        <p>Get GREasy today!</p>
                        <Link href="/review">Read and leave a review here.</Link>
                    </div>
                </Column>
                <Column>
                    <h2>Why GREasy?</h2>
                    <DetailText>Customize your learning experience with personalized GRE flashcards sent directly to your inbox.</DetailText>
                    <Link href="/questionnaire" passHref>
                        <CTAButton>Take the questionnaire!</CTAButton>
                    </Link>
                </Column>
            </SplashContainer>
        </>
    );
}
