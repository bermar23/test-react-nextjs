import NextLink from "next/link";

export default function Link({ children, isActive, ...props }) {
  return (
    <NextLink {...props} className={`hover:text-sky-600 ${isActive ? "text-purple-600" : ""}`}>
      {children}
    </NextLink>
  );
}
