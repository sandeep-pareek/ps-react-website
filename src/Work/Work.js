import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Work() {


    // useEffect(() => {
    //    async function fetchData () {
    //     alert("called fetch data")
    //     try {
    //         buttonData = await fetch('http://localhost:8080/home/public');
    //          console.log(buttonData);
    //          setData(buttonData);
    //         //  setLoading(false);
    //     } catch (error){
    //         setError(error);
    //         // setLoading(false);
    //     }
    //     }
    //     // fetchData();
    // }, []);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }
  
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );


}



export default Work;