export default function MeteorBackground({ number }: { number?: number }) {
  const meteors = new Array(number || 20).fill(true);

  return (
    <div className="fixed -z-10 w-dvw h-dvh overflow-hidden">
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className="animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded bg-theme shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-theme before:to-transparent"
          style={{
            top: -10,
            left: `${Math.floor(Math.random() * 2000 + -500)}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.floor(Math.random() * 30 + 10)}s`,
          }}
        ></span>
      ))}
    </div>
  );
}
