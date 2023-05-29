import "sanitize.css";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { useFirebase, FirebaseContext } from "./firebase";

function App() {
  const { user, auth } = useFirebase();
  return (
	<FirebaseContext.Provider value={{ user, auth }}>
		{ user ? <Chat /> : <Login /> }
	</FirebaseContext.Provider>
  )
}

export default App;
