import React from "react";
import { useFormik } from "formik";
import "../styles.css";

const SignupForm = ({ isPrivateCustomer, isMoveOut }) => {

  const formik = useFormik({
    initialValues: {
      anrede: '',
      firstName: '',
      lastName: '',
      email: '',
      birthdate: '',
      mobileNumber: '',
      companyName:'',
      legalForm:'',
      customerNumber: '',
      differentAddress: '',
      street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    energyType: '',
    electricMeterNumber: '',
    electricMeterStatusHT: '',
    electricMeterStatusNT: '',
    gasMeterNumber: '',
    gasMeterStatus: '',
    waterMeterNumber: '',
    waterMeterStatus: '',
    heatingMeterNumber:'',
    heatingMeterStatus:''
    },
    onSubmit: values => {
      // Format the date
      if (values.birthdate) {
        const dateParts = values.birthdate.split("-");
        values.birthdate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
      }
      
      alert(JSON.stringify(values, null, 2));
      console.log(isPrivateCustomer)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {!isPrivateCustomer && isMoveOut && (
  <>
    {/* business customers moving out */}
    <label htmlFor="companyName">Firmenbezeichnung</label>
    <input
      id="comapnyName"
      name="companyName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.companyName}
    />

    <label htmlFor="legalForm">Rechtsform</label>
    <select 
      id="legalForm" 
      name="legalForm" 
      onChange={formik.handleChange} 
      value={formik.values.legalForm}
    >
      <option value=""></option>
      <option value="GmbH">GmbH</option>
      <option value="Co. KG">Co. KG</option>
      <option value="AG">AG</option>
      <option value="KG">KG</option>
      <option value="GmbH & Co. KG"> GmbH & Co. KG</option>
      <option value="OHG">OHG</option>
      <option value="UG">UG</option>
      <option value="e.K.">e.K.</option>
      <option value="GbR">GbR</option>
      <option value="Sonstiges">Sonstiges</option>
    </select>

    {formik.values.legalForm === 'Sonstiges' && (
      <>
        <label htmlFor="legalFormOther">Welches Rechtform hat die Firma?</label>
        <input
          id="legalFormOther"
          name="legalFormOther"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.legalFormOther}
        />
      </>
    )}
  </>
)}
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
       <label htmlFor="mobileNumber">Telefonnummer</label>
      <input
      id="mobileNumber"
      name="mobileNumber"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.mobileNumber}
      />
      <label htmlFor="birthdate">Geburtsdatum</label>
      <input
        id="birthdate"
        name="birthdate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthdate}
      />
      <label htmlFor="customerNumber">SWP Kundennummer</label>
      <input
        id="customerNumber"
        name="customerNumber"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.customerNumber}
      />

      
     <label>Gibt es eine abweichende Adresse der Abnahmestelle?</label>
<label>
  <input 
    type="radio" 
    name="differentAddress" 
    value="Ja" 
    checked={formik.values.differentAddress === 'Ja'}
    onChange={formik.handleChange}
  />
  Ja
</label>
<label>
  <input 
    type="radio" 
    name="differentAddress" 
    value="Nein"
    checked={formik.values.differentAddress === 'Nein'}
    onChange={formik.handleChange} 
  />
  Nein
</label>
{formik.values.differentAddress === 'Ja' && (
  <>
    <label htmlFor="street">Straße</label>
    <input
      id="street"
      name="street"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.street}
    />

    <label htmlFor="houseNumber">Hausnummer</label>
    <input
      id="houseNumber"
      name="houseNumber"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.houseNumber}
    />

    <label htmlFor="postalCode">PLZ</label>
    <input
      id="postalCode"
      name="postalCode"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.postalCode}
    />

    <label htmlFor="city">Ort</label>
    <input
      id="city"
      name="city"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.city}
    />
  </>
)}
      
      <label>Welche Energiearten möchten Sie melden?</label>
<label>
  <input 
    type="radio" 
    name="energyType" 
    value="Strom" 
    checked={formik.values.energyType === 'Strom'}
    onChange={formik.handleChange}
  />
  Strom
</label>
<label>
  <input 
    type="radio" 
    name="energyType" 
    value="Gas"
    checked={formik.values.energyType === 'Gas'}
    onChange={formik.handleChange} 
  />
  Gas
</label>
<label>
  <input 
    type="radio" 
    name="energyType" 
    value="Wasser"
    checked={formik.values.energyType === 'Wasser'}
    onChange={formik.handleChange} 
  />
  Wasser
</label>
<label>
  <input 
    type="radio" 
    name="energyType" 
    value="Fernwärme"
    checked={formik.values.energyType === 'Fernwärme'}
    onChange={formik.handleChange} 
  />
  Fernwärme
</label>
{formik.values.energyType === 'Strom' && (
  <>
    <label htmlFor="electricMeterNumber">Strom - Zählernummer</label>
    <input
      id="electricMeterNumber"
      name="electricMeterNumber"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.electricMeterNumber}
    />

    <label htmlFor="electricMeterStatusHT">Strom - Zählerstand (HT)</label>
    <input
      id="electricMeterStatusHT"
      name="electricMeterStatusHT"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.electricMeterStatusHT}
    />

    <label htmlFor="electricMeterStatusNT">Strom - Zählerstand (NT)</label>
    <input
      id="electricMeterStatusNT"
      name="electricMeterStatusNT"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.electricMeterStatusNT}
    />
  </>
)}

{formik.values.energyType === 'Gas' && (
  <>
    <label htmlFor="gasMeterNumber">Gas - Zählernummer</label>
    <input
      id="gasMeterNumber"
      name="gasMeterNumber"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.gasMeterNumber}
    />

    <label htmlFor="gasMeterStatus">Gas - Zählerstand</label>
    <input
      id="gasMeterStatus"
      name="gasMeterStatus"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.gasMeterStatus}
    />
  </>
)}

{formik.values.energyType === 'Wasser' && (
  <>
    <label htmlFor="waterMeterNumber">Wasser - Zählernummer</label>
    <input
      id="waterMeterNumber"
      name="waterMeterNumber"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.waterMeterNumber}
    />

    <label htmlFor="waterMeterStatus">Wasser - Zählerstand</label>
    <input
      id="waterMeterStatus"
      name="waterMeterStatus"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.waterMeterStatus}
    />
  </>
)}

{formik.values.energyType === 'Fernwärme' && (
  <>
    <label htmlFor="heatingMeterNumber">Fernwärme - Zählernummer</label>
    <input
      id="heatingMeterNumber"
      name="heatingMeterNumber"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.heatingMeterNumber}
    />

    <label htmlFor="heatingMeterStatus">Fernwärme - Zählerstand</label>
    <input
      id="heatingMeterStatus"
      name="heatingMeterStatus"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.heatingMeterStatus}
    />
  </>
)}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;