import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  url: Yup.string()
    .url('Enter a valid URL')
    .required('URL is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
