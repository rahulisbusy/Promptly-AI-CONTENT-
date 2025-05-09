"use client";
import React from "react";
import Image from "next/image";
import { History, HomeIcon, Settings, Wallet2 } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UsageToken from "./UsageToken";

function Sidebar() {
  const menulist = [
    {
      name: "Home",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet2,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();

  return (
    <div className=" h-screen p-2 shadow-lg border bg-white">
      <div className="flex justify-center items-center">
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={200}
          width={200}
          className="m-auto"
        />
      </div>
      <hr className="mt-2 border" />
      <div className="mt-5">
        {menulist.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex items-center gap-10 mb-2 p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path === item.path && "bg-primary text-white"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <h2 className="text-lg">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 right-0 p-2">
        <UsageToken />
      </div>
    </div>
  );
}

export default Sidebar;