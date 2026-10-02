import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import SLPStandardButton, { type SLPStandardButtonProps } from './SLPStandardButton';

export type SLPSaveButtonProps = Omit<SLPStandardButtonProps, 'icon' | 'label'>;

const SLPSaveButton: React.FC<SLPSaveButtonProps> = (props) => (
    <SLPStandardButton {...props} icon={<SaveIcon />} label="Save" />
);

export default SLPSaveButton;
