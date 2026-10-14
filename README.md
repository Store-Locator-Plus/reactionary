# @store-locator-plus/types

Utility types used by Store Locator Plus®.


## Shared form styles

Mount `SLPGlobalStyles` at the top of each SLP React interface. It handles WordPress admin CSS conflicts for MUI outlined inputs so TextField labels retain their notched border and focus styling. Use the standard MUI `size="small"` prop for compact controls; normal-sized fields and input adornments retain their corresponding MUI padding. Consumers do not need input border or padding overrides for this integration.
