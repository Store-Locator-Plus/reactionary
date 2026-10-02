import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SLPStandardButton, { type SLPStandardButtonProps } from './SLPStandardButton';

export type SLPFilterButtonProps = Omit<SLPStandardButtonProps, 'icon' | 'label'>;

const SLPFilterButton: React.FC<SLPFilterButtonProps> = (props) => (
    <SLPStandardButton {...props} icon={<FilterAltIcon />} label="Filter" />
);

export default SLPFilterButton;
