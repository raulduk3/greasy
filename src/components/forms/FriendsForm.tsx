'use client';

import DynamicForm from './DynamicForm';

const FriendsForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    return (
        <DynamicForm
            title="Friends"
            description="Provide the names of your favorite friends. Try to pick at least the five most meaningful names!"
            placeholder="i.e. Jane Doe"
            onSubmit={onSubmit}
        />
    );
};

export default FriendsForm;
