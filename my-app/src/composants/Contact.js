import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        show: true
    }

    onDeleteClick = () => {
        //consolec.log("ok");
        this.props.deleteClickHandler();
    }
    render() {
        return (
            <div className='card card-body mb-3'>
                <h4>{this.props.nom}&nbsp;
                    <i className='fas fa-caret-down'
                        onClick={() => {
                            this.setState({
                                show: !this.state.show
                            })
                        }
                        }>
                    </i>
                    <i className='fas fa-times' style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                        onClick={this.onDeleteClick}

                    ></i>

                </h4>

                {this.state.show ? (<ul className='list-group'>
                    <li className='list-group-item'>
                        Email : {this.props.email}
                    </li>
                    <li className='list-group-item'>
                        Téléphone : {this.props.tel}
                    </li>
                </ul>) : null}
            </div>
        )
    }
}
