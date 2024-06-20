import SlideshowQuestionnaire from '@/components/SlideshowQuestionnaire';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';
import { Suspense } from 'react';

const forms = [ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Page() {
	return (
		<>
			<p style={{alignSelf: 'center', marginBottom: 0, marginTop: '5vh', fontWeight: 'bold'}}>DEMO VERSION</p>
			<SlideshowQuestionnaire length={3} formComponents={forms} />
		</>
	);
}
