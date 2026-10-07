import React from 'react';
import { type ButtonProps } from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';
export type SLPButtonStyle = 'full' | 'icon';
export type SLPStandardButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon' | 'style' | 'sx' | 'variant'> & {
    /** Full shows the icon and label; icon shows only the icon. */
    style?: SLPButtonStyle;
    label: string;
    icon: React.ReactElement;
    tooltip?: string;
    color?: ButtonProps['color'];
    sx?: SxProps<Theme>;
};
/** A consistently styled contained action button for Store Locator Plus interfaces. */
export declare const SLPStandardButton: React.FC<SLPStandardButtonProps>;
export default SLPStandardButton;
//# sourceMappingURL=SLPStandardButton.d.ts.map