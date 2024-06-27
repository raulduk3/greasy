import GenerateFlashcardQuestionnaire from '@/components/forms/GenerateFlashcardQuestionnaire';

import PayForm from '@/components/forms/PayForm';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';

const forms: React.ComponentType<any>[] = [ContactForm, FriendsForm, LocationForm, ActivitiesForm, PayForm];

export default function Page() {
	return (
		<>
			<GenerateFlashcardQuestionnaire cost={'1.50'} reusable={true} name='One-hundred GRE flashcards' input_length={4} generation_size={100} formComponents={forms} />
		</>
	);
}
