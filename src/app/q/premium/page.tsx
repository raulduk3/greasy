import GenerateFlashcardQuestionnaire from '@/components/GenerateFlashcardQuestionnaire';

import PayForm from '@/components/forms/PayForm';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';

const forms: React.ComponentType<any>[] = [ ContactForm, FriendsForm, LocationForm, ActivitiesForm, PayForm];

export default function Page() {
	return (
		<>
			<GenerateFlashcardQuestionnaire cost={'2.00'} name='One-hundred GRE flashcards' input_length={8} generation_size={200} formComponents={forms} />
		</>
	);
}
