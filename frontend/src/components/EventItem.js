import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';



function EventItem({ event }) {
  const submit = useSubmit()

  function startDeleteHandler() {
    const proceed = window.confirm('are you shur?');
    if (proceed) {
      submit(null, { method: 'delete' })
      // submit(null,{method:'delete' , action:'/some diiferent path'})
      //first argument some data if we went to send
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
