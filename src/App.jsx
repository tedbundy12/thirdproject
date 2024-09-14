import GetStarted from "./Components/GetStarted";
import Header from "./Components/Header";
import SmallUsers from "./Components/SmallUsers";
import Provide from "./Components/Provide";
import Plan from "./Components/Plan";
import Global from "./Components/Global";
import Sub from "./Components/Sub";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <GetStarted></GetStarted>
        <SmallUsers></SmallUsers>
        <Provide></Provide>
        <Plan></Plan>
        <Global></Global>
        <Sub></Sub>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
