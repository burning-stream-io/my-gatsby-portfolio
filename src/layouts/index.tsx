import React, { FC, CSSProperties, ReactNode, useEffect, useRef } from "react";
import {
  Transition,
  TransitionGroup,
  TransitionStatus,
} from "react-transition-group";
import Header from "../components/Header";
import Banners from "../components/Banners";
import Aside from "../components/Aside";
import "./index.css";

type Props = {
  children: ReactNode;
  location: {
    pathname: string;
  };
};
const timeout = 500;

const getTransitionStyles: (status: TransitionStatus) => CSSProperties = (
  status
) => {
  switch (status) {
    case "entering":
      return {
        position: "absolute",
        opacity: 0,
      };
    case "entered":
      return {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 1,
        transform: "translateY(0)",
      };
    case "exiting":
      return {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0,
        transform: "translateY(200px)",
      };
    default:
      return {};
  }
};
const layout: FC<Props> = ({ children, location }) => {
  const firstTimeRun = useRef(true);
  useEffect(() => {
    if (firstTimeRun.current) {
      const body = document.querySelector("body");
      const themeFromLocalStorage = localStorage.getItem("theme");

      if (body) {
        themeFromLocalStorage
          ? body.setAttribute("data-theme", themeFromLocalStorage)
          : body.setAttribute("data-theme", "dark");
      }
      firstTimeRun.current = false;
    }
  }, []);
  return (
    <div className="main-container">
      <Header />
      <Aside />
      <Banners />
      <TransitionGroup component={null}>
        <Transition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status: TransitionStatus) => {
            return (
              <div className="main-content" style={getTransitionStyles(status)}>
                {children}
              </div>
            );
          }}
        </Transition>
      </TransitionGroup>
    </div>
  );
};
export default layout;
