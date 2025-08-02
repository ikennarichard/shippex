import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Uername/Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
