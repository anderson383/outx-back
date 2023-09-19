const crypto = require('crypto');

export const generateRandomPassword = (length:number) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const passwordArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, characters.length);

    passwordArray.push(characters[randomIndex]);
  }

  return passwordArray.join('');
};

