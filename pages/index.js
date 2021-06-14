import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Link from 'next/link'
import {API_URL} from '@/config/index'

export default function HomePage({events}) {
  console.log(events)
  return (
   
  <Layout>
    <h1> Upcomming Events</h1>
    {!events  || events.length === 0 && <h3> No events to show</h3>}

    {events && events.map(evt=> (
      <EventItem key={evt.id} evt={evt} />
    ))}
    {events && events.length > 0 && (
      <Link href='/events'>
        <a className='btn-secondary'>
          View All Events
        </a>
      </Link>

    )}
  </Layout>
  
  )
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  return {
    props: {events},
    revalidate: 1
  }
}