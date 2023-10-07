import { Loader2 } from "lucide-react";

export default function Loading(){
    return (
        <div className="w-full h-full flex items-center justify-center min-h-[500px]">
            <Loader2 className="w-8 h-8 animate-spin"/>
        </div>
    );
}