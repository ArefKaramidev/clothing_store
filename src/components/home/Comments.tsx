import { comments } from "../../constants/comments";
import CommentBox from "./CommentBox";

const Comments = () => {
  return (
    <div className="mt-10 flex flex-col ">
      <span className="text-5xl font-extrabold my-10 container p-5 lg:p-0 lg:mx-32">
        OUR HAPPY CUSTOMERS
      </span>
      <div className="flex items-center flex-wrap gap-5 justify-center">
        {comments.map((item) => (
          <CommentBox userName={item.userName} des={item.des} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
