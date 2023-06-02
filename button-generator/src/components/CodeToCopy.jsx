import Header from "./Header";

import sourceCode from "../icons/Source-code.svg";

/*import { useSelector } from "react-redux";*/

function CodeToCopy() {
  /*  const className = useSelector(
    (state) => state.general.className
  )?.newClassName;*/

  return (
    <div>
      <Header icon={sourceCode} title={"Code to copy"} />
    </div>
  );
}

export default CodeToCopy;
