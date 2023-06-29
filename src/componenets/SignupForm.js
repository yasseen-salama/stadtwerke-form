import React from "react";
import { useFormik } from "formik";
import "../styles.css";


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      anrede: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="anrede">Anrede</label>
      <select 
        id="anrede" 
        name="anrede" 
        onChange={formik.handleChange} 
        value={formik.values.anrede}
      >
        <option value=""></option>
        <option value="Frau">Frau</option>
        <option value="Herr">Herr</option>
        <option value="Divers">Divers</option>
      </select>
      
      <label htmlFor="firstName">Vorname</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Nachname</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">E-Mail-Adresse</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm; 