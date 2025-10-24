export default function EmailList({ emails }) {
  return (
    <div className="max-h-64 overflow-y-auto border border-gray-300 rounded p-4">
      <h2 className="text-lg font-bold mb-2">Emails</h2>
      {emails.length === 0 ? (
        <p>No emails to display</p>
      ) : (
        <ul>
          {emails.map(email => (
            <li key={email.id} className="border-b py-2">
              <p className="font-semibold">{email.subject}</p>
              <p className="text-sm text-gray-600">From: {email.from}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
