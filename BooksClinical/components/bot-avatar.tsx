import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "./ui/avatar"

export const BotAvatar = () => {
    const { user } = useUser(); 
    return (
        <Avatar className="h-8 w-8"> 
           <AvatarImage src={user?.profileImageUrl} /> 
        </Avatar>
    );
};







