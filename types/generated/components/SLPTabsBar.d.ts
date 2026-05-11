import React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
/**
 * Standard tab styling constant for SLP admin pages.
 */
export declare const SLP_TAB_SX: {
    readonly '& .MuiTab-root': {
        readonly textTransform: "none";
        readonly fontWeight: "medium";
        readonly fontSize: "1rem";
        readonly minWidth: 100;
    };
};
/**
 * Standard tab bar container for SLP admin pages.
 */
type SLPTabsBarProps = {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
    id?: string;
    className?: string;
};
export declare const SLPTabsBar: React.FC<SLPTabsBarProps>;
export {};
//# sourceMappingURL=SLPTabsBar.d.ts.map