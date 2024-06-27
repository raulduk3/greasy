import Link from "next/link";

import Hero from "@/components/Hero";
import Banner from "@/components/Banner";

import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';
import { PricingSection } from "@/components/PricingSection";

const forms = [ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Home() {
    return (
        <> 
            <Hero></Hero>
            <Banner></Banner>
            <PricingSection></PricingSection>
        </>
    );
}
