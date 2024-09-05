interface ElementProps {
    children?: ReactElement;
    className?: string;
}

type BaseDivAttributes = React.ComponentPropsWithoutRef<'div'>;
interface DivElementProps extends BaseDivAttributes {}
