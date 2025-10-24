export default function AIResponsePanel({ response }) {
  return (
    <div className="border border-gray-300 rounded p-4 mt-4 bg-gray-50">
      <h2 className="text-lg font-bold mb-2">AI Assistant Response</h2>
      <p>{response || "Ask me anything about your emails or calendar..."}</p>
    </div>
  );
}
