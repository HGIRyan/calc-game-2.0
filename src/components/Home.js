import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CalcWrapper, StyledLink } from './../wrapper'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            levels: []
        }
    }
    async componentDidMount() {
        await axios.get('/api/all/levels')
            .then(async res => { this.setState({ levels: res.data.levels }) });
    }

    render() {
        return (
            <CalcWrapper>
                Home
                <StyledLink to='create'>Create New Level</StyledLink>
                {this.state.levels.map((level, i) => {
                    return <StyledLink to={{ pathname: `/level/${i + 1}`, state: level }} key={i}>Level {i + 1}</StyledLink>
                })}
            </CalcWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { ...state };
}
export default connect(
    mapStateToProps, {}
)(Home);