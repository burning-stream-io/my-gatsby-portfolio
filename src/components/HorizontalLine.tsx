import React, { FC } from "react";
type Props = {
  width?: string;
  borderType?: string;
  borderColor?: string;
  margin?: string;
};

const defaultProps = {
  width: "80%",
  borderType: "dotted",
  borderColor: "rgba(225,225,235,.15)",
  margin: "1rem 0",
};
const HorizontalLine: FC<Props> = ({
  width,
  borderType,
  borderColor,
  margin,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width,
          borderBottom: `${borderType} 2px ${borderColor}`,
          margin,
        }}
      />
    </div>
  );
};
HorizontalLine.defaultProps = defaultProps;
export default HorizontalLine;
