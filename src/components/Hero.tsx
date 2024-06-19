import { HeroContainer, HeroDiv, HeroHeader, HeroP } from "@/styles/components/HeroStyles";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <HeroContainer>
            <HeroDiv>
                <HeroHeader>Generate bundles of flashcards with tailored sentences.</HeroHeader>
                <HeroP>Using LLM technology, we take personal data you provide and generate up to one hundred flashcards at your chosen difficulty level.</HeroP>
                <Link href="/questionnaire" passHref>
                    Start!
                </Link>
                <HeroP>After you finish our survey, check your email for the formatted PDF of flashcards.</HeroP>
            </HeroDiv>
            <Image src="/hero.jpeg" alt="Engage with Vocabulary" width={0}
                height={0}
                sizes="(max-width: 768px) 100vh, (max-width: 1200px) 100vw"
                style={{ width: '100%', height: '100%' }}>
            </Image>
        </HeroContainer>
    );
}
