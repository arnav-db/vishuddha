import React from "react";
import { Link } from "gatsby";

const ApplicationCard = ({ app }) => {

  return (
    <>
      <div className="flex-1 flex items-center justify-between border-t border-r border-l border-b border-gray-900 bg-white truncate">
        <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
          <Link
            className="truncate text-gray-600 font-medium"
          >
            {app.Word}
          </Link>
          <p className="truncate text-gray-900 font-medium">
            {app.Alternative}
          </p>
        </div>
      </div>
    </>
  );
};

export default ApplicationCard;
