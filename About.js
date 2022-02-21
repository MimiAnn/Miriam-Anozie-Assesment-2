//import React from 'react';
import ReactDOM from 'react-dom';

let personalInfo= 'personalInfo'= {
    fname: 'Miriam',
    lname: 'Anozie',
    bio: 'Black, 20 year old, 3rd ICT student',
    projects: ['INNBOX MEDICARE WEB APP', 'Bwater'],
    edu : 'Sol Plaatje University, Kimberley Northern Cape',
    email: 'anozie.miriam@gmail.com',
    phoneNum: '0622646149',
    location: 'Kimberley',
};
console.log(personalInfo);

ReactDOM.render(personalInfo, document.getElementById('root'));