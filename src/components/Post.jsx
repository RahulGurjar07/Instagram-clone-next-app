import { HiOutlineDotsVertical } from "react-icons/hi";
import LikeSection from "./LikeSection";
import CommentSection from "./CommentSection";

export default function Post({ post }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5 border-b border-gray-100">
        <img
          src={post.profilePic}
          alt={post.username}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <HiOutlineDotsVertical className="cursor-pointer h-5" />
      </div>
      <img
        src={post.image}
        alt={post.caption}
        className="object-cover rounded-sm h-96 w-full"
      />

      <LikeSection id={post.id} />

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>
      <CommentSection id={post.id} />
    </div>
  );
}
