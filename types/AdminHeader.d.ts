import React, { JSX } from 'react';
import { Button } from "@mui/material";
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
declare const AdminHeader: ({ docLink, docURL, mainButtons, pageName }: AdminHeaderProps) => JSX.Element;
export default AdminHeader;
//# sourceMappingURL=AdminHeader.d.ts.map