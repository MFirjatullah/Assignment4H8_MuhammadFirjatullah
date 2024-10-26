const profileSelectors = {
    name: document.querySelector('#profile-name'),
    role: document.querySelector('#profile-role'),
    availability: document.querySelector('#profile-availability'),
    age: document.querySelector('#profile-age'),
    location: document.querySelector('#profile-location'),
    yoe: document.querySelector('#profile-yoe'),
    email: document.querySelector('#profile-email')
};

const inputSelectors = {
    name: document.querySelector('#inputName'),
    role: document.querySelector('#inputRole'),
    availability: document.querySelector('#inputAvailability'),
    age: document.querySelector('#inputAge'),
    location: document.querySelector('#inputLocation'),
    yoe: document.querySelector('#inputYoe'),
    email: document.querySelector('#inputEmail')
};


function loadProfile() {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile) {
        profileSelectors.name.textContent = storedProfile.name;
        profileSelectors.role.textContent = storedProfile.role;
        profileSelectors.availability.textContent = storedProfile.availability;
        profileSelectors.age.textContent = storedProfile.age;
        profileSelectors.location.textContent = storedProfile.location;
        profileSelectors.yoe.textContent = storedProfile.yoe;
        profileSelectors.email.textContent = storedProfile.email;

        inputSelectors.name.value = storedProfile.name;
        inputSelectors.role.value = storedProfile.role;
        inputSelectors.availability.value = storedProfile.availability;
        inputSelectors.age.value = storedProfile.age;
        inputSelectors.location.value = storedProfile.location;
        inputSelectors.yoe.value = storedProfile.yoe;
        inputSelectors.email.value = storedProfile.email;
    }
}


function saveProfile() {
    const profileData = {
        name: inputSelectors.name.value,
        role: inputSelectors.role.value,
        availability: inputSelectors.availability.value,
        age: inputSelectors.age.value,
        location: inputSelectors.location.value,
        yoe: inputSelectors.yoe.value,
        email: inputSelectors.email.value
    };
    localStorage.setItem('profile', JSON.stringify(profileData));
}


document.querySelector('#edit-profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    profileSelectors.name.textContent = inputSelectors.name.value;
    profileSelectors.role.textContent = inputSelectors.role.value;
    profileSelectors.availability.textContent = inputSelectors.availability.value;
    profileSelectors.age.textContent = inputSelectors.age.value;
    profileSelectors.location.textContent = inputSelectors.location.value;
    profileSelectors.yoe.textContent = inputSelectors.yoe.value;
    profileSelectors.email.textContent = inputSelectors.email.value;

   
    saveProfile();

    
    const modalElement = document.querySelector('#editProfileModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
});


loadProfile();