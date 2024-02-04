import * as React from "react";

// import logo from "@/assets/logo.svg";
import { Link } from "@/components/Elements";
import { Head } from "@/components/Head";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="">
        <div className="">
          <div className="">
            <Link className="" to="/">
              {/* <img className="h-24 w-auto" src={logo} alt="Workflow" /> */}
              <h1>React + thita</h1>
            </Link>
          </div>

          <h2 className="">{title}</h2>
        </div>

        <div className="">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};
