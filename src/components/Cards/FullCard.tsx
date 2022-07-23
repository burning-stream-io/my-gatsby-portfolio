import React, { FC, Fragment, ReactNode } from "react";

type Props = {
  logo?: string;
  startDate?: string;
  endDate?: string;
  title?: string;
  subtitle?: string;
  titleHref?: string;
  caption?: string;
  captions?: string[];
};

const FullCard: FC<Props> = ({
  logo,
  startDate,
  endDate,
  title,
  titleHref,
  caption,
  captions,
  subtitle,
}) => {
  const renderCaption = () => {
    if (caption) {
      return caption.split("\n").map((item, index) => {
        return (
          <Fragment key={index}>
            {item}
            <br />
          </Fragment>
        );
      });
    }
  };
  return (
    <div className="full-card">
      {/* lezzoo logo */}
      {logo || title || startDate || endDate ? (
        <div className="full-card-header">
          {logo && (
            <div className="full-card-logo">
              <img src={logo} alt="logo" />
            </div>
          )}
          {title && (
            <div className="full-card-header-text">
              <h3>
                <a href={titleHref} target={"_blank"}>
                  {title}
                </a>
              </h3>
              <p>{subtitle}</p>
            </div>
          )}
          {startDate && endDate ? (
            <div className="full-card-date">
              <h4>
                {startDate} - {endDate}
              </h4>
            </div>
          ) : null}
        </div>
      ) : null}
      {caption && <p className="full-card-caption">{renderCaption()}</p>}
      {captions && (
        <ul className="full-card-list">
          {captions.map((c, i) =>
            c === "\n" ? (
              <br key={i} />
            ) : (
              <li className="full-card-list-item" key={i}>
                <span className="full-card-caption">{c}</span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default FullCard;
