'use client';

import DynamicForm from './DynamicForm';

const LocationForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    return (
        <DynamicForm
            title="Locations"
            description="Provide the names of your favorite locations. Countries, states, cities, towns. Anywhere you can imagine!"
            placeholder="i.e. Mars"
            onSubmit={onSubmit}
        />
    );
};

export default LocationForm;
