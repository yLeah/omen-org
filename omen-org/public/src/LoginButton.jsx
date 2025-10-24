export default function LoginButton({ onLogin }) {
  return (
    <button
      onClick={onLogin}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-200"
    >
      Login with Google
    </button>
  );
}
