import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/**
 * A generic, reusable panel that renders an Accordion containing a scrollable
 * stack of Cards. Each card has a header row (title left, date/right content)
 * and an optional details area beneath it.
 */
function ExpandableCardPanel({ title, defaultExpanded, items, renderTitle, renderDate, renderDetails, loading, emptyState, maxBodyHeight = 420, cardVariant = 'outlined', spacing = 1, }) {
    return (_jsxs(Accordion, { defaultExpanded: defaultExpanded, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": `expandable-card-panel-content`, id: `expandable-card-panel-header`, children: typeof title === 'string' ? (_jsx(Typography, { component: "span", children: title })) : (title) }), _jsx(AccordionDetails, { children: _jsx(Box, { sx: { maxHeight: maxBodyHeight, overflowY: 'auto', pr: 1 }, children: loading ? (_jsx(Card, { sx: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: 160 }, variant: cardVariant, children: _jsx(CircularProgress, {}) })) : items.length === 0 ? (emptyState !== null && emptyState !== void 0 ? emptyState : (_jsx(Typography, { variant: "body2", color: "text.secondary", children: "No items available." }))) : (_jsx(Stack, { spacing: spacing, children: items.map((item, idx) => (_jsx(Card, { variant: cardVariant, children: _jsxs(CardContent, { children: [_jsxs(Box, { sx: { display: 'flex', gap: 2, alignItems: 'flex-start' }, children: [_jsx(Box, { sx: { flex: 1, minWidth: 0 }, children: renderTitle(item) }), renderDate && (_jsx(Typography, { variant: "h6", component: "div", sx: { wordBreak: 'break-word', whiteSpace: 'nowrap' }, children: renderDate(item) }))] }), renderDetails && (_jsx(Box, { sx: { mt: 1 }, children: renderDetails(item) }))] }) }, idx))) })) }) })] }));
}
export default ExpandableCardPanel;
//# sourceMappingURL=ExpandableCardPanel.js.map