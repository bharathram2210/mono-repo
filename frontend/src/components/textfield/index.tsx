import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface CustomTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: boolean;
  [x: string]: any; // allows react-hook-form props like onChange, name, ref, etc.
}

const CustomTextField = React.forwardRef<
  HTMLInputElement,
  CustomTextFieldProps
>(({ label, helperText, error, type, ...rest }, ref) => {
  const [isPassword, setIsPassword] = React.useState(false);
  return (
    <Grid
      width="100%"
      display="grid"
      flexDirection="column"
      alignContent="center"
      justifyItems="flex-start"
    >
      {label && (
        <Typography variant="subtitle2" color="grey" fontWeight={500}>
          {label}
        </Typography>
      )}
      <TextField
        type={type === "password" && isPassword ? "text" : type}
        {...rest}
        inputRef={ref}
        error={error}
        helperText={helperText}
        slotProps={{
          input: {
            endAdornment: type === "password" && (
              <InputAdornment position="end">
                <IconButton
                  size="medium"
                  sx={{ mr: 0.5 }}
                  onClick={() => setIsPassword(!isPassword)}
                  edge="end"
                  data-testid="password-toggle"
                >
                  {isPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              height: 45,
              padding: "0 10px",
              borderRadius: 2,
            },
          },
        }}
      />
    </Grid>
  );
});

export default CustomTextField;
