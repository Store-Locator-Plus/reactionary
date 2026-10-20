import { jsx as _jsx } from "react/jsx-runtime";
import { SLP_BRAND_PALETTE } from '../SLPBrandPalette';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
/**
 * SLP Color Palette Configuration
 * Blue primary actions, gold secondary actions, and supporting brand colors.
 */
const slpThemeOptions = {
    palette: {
        primary: {
            main: SLP_BRAND_PALETTE.blue,
        },
        secondary: {
            main: SLP_BRAND_PALETTE.gold,
            contrastText: '#000',
        },
        error: {
            main: SLP_BRAND_PALETTE.red,
            light: SLP_BRAND_PALETTE.blush,
        },
        warning: {
            main: SLP_BRAND_PALETTE.gold,
        },
        success: {
            main: green[800],
            light: SLP_BRAND_PALETTE.mint,
        },
    },
};
export const slpTheme = createTheme(slpThemeOptions);
/**
 * SLP Theme Provider
 * Wraps the application with MUI ThemeProvider configured with SLP color palette.
 * This ensures components using color="secondary" use the SLP brand color.
 */
export const SLPThemeProvider = ({ children }) => (_jsx(ThemeProvider, { theme: slpTheme, children: children }));
export default SLPThemeProvider;
//# sourceMappingURL=SLPTheme.js.map