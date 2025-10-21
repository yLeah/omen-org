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
    // Placeholder: fetch real emails/events after login
    setEmails([{ id: "1", subject: "Welcome!", from: "team@omen.com" }]);
    setEvents([{ id: "1", summary: "Team Meeting", start: "10:00 AM", end: "11:00 AM" }]);
    setAiResponse("Hello! How can I assist you today?");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {!loggedIn ? (
        <LoginButton onLogin={handleLogin} />
      ) : (
        <>
          <EmailList emails={emails} />
          <CalendarView events={events} />
          <AIResponsePanel response={aiResponse} />
        </>
      )}
    </div>
  );
}
