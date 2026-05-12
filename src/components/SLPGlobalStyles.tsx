import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

/**
 * Global styles specific to Custom Accordion components.
 */
const SLPGlobalStyles: React.FC = () => (
    <GlobalStyles
        styles={{
            '.MuiAccordionSummary-root': {
                backgroundColor: 'lightgray',
                transition: 'background-color 0.3s ease',
            },
            '.MuiAccordionSummary-root.Mui-expanded': {
                backgroundColor: 'lightgray !important',
            },
            '.MuiAccordionSummary-root:not(.Mui-expanded)': {
                backgroundColor: 'lightgray !important',
            },
            '.MuiAccordionSummary-root:hover': {
                backgroundColor: 'gray',
            },
            '.MuiToolbar-root': {
                minHeight: 'inherit',
            }
        }}
    />
);

export default SLPGlobalStyles;