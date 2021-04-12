import Header from "./component/Header"
import MainContent from "./component/MainContent"
import Footer from "./component/Footer"
import Slider from "./component/Slider"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
