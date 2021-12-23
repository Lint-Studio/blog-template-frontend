import NavBar from "../components/NavBar";
import "../styles/index.css";
function MyApp({ Component, pageProps }) {
  return (
      <div className="container">
        <NavBar />
        <Component {...pageProps} />
      </div>
   
  );
}

export default MyApp;
