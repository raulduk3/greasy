'use client';

import DynamicForm, { DynamicFormProps } from "./DynamicForm";

const FriendsForm: React.FC<DynamicFormProps> = ({ onSubmit, length }) => {
    return (
        <DynamicForm
            title="Friends"
            length={length}
            description="Provide the names of your favorite friends. Try to pick at least the five most meaningful names!"
            placeholder="Friend's name here..."
            onSubmit={onSubmit}
        />
    );
};

export default FriendsForm;
