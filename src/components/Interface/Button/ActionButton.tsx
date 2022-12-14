import { Button, useTheme } from '@mui/material'
import { Typography } from '@mui/material'
import Spinner from 'components/Interface/Spinner'

export default function ActionButton({
  error,
  pending,
  success,
  onAction,
  actionText,
  pendingText,
  height,
  width,
  disableAction,
  successText,
}: {
  error?: string | undefined
  pending?: boolean
  success?: boolean
  onAction: (() => void) | undefined
  actionText: string | React.ReactNode
  pendingText?: string
  successText?: string
  height?: string
  width?: string
  disableAction?: boolean
}) {
  const theme = useTheme()

  return (
    <>
      {error || pending ? (
        <Button disabled sx={{ height, width, background: theme.palette.action.disabledBackground }}>
          {pending ? (
            <>
              <Spinner marginRight={16} />
              {pendingText || 'Waiting Confirmation'}
            </>
          ) : (
            error
          )}
        </Button>
      ) : success ? (
        <Button disabled sx={{ height, width }}>
          <Typography variant="inherit">{successText ?? actionText}</Typography>
        </Button>
      ) : (
        <Button
          sx={{ height, width, background: theme.gradient.gradient1 }}
          onClick={onAction}
          disabled={disableAction}
        >
          {actionText}
        </Button>
      )}
    </>
  )
}
