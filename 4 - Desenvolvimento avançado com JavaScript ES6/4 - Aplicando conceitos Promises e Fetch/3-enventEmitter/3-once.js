const EventEmiter = require('events');

class Users extends EventEmiter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Joao' });
users.userLogged({ user: 'Celso' });
// { user: 'Joao' }