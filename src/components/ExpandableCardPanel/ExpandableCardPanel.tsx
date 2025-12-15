import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandableCardPanelProps, PanelItem } from './types';

/**
 * A generic, reusable panel that renders an Accordion containing a scrollable
 * stack of Cards. Each card has a header row (title left, date/right content)
 * and an optional details area beneath it.
 */
function ExpandableCardPanel<T extends PanelItem = PanelItem>({
  title,
  defaultExpanded,
  items,
  renderTitle,
  renderDate,
  renderDetails,
  loading,
  emptyState,
  maxBodyHeight = 420,
  cardVariant = 'outlined',
  spacing = 1,
}: ExpandableCardPanelProps<T>): JSX.Element {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`expandable-card-panel-content`}
        id={`expandable-card-panel-header`}
      >
        {typeof title === 'string' ? (
          <Typography component="span">{title}</Typography>
        ) : (
          title
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ maxHeight: maxBodyHeight, overflowY: 'auto', pr: 1 }}>
          {loading ? (
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 160 }} variant={cardVariant}>
              <CircularProgress />
            </Card>
          ) : items.length === 0 ? (
            emptyState ?? (
              <Typography variant="body2" color="text.secondary">No items available.</Typography>
            )
          ) : (
            <Stack spacing={spacing}>
              {items.map((item, idx) => (
                <Card key={idx} variant={cardVariant}>
                  <CardContent>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        {renderTitle(item)}
                      </Box>
                      {renderDate && (
                        <Typography variant="h6" component="div" sx={{ wordBreak: 'break-word', whiteSpace: 'nowrap' }}>
                          {renderDate(item)}
                        </Typography>
                      )}
                    </Box>
                    {renderDetails && (
                      <Box sx={{ mt: 1 }}>
                        {renderDetails(item)}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ExpandableCardPanel;
