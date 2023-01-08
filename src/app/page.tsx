import { log } from 'next-axiom'

export default function Home() {
  log.debug('This is log')
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}
