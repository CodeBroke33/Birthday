document.getElementById('calculateButton').addEventListener('click', function() {
    let birthdate = new Date(document.getElementById('birthdateInput').value);
    let currentDate = new Date();

    let nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    if (nextBirthday < currentDate) {
      nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    let daysUntilBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

   let name = document.getElementById('nameInput').value;
documents.getElementById('birthdateOutput').textContent = `${name}'s next birthday is in ${daysUntilBirthday} days.`;
  }); 