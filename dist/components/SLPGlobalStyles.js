import { jsx as _jsx } from "react/jsx-runtime";
import GlobalStyles from '@mui/material/GlobalStyles';
/**
 * Global styles specific to Custom Accordion components.
 */
const SLPGlobalStyles = () => (_jsx(GlobalStyles, { styles: {
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
    } }));
export default SLPGlobalStyles;
//# sourceMappingURL=SLPGlobalStyles.js.map