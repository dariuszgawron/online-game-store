import React from 'react';
// import { useHistory, useLocation } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'
import queryString from 'query-string';

import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const urlParams = queryString.parse(this.props.location.search);
        console.log(urlParams.search);
        this.setState({
            searchText: urlParams.search || ''
        });
    }
    // componentDidUpdate() {

    // }
    handleChange(e) {
        this.setState({
            searchText: e.target.value
        });
    }
    handleSubmit(e) {
        if(e.key === "Enter" || e.key === 13)
            this.props.history.push(`/products?search=${this.state.searchText}`);
    }
    render() {
        return (
            <input className="sidenav__input" placeholder="Wyszukaj produkt" onChange={this.handleChange} onKeyUp={this.handleSubmit} value={this.state.searchText}/>
        )
    }
    // const history = useHistory();
    // const location = useLocation();
    // const urlParams = queryString.parse(location.search);
    // const onSubmitSearch = (e) => {
    //     if(e.key === "Enter" || e.key === 13)
    //         history.push(`/products?search=${e.target.value}`);
    // }
    // return (
    //     <input className="sidenav__input" placeholder="Wyszukaj produkt" onKeyUp={onSubmitSearch} value={urlParams.search}/>
                    
    // )
}

export default Search;