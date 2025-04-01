import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
/**
 * Renders a customizable admin header component for displaying a sticky top navigation bar.
 *
 * @param {Object} props - The properties for the AdminHeader component.
 * @param {string} [props.docLink=''] - The specific documentation link path that is appended to the base documentation URL.
 * @param {string} [props.docURL='https://docs.storelocatorplus.com'] - The base URL for the documentation site.
 * @param {Array} [props.mainButtons=[]] - An array of main button elements that are rendered as part of the button group.
 * @param {string} [props.pageName=''] - The name of the current page, displayed prominently in the toolbar.
 * @returns {JSX.Element} - The rendered JSX element representing the admin header.
 */
const AdminHeader = ({ docLink = '', docURL = 'https://docs.storelocatorplus.com', mainButtons = [], pageName = '' }) => {
    const documentationLink = `${docURL}${docLink}`;
    let mainButtonGroup = null;
    if (mainButtons && mainButtons.length) {
        mainButtonGroup = (_jsx(ButtonGroup, { variant: "text", size: "small", color: "inherit", children: mainButtons.map((button => (_jsx(Button, Object.assign({}, button.props, { children: button.children }))))) }));
    }
    return (_jsx(AppBar, { position: "sticky", children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: pageName }), mainButtonGroup, _jsx(Tooltip, { title: "Documentation", children: _jsx(IconButton, { color: "inherit", size: "medium", href: documentationLink, target: "_blank", "aria-label": "Documentation", children: _jsx(MenuBook, {}) }, "slp_docs") })] }) }));
};
export default AdminHeader;
//# sourceMappingURL=AdminHeader.js.map