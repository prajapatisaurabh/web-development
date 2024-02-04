import * as React from "react";

import { Head } from "../Head";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="py-6">
        <div className="">
          <h1 className="">{title}</h1>
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
};
