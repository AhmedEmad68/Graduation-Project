//////////////////////////////////////////////////////////////////////////////////////

////////--------- filter properties based on selected options-------------///////////

////////////////////////////////////////////////////////////////////////////////////

const propertyTypeSelect = document.querySelector('.property-card');
const bedroomsSelect = document.querySelector('#bedrooms-select');
const bathroomsSelect = document.querySelector('#bathrooms-select');
const poolCheckbox = document.querySelector('#amenities-pool');
const gymCheckbox = document.querySelector('#amenities-gym');
const parkingCheckbox = document.querySelector('#amenities-parking');
const form = document.querySelector('#header-bottom-bottom');
const propertiesSection = document.querySelector('#property');

form.addEventListener('submit', event => {
  event.preventDefault();

  const selectedPropertyType = propertyTypeSelect.value;
  const selectedBedrooms = bedroomsSelect.value;
  const selectedBathrooms = bathroomsSelect.value;
  const hasPool = poolCheckbox.checked;
  const hasGym = gymCheckbox.checked;
  const hasParking = parkingCheckbox.checked;

  // filter properties based on selected options
  // ...

  // render filtered properties in the properties section
  // ...
});


     
