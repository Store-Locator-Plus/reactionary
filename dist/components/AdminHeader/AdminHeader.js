import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppBar, Button, ButtonGroup, IconButton, Tab, Tabs, Toolbar, Tooltip, Typography } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { SLP_TAB_SX, SLPTabsBar } from "../SLPTabsBar";
import SLPGlobalStyles from "../SLPGlobalStyles";
/**
 * Renders a customizable admin header component for displaying a sticky top navigation bar.
 *
 * @param {Object} props - The properties for the AdminHeader component.
 * @param {string} [props.docLink=''] - The specific documentation link path that is appended to the base documentation URL.
 * @param {string} [props.docURL='https://docs.storelocatorplus.com'] - The base URL for the documentation site.
 * @param {Array} [props.mainButtons=[]] - An array of main button elements that are rendered as part of the button group.
 * @param {string} [props.pageName=''] - The name of the current page, displayed prominently in the toolbar.
 * @param {string} [props.saveText=''] - The text for the save button.
 * @param {Array} [props.sections=[]] - Navigation sections.
 * @param {string} [props.selectedNavElement=''] - Initial selected navigation element.
 * @returns {JSX.Element} - The rendered JSX element representing the admin header.
 */
const AdminHeader = ({ docLink = '', docURL = 'https://docs.storelocatorplus.com', mainButtons = [], pageName = '', saveText = '', sections = [], selectedNavElement = '' }) => {
    var _a;
    const documentationLink = `${docURL}${docLink}`;
    const [selectedNav, setSelectedNav] = useState(selectedNavElement || ((_a = sections === null || sections === void 0 ? void 0 : sections[0]) === null || _a === void 0 ? void 0 : _a.link_id) || '');
    let mainButtonGroup = null;
    if (mainButtons && mainButtons.length) {
        mainButtonGroup = (_jsx(ButtonGroup, { variant: "text", size: "small", color: "inherit", children: mainButtons.map((button, index) => {
                var _a, _b;
                return (_jsx(Button, Object.assign({}, button.props, { children: button.children }), (_b = (_a = button.props.key) !== null && _a !== void 0 ? _a : button.props.id) !== null && _b !== void 0 ? _b : index));
            }) }));
    }
    const handleTabChange = (event, newNav) => {
        const openElement = selectedNav ? document.getElementById(selectedNav) : null;
        const newElement = newNav ? document.getElementById(newNav) : null;
        if (openElement) {
            openElement.style.display = 'none';
        }
        if (newElement) {
            newElement.style.removeProperty('display');
        }
        setSelectedNav(newNav);
    };
    const handleSaveClick = () => {
        const form = document.getElementById('slp_options_form');
        if (!form) {
            return;
        }
        form.submit();
    };
    return (_jsxs(AppBar, { position: "sticky", children: [_jsx(SLPGlobalStyles, {}), _jsxs(Toolbar, { sx: { minHeight: 'inherit' }, children: [_jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: pageName }), mainButtonGroup, _jsx(Tooltip, { title: "Documentation", children: _jsx(IconButton, { color: "inherit", size: "medium", href: documentationLink, target: "_blank", "aria-label": "Documentation", children: _jsx(MenuBook, {}) }, "slp_docs") })] }), sections.length > 0 && (_jsx(SLPTabsBar, { sx: { px: 0, borderBottom: 0 }, children: _jsxs(Tabs, { onChange: handleTabChange, value: selectedNav, sx: SLP_TAB_SX, children: [sections.map((section) => (_jsx(Tab, { id: `${section.link_id}_sidemenu`, label: section.name, value: section.link_id }, section.link_id))), !!saveText && (_jsx(Button, { variant: "outlined", onClick: handleSaveClick, children: saveText }))] }) }))] }));
};
export default AdminHeader;
//# sourceMappingURL=AdminHeader.js.map