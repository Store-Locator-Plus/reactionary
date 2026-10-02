import React from 'react';
import { type SLPStandardButtonProps } from './SLPStandardButton';
export type SLPDeleteButtonProps = Omit<SLPStandardButtonProps, 'color' | 'icon' | 'label'> & {
    color?: SLPStandardButtonProps['color'];
};
declare const SLPDeleteButton: React.FC<SLPDeleteButtonProps>;
export default SLPDeleteButton;
//# sourceMappingURL=SLPDeleteButton.d.ts.map