import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CalcWrapper, Screen, ButtonPad, AdSpace, Button, ButtonRow, ScreenRow, NoDiv } from './../wrapper';

class Create extends Component {
    constructor() {
        super()

        this.state = {
            selected: 0,
            goal: 0,
            moves: 0,
            result: 0,
            good: true,
            passed: false,
            failed: false,
            msg: '',
            level: 'NEW',
            edit: false,
            button1: { num: 5, opp: '+' },
            button2: { msg: 'NA' },
            button3: { msg: 'NA' },
            button4: { msg: 'NA' },
            button5: { msg: 'NA' },
            button6: { msg: 'NA' },
            button7: { msg: 'NA' },
            button8: { msg: 'NA' },
            button9: { msg: 'NA' },
        }
    }
    buttonEdit(num) {
        this.setState({ selected: num })
    };
    edit(button) {
        let { button1, button2, button3, button4, button5, button6, button7, button8, button9, selected } = this.state
        let Change = (val, pos) => {
            if (selected === 1) {
                if (pos === 'num') {
                    button1.num = val
                    this.setState({ button1 })
                } else {
                    button1.opp = val
                    this.setState({ button1 })
                }
            } else if (selected === 2) {
                if (pos === 'num') {
                    button2.num = val
                    this.setState({ button2 })
                } else {
                    button2.opp = val
                    this.setState({ button2 })
                }
            } else if (selected === 3) {
                if (pos === 'num') {
                    button3.num = val
                    this.setState({ button3 })
                } else {
                    button3.opp = val
                    this.setState({ button3 })
                }
            } else if (selected === 4) {
                if (pos === 'num') {
                    button4.num = val
                    this.setState({ button4 })
                } else {
                    button4.opp = val
                    this.setState({ button4 })
                }
            } else if (selected === 5) {
                if (pos === 'num') {
                    button5.num = val
                    this.setState({ button5 })
                } else {
                    button5.opp = val
                    this.setState({ button5 })
                }
            } else if (selected === 6) {
                if (pos === 'num') {
                    button6.num = val
                    this.setState({ button6 })
                } else {
                    button6.opp = val
                    this.setState({ button6 })
                }
            } else if (selected === 7) {
                if (pos === 'num') {
                    button7.num = val
                    this.setState({ button7 })
                } else {
                    button7.opp = val
                    this.setState({ button7 })
                }
            } else if (selected === 8) {
                if (pos === 'num') {
                    button8.num = val
                    this.setState({ button8 })
                } else {
                    button8.opp = val
                    this.setState({ button8 })
                }
            } else if (selected === 9) {
                if (pos === 'num') {
                    button9.num = val
                    this.setState({ button9 })
                } else {
                    button9.opp = val
                    this.setState({ button9 })
                }
            }
        }
        return (
            <NoDiv direction='column' align='center'>
                <h6>Num: <input style={{ width: '20%' }} onChange={(e) => { Change(e.target.value, 'num') }} value={button.num} /></h6>
                <h6>
                    Opp ‡{" "}
                    <select onChange={e => Change(e.target.value, 'opp')} value={button.opp}>
                        <option value='*'>*</option>
                        <option value='÷'>÷</option>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='=>'>=></option>
                        <option value='²'>²</option>
                    </select>
                </h6>
            </NoDiv>
        )
    };
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
        let { msg, passed, result, button1, button2, button3, button4, button5, button6, button7, button8, button9, goal, good, moves, edit, selected } = this.state
        return (
            <CalcWrapper>
                {edit ?
                    <NoDiv>

                    </NoDiv> :
                    <NoDiv direction='column' height='100%' width='100%' align='center'>
                        <Screen>
                            <ScreenRow>
                                <h4>Level: {this.state.level}</h4>
                                <h4>||||||||||||||||||||||</h4>
                            </ScreenRow>
                            <ScreenRow>
                                <h4>{good ? 'Smiley Face' : 'Frowny Face'}</h4>
                                {selected === 15 ? <h6>Moves: <input onChange={e => this.setState({ moves: e.target.value })} /></h6> : <h4 onClick={() => this.buttonEdit(15)}>Moves: {moves}</h4>}
                                {selected === 16 ? <h6>Goal: <input onChange={e => this.setState({ goal: e.target.value })} /></h6> : <h4 onClick={() => this.buttonEdit(16)}>Goal: {goal}</h4>}

                            </ScreenRow>
                            <ScreenRow height='50%' just='flex-end' onClick={() => this.buttonEdit(13)}>
                                {selected === 13 ? <h2>Result: <input onChange={e => this.setState({ result: e.target.value })} /></h2> : <h1>Result: {result}</h1>}
                            </ScreenRow>
                            {passed ? <ScreenRow><h3>{msg}</h3></ScreenRow> : null}
                        </Screen>
                        <ButtonPad>
                            <ButtonRow>
                                <Button onClick={() => this.buttonEdit(1)}>
                                    {selected === 1 ? this.edit(button1) : this.buttonDisplay(button1)}
                                </Button>
                                <Button onClick={() => this.buttonEdit(2)}>
                                    {selected === 2 ? this.edit(button2) : this.buttonDisplay(button2)}
                                </Button>
                                <Button onClick={() => this.buttonEdit(3)}>
                                    {selected === 3 ? this.edit(button3) : this.buttonDisplay(button3)}
                                </Button>
                            </ButtonRow>
                            <ButtonRow>
                                <Button onClick={() => this.buttonEdit(4)}>
                                    {selected === 4 ? this.edit(button4) : this.buttonDisplay(button4)}
                                </Button>
                                <Button onClick={() => this.buttonEdit(5)}>
                                    {selected === 5 ? this.edit(button5) : this.buttonDisplay(button5)}
                                </Button>
                                <Button onClick={() => this.buttonEdit(6)}>
                                    {selected === 6 ? this.edit(button6) : this.buttonDisplay(button6)}
                                </Button>
                            </ButtonRow>
                            <ButtonRow>
                                <Button onClick={() => this.buttonEdit(7)}>
                                    {selected === 7 ? this.edit(button7) : this.buttonDisplay(button7)}
                                </Button>
                                <Button onClick={() => this.buttonEdit(8)}>
                                    {selected === 8 ? this.edit(button8) : this.buttonDisplay(button8)}
                                </Button>
                                <Button onClick={() => this.buttonEdit(9)}>
                                    {selected === 9 ? this.edit(button9) : this.buttonDisplay(button9)}
                                </Button>
                            </ButtonRow>
                        </ButtonPad>
                        <NoDiv>
                            <button>Reset</button>
                            <button>Submit</button>
                        </NoDiv>
                        <AdSpace onClick={() => this.buttonEdit(0)}>
                            AIDS
          </AdSpace>
                    </NoDiv>}
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