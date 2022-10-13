import { LoadingOverlay, Paper, Text } from '@mantine/core'

const Headline = ({
  loading,
  data,
}: {
  loading: boolean
  data: Record<string, any> | undefined
}) => {
  return (
    <Paper shadow="md" p="md">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      {data?.Headline && (
        <>
          <Text>{data.Headline.Text}</Text>
          <Text>{data.Headline.Category}</Text>
          <Text>From {data.Headline.EffectiveDate}</Text>
          <Text>To {data.Headline.EndDate}</Text>
        </>
      )}
    </Paper>
  )
}

export default Headline
