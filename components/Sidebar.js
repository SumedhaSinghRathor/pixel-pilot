import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Sidebar() {
  return (
    <div className="border border-white w-[20vw] rounded-2xl flex flex-col justify-end p-5 pb-2.5">
      <div className="text-sm">
        <div>
          <h3 className="font-bold">Today</h3>
          <p className="border border-white line-clamp-1 p-2.5">
            Short-Run Production Analysis
          </p>
        </div>
        <div>
          <h3 className="font-bold">Yesterday</h3>
          <p></p>
        </div>
        <div>
          <h3 className="font-bold">Last Week</h3>
          <p></p>
        </div>
      </div>
      <div className="bg-white size-10 p-3 rounded-full">
        <FontAwesomeIcon icon={faUser} className="text-purple" />
      </div>
    </div>
  );
}
