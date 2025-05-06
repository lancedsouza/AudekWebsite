import { useRouter } from 'next/router';
import Footer from '@/component/footer';
export default function AboutSlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">About Us - {slug}</h1>

      {/* Video Section */}
      <div className="w-full">
        <video 
          controls 
          className="w-full rounded-lg shadow-md" 
          src="/a-group_22 (1).mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p>Our mission is to provide high-quality, affordable hearing aids that are accessible to everyone, regardless of their financial situation. We are committed to ensuring that our hearing aids meet the highest safety and quality standards, while being easy to use and supported by a dedicated professional team.</p>
          <ul className="list-disc pl-5">
            <li><strong>Affordability:</strong> Offer high-quality hearing aids at accessible price points, ensuring that everyone has the opportunity to improve their hearing.</li>
            <li><strong>Accessibility:</strong> Make hearing aids easy to use and accessible for all, regardless of financial or technical ability.</li>
            <li><strong>Safety & Quality:</strong> Ensure all products meet stringent safety and quality standards to provide peace of mind to our customers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p>Our vision is to become a global leader in accessible hearing solutions, bridging the gap between affordability and top-tier quality. We aim to ensure that no one is left without the hearing support they need, regardless of their socioeconomic background.</p>
          <ul className="list-disc pl-5">
            <li><strong>Global Reach:</strong> Aim to become a worldwide leader in providing affordable hearing aids that are accessible to all demographics.</li>
            <li><strong>Innovation-Driven Solutions:</strong> Continuously innovate to develop more advanced, user-friendly hearing aids that meet evolving needs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Our Journey</h2>
          <ul className="list-disc pl-5">
            <li><strong>2016:</strong> Audek Group was formed in California, US.</li>
            <li><strong>2019:</strong> Received certification of ISO and RoHS compliant.</li>
            <li><strong>2020:</strong> All products got CE certified for sale in the global market.</li>
            <li><strong>2022:</strong> Opened Subsidiary of Audek in India.</li>
            <li><strong>2023:</strong> Developed after-sales service and repair centers in US and India.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p><strong>Audek India Pvt. Ltd.</strong></p>
          <p><strong>Phone:</strong> +91 9769764065</p>
          <p><strong>Email:</strong> info@audekindia.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <ul className="list-disc pl-5">
            <li>About Us</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  );
}
