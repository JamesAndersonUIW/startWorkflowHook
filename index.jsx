import React from 'react';
import useStartWorkflow from './useStartWorkflow'; // your file path

function Debug2Page() {
    const { startWorkflow } = useStartWorkflow('b4a46a27-a078-4aa4-ae97-9445fae393de');

    const handleClick = async () => {
        // Minimal: start with NO variables
        const success = await startWorkflow(); 

        // Or with some variables
        // const success = await startWorkflow({
        //     studentId: '12345',
        //     reason: 'Testing minimal hook',
        //     term: '2025/FA'
        // });

        if (success) {
            alert('Workflow started!');
        } else {
            alert('Failed to start workflow');
        }
    };

    return (
        <button onClick={handleClick}>
            Start Workflow
        </button>
    );
}

export default Debug2Page;
