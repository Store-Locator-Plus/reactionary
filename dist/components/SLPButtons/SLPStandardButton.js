var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const secondaryContainedSx = {
    color: '#fff',
    backgroundColor: '#ed6c02',
    '&:hover': {
        backgroundColor: '#e65100',
    },
};
/** A consistently styled contained action button for Store Locator Plus interfaces. */
export const SLPStandardButton = (_a) => {
    var _b;
    var { style = 'full', label, icon, tooltip, color = 'primary', sx } = _a, buttonProps = __rest(_a, ["style", "label", "icon", "tooltip", "color", "sx"]);
    const iconOnly = style === 'icon';
    const callerSx = Array.isArray(sx)
        ? sx
        : sx
            ? [sx]
            : [];
    const buttonSx = [
        { whiteSpace: 'nowrap' },
        ...(color === 'secondary' ? [secondaryContainedSx] : []),
        ...callerSx,
    ];
    const button = (_jsx(Button, Object.assign({}, buttonProps, { "aria-label": iconOnly ? ((_b = buttonProps['aria-label']) !== null && _b !== void 0 ? _b : label) : buttonProps['aria-label'], color: color, startIcon: !iconOnly ? icon : undefined, variant: "contained", sx: buttonSx, children: iconOnly ? icon : label })));
    if (!iconOnly) {
        return button;
    }
    return (_jsx(Tooltip, { title: tooltip !== null && tooltip !== void 0 ? tooltip : label, children: _jsx("span", { children: button }) }));
};
export default SLPStandardButton;
//# sourceMappingURL=SLPStandardButton.js.map