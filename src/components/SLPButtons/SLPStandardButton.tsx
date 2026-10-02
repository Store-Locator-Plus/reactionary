import React from 'react';
import Button, { type ButtonProps } from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import type { SxProps, Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export type SLPButtonStyle = 'full' | 'icon';

export type SLPStandardButtonProps = Omit<
    ButtonProps,
    'children' | 'color' | 'endIcon' | 'startIcon' | 'style' | 'sx' | 'variant'
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
    color: '#fff',
    backgroundColor: '#ed6c02',
    '&:hover': {
        backgroundColor: '#e65100',
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
        { whiteSpace: 'nowrap' },
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
