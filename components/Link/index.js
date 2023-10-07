import NextLink from "next/link";

export default function Link({children, ...props}){
    return <NextLink {...props} className="hover:text-sky-600">{children}</NextLink>
}