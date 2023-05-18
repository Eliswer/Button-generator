import Header from "./Header";

import sourceCode from "../icons/Source-code.svg";

function CodeToCopy() {
  return (
    <div>
      <Header icon={sourceCode} title={"Code to copy"} />
    </div>
  );
}

export default CodeToCopy;
