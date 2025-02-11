import React from "react";
import { FaApple } from "react-icons/fa";
import { SiHuawei, SiXiaomi, SiOneplus } from "react-icons/si";

const Navigation = () => {
  const commonLinkClass =
    "w-full flex justify-start gap-2 p-2 border-b-2 hover:bg-red-100 transition-colors duration-200";

  return (
    <div className="bg-white h-52 w-[120%] top-[110%] left-0 rounded-3xl absolute px-2">
      <ul className="text-black p-4">
        <li>
          <a href="" className={commonLinkClass}>
            <FaApple className="inline text-2xl" />
            Iphone
          </a>
        </li>
        <li>
          <a href="" className={commonLinkClass}>
            <SiHuawei className="text-2xl" />
            Huawei
          </a>
        </li>
        <li>
          <a href="" className={commonLinkClass}>
            <SiOneplus className="inline text-2xl" />
            Oneplus
          </a>
        </li>
        <li>
          <a href="" className={commonLinkClass}>
            <SiXiaomi className="inline text-2xl" />
            Xiaomi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
