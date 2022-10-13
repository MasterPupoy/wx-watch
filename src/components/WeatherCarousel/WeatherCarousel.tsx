import { Carousel } from '@mantine/carousel'
import { Paper, Title, Button, Text } from '@mantine/core'
import manila from '../../public/manila.jpg'
import london from '../../public/london.jpg'
import newyork from '../../public/newyork.jpg'
import losangeles from '../../public/losangeles.jpg'
import { NextLink } from '@mantine/next'

const Card = ({
  image,
  description,
  title,
  link,
}: {
  image: { src: string }
  description: string
  title: string
  link: string
}) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      sx={{
        backgroundImage: `url(${image.src})`,
        width: '100%',
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <Title order={1} color={'#ffff'}>
          {title}
        </Title>
        <Text size="sm" color={'#ffff'}>
          {description}
        </Text>
        <Button component={NextLink} href={link}>
          View to forecast
        </Button>
      </div>
    </Paper>
  )
}

const WeatherCarousel = () => {
  return (
    <Carousel
      sx={{ minHeight: '300px', height: '80vh', maxWidth: '100%' }}
      mx="auto"
      withIndicators
      loop
    >
      <Carousel.Slide>
        <Card
          title={'Manila'}
          image={manila}
          description={'Manila, Philippines weather forcast'}
          link="/locations/manila/264885"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Card
          title={'New York'}
          image={newyork}
          link={'/locations/new-york/349727'}
          description={''}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Card
          title={'Los Angeles'}
          image={losangeles}
          description={''}
          link={'/locations/los-angeles/347625'}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Card
          title={'London'}
          image={london}
          link={'/locations/london/328328'}
          description={''}
        />
      </Carousel.Slide>
    </Carousel>
  )
}

export default WeatherCarousel
