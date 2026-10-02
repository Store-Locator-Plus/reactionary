import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SLPStandardButton, { type SLPStandardButtonProps } from './SLPStandardButton';

export type SLPDeleteButtonProps = Omit<SLPStandardButtonProps, 'color' | 'icon' | 'label'> & {
    color?: SLPStandardButtonProps['color'];
};

const SLPDeleteButton: React.FC<SLPDeleteButtonProps> = ({ color = 'error', ...props }) => (
    <SLPStandardButton {...props} color={color} icon={<DeleteIcon />} label="Delete" />
);

export default SLPDeleteButton;
