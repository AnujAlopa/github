import React from "react";
import { TextField, FormHelperText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { getIn } from "formik";
const useStyles = makeStyles({
   ieRemoveIcon:{ '& input::-ms-clear':{'display': 'none'}, '& input::-ms-reveal':{'display': 'none'}, }
  });
export default function({
  field,
  form,
  name,
  helperText,
  error,
  onChange,
  onBlur,
  displayErrorMessage = true,
  ...otherProps
}) {
const classes = useStyles();
  const changeHandler = event => {
    form.setFieldValue(field.name, event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  const blurHandler = event => {
    form.setFieldTouched(field.name);
    if (onBlur) {
      onBlur(event);
    }
  };
  const touch = getIn(form.touched, field.name);
  const errorText = getIn(form.errors, field.name);

  return (
    <>
      <TextField
      //  key={field.name}
        name={field.name}
        value={field.value || ''}
        onChange={changeHandler}
        onBlur={blurHandler}
          InputProps={{
                            type: field.name,
                       className:classes.ieRemoveIcon
                    }}
  
        {...otherProps}
        error={touch && errorText ? true : false}
      />
      {displayErrorMessage ? (
        <FormHelperText error={Boolean(touch && errorText)}>
          {(touch && errorText) || helperText}
        </FormHelperText>
      ) : (
        helperText && <FormHelperText>{helperText}</FormHelperText>
      )}
    </>
  );
}
