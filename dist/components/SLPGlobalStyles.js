import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
/**
 * Global styles for Store Locator Plus custom components.
 * Uses Material UI CssBaseline to reset CSS.
 */
const SLPGlobalStyles = () => (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: {
                // Let MUI's notched outline own the border instead of WordPress's native input styles.
                '.MuiOutlinedInput-root input.MuiOutlinedInput-input': {
                    border: 0,
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                    minHeight: 0,
                    padding: '16.5px 14px',
                },
                '.MuiOutlinedInput-root input.MuiOutlinedInput-input:focus': {
                    boxShadow: 'none',
                    outline: 0,
                },
                '.MuiOutlinedInput-root.MuiInputBase-sizeSmall input.MuiOutlinedInput-input': {
                    padding: '8.5px 14px',
                },
                '.MuiOutlinedInput-root.MuiInputBase-adornedStart input.MuiOutlinedInput-input': {
                    paddingLeft: 0,
                },
                '.MuiOutlinedInput-root.MuiInputBase-adornedEnd input.MuiOutlinedInput-input': {
                    paddingRight: 0,
                },
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
            } })] }));
export default SLPGlobalStyles;
//# sourceMappingURL=SLPGlobalStyles.js.map