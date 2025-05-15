import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { appColors } from "../assets/theme/app-colors";

type CustomButtonProps = {
  variant: "contained" | "outlined";
  size: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "info";
};

export const CustomButton = styled(Button)<CustomButtonProps>(({
  variant,
  size,
  color = "primary",
}) => {
  const colors = appColors;
  const current = colors[color];
  return {
    "&&&": {
      textTransform: "none",
      fontWeight: 500,
      fontSize:
        size === "small" ? "0.75rem" : size === "medium" ? "0.875rem" : "1rem",
      padding:
        size === "small"
          ? "4px 10px"
          : size === "medium"
            ? "6px 29px"
            : "8px 44px",
      borderRadius: 13,
      ...(variant === "contained" && {
        color: current.text,
        background: `radial-gradient(circle 382px at 50% 50.2%, ${current.main} 0.1%, ${current.dark} 100.2%)`,
        "&:hover": {
          background: `radial-gradient(circle 382px at 50% 50.2%, ${current.dark} 0.1%, ${current.main} 100.2%)`,
        },
        "&:disabled": {
          background: "#ccc",
          color: "#fff",
        },
      }),

      ...(variant === "outlined" && {
        color: current.main,
        border: `2px solid ${current.main}`,
        background: "transparent",
        "&:hover": {
          color: current.text,
          border: `2px solid #fff`,
          background: `radial-gradient(circle 382px at 50% 50.2%, ${current.light} 0.1%, ${current.main} 100.2%)`,
        },
        "&:disabled": {
          color: "#aaa",
        },
      }),
    },
  };
});

// export const PrimaryButton = styled(Button)<{ variant: 'contained' | 'outlined', size: 'small' | 'large' | 'medium' }>(({ variant, size }) => ({
//     '&&&': {
//         textTransform: 'none',
//         fontWeight: 500,
//         fontSize: size === 'small' ? 'small' : size === 'medium' ? 'medium' : 'large',
//         borderRadius: 10,
//         ...(variant === 'contained' && {
//             color: '#fff',
//             background: 'radial-gradient(circle 382px at 50% 50.2%, rgba(73,76,212,1) 0.1%, rgba(6, 3, 85, 0.84) 100.2%)',
//             '&:hover': {
//                 background: 'radial-gradient(circle 382px at 50% 50.2%, rgb(92, 94, 206) 0.1%, rgba(34, 30, 141, 0.84) 100.2%)',
//             },
//             '&:disabled': {
//                 background: '#ccc',
//                 color: '#fff',
//             },
//         }),
//         ...(variant === 'outlined' && {
//             color: '#492fd4',
//             border: '2px solid #492fd4',
//             background: 'transparent',
//             '&:hover': {
//                 border: '2px solid #ffff',
//                 color: '#fff',
//                 background: 'radial-gradient(circle 382px at 50% 50.2%, rgb(92, 94, 206) 0.1%, rgba(34, 30, 141, 0.84) 100.2%)',
//             },
//             '&:disabled': {
//                 color: '#aaa',
//                 borderColor: '#aaa',
//             },
//         }),
//     },
// }));
