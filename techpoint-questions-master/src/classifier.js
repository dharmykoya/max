/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
    function studentDetails (input) {
        return input.map((student) => {
            let dob = parseInt(student.dob);
            let date = new Date();
            let year = date.getFullYear();
            return {
                name: student.name,
                dob: student.dob,
                age: (year - dob),
                regNo: student.regNo
            };
        });
    }

    function answer () {
        return studentDetails(input).sort((a, b) => {
            if(a.age > b.age){
                return -1;
            } else {
                return 1;
            }
        })
    }

    function group (array) {
        let arrayLength = array.length;
        let i = 0;
        let arrays = [];
        arrays[0] = [];

        for(let j = 0; j < arrayLength; j++){
            arrays[i].push(array[j]);
            if(arrays[i].length === 2) {
                i++;
                arrays[i] = []
            }
        }

        return arrays;
    }

    let finalAnswer = group(answer());


    return {
        numberOfGroup: (finalAnswer.length)-1,
        group1: {
            members: [
                finalAnswer[0]
            ],
            oldest: finalAnswer[0][0].age,
            sum: finalAnswer[0][0].age + finalAnswer[0][1].age,
            regNos: [finalAnswer[0][0].regNo, finalAnswer[0][1].regNo]
        },
        group2: {
            members: [
                finalAnswer[1]
            ],
            oldest: finalAnswer[1][0].age,
            sum: finalAnswer[1][0].age + finalAnswer[1][1].age,
            regNos: [finalAnswer[1][0].regNo, finalAnswer[1][1].regNo]
        },
        group3: {
            members: [
                finalAnswer[2]
            ],
            oldest: finalAnswer[2][0].age,
            sum: finalAnswer[2][0].age + finalAnswer[2][1].age,
            regNos: [finalAnswer[2][0].regNo, finalAnswer[2][1].regNo]
        },
        group4: {
            members: [
                finalAnswer[3]
            ],
            oldest: finalAnswer[3][0].age,
            sum: finalAnswer[3][0].age + finalAnswer[3][1].age,
            regNos: [finalAnswer[3][0].regNo, finalAnswer[3][1].regNo]
        },
        group5: {
            members: [
                finalAnswer[4]
            ],
            oldest: finalAnswer[4][0].age,
            sum: finalAnswer[4][0].age + finalAnswer[4][1].age,
            regNos: [finalAnswer[4][0].regNo, finalAnswer[4][1].regNo]
        },
        group6: {
            members: [
                finalAnswer[5]
            ],
            oldest: finalAnswer[5][0].age,
            sum: finalAnswer[5][0].age + finalAnswer[5][1].age,
            regNos: [finalAnswer[5][0].regNo, finalAnswer[5][1].regNo]
        },
        group7: {
            members: [
                finalAnswer[6]
            ],
            oldest: finalAnswer[6][0].age,
            sum: finalAnswer[6][0].age + finalAnswer[6][1].age,
            regNos: [finalAnswer[6][0].regNo, finalAnswer[6][1].regNo]
        },
        group5: {
            members: [
                finalAnswer[7]
            ],
            oldest: finalAnswer[7][0].age,
            sum: finalAnswer[7][0].age + finalAnswer[7][1].age,
            regNos: [finalAnswer[7][0].regNo, finalAnswer[7][1].regNo]
        }
    }


}

module.exports = classifier;
