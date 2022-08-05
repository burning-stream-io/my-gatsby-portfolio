import React, { FC, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { cloneDeep } from "lodash";

type Props = {
  animationData: any;
  loop?: boolean;
  autoPlay?: boolean;
  className?: string;
  onComplete?: () => void;
};
const OptimizedLottie: FC<Props> = ({
  animationData,
  loop,
  autoPlay,
  className,
  onComplete,
}) => {
  const lottieRef = useRef<any>(null);
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
    return () => {
      if (lottieRef.current) {
        lottieRef.current.destory();
      }
      lottieRef.current = null;
    };
  }, []);

  return (
    <Lottie
      className={className}
      ref={lottieRef}
      animationData={cloneDeep(animationData)}
      autoPlay={autoPlay}
      loop={loop}
      onComplete={onComplete}
    />
  );
};
export default OptimizedLottie;
