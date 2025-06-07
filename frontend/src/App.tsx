import { Messages } from "./components/Messages";

const App = () => {
  return (
    <main>
      <h1>
        This App is test application that use Docker to run full MERN Stack with
        TypeScript.
        <br />
        The API is running on{" "}
        <a
          href="http://localhost:5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://localhost:5000
        </a>
        .<br />
      </h1>

      <p>
        Below show two endpoints that connected to the API, one is home route
        and the other is health check route.
        <br />
      </p>
      <h1>Home Route</h1>
      <Messages url="http://localhost:5000" />
      <h1>Health Check Route</h1>
      <Messages url="http://localhost:5000/health" />
    </main>
  );
};

export default App;
