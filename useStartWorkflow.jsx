import { useCallback } from 'react';
import { useData } from '@ellucian/experience-extension-utils';

const useStartWorkflow = (workflowId) => {
    const { authenticatedEthosFetch } = useData();
    const startWorkflow = useCallback(
        async (variables = {}) => {
            if (!workflowId) {
                console.error('No maestroWorkflowId found in card configuration');
                return false;
            }

            const payload = {
                id: workflowId,
                variables: {},
            };

            // Convert simple { key: value } into the required { key: { value: value } } format
            Object.entries(variables).forEach(([key, val]) => {
                payload.variables[key] = { value: val };
            });

            try {
                const response = await authenticatedEthosFetch('workflow-instances', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/vnd.hedtech.integration.v1+json',
                        'Content-Type': 'application/vnd.hedtech.integration.v1+json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok || response.status === 200 || response.status === 201) {
                    console.log('Workflow started successfully');
                    return true;
                } else {
                    console.error('Failed to start workflow', response.status);
                    return false;
                }
            } catch (error) {
                console.error('Error starting workflow:', error);
                return false;
            }
        },
        [workflowId, authenticatedEthosFetch]
    );

    return { startWorkflow, workflowId };
};

export default useStartWorkflow;