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

// // src/page/index.jsx
// import React from 'react';
// import PropTypes from 'prop-types';

// const Debug2Page = (props) => {

//     const fetchData = async () => {
//         try {
//             const { authenticatedEthosFetch } = props.data;

//             const payload = {
//                 'processDefinitionId': 'b4a46a27-a078-4aa4-ae97-9445fae393de',
//                 'name': 'Experience Page Trigger',
//                 'variables': {
//                     '_requestedFor': '6bbba8fe-5c7a-4133-b878-bb7bc07ca3ee'
//                 }
//             };

//             const response = await authenticatedEthosFetch('workflow-instances', {
//                 'method': 'POST',
//                 'headers': {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     // This header is often the "magic key" for Ethos POSTs
//                     'x-hedtech-media-type': 'application/vnd.hedtech.integration.v1+json'
//                 },
//                 'body': JSON.stringify(payload)
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Server side error:', errorData);
//                 return;
//             }

//             const data = await response.json();
//             console.log('Success!', data);
//             alert('Workflow Started!');

//         } catch (err) {
//             console.error('Trigger Failed:', err);
//         }
//     };

//     return (
//         <div>
//             <h1>Debug2 Page Loaded</h1>
//             <button onClick={fetchData}>Test Ethos</button>
//         </div>
//     );
// };

// Debug2Page.propTypes = {
//     data: PropTypes.shape({
//         authenticatedEthosFetch: PropTypes.func.isRequired,
//         getExtensionJwt: PropTypes.func,
//         getEthosQuery: PropTypes.func
//     }).isRequired
// };

// export default Debug2Page;