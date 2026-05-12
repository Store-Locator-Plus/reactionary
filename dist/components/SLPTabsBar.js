import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
/**
 * Standard tab styling constant for SLP admin pages.
 */
export const SLP_TAB_SX = {
    '& .MuiTab-root': {
        color: 'black',
        textTransform: 'none',
        fontWeight: 'medium',
        fontSize: '1rem',
        minWidth: 100,
    },
};
export const SLPTabsBar = ({ children, sx = {}, id, className }) => (_jsx(Box, { id: id, className: className, sx: Object.assign({ borderBottom: 1, borderColor: 'divider', px: 3, bgcolor: 'background.paper' }, sx), children: children }));
export default SLPTabsBar;
//# sourceMappingURL=SLPTabsBar.js.map