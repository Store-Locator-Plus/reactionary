import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

/**
 * Global styles for Store Locator Plus custom components.
 * Uses Material UI CssBaseline to reset CSS.
 */
const SLPGlobalStyles: React.FC = () => (
    <>
        <CssBaseline />
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
                },
                '.MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within': {
                    outline: 'none !important',
                    boxShadow: 'none !important',
                },
                '.MuiMenu-root .MuiPaper-root': {
                    backgroundColor: '#ffffff',
                    border: '1px solid #cccccc',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                },
            }}
        />
    </>
);

export default SLPGlobalStyles;
