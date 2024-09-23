export default function CardTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold leading-relaxed tracking-wide xl:text-4xl">
      {title}
    </h2>
  );
}
