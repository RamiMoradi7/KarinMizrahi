export default function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`${className} text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 text-[#E43AA7] tracking-wide uppercase shadow-md`}
    >
      {title}
    </h2>
  );
}
