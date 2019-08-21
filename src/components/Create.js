import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CalcWrapper, StyledLink } from './../wrapper';

class Create extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <CalcWrapper>
                Create
            </CalcWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { ...state };
}
export default connect(
    mapStateToProps, {}
)(Create);