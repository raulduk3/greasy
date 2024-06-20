import SlideshowQuestionnaire from '@/components/SlideshowQuestionnaire';

import PayForm from '@/components/forms/PayForm';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';

const forms = [PayForm, ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Page() {
	return (
		<>
			<SlideshowQuestionnaire length={5} formComponents={forms} />
		</>
	);
}
