import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

import MobileSidebar from './mobile-sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
    
    return (
      <div className="flex items-center justify-between p-4 w-full"> 
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <UserButton afterSignOutUrl="/" /> 
    </div>
    ); 
}

export default Navbar;






