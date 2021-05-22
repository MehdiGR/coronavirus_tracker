import React from "react";
import { fetchData } from "./api/";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: [],
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.continer}>
        <img src={coronaImage} alt="COVID-19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleChangeCountry={this.handleChangeCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
