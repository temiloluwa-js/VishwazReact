import React from "react";

function MemoComponent({ name }) {
  console.log("Render component");
  return <div>{name}</div>;
}

export default React.memo(MemoComponent);
