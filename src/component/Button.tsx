import {ComponentPropsWithoutRef} from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
    // const { el, ...otherProps} = props;
    if (isAnchorProp(props)) {
        return <a className={"button"} {...props}></a>
    }

    return <button className={"button"} {...props}></button>
}