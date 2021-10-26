fetch('/1-data.json')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Error:', err);
    });