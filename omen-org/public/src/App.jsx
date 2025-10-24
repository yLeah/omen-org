import { useState } from "react";
import LoginButton from "./components/LoginButton";
import EmailList from "./components/EmailList";
import CalendarView from "./components/CalendarView";
import AIResponsePanel from "./components/AIResponsePanel";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [emails, setEmails] = useState([]);
  const [events, setEvents] = useState([]);
  const [aiResponse, setAiResponse] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
    // Placeholder — this will later connect to your backend
    setEmails([{ id: "1", subject: "Welcome!", from: "team@omen.com" }]);
    setEvents([{ id: "1", summary: "Team Meeting", start: "10:00 AM", end: "11:00 AM" }]);
    setAiResponse("Hello! How can I assist you today?");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Omen AI Assistant
      </h1>

      {!loggedIn ? (
        <LoginButton onLogin={handleLogin} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <EmailList emails={emails} />
            <CalendarView events={events} />
          </div>
          <AIResponsePanel response={aiResponse} />
        </>
      )}
    </div>
  );
}
