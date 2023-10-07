import { Loader2 } from "lucide-react";

export default function Loading(){
    return (
        <div className="w-full h-full justify-center">
            <Loader2 className="w-8 h-8 animate-spin"/>
        </div>
    );
}