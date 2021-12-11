
import { useFormContext } from 'react-hook-form';
import AppTextInput from '../../app/components/AppTextInput';
import { Typography, Grid, TextField } from '@material-ui/core';


export default function PaymentForm() {
  const { control } = useFormContext();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AppTextInput name='nameOnCard' label='Name on card' control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
             id="cvv"
             label="CVV"
             helperText="Last three digits on signature strip"
             fullWidth
             autoComplete="cc-csc"
             variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}