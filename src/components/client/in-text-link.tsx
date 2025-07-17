import Link from "next/link";

interface InTextLinkProps {
    linkHREF: string;
    children: React.ReactNode;
}

export default function InTextLink({linkHREF, children}: InTextLinkProps) {

    return (
        <Link href={linkHREF} className="text-cyan-700 hover:text-gray-600 hover:text-shadow-sm hover:text-shadow-black/10">
            {children}
        </Link>
    )
}