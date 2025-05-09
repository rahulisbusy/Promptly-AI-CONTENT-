"use client";
import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { TotalusageContext } from "../(context)/TotalusageContext";
import { useState } from "react";
import { UsersubContext } from "../(context)/UsersubContext";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [totalusage, setTotalusage] = useState<number>(0);
    const [usersubscription, setUsersubscription] = useState<boolean>(false);
  return (
    <TotalusageContext.Provider value={{totalusage, setTotalusage}}>
      <UsersubContext.Provider value={{usersubscription,setUsersubscription}}>


     
      <div className="bg-slate-100 h-screen">
        <div className="md:w-60 hidden md:block fixed">
          <Sidebar />
        </div>

        <div className="md:ml-60">
          <Header />
          {children}
        </div>
      </div>
      </UsersubContext.Provider>
    </TotalusageContext.Provider>
  );
}

export default Layout;