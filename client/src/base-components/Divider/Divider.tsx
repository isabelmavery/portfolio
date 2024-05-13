import React from "react";
import "./Divider.css";

export default function Divider(props: { style?: React.CSSProperties }) {
  const { style } = props;
  return <div className="divider" style={style}></div>;
}
