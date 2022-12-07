import { useEffect, useState } from 'react';
import Card from '../components/Card';
const Spinner = require('react-spinkit');

function Main() {
    const [data, setData] = useState([]);
    
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(resData => {
            setData(resData);
        })
    }

    useEffect(() => {
        if (!data.length) {
            fetchData()
        }
    }); 

    return (data?.length > 0 ? <Card data={data} /> : <div className='loader'><Spinner name="line-scale-party" /></div>)
}

export default Main;
