"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

    return (
      <Sheet> 
        <SheetTrigger> 
          <Button variant="ghost" size="icon" className="md:hidden"> 
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0"> 
          <Sidebar isPro={isPro}  apiLimitCount={apiLimitCount} />
        </SheetContent>
      </Sheet>
    )
}


export default MobileSidebar;













































