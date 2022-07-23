import React, { FC } from "react";
import "./index.css";
type Props = {
  title?: string;
};

const defaultProps = {
  title: "Title",
};
const Title: FC<Props> = ({ title }) => {
  return (
    <div className="title-container">
      <span className="title">{title}</span>
      <span className="turncate" />
    </div>
  );
};
Title.defaultProps = defaultProps;
export default Title;
