import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * Standard tab styling constant for SLP admin pages.
 */
export const SLP_TAB_SX = {
    '& .MuiTab-root': {
        textTransform: 'none' as const,
        fontWeight: 'medium' as const,
        fontSize: '1rem',
        minWidth: 100,
    },
} as const;

/**
 * Standard tab bar container for SLP admin pages.
 */
type SLPTabsBarProps = {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
    id?: string;
    className?: string;
};

export const SLPTabsBar: React.FC<SLPTabsBarProps> = ({ children, sx = {}, id, className }) => (
    <Box id={id} className={className} sx={{ borderBottom: 1, borderColor: 'divider', px: 3, bgcolor: 'background.paper', ...sx }}>
        {children}
    </Box>
);
