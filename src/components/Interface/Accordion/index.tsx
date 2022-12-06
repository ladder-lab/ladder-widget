import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Divider from 'components/Interface/Divider'
import { CSSProperties } from 'react'
interface Props {
  summary: string | JSX.Element
  details: string | JSX.Element
  expanded: boolean
  onChange: () => void
  iconCssOverride?: CSSProperties
  margin?: string
  disabled?: boolean
}

export default function _Accordion(props: Props) {
  const { summary, details, onChange, expanded, iconCssOverride, margin, disabled } = props
  const theme = useTheme()

  return (
    <Accordion
      onChange={disabled ? undefined : onChange}
      sx={{
        boxShadow: 'none',
        background: theme.palette.background.paper,
        borderRadius: '8px',
        padding: '10px',
        margin: margin || 0,
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: `${margin} !important` || 0,
        },
        '& .MuiAccordionSummary-content': {
          margin: 0,
          width: '100%',
          cursor: disabled ? 'auto' : 'pointer',
        },
        '& .MuiAccordionSummary-expandIconWrapper': {
          ...iconCssOverride,
          display: disabled ? 'none' : 'inherit',
        },
      }}
      expanded={expanded}
    >
      <AccordionSummary
        sx={{
          fontSize: 14,
          userSelect: disabled ? 'none' : 'auto',
        }}
        expandIcon={<KeyboardArrowDownIcon />}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails sx={{ mt: 10 }}>
        <Divider />

        {details}
      </AccordionDetails>
    </Accordion>
  )
}
