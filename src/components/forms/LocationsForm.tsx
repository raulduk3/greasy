'use client';

import DynamicForm, { DynamicFormProps } from "./DynamicForm";

const LocationForm: React.FC<DynamicFormProps> = ({ onSubmit, length }) => {
    return (
        <DynamicForm
            title="Locations"
            description="Provide the names of your favorite locations. Countries, states, cities, towns. Anywhere you can imagine!"
            placeholder="Location"
            length={length}
            onSubmit={onSubmit}
        />
    );
};

export default LocationForm;
