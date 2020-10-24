import "../styles/globals.css";
import wrapper from "../store/configureStore";

function StarterPage({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(StarterPage);
