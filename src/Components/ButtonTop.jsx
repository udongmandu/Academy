import React from "react";

export default function Button(props) {
  const { styleClass, onClick, disabled, label } = props;

  return (
    <button className={styleClass} onClick={onClick} disabled={disabled}>
      <span className="font-extrabold fontA">{label}</span>
    </button>
  );
}
