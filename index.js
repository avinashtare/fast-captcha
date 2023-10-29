const captchaDataFile = require("./data.json");
const fs = require("fs");
const path = require("path");

const getNewCaptcha = () => {
    let captchaData = captchaDataFile.data;
    let randomPath = Math.round(Math.random() * captchaData.length);
    let captchaFile = captchaData[randomPath];
    let captchaFilePath = path.join(__dirname, "./images/" + captchaData[randomPath][1]);;

    try {
        // Read the image file synchronously.
        const data = fs.readFileSync(captchaFilePath);

        // Encode the image data as a Data URL.
        const dataUrl = `data:image/jpeg;base64,${data.toString('base64')}`;

        return ({ id: captchaFile[0], imageData: dataUrl });
    } catch (err) {
        console.error(err);
        return 0;
    }
}

const verifyCaptcha = (id, answer) => {
    if (captchaDataFile.data[id][2] == answer) { return true } return false;
}

module.exports = { getNewCaptcha, verifyCaptcha }