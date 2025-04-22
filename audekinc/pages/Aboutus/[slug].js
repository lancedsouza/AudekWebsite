import { useRouter } from 'next/router';

export default function AboutSlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">About Us - {slug}</h1>
      <p>This is a dynamic About Us page for: <strong>{slug}</strong>.</p>
    </div>
  );
}
