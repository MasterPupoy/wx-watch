import { Group, Text, SegmentedControl, Paper } from '@mantine/core'
import ForecastCard from './ForecastCard'

const Forecast = ({ data, interval, setInterval }) => {
  return (
    <>
      <Group position="apart" sx={{ width: '100%' }}>
        <Text>Forecast</Text>
        <SegmentedControl
          data={[
            { label: '1 day', value: '1day' },
            { label: '5 days', value: '5day' },
          ]}
          value={interval}
          onChange={setInterval}
          fullWidth
        />
        <Paper></Paper>
      </Group>
      {data?.DailyForecasts && (
        <Group position="center">
          {data.DailyForecasts.map((c: Record<string, any>) => (
            <ForecastCard ident={c.EpochDate} forecast={c} />
          ))}
        </Group>
      )}
    </>
  )
}

export default Forecast
