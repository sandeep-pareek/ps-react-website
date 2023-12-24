import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

function Dev() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      loadUsers()
    }, []);

    const loadUsers = async () => {
        setLoading(true);
        const result = await axios.get("http://localhost:8080/items");
        setUsers(result.data);
        setLoading(false);
    }

  
    return (
      <div>
        <Button
        variant="primary"
        disabled={loading}
        onClick={loadUsers}
      >
        {loading ? <div>
                        <Spinner animation="border" variant="light" />
                    </div> : 'Click to load'}
      </Button>

       {users.map((element, index) => {
        return (
          <div key={index}>
            <span> {element.id} : {element.name} </span>
          </div>
        );
      })}
      </div>
    );
}



export default Dev;