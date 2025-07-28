import FirstComponent from "./components/FirstComponent";
import GithubCard from "./components/GithubCard";
import Header from "./components/Header";
import LinkedinCard from "./components/LinkedinCard";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <Header />
      <FirstComponent />
      <LinkedinCard />
      <GithubCard />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
