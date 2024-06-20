'use client';

import DynamicForm, { DynamicFormProps } from "./DynamicForm";

const ActivitiesForm: React.FC<DynamicFormProps> = ({ onSubmit, length }) => {
    return (
        <DynamicForm
            title="Activities"
            description="Provide the names of your favorite activities and things. Sports, hobbies, items, ideas, or anything you enjoy!"
            placeholder="Anything here..."
            length={length}
            onSubmit={onSubmit}
        />
    );
};

export default ActivitiesForm;
