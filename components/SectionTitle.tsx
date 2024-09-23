export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-center text-4xl font-bold leading-relaxed tracking-wide xl:text-6xl">
      {title}
    </h2>
  );
}
