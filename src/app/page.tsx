import styles from "./page.module.css";
import SlideshowQuestionnaire from '@/components/SlideshowQuestionnaire';
import ContactForm from '@/components/forms/ContactForm';
import FriendsForm from '@/components/forms/FriendsForm';
import LocationForm from '@/components/forms/LocationsForm';
import ActivitiesForm from '@/components/forms/ActivitiesForm';

const forms = [ContactForm, FriendsForm, LocationForm, ActivitiesForm];

export default function Home() {
	return (
		<>
			<SlideshowQuestionnaire formComponents={forms} />
		</>
	);
}
