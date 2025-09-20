import ASCIIText from "./AsciiText";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* ASCII hero section */}
      <div className="relative h-[100vh] overflow-hidden">
        <ASCIIText text="404" enableWaves={true} asciiFontSize={8} />
      </div>

      {/* Content below (lower y-position) */}
      {/* <div className="px-4 text-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="mt-2 text-lg text-white/70">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
      </div> */}
    </div>
  );
}
