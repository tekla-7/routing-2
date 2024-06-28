import { Link } from "react-router-dom"

const EVENTS=[
    {id:'e1' , title:'events 1'},
    {id:'e2' , title:'events 2'},
    {id:'e3' , title:'events 3'}
]

function EventsPage(){
    return <> 
    <h1>Events</h1>
    <ul>
        {EVENTS.mao(event=>
            <li key={event.id}>
                <Link to={event.id}>{event.title}</Link>
            </li>
        )}

    </ul>
    </>
}

export default EventsPage