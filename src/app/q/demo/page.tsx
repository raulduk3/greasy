import GenerateFlashcardQuestionnaire from '@/components/GenerateFlashcardQuestionnaire';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';
import { Suspense } from 'react';

const forms: React.ComponentType<any>[] = [ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Page() {
	return (
		<>
			<GenerateFlashcardQuestionnaire reusable={true} cost='0' name='Sample GRE flashcards ' input_length={3} generation_size={15} formComponents={forms} />
		</>
	);
}
