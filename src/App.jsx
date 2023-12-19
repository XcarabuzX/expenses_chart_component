import "./App.css";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <footer className="flex flex-col items-center justify-end mt-10">
        <small>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" className="hover:text-primary-soft-red">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/XcarabuzX" className="hover:text-primary-soft-red">Felipe Gutierrez</a>.
        </small>
      </footer>
    </>
  );
}

export default App;
