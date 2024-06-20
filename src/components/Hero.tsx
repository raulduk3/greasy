import { HeroContainer, HeroDiv, HeroHeader, HeroP } from "@/styles/components/HeroStyles";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <HeroContainer>
            <HeroDiv>
                <HeroHeader>Generate bundles of flashcards with tailored sentences.</HeroHeader>
                <HeroP>Using advanced LLM technology, we transform the personal data you provide into up to one hundred customized flashcards at your chosen difficulty level. Complete our survey and receive a formatted PDF of flashcards via email. <Link href="/about">Plus, 50% of all purchases go directly to support Palestine.</Link></HeroP>            
            </HeroDiv>
            <Image src="/hero.jpeg" alt="Engage with Vocabulary" width={0}
                height={0}
                sizes="(max-width: 768px) 100vh, (max-width: 1200px) 100vw"
                style={{ width: '100%', height: '100%' }}>
            </Image>
        </HeroContainer>
    );
}
