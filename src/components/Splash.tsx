import Image from "next/image";
import Link from "next/link";

import { SplashContainer, Column, Headline, DetailText, CTAButton } from "@/styles/pages/IndexStyles";

export default function Splash() {
    return (
        <SplashContainer>
            <Column>
                <Image src="/gre_prep.jpeg" alt="Engage with Vocabulary" width={0} height={0} sizes="(max-width: 768px) 100%" style={{
                    width: '100%',
                    height: 'auto',
                }} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2vw',
                    margin: '10px',
                    justifyContent: 'start',
                    alignSelf: 'end'
                }}>
                    <Headline style={{ margin: 0 }}>Personalize your GRE Learning Experiences!</Headline>
                    <p>Get GREasy today!</p>
                    <Link style={{ 
                        alignSelf: 'end',
                    }} href="/review">Read and leave a review here.</Link>
                </div>
            </Column>
            <Column>
                <h2>Why GREasy?</h2>
                <ul style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2vw',
                    listStyle: 'disc',
                    listStylePosition: 'inside',
                    padding: '0',
                    margin: '10px'
                }}>
                    <li>One hundred flashcards per bundle.</li>
                    <li>Increased word retention from personal connection</li>
                    <li>Customizable formatting</li>
                    <li>Join now and recieve bonues later</li>
                </ul>
                <DetailText style={{ margin: '10px' }}>Customize your learning experience with personalized GRE flashcards sent directly to your inbox.</DetailText>
                <Link href="/questionnaire" passHref>
                    <CTAButton>Take the questionnaire!</CTAButton>
                </Link>
            </Column>
        </SplashContainer>
    );
}