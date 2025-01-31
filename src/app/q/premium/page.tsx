import GenerateFlashcardQuestionnaire from '@/components/forms/GenerateFlashcardQuestionnaire';

import PayForm from '@/components/forms/PayForm';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';

const forms: React.ComponentType<any>[] = [ ContactForm, FriendsForm, LocationForm, ActivitiesForm, PayForm];

export default function Page() {
	return (
		<>
			<GenerateFlashcardQuestionnaire reusable={true} cost={'2.00'} name='Two-hundred GRE flashcards' input_length={6} generation_size={200} formComponents={forms} />
		</>
	);
}
