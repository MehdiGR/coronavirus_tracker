import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/";
import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
  const { handleChangeCountry } = props;
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchedCountries = async () => {
      setCountries(await fetchCountries());
    };
    fetchedCountries();
  }, [countries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleChangeCountry(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
