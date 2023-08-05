import './App.css';
import React, { useState } from 'react';

// Custom hook for form validation
const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form validation function
const validateForm = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (!values.retypePassword) {
    errors.retypePassword = 'Please retype your password';
  } else if (values.retypePassword !== values.password) {
    errors.retypePassword = 'Passwords do not match';
  }

  return errors;
};

const RegistrationForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
    phoneNumber: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: '',
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormValidation(
    initialState,
    validateForm
  );

  return (
    <div className='style'>
      <div className='text'>
        <h2>Register Here</h2> <br></br>
        <h1>USER REGISTRATION</h1> <br></br>
        <p>Fields marked <span>*</span> are required</p> <br></br>
      </div>


      <form onSubmit={handleSubmit} className='form'>
        <div className='flex'>
          <div className='label'>
            <label htmlFor="firstName">First Name <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="lastName">Last Name <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className='flex'>
          <div className='label'>
            <label className='mr' htmlFor="email">Email <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="password">Password <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="retypePassword">Retype Password <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="password"
              id="retypePassword"
              name="retypePassword"
              value={values.retypePassword}
              onChange={handleChange}
            />
          </div>
          {errors.retypePassword && <p className="error">{errors.retypePassword}</p>}
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="phoneNumber">Phone Number <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="address">Address <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="town">Town</label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="town"
              name="town"
              value={values.town}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="region">Region <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="region"
              name="region"
              value={values.region}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="postcode">Postcode/ZIP <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={values.postcode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex'>
          <div className='label'>
            <label htmlFor="country">Country <span>*</span></label>
          </div>
          <div className='inp'>
            <input
              type="text"
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
              placeholder="United Kingdom"
            />
          </div>
        </div>

        <button type="submit" disabled={isSubmitting}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;