import React  from "react";
import { FC } from "react";

type Props = {
  icon: string;
  title?: string;
  caption?: string;
  rate?: number;
  subtitle?: string;
  link?: string;

  footer?: string;
  type?: "with-link" | "with-modal";
};

const HalfCard: FC<Props> = ({
  icon,
  subtitle,
  link,

  title,
  caption,
  type,
  footer,
}) => {
  const renderContent: () => JSX.Element = () => {
    return (
      <>
        <div className="half-card-header">
          <img className="half-card-icon" src={icon} alt={icon} />
          <div>
            <h2 className="half-card-title">{title}</h2>
            {subtitle && <h3 className="half-card-subtitle">{subtitle}</h3>}
          </div>
        </div>
        <p className="half-card-caption">{caption}</p>
        {footer ? (
          <div className="half-card-footer">
            {footer ? (
              <h4 className="half-card-footer-text">{footer}</h4>
            ) : null}
          </div>
        ) : null}
      </>
    );
  };
  return type === "with-modal" ? (
    renderContent()
  ) : (
    <a href={link} target="_blank" className="half-card ">
      {renderContent()}
    </a>
  );
};

export default HalfCard;
