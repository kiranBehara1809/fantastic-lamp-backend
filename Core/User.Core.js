
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getUniqueUserName: (payload) => {
    let { firstName, middleName, lastName } = payload;
    const arr = [1, 2, 4, 3];
    const index = arr[Math.floor(Math.random() * arr.length)];
    const middleNameIndex = arr[Math.floor(Math.random() * arr.length)];
    if (middleName === "" || middleName == null || middleName === undefined) {
      middleName = uuidv4().split("")[middleNameIndex];
    }
    const splittedUuid = uuidv4().split("")[index];
    const dicArr = [
      ...firstName.split(""),
      ...middleName.split(""),
      ...lastName.split(""),
      ...splittedUuid.split(""),
    ];
    return getMultipleRandom(dicArr, 6);
  },

  getInitalPassword: async (payload) => {
    let { firstName } = payload;
    const initialHashedPwd = await bcrypt.hash(firstName, 10);
    return initialHashedPwd;
  },
};

const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num).join("").toLocaleUpperCase().trim();
};
