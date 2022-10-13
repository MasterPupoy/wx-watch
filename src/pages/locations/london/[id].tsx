import { Box, Container, Title } from '@mantine/core'
import Head from 'next/head'
import Nav from '../../../components/Nav/Nav'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Forecast from '../../../components/Forecast/Forecast'
import { Heading } from 'tabler-icons-react'
import Headline from '../../../components/Headline/Headline'

const LondonPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState<boolean>(true)
  const [interval, setInterval] = useState<string>('1day')
  const [data, setData] = useState<{
    ok: Boolean
    data: Record<string, any>
  }>()

  useEffect(() => {
    if (id) {
      setLoading(true)
      fetch(
        `http://localhost:3000/api/forecast?params=${id}&interval=${interval}`
      )
        .then((d) => d.json())
        .then((c) => {
          if (c.ok === true) {
            setData(c)
            setLoading(false)
          } else {
            setLoading(false)
          }
        })
    } else {
      setData({ ok: false, data: {} })
    }
  }, [id, interval])

  return (
    <>
      <Head>
        <title>London | Weather Forecast</title>
      </Head>
      <Nav />
      <Container fluid>
        <Box sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Title order={3}>London</Title>
          <Headline data={data?.data} loading={loading} />
        </Box>
        <Forecast
          setInterval={setInterval}
          interval={interval}
          data={data?.data}
        />
      </Container>
    </>
  )
}

export default LondonPage
