import React, { Component } from 'react';
import Contact from './Contact';
export default class Contacts extends Component {
    state = {
        contacts: [
            {
                id: '1',
                nom: 'josef',
                email: 'jesef@gmail.fr',
                tel: '5655775'
            },
            {
                id: '2',
                nom: 'jotaro',
                email: 'jotato@gmail.fr',
                tel: '75757675'
            }, {
                id: '3',
                nom: 'george',
                email: 'george@gmail.fr',
                tel: '36361455 '
            }
        ]
    }

    deleteContact = (id) => {
//console.log("okk");
        const newContacts = this.state.contacts.filter(contact =>
            contact.id !== id);
           
            this.setState({
                contacts: newContacts
            })
    }
    render() {
        return (
            <div>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </div>
        )
    }
}
