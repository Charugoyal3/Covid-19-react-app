import React from 'react';
// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData} from './api'
import coronaImg from './images/covid.png';
class App extends React.Component{
    state ={
        data:{},
        country:{} 
    }


    async componentDidMount(){
        const fetchdata =await fetchData();
        this.setState({data:fetchdata});
        // console.log(data);
    }
    
    handleCountryChange = async (country) =>{
        //fetch the data
        const fetchedData =await fetchData(country);
        // console.log(fetchData);
        this.setState({ data: fetchedData, country:country });
    }

    render()
     {
        const {data, country} =this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="COVID-19" />
                <Cards data = {data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country ={country} />
            </div>
        )
     }
}

export default App;
