"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { useParams } from "next/navigation";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Z_UNKNOWN } from "zlib";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from 'next/navigation';
import { UserSubscriptionContext } from "@/app/(context)/UserSubscribtionContex";
import { UpdateCreditUsageContext } from "@/app/(context)/UpadeCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

interface FormData {
  // Add properties here that reflect the shape of your form data
  [key: string]: string;
}
function CreateNewContent(props: PROPS) {
  const params = useParams(); // Correctly get params in a Client Component
  const templateSlug = params["template-slug"];

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item: TEMPLATE) => item.slug == templateSlug
  );
  const [loading, setLoading] = useState<boolean>(false);

  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router=useRouter();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const {totalUsage, settotalUsage} = useContext(TotalUsageContext);
const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext); 

/**
 * Used to genrate content from AI
 * @param FormData 
 * @returns 
 */

  const GenrateAiContent = async (FormData: any) => {
if(totalUsage>=50000&&!userSubscription)
{
  console.log("please upgrade your plan");
  router.push("/dashboard/billing")
  return ;
}

    setLoading(true);
    const SelectedPromt = selectedTemplate?.aiPrompt;
    const FinalAIPromt = JSON.stringify(FormData) + ", " + SelectedPromt;

    const result = await chatSession.sendMessage(FinalAIPromt);

    // Extract AI-generated text
    const generatedText =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response";

    console.log("AI Response:", generatedText);

    setAiOutput(result?.response.text());
    await saveInDb(FormData, selectedTemplate?.slug, generatedText);
    setLoading(false);
    setUpdateCreditUsage(Date.now()); 
  };
  const saveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress!,
      createdAt: moment().format("DD/MM/YYYY"),
    });
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back{" "}
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(data: any) => GenrateAiContent(data)}
          loading={loading}
        />
        {/* outPutSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
