'use client'
import { Button, Center } from '@mantine/core'
import { log } from 'next-axiom'

export default function Home() {
  log.debug('This is log')
  return (
    <>
      <Center>
        <Button color="red">Hello world!</Button>
      </Center>
    </>
  )
}
