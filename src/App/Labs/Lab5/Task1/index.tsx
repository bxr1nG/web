import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styles from "./styles.module.scss";

const validationSchema = yup.object({
    name: yup.string().required("Email is required"),
    surname: yup.string().required("Email is required"),
    patronymic: yup.string().required("Email is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    phoneNumber: yup.string().phone().required("Phone is required"),
    gender: yup.boolean().required("Gender is required"),
    birthDate: yup.string().required("Birth date is required")
});

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            patronymic: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            phoneNumber: "",
            gender: true,
            birthDate: Date.now()
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <Paper className={styles.container}>
            <form
                onSubmit={formik.handleSubmit}
                className={styles.form}
            >
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    id="surname"
                    name="surname"
                    label="Surname"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.surname && Boolean(formik.errors.surname)
                    }
                    helperText={formik.touched.surname && formik.errors.surname}
                />
                <TextField
                    fullWidth
                    id="patronymic"
                    name="patronymic"
                    label="Patronymic"
                    value={formik.values.patronymic}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.patronymic &&
                        Boolean(formik.errors.patronymic)
                    }
                    helperText={
                        formik.touched.patronymic && formik.errors.patronymic
                    }
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />
                <TextField
                    fullWidth
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.passwordConfirmation &&
                        Boolean(formik.errors.passwordConfirmation)
                    }
                    helperText={
                        formik.touched.passwordConfirmation &&
                        formik.errors.passwordConfirmation
                    }
                />
                <Box sx={{ width: "100%" }}>
                    <div>Security</div>
                    <LinearProgress
                        variant="determinate"
                        value={
                            ((+/[a-z]/.test(formik.values.password) +
                                +/[A-Z]/.test(formik.values.password) +
                                +/[0-9]/.test(formik.values.password) +
                                +/[@#$%^&*]/.test(formik.values.password)) /
                                4) *
                            100
                        }
                    />
                </Box>
                <TextField
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.phoneNumber &&
                        Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                />
                <FormControlLabel
                    control={<Checkbox checked={formik.values.gender} />}
                    label={`Gender: ${
                        formik.values.gender ? "male" : "female"
                    }`}
                    name="gender"
                    onChange={formik.handleChange}
                />
                <DatePicker
                    onChange={(value) =>
                        formik.setFieldValue("birthDate", value, true)
                    }
                    value={formik.values.birthDate}
                    renderInput={(params) => (
                        <TextField
                            id="birthDate"
                            name="birthDate"
                            label="Birth Date"
                            error={
                                formik.touched.birthDate &&
                                Boolean(formik.errors.birthDate)
                            }
                            helperText={
                                formik.touched.birthDate &&
                                formik.errors.birthDate
                            }
                            {...params}
                        />
                    )}
                />
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Paper>
    );
};

export default Task;
