import { useRouteLoaderData, useParams, json, redirect, defer, Await } from "react-router-dom"
import EventItem from "../components/EventItem"
import { Suspense } from "react"

function EventDetailPage() {
    
    const { event, events } = useRouteLoaderData('event-detail')
    return <>
        <Suspense fallback={<p>loading...</p>}>
            <Await resolve={event} >
                {loadedEvent => <EventItem event={loadEvent} />}
            </Await>
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventItem event={loadEvents} />}
            </Await>
        </Suspense>

    </>
}

export default EventDetailPage
async function loadEvent(id) {
    const response = await fetch('http//localhost:8080/events/' + id)

    if (!response.ok) {
        throw json({ message: 'could nor fetch details' }, { state: 500 })
    } else {
        const resData = await response.json();
        return resData.event
    }
}
async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json({ message: 'could not fetch events' }, { status: 500 })
    } else {
        const resData = await response.json();
        return resData.events
    }
}
export async function loader({ request, params }) {
    // request.url
    const id = params.eventtId

    return defer({
        event: loadEvent(id), ///  event: await loadEvent(id) first this will show
        events: loadEvents()
    })
}

export async function action({ request, params }) {
    const id = params.eventtId
    const response = await fetch('http//localhost:8080/events/' + id, {
        method: request.method,
    });
    if (!response.ok) {
        throw json({ message: 'could nor delate event' }, { state: 500 })
    }
    return redirect('/events')

}






