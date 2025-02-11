'use client';
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscribtionContex';
import { UpdateCreditUsageContext } from '../(context)/UpadeCreditUsageContext';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totalUsage, settotalUsage] = useState<number>(0); // Initialize with a default value
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, settotalUsage }}>
      {/* Fix: Provide an object instead of an array */}
      <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
        <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
          <div className="bg-slate-100 h-screen">
            <div className="md:w-64 hidden md:block fixed">
              <SideNav />
            </div>

            <div className="md:ml-64">
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default Layout;