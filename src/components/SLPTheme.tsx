import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

/**
 * SLP Color Palette Configuration
 * Secondary color matches SLP brand color: #ED6D03
 */
const slpThemeOptions: ThemeOptions = {
    palette: {
        secondary: {
            main: '#ED6D03',
        },
    },
};

export const slpTheme = createTheme(slpThemeOptions);

export type SLPThemeProviderProps = {
    children: React.ReactNode;
};

/**
 * SLP Theme Provider
 * Wraps the application with MUI ThemeProvider configured with SLP color palette.
 * This ensures components using color="secondary" use the SLP brand color.
 */
export const SLPThemeProvider: React.FC<SLPThemeProviderProps> = ({ children }) => (
    <ThemeProvider theme={slpTheme}>{children}</ThemeProvider>
);

export default SLPThemeProvider;
