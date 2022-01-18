const submitData = (iName, iEmail) => {
    const formData = {
        name: iName,
        email: iEmail,
      };
      
      // method: "POST" is missing from the object below
      const configurationObject = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      return fetch('http://localhost:3000/users', configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
            const body = document.querySelector('body');
            const newItem = document.createElement('p');
            newItem.textContent=object.id;
            body.append(newItem);
        })
        .catch(function (error) {
            const body = document.querySelector('body');
            const newItem2 = document.createElement('p');
            newItem2.textContent=error.message;
            body.append(newItem2)
            alert("Bad things! Ragnarők!");
        });
}
