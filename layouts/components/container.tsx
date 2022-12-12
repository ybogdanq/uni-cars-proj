import React from "react";

type Props = {
  children: JSX.Element;
};

export const Container = ({ children }: Props) => {
  return <div className="max-w-screen-2xl my-0 mx-auto">{children}</div>;
};
