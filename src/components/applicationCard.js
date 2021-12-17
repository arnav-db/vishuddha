import React from "react";
import { Link } from "gatsby";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";

const ApplicationCard = ({ app }) => {
  const [copiedWord, setCopiedWord] = useState("");
  const [openSnackbar] = useSnackbar(options);

  return (
    <>
      <CopyToClipboard
        text={app.Alternative}
        onCopy={() => setCopiedWord(app.Alternative)}
      >
        <div
          className="flex-1 flex items-center justify-between border-t border-r border-l border-b border-gray-900 bg-white truncate"
          onClick={() =>
            openSnackbar(`"${app.Alternative}" copied to clipboard!`)
          }
        >
          <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
            <Link className="truncate text-gray-600 font-medium">
              {app.Word}
            </Link>
            <p className="truncate text-gray-900 font-medium">
              {app.Alternative}
            </p>
          </div>
        </div>
      </CopyToClipboard>
    </>
  );
};

// Snackbar(notification) options
const options = {
  position: "top-center",
  style: {
    backgroundColor: "#ff5722",
    color: "#ededed",
    fontFamily: "Inter var",
    fontSize: "20px",
    textAlign: "center",
  },
};

export default ApplicationCard;
