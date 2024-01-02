import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import ConversationPage from "./(routes)/conversation/page";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  
  return ( 
    <div className="h-full relative flex flex-col lg:flex-row">
      <div className="hidden md:flex md:w-60 lg:w-72 fixed inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="flex-1 md:pl-60 lg:pl-72">
        <Navbar />
        <div className="">
          <ConversationPage />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
