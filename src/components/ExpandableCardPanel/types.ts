import React from 'react';

export type PanelItem = Record<string, any>;

export interface ExpandableCardPanelProps<T extends PanelItem = PanelItem> {
  title: React.ReactNode | string;
  defaultExpanded?: boolean;
  items: T[];
  renderTitle: (item: T) => React.ReactNode;
  renderDate?: (item: T) => React.ReactNode;
  renderDetails?: (item: T) => React.ReactNode;
  loading?: boolean;
  emptyState?: React.ReactNode;
  maxBodyHeight?: number | string;
  cardVariant?: 'elevation' | 'outlined';
  spacing?: number;
}
