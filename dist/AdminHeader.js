import React from 'react';
import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
/**
 * The admin header react component.
 * @returns {JSX.Element}
 * @constructor
 */
const AdminHeader = ({ docLink = '', docURL = 'https://docs.storelocatorplus.com', mainButtons = [], pageName = '' }) => {
    const documentationLink = `${docURL}${docLink}`;
    let mainButtonGroup = null;
    if (mainButtons && mainButtons.length) {
        mainButtonGroup = (React.createElement(ButtonGroup, { variant: "text", size: "small", color: "inherit" }, mainButtons.map((button => (React.createElement(Button, Object.assign({}, button.props), button.children))))));
    }
    return (React.createElement(AppBar, { position: "sticky" },
        React.createElement(Toolbar, null,
            React.createElement(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 } }, pageName),
            mainButtonGroup,
            React.createElement(Tooltip, { title: "Documentation" },
                React.createElement(IconButton, { color: "inherit", size: "medium", key: "slp_docs", href: documentationLink, target: "_blank", "aria-label": "Documentation" },
                    React.createElement(MenuBook, null))))));
};
export default AdminHeader;
//# sourceMappingURL=AdminHeader.js.map