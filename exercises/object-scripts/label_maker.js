let profile = {
    name: "John Doe",
    address: "123 Street Ave",
    city: "MyCity",
    state: "MyState",
    zip: "12345"
};

function printContact(profile) {
    let name = profile.name;
    let address = profile.address;
    let city = profile.city;
    let state = profile.state;
    let zip = profile.zip;
    console.log(`
    ${name}
    ${address}
    ${city}, ${state} ${zip}`);
}

printContact(profile);