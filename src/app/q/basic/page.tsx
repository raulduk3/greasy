import GenerateFlashcardQuestionnaire from '@/components/GenerateFlashcardQuestionnaire';

import PayForm from '@/components/forms/PayForm';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';
import { DynamicFormProps } from '@/components/forms/DynamicForm';

const forms: React.ComponentType<any>[] = [PayForm, ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Page() {
	return (
		<>
			<GenerateFlashcardQuestionnaire cost={'1'} name='Basic package' input_length={5} generation_size={100} formComponents={forms} />
		</>
	);
}
