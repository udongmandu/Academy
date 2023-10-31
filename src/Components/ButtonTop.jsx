import React from "react";

export default function Button(props) {
  const { styleClass, onClick, disabled, label } = props;

  return (
    <button className={styleClass} onClick={onClick} disabled={disabled}>
      <span className="baemin font-extrabold">{label}</span>
    </button>
  );
}
