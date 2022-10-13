import { Group, Button, Text, Title } from '@mantine/core'
import { NextLink } from '@mantine/next'

const Nav = () => {
  return (
    <>
      <Group
        position="apart"
        sx={{
          height: '100px',
          background: 'rgba(11, 15, 75, 0.58)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(95, 2, 2, 0.3)',
          padding: '1rem',
        }}
      >
        <Text
          sx={{ fontWeight: 'bold', fontSize: '24px', color: '#ffff' }}
          component={NextLink}
          href="/"
        >
          WX Watch
        </Text>
        <Group position="apart" grow sx={{ width: '30%' }}>
          <Button
            sx={styles.buttonStyles}
            component={NextLink}
            href="/locations/manila/264885"
          >
            Manila
          </Button>
          <Button
            sx={styles.buttonStyles}
            component={NextLink}
            href="/locations/los-angeles/347625"
          >
            Los Angeles
          </Button>
          <Button
            sx={styles.buttonStyles}
            component={NextLink}
            href="/locations/new-york/349727"
          >
            New York
          </Button>
          <Button
            sx={styles.buttonStyles}
            component={NextLink}
            href="/locations/london/328328"
          >
            London
          </Button>
        </Group>
      </Group>
    </>
  )
}

const styles = {
  buttonStyles: {
    width: 'fit-content',
  },
}

export default Nav
