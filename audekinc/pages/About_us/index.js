import { useRouter } from 'next/router';
import Image from 'next/image';
import Footer from '@/component/footer';

export default function AboutSlugPage() {
  const { slug } = useRouter().query;

  return (
    <div className="flex flex-col items-center px-4 space-y-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center">
        About Us - Why Audek? {slug}
      </h1>

      {/* Intro Video */}
      <div className="w-full max-w-4xl">
        <video
          controls
          src="/a-group_22 (1).mp4"
          className="w-full rounded-lg shadow-md h-[300px]"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Mission */}
        <div className="space-y-4">
          <Image
            src="/mission-img.png"
            alt="Mission"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-bold text-red-600">Mission</h2>
          <ul className="text-gray-700 list-disc space-y-2 pl-5">
            <li><strong>Affordability:</strong> Offer high-quality hearing aids at accessible price points.</li>
            <li><strong>Accessibility:</strong> Make hearing aids easy to use for all.</li>
            <li><strong>Safety & Quality:</strong> Ensure all products meet stringent standards.</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="space-y-4">
          <Image
            src="/vision-img.png"
            alt="Vision"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-bold text-red-600">Vision</h2>
          <ul className="text-gray-700 list-disc space-y-2 pl-5">
            <li><strong>Global Reach:</strong> Become a worldwide leader in affordable hearing aids.</li>
            <li><strong>Innovation:</strong> Develop advanced, user-friendly hearing aids.</li>
          </ul>
        </div>
      </div>

      {/* R&D and Training Center */}
      <div className="flex flex-col items-center w-full space-y-16">
        {/* R&D Center */}
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-4xl bg-red-500 text-white rounded-md py-2">Audek India - R&D Center</h1>
          <h2 className="text-xl text-gray-700 mt-2">Innovation is the Key To Your  Satisfaction</h2>
          <video
            controls
            src="/R&D.mp4"
            className="w-full h-[500px] rounded-lg shadow-md mt-4"
          />
        </div>

        {/* Training Center */}
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-4xl bg-red-500 text-white rounded-md py-2">Audek India - Training Center</h1>
          <h2 className="text-xl text-gray-700 mt-2">Perfecting Innovation Through Training</h2>
          <video
            controls
            src="/Train.mp4"
            className="w-full h-[300px] rounded-lg shadow-md mt-4"
          />
        </div>

        {/* Journey Section */}
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-4xl bg-red-500 text-white rounded-md py-2">Our Journey Through Time</h1>
          <video
            controls
            src="/Journey.mp4"
            className="w-full h-[500px] rounded-lg shadow-md mt-4"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
