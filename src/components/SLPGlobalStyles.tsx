/**
 * Shared styles for Store Locator Plus React components.
 * Version: 2611.10.02
 */
import React from 'react';
import { SLP_BRAND_PALETTE } from '../SLPBrandPalette';
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
                    backgroundColor: SLP_BRAND_PALETTE.blush,
                    transition: 'background-color 0.3s ease',
                },
                '.MuiAccordionSummary-root.Mui-expanded': {
                    backgroundColor: `${SLP_BRAND_PALETTE.blush} !important`,
                },
                '.MuiAccordionSummary-root:not(.Mui-expanded)': {
                    backgroundColor: `${SLP_BRAND_PALETTE.blush} !important`,
                },
                '.MuiAccordionSummary-root:hover': {
                    backgroundColor: SLP_BRAND_PALETTE.blush,
                },
                '.MuiToolbar-root': {
                    minHeight: 'inherit',
                },
                '.MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within': {
                    outline: 'none !important',
                    boxShadow: 'none !important',
                },
                // Custom DataGrid poppers can omit the Paper surface used by MUI's default popper.
                '.MuiMenu-root .MuiPaper-root, .MuiDataGrid-menu .MuiPaper-root, .MuiDataGrid-menu:not(:has(.MuiPaper-root))': {
                    backgroundColor: '#ffffff',
                    border: '1px solid #cccccc',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                },
                // Ensure MUI Select dropdown arrow is properly styled without double icons
                '.MuiSelect-icon': {
                    right: '8px',
                    zIndex: 1,
                },
                '.MuiSelect-iconOpen': {
                    transform: 'rotate(180deg)',
                },
            }}
        />
    </>
);

export default SLPGlobalStyles;
