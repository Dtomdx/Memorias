import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Input;
