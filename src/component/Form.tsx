import {ComponentPropsWithoutRef} from "react";

type FormProps = ComponentPropsWithoutRef<'form'>

export default function Form(props: FormProps) {
    const { children } = props;

    return (<form {...props}>
            {children}
    </form>
    );
}
