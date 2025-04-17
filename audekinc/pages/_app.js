// _app.js
import '../styles/globals.css';
import '../i18n'; // Correct path from pages to root
import 'maplibre-gl/dist/maplibre-gl.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
