import React from "react";

export function ExternalLink(props: React.PropsWithChildren & {href: string, newTab?: boolean}) {
    return (
        <a className="text-secondary underline hover:font-semibold" href={props.href} target={props.newTab ? '_blank' : ''}>{props.children}</a>
    )
}