import Image from "next/image";
import Link from "next/link";

import { SplashContainer, Column, Headline, DetailText, CTAButton } from "@/styles/pages/IndexStyles";

export default function Splash() {
    return (
        <SplashContainer>
            <Column>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1vh',
                    padding: '2vh 1vw',
                    margin: '10px',
                    justifyContent: 'sart',
                }}>
                    <Image src="/gre_prep.jpeg" alt="Engage with Vocabulary" width={0} height={0} sizes="(max-width: 768px) 0%, (max-width: 1200px) 25vw" style={{
                        width: '100%',
                        height: 'auto',
                    }} />
                    <Headline style={{ margin: 0 }}>Personalize your GRE Learning Experiences!</Headline>
                    <p>Get GREasy today!</p>
                    <Link style={{ 
                        alignSelf: 'center',
                    }} href="/review">Read and leave reviews here.</Link>
                </div>
            </Column>
            <Column>
                <h2>Why GREasy?</h2>
                <ul style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1vh',
                    listStyle: 'none',
                    listStylePosition: 'inside',
                    padding: '0',
                    margin: '10px'
                }}>
                    <li> - One hundred flashcards per bundle.</li>
                    <li> - Increased word retention from personal connection</li>
                    <li> - Customizable formatting</li>
                    <li> - Join now and recieve bonues later</li>
                </ul>
                <DetailText style={{ margin: '10px' }}>Customize your learning experience with personalized GRE flashcards sent directly to your inbox.</DetailText>
                <Link href="/questionnaire" passHref>
                    <CTAButton>Take the questionnaire!</CTAButton>
                </Link>
            </Column>
        </SplashContainer>
    );
}