import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SLPStandardButton, { type SLPStandardButtonProps } from './SLPStandardButton';

export type SLPEditButtonProps = Omit<SLPStandardButtonProps, 'icon' | 'label'>;

const SLPEditButton: React.FC<SLPEditButtonProps> = (props) => (
    <SLPStandardButton {...props} icon={<EditIcon />} label="Edit" />
);

export default SLPEditButton;
