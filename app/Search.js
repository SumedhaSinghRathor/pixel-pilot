import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faMicrophone,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export function Search() {
  return (
    <div className="bg-purple text-white w-full rounded-lg py-1.25 px-5 flex flex-col gap-1.25">
      <div className="text-xs bg-white text-purple max-w-40 font-bold p-1.25 rounded-sm items-center justify-between whitespace-nowrap flex gap-2.5">
        <p className="flex grow line-clamp-1 whitespace-nowrap truncate selection:bg-purple selection:text-white">
          The Forest of Enchantments
        </p>
        <FontAwesomeIcon icon={faXmark} className="size-4" />
      </div>
      <div className="flex items-center justify-around gap-5 text-2xl">
        <input type="file" accept="pdf/*" className="input-field" hidden />
        <FontAwesomeIcon
          icon={faPaperclip}
          className="size-8 hover:bg-white/20 transition-colors rounded-lg p-1"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Start Chatting..."
          className="bg-white text-purple text-lg placeholder:italic p-2.5 rounded-lg w-full h-fit selection:bg-purple selection:text-white focus:outline-none"
        />
        <FontAwesomeIcon
          icon={faMicrophone}
          className="size-8 hover:bg-white/20 transition-colors rounded-lg p-1"
        />
        <FontAwesomeIcon
          icon={faPlus}
          className="size-8 hover:bg-white/20 transition-colors rounded-lg p-1"
        />
      </div>
    </div>
  );
}
