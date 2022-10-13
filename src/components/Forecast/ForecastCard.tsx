import { Group, Text, Button, Paper, Stack } from '@mantine/core'
import { useState } from 'react'
import { Sun, MoonStars } from 'tabler-icons-react'

const ForecastCard = ({
  ident,
  forecast,
}: {
  ident: string
  forecast: Record<string, any>
}) => {
  const [time, setTime] = useState<'day' | 'night'>('day')

  return (
    <Paper
      key={ident}
      shadow="md"
      p="md"
      color={time === 'day' ? '#d8aa00' : '#0B0F4B94'}
    >
      <Stack>
        <Group>
          <Text>{forecast.Date}</Text>
          <Button onClick={() => setTime(time === 'day' ? 'night' : 'day')}>
            {time === 'day' ? <Sun /> : <MoonStars />}
          </Button>
        </Group>
        {time === 'day' ? (
          <>
            <Text>Day</Text>
            <Text>{forecast.Day.IconPhrase}</Text>
            {forecast.Day.HasPrecipitation && (
              <>
                <Text>{forecast.Day.PrecipitationType}</Text>
                <Text>{forecast.Day.PrecipitationIntensity}</Text>
              </>
            )}
          </>
        ) : (
          <>
            <Text>Night</Text>
            <Text>{forecast.Night.IconPhrase}</Text>
            {forecast.Night.HasPrecipitation && (
              <>
                <Text>{forecast.Night.PrecipitationType}</Text>
                <Text>{forecast.Night.PrecipitationIntensity}</Text>
              </>
            )}
          </>
        )}
      </Stack>
    </Paper>
  )
}

export default ForecastCard
