import { Center, Button } from '@mantine/core'
import { GetStaticProps } from 'next'
import { log } from 'next-axiom'
import useSWR from 'swr'

export const getStaticProps: GetStaticProps = async (context) => {
  log.info('Hello from SSR', { context })
  return {
    props: {},
  }
}

const fetcher = async (args: any[]) => {
  console.log('Fetching', args)
  log.info('Hello from SWR', { args })
  // @ts-ignore
  const res = await fetch(...args)
  return await res.json()
}

export default function Home() {
  const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Center style={{ width: 400, height: 200 }}>
        <Button>Hello</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Center>
    </>
  )
}
