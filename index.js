// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj) 
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.append(object.id)
            console.log(object);
    })
    .catch(function(error) {
        document.body.append(error.message);
    })
};

