//empty.ts
import React from 'react'
import Image from 'next/image';
interface EmptyProps {
  label: string;
}
const Empty = ({
  label
}: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center"> 
       <div className="relative h-56 w-56"> 
        <Image
          alt="Logo"
          fill
          src="/logo.png"
        />
      </div>
       <p className="text-muted-foreground text-sm text-center mt-[-20px]" >
          {label}
        </p>
      </div>
  )
}
export default Empty;