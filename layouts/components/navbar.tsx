import React from "react";
import cn from "classnames";
import { Container } from "./container";
import Link from "next/link";

type Props = {};

const navbar = (props: Props) => {
  return (
    <div className={"bg-white"}>
      <Container>
        <div className="text-neutral-900 transition-all duration-200 px-5 py-8 flex justify-between items-center">
          <Link
            href="/"
            className="font-bold uppercase text-2xl hover:text-sky-900"
          >
            Automania
          </Link>
          <ul className="uppercase flex items-center [&>*:hover]:text-sky-900 [&>*+*]:pl-4">
            <li>
              <Link href="">Rules</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">FAQ</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default navbar;
