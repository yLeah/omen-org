export default function CalendarView({ events }) {
  return (
    <div className="max-h-64 overflow-y-auto border border-gray-300 rounded p-4 mt-4">
      <h2 className="text-lg font-bold mb-2">Calendar Events</h2>
      {events.length === 0 ? (
        <p>No upcoming events</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id} className="border-b py-2">
              <p className="font-semibold">{event.summary}</p>
              <p className="text-sm text-gray-600">{event.start} - {event.end}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
