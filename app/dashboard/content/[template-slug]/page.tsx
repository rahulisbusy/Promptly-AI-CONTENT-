"use client"
import React, { use, useState, useContext } from "react";
import Inputsection from "../_components/Inputsection";
import Outputsection from "../_components/Outputsection";
import { TEMPLATES } from "../../_components/Templatelist";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { generateAIContent } from "@/services/Aimodel";
import { AIoutput } from "@/services/schema";
import { db } from "@/services/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalusageContext } from "@/app/(context)/TotalusageContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { UsersubContext } from "@/app/(context)/UsersubContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function ContentForm(props: PROPS) {
  const params = use(props.params); // Unwrap the params Promise
  const selectedTemplate: TEMPLATES | undefined = Templates.find(
    (template: TEMPLATES) => template.slug === params["template-slug"]
  );

  const [loading, setLoading] = useState<boolean>(false);
  const { totalusage, setTotalusage } = useContext(TotalusageContext);
  const router = useRouter();
  const notify = () =>
    toast.error(
      "You have reached your monthly limit of 5000 credits. Please upgrade your plan to continue using the service.",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );

  const [aiOutput, setAiOutput] = useState<string>("");
  const {usersubscription,setUsersubscription}=useContext(UsersubContext);

  const { user } = useUser();

  const generateAIcontent_1 = async (formdata: any) => {
    if (totalusage >= 5000 && !usersubscription) {
      notify();
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      router.push("/dashboard/billing");
      return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formdata) + "," + selectedPrompt;
    const result = await generateAIContent(finalPrompt);
    console.log(result);
    setAiOutput(result || "");
    await saveToDB(formdata, selectedTemplate?.slug, result || "");
    setLoading(false);
  };

  const saveToDB = async (formdata: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIoutput).values({
      formdata: formdata,
      template: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
  };

  return (
    <div className="p-5 hover:shadow-md rounded-md bg-white ">
      <Link href={"/dashboard"}>
        <Button className="cursor-pointer">
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5 my-3">
        <div className="col-span-2">
          <Inputsection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => generateAIcontent_1(v)}
            loading={loading}
          />
        </div>
        <div className="col-span-3">
          <Outputsection output={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default ContentForm;