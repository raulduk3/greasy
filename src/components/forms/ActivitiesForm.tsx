'use client';

import DynamicForm from './DynamicForm';

const ActivitiesForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    return (
        <DynamicForm
            title="Activities"
            description="Provide the names of your favorite activities. Sports, hobbies, anything you enjoy!"
            placeholder="i.e. Biking"
            onSubmit={onSubmit}
        />
    );
};

export default ActivitiesForm;
