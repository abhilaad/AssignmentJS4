/* 1. Javascript to calculate user's age, based on DOB, check age eligibility,
& provide validation alert
A major goal of our recruitment survey is to identify users who are
between the ages of 14-24 (target population) and those who are not
(not eligible for our study). Currently, we ask users for their date of
birth (MM/DD/YYYY) and would like to use JS to:
● Calculate age, based on the current date
● Determine if the age is within our target range (14-24)
● Provide a validation alert to the users AND/OR categorize users
using embedded data in the categories of eligible/ineligible
based on age
*/

const uo = function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age <= 24 && age >= 14)
    {
        alert(`Given Age is ${age} and it is in the target range and eligible.`);
    }
    else
    {
        alert(`Given Age is ${age} and it is ineligible.`);
    }
    return age;
};    
 console.log(uo("02/26/1998"));