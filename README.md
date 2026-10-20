# @store-locator-plus/types

Utility types used by Store Locator Plus®.


## Shared form styles

Mount `SLPGlobalStyles` at the top of each SLP React interface. It handles WordPress admin CSS conflicts for MUI outlined inputs so TextField labels retain their notched border and focus styling. Use the standard MUI `size="small"` prop for compact controls; normal-sized fields and input adornments retain their corresponding MUI padding. Consumers do not need input border or padding overrides for this integration.

## Brand palette

`SLP_BRAND_PALETTE` exports the baseline colors: red `#b72818`, blush `#ffebe8`, gold `#e6af00`, mint `#d7f7e1`, and blue `#1d3ecf`. `SLPThemeProvider` (or the exported `slpTheme`) applies blue primary and gold secondary actions, red/blush errors, gold warnings, and mint success accents. Existing interfaces can adopt the theme at their React root; `SLPGlobalStyles` does not insert a theme provider.

`SLPGlobalStyles` applies blush to collapsed and expanded accordion summaries, including hover. Secondary `SLPStandardButton` actions use brand gold with dark text even on interfaces that do not mount the theme provider.
