"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { HISTORY } from "@/app/dashboard/historytable";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscribtionContex";
import { UpdateCreditUsageContext } from "@/app/(context)/UpadeCreditUsageContext";
import Link from "next/link";

function UsageTrack() {
  const { user } = useUser();
  const {totalUsage, settotalUsage} = useContext<any>(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const [maxWords, setMaxWords] = useState(50000);
  const {updateCreditUsage, setUpdateCreditUsage} = useContext<any>(UpdateCreditUsageContext);  



  useEffect(() => {
    user && GetData();
    user && IsUserSubscribe();
  }, [user]);

  useEffect(() => {
    user&&GetData();
  }, [updateCreditUsage&&user]);

  const GetData = async () => {
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress!));

    GetTotalUsage(result);
  };

  const IsUserSubscribe=async()=>{
    const result = await db
    .select()
    .from(UserSubscription)
    .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress!));

    if(result)
    {
      setUserSubscription(true);  
       setMaxWords(100000);

    }
  }

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });

    settotalUsage(total);
    console.log(total);
  };

  return (
    <div className="m-3">
      <div className="p-3 bg-primary sm:p-3 shadow-sm border-b-2 flex flex-col sm:flex-row  justify-between items-center gap-4 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full "
            style={{ width: (totalUsage/maxWords)*100+"%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/{maxWords} credit used</h2>
      </div>
      <Link href={"/dashboard/billing"}>
      <Button variant={"secondary"} className="w-full my-3 text-primary">
        Upgarde
      </Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
