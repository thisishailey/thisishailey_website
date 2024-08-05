import Image from "next/image";

export default function ProjectCardImages({ index }: { index: number }) {
  const src = [
    ["/projects/0/0.png", "/projects/0/1.png", "/projects/0/2.gif"],
    [
      "/projects/1/0.png",
      "/projects/1/1.png",
      "/projects/1/2.png",
      "/projects/1/3.gif",
    ],
    ["/projects/2/0.png", "/projects/2/1.gif", "/projects/2/2.gif"],
  ];

  return (
    <>
      {src[index].map((src, i) => (
        <Image
          key={i}
          className="snap-center snap-always min-w-[400px] min-h-[400px]"
          src={src}
          alt={`project${index} image${i}`}
          width={400}
          height={400}
          unoptimized={src.includes("gif")}
        />
      ))}
    </>
  );
}
