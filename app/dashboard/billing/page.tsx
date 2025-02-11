"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscribtionContex";

function Billing() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const {userSubscription, setUserSubscription} = useContext(
    UserSubscriptionContext
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setRazorpayLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const OnPayment = (subId: string) => {
    if (!razorpayLoaded) {
      console.error("Razorpay script not loaded yet");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "AI Writer From Wachan",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      joinDate: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          Upgrade With Monthly Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-4xl font-bold mb-4">
              0$ <span className="text-lg font-medium">/month</span>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔️ 10,000 Words/Month</li>
              <li>✔️ 50+ Content Templates</li>
              <li>✔️ Unlimited Download & Copy</li>
              <li>✔️ 1 Month of History</li>
            </ul>
            <Button
              className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg font-medium cursor-not-allowed"
              disabled
            >
              Currently Active Plan
            </Button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-bold mb-2">Monthly</h2>
            <p className="text-4xl font-bold mb-4">
              9.99$ <span className="text-lg font-medium">/month</span>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔️ 1,00,000 Words/Month</li>
              <li>✔️ 50+ Template Access</li>
              <li>✔️ Unlimited Download & Copy</li>
              <li>✔️ 1 Year of History</li>
            </ul>
            <button
              disabled={loading || !razorpayLoaded}
              onClick={() => CreateSubscription()}
              className="ml-28 mt-6 flex gap-2 w-auto px-12 items-center border border-gray-800 text-gray-800 py-2  rounded-lg font-medium hover:bg-gray-800 hover:text-white transition"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {UserSubscription?"Active Plan": "Get Started"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
