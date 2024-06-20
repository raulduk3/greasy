// src/components/PricingSection.tsx

'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { mediaQueries } from '@/styles/mediaQueries';

import { SectionContainer, Card } from '@/styles/components/PricingSectionStyles';

export const PricingSection: React.FC = () => {
    return (
        <SectionContainer>
            <Card>
                <h1>Premium Package</h1>
                <p>$2.00</p>
                <ul>
                    <li>Two-hundred premium GRE flashcards</li>
                    <li>Personalized sentences using gpt4</li>
                    <li>Sent to your email</li>
                    <li>Data recorded for future purchases</li>
                </ul>
                <Link href="/q/premium">Buy now!</Link>
            </Card>
            <Card>
                <h1>Basic Package</h1>
                <p>$1.00</p>
                <ul>
                    <li>One-hundred premium GRE flashcards</li>
                    <li>Personalized sentences using gpt-3.5</li>
                    <li>Sent to your email</li>
                    <li>Data recorded for future purchases</li>
                </ul>
                <Link href="/q/basic">Buy now!</Link>
            </Card>
            <Card>
                <h1>Free Demo</h1>
                <p>$0.00</p>
                <ul>
                    <li>Fifteen free GRE flashcards</li>
                    <li>Personalized sentences using gpt-3.5</li>
                    <li>Sent to your email</li>
                    <li>No data recorded</li>
                </ul>
                <Link href="/q/demo">Try for free!</Link>
            </Card>
        </SectionContainer>
    );
};