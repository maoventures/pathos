import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function Blog({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl pt-44">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="p-4 text-xl">
        <h2 className="text-2xl">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-pathBlue">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
