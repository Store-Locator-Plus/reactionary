import { ExpandableCardPanelProps, PanelItem } from './types';
/**
 * A generic, reusable panel that renders an Accordion containing a scrollable
 * stack of Cards. Each card has a header row (title left, date/right content)
 * and an optional details area beneath it.
 */
declare function ExpandableCardPanel<T extends PanelItem = PanelItem>({ title, defaultExpanded, items, renderTitle, renderDate, renderDetails, loading, emptyState, maxBodyHeight, cardVariant, spacing, }: ExpandableCardPanelProps<T>): JSX.Element;
export default ExpandableCardPanel;
//# sourceMappingURL=ExpandableCardPanel.d.ts.map