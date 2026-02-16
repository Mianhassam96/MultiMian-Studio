import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>MultiMian - Full Stack Development Agency | Modern Web Solutions</title>
        <meta name="description" content="Professional full-stack development agency specializing in React, Next.js, Node.js, and modern web technologies. Founded by Mian Hassam." />
      </Head>

      <Hero />
    </>
  )
}
