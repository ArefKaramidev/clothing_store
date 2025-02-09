import starsIcon from "../../assets/stars.svg";
import tickIcon from "../../assets/tick.svg";
import { comment } from "../../types/comment";
const CommentBox = ({ userName, des }: comment) => {
  return (
    <div className="p-10 border border-gray-300 rounded-2xl">
      <div className="flex flex-col items-start gap-y-5">
        <img src={starsIcon} alt="stars-icon" />
        <span className="font-bold flex items-center gap-x-2 text-xl">
          {userName}
          <img src={tickIcon} alt="tick-icon" />
        </span>
        <span className="break-all w-80 h-24">{des}</span>
      </div>
    </div>
  );
};

export default CommentBox;
