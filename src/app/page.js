import { ChatDisplay } from "./ChatDisplay";
import { Search } from "./Search";

export default function Home() {
  return (
    <>
      <div className="flex h-full gap-2.5">
        <div className="bg-white flex flex-col h-full px-15 py-7.5 rounded-2xl justify-end gap-2.5">
          <ChatDisplay />
          <Search />
          <p className="text-xs text-center text-purple selection:bg-purple selection:text-white">
            PixelPilot uses AI. Check for mistakes. Conversations are used to
            train AI and PixelPilot can learn about your interests. Change this
            anytime in your settings or{" "}
            <a
              href="https://github.com/SumedhaSinghRathor/PixelPilot"
              target="_blank"
              className="underline"
            >
              Learn More.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
