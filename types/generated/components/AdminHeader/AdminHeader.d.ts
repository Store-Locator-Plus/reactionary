import React, { JSX } from 'react';
import { Button } from "@mui/material";
/**
 * Represents a main button component with assigned properties and children.
 *
 * The `MainButton` type is designed as a utility for utilizing the properties
 * of a React Button component and rendering its children nodes. It helps define
 * a standardized structure for button elements within a React application.
 *
 * Properties:
 * - `props`: The properties passed into the `Button` component. This utilizes
 *   the `React.ComponentProps` type to inherit all acceptable properties for
 *   the base `Button` component.
 * - `children`: The React children nodes to be rendered inside the button.
 */
type MainButton = {
    props: React.ComponentProps<typeof Button>;
    children: React.ReactNode;
};
/**
 * Represents the properties for the AdminHeader component.
 *
 * This type is used to define the structure and optional properties
 * that need to be passed to the AdminHeader component for rendering.
 *
 * Properties:
 * - `docLink` (optional): A string representing a link to documentation.
 * - `docURL` (optional): A string representing the URL for documentation.
 * - `mainButtons` (optional): An array of `MainButton` objects used for primary actions in the header.
 * - `pageName` (optional): A string indicating the name of the current page or section.
 */
type AdminHeaderProps = {
    docLink?: string;
    docURL?: string;
    mainButtons?: MainButton[];
    pageName?: string;
};
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
declare const AdminHeader: ({ docLink, docURL, mainButtons, pageName }: AdminHeaderProps) => JSX.Element;
export default AdminHeader;
//# sourceMappingURL=AdminHeader.d.ts.map