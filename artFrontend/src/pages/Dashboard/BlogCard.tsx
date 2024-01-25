import React from "react";

interface BlogCardProps {
  authorName: string;
  title: string;
  category: string;
  content: string;
  displayImage: string;
  displaImageID: string;
  user: {};
}

const BlogCard: React.FC<BlogCardProps> = ({
  authorName,
  title,
  category,
  content,
  displayImage,
  displaImageID,
  user,
}) => {
  return (
    <div className="w-[100%] lg:w-[60%] mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4">
      <img
        className="w-full h-48 object-cover"
        src={displayImage}
        alt={title}
      />

      <div className="p-4">
        <div className="mb-2 text-sm text-gray-600">{category}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div>
          <p className="text-sm font-semibold text-gray-700">
            Author: {authorName}
          </p>
          {/* Additional user information can be displayed here */}
        </div>
        {/* Additional user actions or information can be added here */}
      </div>
    </div>
  );
};

export default BlogCard;
