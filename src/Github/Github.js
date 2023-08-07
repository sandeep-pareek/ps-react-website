import React, { useState, useEffect } from 'react';

function Github() {

    const [repos, setRepos] = useState([]);
    useEffect(() => {
       fetch('https://api.github.com/users/sandeep-pareek/repos')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setRepos(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return(
        <div className="repos-container">
      {
        repos.map((repo) => {
            return (
                <div key={repo.id}>
                    <br/>
                <h5>{repo.name}</h5>
                <h6><p>{repo.full_name}</p></h6>
                </div>
            );
            }
        )
      }
   </div>
    )
}

export default Github;