import React from 'react';
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
    componentDidUpdate(prevProps) {
        const searchParamPrev = queryString.parse(prevProps.location.search).search || '';
        const searchParam = queryString.parse(this.props.location.search).search || '';
        if (searchParamPrev !== searchParam)
            this.setState({
                searchText: searchParam
            });
    }
    handleChange(e) {
        this.setState({
            searchText: e.target.value
        });
    }
    handleSubmit(e) {
        if (e.key === "Enter" || e.key === 13) {
            if (window.screen.width < 900){
                let hamburger = document.getElementById('hamburgerIcon');
                let sidenav = document.getElementById('sidenav');
                hamburger.classList.toggle('active');
                sidenav.classList.toggle('sidenav--visible');
            };
            this.props.history.push(`/products?search=${this.state.searchText}`);
        }
    }
    render() {
        return (
            <div className="search">
                <input className = "search__input" type = "search" placeholder = "Wyszukaj produkt"    onChange = {this.handleChange} onKeyUp = {this.handleSubmit} value={this.state.searchText}/>
            </div>
        )
    }
}

export default Search;