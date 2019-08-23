import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CalcWrapper, Screen, ButtonPad, AdSpace, Button, ButtonRow, ScreenRow } from './../wrapper'
import axios from 'axios';

class LevelPlay extends Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            result: 0,
            button1: {},
            button2: {},
            button3: {},
            button4: {},
            button5: {},
            button6: {},
            button7: {},
            button8: {},
            button9: {},
            goal: 0,
            moves: 0,
            good: true,
            passed: false,
            failed: false,
            msg: '',
            level: 1
        }
    }
    async componentDidMount() {
        let { level } = this.props.match.params
        this.setState({ level })
        if (this.props.location.state) {
            let { button1, button2, button3, button4, button5, button6, button7, button8, button9, start, goal, moves } = this.props.location.state;
            await this.setState({ button1, button2, button3, button4, button5, button6, button7, button8, button9, goal, moves, result: start })
        } else {
            await this.levelget()
        }
        await this.setState({ loading: false })
    };
    async levelget() {
        console.log('get')
        await axios.get(`/api/level/${this.state.level}`)
            .then(async res => {
                if (res.data.msg === 'GOOD') {
                    let { button1, button2, button3, button4, button5, button6, button7, button8, button9, start, goal, moves } = res.data.levels
                    await this.setState({ button1, button2, button3, button4, button5, button6, button7, button8, button9, goal, moves, result: start })
                } else {
                    alert(res.data.msg)
                }
            })
    }
    async action(num, opp) {
        let { result, moves } = this.state
        if (moves >= 1) {
            if (opp === '+') {
                await this.setState({ result: result + num, moves: moves - 1 })
            } else if (opp === '÷') {
                await this.setState({ result: result / num, moves: moves - 1 })
            } else if (opp === '*') {
                await this.setState({ result: result * num, moves: moves - 1 })
            } else if (opp === '-') {
                await this.setState({ result: result - num, moves: moves - 1 })
            } else if (opp === '=>') {
                let res = await parseInt(result.toString().split('').map(it => parseInt(it) === num[0] ? it = num[1] : it).join(''))
                await this.setState({ result: res, moves: moves - 1 })
            } else if (opp === '²') {
                await this.setState({ result: result * result, moves: moves - 1 })
            }
            await this.check()
        }
    }
    async check() {
        let { result, goal, moves } = this.state
        if ((result === goal) && moves >= 1) {
            this.setState({ passed: true, msg: 'Passed' })
        } else if (moves >= 1 && (result !== goal)) {
            this.setState({ passed: true, msg: 'Still Good' })
        } else {
            this.setState({ passed: true, msg: 'Failed' })
        }
    }
    buttonDisplay(button) {
        if (button.num && (button.opp === '*' || button.opp === '÷' || button.opp === '+' || button.opp === '-')) {
            return button.opp + ' ' + button.num
        } else if (button.opp === '=>') {
            return button.num[0] + ' ' + button.opp + ' ' + button.num[1]
        } else if (button.opp === '²') {
            return this.state.result + ' ' + button.opp
        } else if (button.msg) {
            return button.msg
        }
    }
    render() {
        let { msg, passed, result, button1, button2, button3, button4, button5, button6, button7, button8, button9, goal, good, moves } = this.state
        return (
            <CalcWrapper loading={this.state.loading} text={this.state.level}>
                <Screen>
                    <ScreenRow>
                        <h4>Level: {this.state.level}</h4>
                        <h4>||||||||||||||||||||||</h4>
                    </ScreenRow>
                    <ScreenRow>
                        <h4>{good ? 'Smiley Face' : 'Frowny Face'}</h4>
                        <h4>Moves: {moves}</h4>
                        <h4>Goal: {goal}</h4>
                    </ScreenRow>
                    <ScreenRow height='50%' just='flex-end'>
                        <h1>{result}</h1>
                    </ScreenRow>
                    {passed ? <ScreenRow><h3>{msg}</h3></ScreenRow> : null}
                </Screen>
                <ButtonPad>
                    <ButtonRow>
                        <Button onClick={() => this.action(button1.num, button1.opp)}>
                            {this.buttonDisplay(button1)}
                        </Button>
                        <Button onClick={() => this.action(button2.num, button2.opp)}>
                            {this.buttonDisplay(button2)}
                        </Button>
                        <Button onClick={() => this.action(button3.num, button3.opp)}>
                            {this.buttonDisplay(button3)}
                        </Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button onClick={() => this.action(button4.num, button4.opp)}>
                            {this.buttonDisplay(button4)}
                        </Button>
                        <Button onClick={() => this.action(button5.num, button5.opp)}>
                            {this.buttonDisplay(button5)}
                        </Button>
                        <Button onClick={() => this.action(button6.num, button6.opp)}>
                            {this.buttonDisplay(button6)}
                        </Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button onClick={() => this.action(button7.num, button7.opp)}>
                            {this.buttonDisplay(button7)}
                        </Button>
                        <Button onClick={() => this.action(button8.num, button8.opp)}>
                            {this.buttonDisplay(button8)}
                        </Button>
                        <Button onClick={() => this.action(button9.num, button9.opp)}>
                            {this.buttonDisplay(button9)}
                        </Button>
                    </ButtonRow>
                </ButtonPad>
                <AdSpace>
                    AIDS
          </AdSpace>
            </CalcWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { ...state };
}
export default connect(
    mapStateToProps, {}
)(LevelPlay);