"use client"; 

import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";
import { trackUpgradeButtonClick } from "@/utils/GtmEventsManager";
import Link from "next/link";

interface FreeCounterProps {
    apiLimitCount: number; 
    isPro: boolean;
}

export const FreeCounter = ({
    isPro = false,
    apiLimitCount = 0,
  }: 
    FreeCounterProps
  ) => {
    const proModal = useProModal();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
    
  
    if (isPro) {
      return null;
    }

    const handleButtonClick = () => {
      proModal.onOpen();
      trackUpgradeButtonClick();
    };
  
  

   return (
    <div className="px-3"> 
        <Card className="bg-white/10 border-0"> 
            <CardContent className="py-6"> 
               <div className="text-center text-sm text-white mb-4 
                space-y-2"> 
                 <p> 
                    {apiLimitCount} / {MAX_FREE_COUNTS} Free Queries 
                 </p>
                 <Progress
                   className="h-3"
                   value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                 />  
               </div>


              
                <Button onClick={handleButtonClick} className="w-full" variant="default" > 
                  Upgrade 
                  <Zap className="w-4 h-4 ml-2 fill-white" /> 
                </Button>
               
               

               
            </CardContent>
        </Card>
    </div>
   )
}





