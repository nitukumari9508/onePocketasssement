const fs = require("fs")
const countWords = async function () {

    const contentData = "module"
    try {

        fs.writeFile('data.txt', contentData, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
        const splitTextIntoWord = contentData.split(/\split+/).filter(word => word !== "")
        const counts = splitTextIntoWord.length

        console.log(counts)
    }
    catch (error) {
        return ("error reading file", error.message)
    }
}
countWords()

module.exports = countWords 