import NextLink from "next/link"

export default function Link({href, children, ...props}) {
    return (
        <NextLink href={href} {...props} passHref>
            <a>{children}</a>
        </NextLink>
    )
}