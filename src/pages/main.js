import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Modal } from '../components/Modal';
const Spinner = require('react-spinkit');

function Main() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [keyValue, setKeyValue] = useState(false);
    
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

    return (data?.length > 0 ? 
            <>
                <Card data={data} setIsOpen={setIsOpen} setKey={setKeyValue} /> 
                {isOpen && <Modal keyValue={keyValue} data={data} setData={setData} setIsOpen={setIsOpen} />}
            </>
            : <div className='loader'><Spinner name="line-scale-party" /></div>)
}

export default Main;
