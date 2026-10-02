import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SLPStandardButton, { type SLPStandardButtonProps } from './SLPStandardButton';

export type SLPAddButtonProps = Omit<SLPStandardButtonProps, 'icon' | 'label'>;

const SLPAddButton: React.FC<SLPAddButtonProps> = (props) => (
    <SLPStandardButton {...props} icon={<AddIcon />} label="Add" />
);

export default SLPAddButton;
