"use strict";
//Object
/* in index.html -> <div id='wrap-table'>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Films</th>
                    <th>Bdate</th>
                </tr>
            </thead>
            <tbody id='userTbody'>
            </tbody>
        </table>
    </div>*/

const users = [{
        name: 'Jack',
        surname: 'Nicholson',
        films: 10,
        bdate: '12.12.1960'
    },
    {
        name: 'Marlon',
        surname: 'Brando',
        films: 3,
        bdate: '10.04.1968'
    },
    {
        name: 'Denzel',
        surname: 'Washington',
        bdate: '02.02.1998'
    },
    {
        name: 'Katharine',
        surname: null,
        films: 7,
        bdate: '19.10.1987'
    },
    {
        name: 'Humphrey',
        surname: 'Bogart',
        films: 15,
        bdate: ''
    },
    {
        name: 'Meryl',
        surname: 'Streep',
        films: null,
        bdate: '12.02.1989'
    }
];
let showUser = document.getElementById('userTbody'),
    divHTML = '',
    isValid = true;

for (let i = 0; i < users.length; i++) {
    /*if (users[i].surname === null) {
        users[i].surname = '';
    } //${users[i].name?users[i].name:''}*/
    if (users[i].films === undefined) {
        isValid = false;
    }
    divHTML += `<tr><td>${i+1}</td><td>${users[i].name||''}</td><td>${users[i].surname||''}</td><td>${users[i].films||''}</td><td>${users[i].bdate||''}</td></tr>`;

}
if (isValid) {
    document.getElementById('userTbody').innerHTML = divHTML;
} else {
    document.getElementById('wrap-table').innerHTML = 'no valid';
}
/*2 */

const users = [{
        name: 'Jack',
        surname: 'Nicholson',
        films: 10,
        bdate: '12.12.1960'
    },
    {
        name: 'Marlon',
        surname: 'Brando',
        films: 3,
        bdate: '10.04.1968'
    },
    {
        name: 'Denzel',
        surname: 'Washington',
        bdate: '02.02.1998'
    },
    {
        name: 'Katharine',
        surname: null,
        films: 7,
        bdate: '19.10.1987'
    },
    {
        name: 'Humphrey',
        surname: 'Bogart',
        films: 15,
        bdate: ''
    },
    {
        name: 'Meryl',
        surname: 'Streep',
        films: null,
        bdate: '12.02.1989'
    }
];
let showUser = document.getElementById('userTbody'),
    divHTML = '',
    isValid = true;
for (let i = 0; i < users.length; i++) {
    if (!users[i].name) {
        users[i].name = prompt('enter name', '');
    }
    if (!users[i].surname) {
        users[i].surname = prompt('enter surname', '');
    }
    if (!users[i].films) {
        users[i].films = +prompt('enter films', '');
    }
    if (!users[i].bdate) {
        users[i].bdate = prompt('enter bdate', '');
    }
}
console.log(users);
for (let i = 0; i < users.length; i++) {
    /*if (users[i].surname === null) {
        users[i].surname = '';
    } //${users[i].name?users[i].name:''}*/
    divHTML += `<tr><td>${i+1}</td><td>${users[i].name||''}</td><td>${users[i].surname||''}</td><td>${users[i].films||''}</td><td>${users[i].bdate||''}</td></tr>`;

}
document.getElementById('userTbody').innerHTML = divHTML;

/*2*/
const users = [{
        name: 'Jack',
        surname: 'Nicholson',
        films: 10,
        bdate: '12.12.1960'
    },
    {
        name: 'Marlon',
        surname: 'Brando',
        films: 3,
        bdate: '10.04.1968'
    },
    {
        name: 'Denzel',
        surname: 'Washington',
        bdate: '02.02.1998'
    },
    {
        name: 'Katharine',
        surname: null,
        films: 7,
        bdate: '19.10.1987'
    },
    {
        name: 'Humphrey',
        surname: 'Bogart',
        films: 15,
        bdate: ''
    },
    {
        name: 'Meryl',
        surname: 'Streep',
        films: null,
        bdate: '12.02.1989'
    }
];
let showUser = document.getElementById('userTbody'),
    divHTML = '',
    isValid = true;
for (let i = 0; i < users.length; i++) {
    while (!users[i].name) {
        users[i].name = prompt('enter name', '');
    }
    while (!users[i].surname) {
        users[i].surname = prompt('enter surname', '');
    }
    while (!users[i].films) {
        users[i].films = +prompt('enter films', '');
    }
    while (!users[i].bdate) {
        users[i].bdate = prompt('enter bdate', '');
    }
}
console.log(users);
for (let i = 0; i < users.length; i++) {
    /*if (users[i].surname === null) {
        users[i].surname = '';
    } //${users[i].name?users[i].name:''}*/
    divHTML += `<tr><td>${i+1}</td><td>${users[i].name||''}</td><td>${users[i].surname||''}</td><td>${users[i].films||''}</td><td>${users[i].bdate||''}</td></tr>`;

}
document.getElementById('userTbody').innerHTML = divHTML;