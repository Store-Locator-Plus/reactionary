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
import DeleteIcon from '@mui/icons-material/Delete';
import SLPStandardButton from './SLPStandardButton';
const SLPDeleteButton = (_a) => {
    var { color = 'error' } = _a, props = __rest(_a, ["color"]);
    return (_jsx(SLPStandardButton, Object.assign({}, props, { color: color, icon: _jsx(DeleteIcon, {}), label: "Delete" })));
};
export default SLPDeleteButton;
//# sourceMappingURL=SLPDeleteButton.js.map