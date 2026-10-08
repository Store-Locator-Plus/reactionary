import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider, createTheme } from '@mui/material/styles';
/**
 * SLP Color Palette Configuration
 * Secondary color matches SLP brand color: #ED6D03
 */
const slpThemeOptions = {
    palette: {
        secondary: {
            main: '#ED6D03',
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