import Registration from '../models/registrationModol.js';

async function createRegistration(req, res) {
  try {
    const { name, phone_number } = req.body;
    //const currentTime = new Date();
    const arrivalTime = generateTime();
    const arrivalDate = generateDate();



    const registration = new Registration({
      name,
      phone_number,
       //arrivalDate: currentTime.toLocaleDateString(),
     // arrivalTime: currentTime.toLocaleTimeString()
     arrivalTime,
      arrivalDate,
    });

   let response= await registration.save();

    res.status(200).json({ 
      message: 'Registration saved successfully',
      data:response});
  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(500).json({ error: 'An error occurred while saving the registration' });
  }
}

function generateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  //const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
  
}

function generateDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;

}

export default  createRegistration ;







