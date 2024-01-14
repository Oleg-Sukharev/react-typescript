import * as yup from 'yup';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const INPUTS_FIELDS = [
  { name: 'name', label: 'Name', placeholder: 'John Doe' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'example@gmail.com' },
  { name: 'title', label: 'Title', placeholder: 'Need assistance', fullWidth: true },
  { name: 'comments', label: 'Comments', placeholder: 'Your Thoughts', fullWidth: true, isTextarea: true },
];

const SCHEMA = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is incorrect').matches(EMAIL_REGEX, 'Email is incorrect').required('Email is required'),
  title: yup.string().required('Title is required'),
  comments: yup.string().required('Comments are required'),
  country: yup.object().required('Country is required'),
});

const COUNTRY_SELECT = {
  label: 'country',
  options: [
    { label: "United States", value: "US" },
    { label: "Mexico", value: "MX" },
    { label: "Canada", value: "CA" },
  ]
}

export {
  SCHEMA,
  INPUTS_FIELDS,
  COUNTRY_SELECT
}
