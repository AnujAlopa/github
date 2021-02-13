import React from 'react';
import { makeStyles, Typography, Card, Grid, Button } from '@material-ui/core';
import GoogleMap from './GoogleMap';
import { Formik, Form, Field, connect } from 'formik';
import { string, object } from 'yup';
import FormikTextField from '../../components/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#A9A9A9',
        marginTop: "80px",
    },
    fieldStyle: { padding: "10px 5px 20px 5px" },
    inputItem: { width: "100%" },
    submitBtn: { width: "242px", height: "36px", textTransform: "uppercase", backgroundColor: "rgba(75, 123, 227, 1)", color: '#fff', borderRadius: "25px", border: "1px solid black", marginLeft: 25, fontWeight: "500 !important", [theme.breakpoints.down('md')]: { width: "100px", marginLeft: '10px' } },
    cardStyle: { height: "100%", width: "100%", backgroundColor: '#fff' },
    divStyle:{padding:"50px"},
    headingStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "24px" },
    descriptionStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "14px" }
}));

const FormDetails = () => {
    const classes = useStyles();

    let yupSchema = object().shape({
        Name: string().required("This feild is required."),
        Subject: string().required("This feild is required."),
        Message: string().required("Medium is required.")
    });
    let fieldVariables = { Name: '', Subject: '', Message: '' }
    let handleSubmit = () => {

    }
    return (
        <>
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card>
                        <Formik onSubmit={handleSubmit} validationSchema={yupSchema} initialValues={fieldVariables}>
                            {(props) => (
                                <Form>         <Grid container>
                                    <Grid item lg={6} md={6} sm={12} xs={12} className={classes.fieldStyle}>
                                        <Field
                                            className={classes.inputItem}
                                            variant="filled"
                                            label="Name"
                                            inputProps={{ autoComplete: "off" }}
                                            name="Name"
                                            component={FormikTextField}
                                        />
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={12} xs={12} className={classes.fieldStyle}>

                                        <Field
                                            className={classes.inputItem}
                                            variant="filled"
                                            label="Subject"
                                            inputProps={{ autoComplete: "off" }}
                                            name="Subject"
                                            component={FormikTextField}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.fieldStyle}>

                                        <Field
                                            className={classes.inputItem}
                                            variant="filled"
                                            label="Message"
                                            name="Message"
                                            multiline
                                            rows={5}
                                            component={FormikTextField}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ width: '100%', marginBottom: "17px" }}>
                                        <Button type="submit" className={classes.submitBtn}>Send</Button>
                                    </Grid>
                                </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Card>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className={classes.cardStyle}>
                        <div className={classes.divStyle}>
                        <Typography>Mob. 9335471256, 8176976885, 8960338825</Typography>
                        <Typography>sales@electricaltrendz.com</Typography>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default FormDetails;
