import '../styles/globals.css';
import '../i18n';
import 'maplibre-gl/dist/maplibre-gl.css';

import Navbar from '@/component/navbar';  // adjust path if needed
import Footer from '@/component/footer';  // adjust path if needed

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
