import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
  title?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeigth?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  border?: string;
  hoverBackgroundColor?: string;
  focusBackgroundColor?: string;
  disabled?: boolean;
  textTransform?: string;
  lineHeight?: string;
  onClick?: () => void;
}

const styles = {
  container: {
    textTransform: 'none'
  },
  title: {
    fontFamily: 'Bahnschrift',
  },
  icon: {
    marginRight: '8px',
    width: '20px',
    height: '22px'
  }
};

export default function SubmitButton({
  title,
  width,
  height,
  fontSize,
  fontWeigth,
  backgroundColor,
  disabled,
  borderRadius,
  border,
  color,
  hoverBackgroundColor,
  focusBackgroundColor,
  textTransform,
  lineHeight,
  onClick
}: SubmitButtonProps) {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        ...styles.container,
        transition: 'none',
        border: border ? border : 'none',
        p: 0,
        lineHeight: lineHeight ? lineHeight : '1.5',
        textTransform: textTransform ? textTransform : 'capitalize',
        backgroundColor: backgroundColor ? backgroundColor : '#fff',
        width: width ? width : 'auto',
        height: height ? height : '44px',
        borderRadius: borderRadius ? borderRadius : '0',
        '&:hover': {
          backgroundColor: hoverBackgroundColor ? hoverBackgroundColor : '#0A771E'
        },
        '&:focus': {
          backgroundColor: focusBackgroundColor ? focusBackgroundColor : '#0A771E'
        }
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <Typography
        component="h2"
        sx={{
          ...styles.title,
          fontSize: fontSize ? fontSize : '16px',
          fontWeight: fontWeigth ? fontWeigth : '500',
          color: color ? color : '#fff'
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}
