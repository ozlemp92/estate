import React, { Component } from 'react';
import '../../styles/css/home.css';
class portfolioManagement extends Component {

    constructor(props) {
        super(props);
        let lang = localStorage.getItem('lang');
        this.state = {
            language: "tr"
        }

    }

    componentDidMount() {
    }
    render() {
        return (
            <>
                <div className="flex-container" >
                    <label>portfoy yönetimi</label>
                </div>
            </>
        );
    }
}
export default portfolioManagement;