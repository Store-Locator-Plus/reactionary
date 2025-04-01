import React, {JSX} from 'react';
import {AppBar, Button, ButtonGroup, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import {MenuBook} from "@mui/icons-material";

type MainButton = {
    props: React.ComponentProps<typeof Button>;
    children: React.ReactNode;
};

type AdminHeaderProps = {
    docLink?: string;
    docURL?: string;
    mainButtons?: MainButton[];
    pageName?: string;
};

/**
 * The admin header react component.
 * @returns {JSX.Element}
 * @constructor
 */
const AdminHeader = (
    {
        docLink = '',
        docURL = 'https://docs.storelocatorplus.com',
        mainButtons = [],
        pageName = ''
    }: AdminHeaderProps): JSX.Element => {
    const documentationLink = `${docURL}${docLink}`;

    let mainButtonGroup = null
    if (mainButtons && mainButtons.length) {
        mainButtonGroup = (
            <ButtonGroup variant="text" size="small" color="inherit">
                {mainButtons.map((button => (<Button {...button.props}>{button.children}</Button>)))}
            </ButtonGroup>
        );
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div"
                            sx={{flexGrow: 1}}>{pageName}</Typography>
                {mainButtonGroup}
                <Tooltip title="Documentation">
                    <IconButton
                        color="inherit"
                        size="medium"
                        key="slp_docs"
                        href={documentationLink}
                        target="_blank"
                        aria-label="Documentation"
                    >
                        <MenuBook />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeader;