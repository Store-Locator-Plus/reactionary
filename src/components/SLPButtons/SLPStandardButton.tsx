/**
 * Standard Store Locator Plus action button.
 * Version: 2610.20.02
 */
import React from 'react';
import { SLP_BRAND_PALETTE } from '../../SLPBrandPalette';
import Button, { type ButtonProps } from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { darken, type SxProps, type Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export type SLPButtonStyle = 'full' | 'icon';

export type SLPStandardButtonProps = Omit<
    ButtonProps,
    'endIcon' | 'startIcon' | 'style' | 'sx' | 'variant'
> & {
    /** Full shows the icon and label; icon shows only the icon. */
    style?: SLPButtonStyle;
    label: string;
    icon: React.ReactElement;
    tooltip?: string;
    color?: ButtonProps['color'];
    sx?: SxProps<Theme>;
};

const secondaryContainedSx: SystemStyleObject<Theme> = {
    color: '#000',
    backgroundColor: SLP_BRAND_PALETTE.gold,
    '&:hover': {
        backgroundColor: darken(SLP_BRAND_PALETTE.gold, 0.2),
    },
};

/** A consistently styled contained action button for Store Locator Plus interfaces. */
export const SLPStandardButton: React.FC<SLPStandardButtonProps> = ({
    style = 'full',
    label,
    icon,
    tooltip,
    color = 'primary',
    sx,
    ...buttonProps
}) => {
    const iconOnly = style === 'icon';
    type SxEntry = boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>);
    const callerSx: SxEntry[] = Array.isArray(sx)
        ? (sx as SxEntry[])
        : sx
            ? [sx as SxEntry]
            : [];
    const buttonSx: SxProps<Theme> = [
        {
            whiteSpace: 'nowrap',
            // Preserve button contrast when WordPress applies anchor interaction colors.
            '&&:hover, &&:focus, &&:active': {
                color: color === 'secondary' ? '#000' : color === 'inherit' ? 'inherit' : 'var(--variant-containedColor)',
            },
        },
        ...(color === 'secondary' ? [secondaryContainedSx] : []),
        ...callerSx,
    ];

    const button = (
        <Button
            {...buttonProps}
            aria-label={iconOnly ? (buttonProps['aria-label'] ?? label) : buttonProps['aria-label']}
            color={color}
            startIcon={!iconOnly ? icon : undefined}
            variant="contained"
            sx={buttonSx}
        >
            {iconOnly ? icon : label}
        </Button>
    );

    if (!iconOnly) {
        return button;
    }

    return (
        <Tooltip title={tooltip ?? label}>
            <span>{button}</span>
        </Tooltip>
    );
};

export default SLPStandardButton;
