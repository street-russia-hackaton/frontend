import Button from './SubmitBtn';

interface SubmitButtonProps {
    title?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeigth?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    hoverBackgroundColor?: string;
    focusBackgroundColor?: string;
    disabled?: boolean;
    lineHeight?: string;
    onClick?: () => void;
}

export default function SubmitButton({ width, title, height, fontSize, disabled, lineHeight, onClick }: SubmitButtonProps) {
    return <Button width={width} title={title} height={height} fontSize={fontSize} fontWeigth="400" backgroundColor="#fff" disabled={disabled} color="#222" hoverBackgroundColor="#F2F3F5" focusBackgroundColor="#F2F3F5" textTransform="uppercase" lineHeight={lineHeight} onClick={onClick} />;
}
