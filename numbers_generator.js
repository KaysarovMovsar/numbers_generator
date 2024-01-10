function generatePhoneNumber(code) {
    var phoneNumber = [code]; // добавляем код 
    const phoneStore = []
  
    for (let j = 0; j < 25; j++) {
      phoneNumber = code;
      for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10); // генерируем случайную цифру от 0 до 9
      }
      phoneNumber = phoneNumber.slice(0, 12);
      phoneNumber;
      phoneStore.push(phoneNumber);
    }
    
    return phoneStore;
  }
  
  console.log(generatePhoneNumber("+7919"));
  console.log(generatePhoneNumber("+7920"));
  console.log(generatePhoneNumber("+7921"));
  console.log(generatePhoneNumber("+7922"));
  console.log(generatePhoneNumber("+7923"));
  console.log(generatePhoneNumber("+7924"));
  console.log(generatePhoneNumber("+7925"));
  console.log(generatePhoneNumber("+7926"));
  console.log(generatePhoneNumber("+7927"));
  console.log(generatePhoneNumber("+7928"));
  console.log(generatePhoneNumber("+7929"));
  console.log(generatePhoneNumber("+7938")); 
  console.log(generatePhoneNumber("+7903"));
  console.log(generatePhoneNumber("+7904"));
  console.log(generatePhoneNumber("+7905"));
  console.log(generatePhoneNumber("+7906"));
  console.log(generatePhoneNumber("+7909"));
  console.log(generatePhoneNumber("+7962")); 
  console.log(generatePhoneNumber("+7963"));
  console.log(generatePhoneNumber("+7964"));
  console.log(generatePhoneNumber("+7965"));
  console.log(generatePhoneNumber("+7966"));
  console.log(generatePhoneNumber("+7967"));
  console.log(generatePhoneNumber("+7969")); 
  console.log(generatePhoneNumber("+7982"));
  console.log(generatePhoneNumber("+7985"));
  console.log(generatePhoneNumber("+7988"));
  console.log(generatePhoneNumber("+7989"));
  console.log(generatePhoneNumber("+7990"));
  console.log(generatePhoneNumber("+7992"));
  console.log(generatePhoneNumber("+7993"));
  console.log(generatePhoneNumber("+7997"));
  console.log(generatePhoneNumber("+7998"));


  