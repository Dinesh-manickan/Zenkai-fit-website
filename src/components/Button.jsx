import React from "react";

export default function Button(props) {
  const { text, func, isDisabled } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue border-solid blueShadow duration-200"
      disabled={isDisabled}
    >
      <p>{text}</p>
    </button>
  );
}
