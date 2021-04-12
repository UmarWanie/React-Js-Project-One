import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import Dbtypes from "./component/DbTypes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div>
			<Header />
			<Slider />
			<MainContent />
			<Dbtypes />
			<Footer />
		</div>
	);
}

export default App;
