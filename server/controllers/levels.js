module.exports = {
    levelSelect: (req, res) => {
        let { level } = req.params
        res.status(200).send({ msg: 'GOOD', levels: levels.levels[level - 1] })
    },
    all: (req, res) => {
        res.status(200).send({ msg: 'GOOD', levels: levels.levels })
    },
    add: (req, res) => {

    }
}
levels = {
    levels: [
        {
            button1: { num: 7, opp: '÷' },
            button2: { num: 2, opp: '+' },
            button3: { num: 5, opp: '-' },
            button4: { num: 2, opp: '*' },
            button5: { num: [2, 4], opp: '=>' },
            button6: { num: 2, opp: '²' },
            button7: { msg: 'N/A' },
            button8: {},
            button9: {},
            start: 20,
            goal: 40,
            moves: 2
        },
        {
            button1: { num: 7, opp: '÷' },
            button2: { num: 2, opp: '+' },
            button3: { num: 5, opp: '-' },
            button4: { num: 2, opp: '*' },
            button5: { num: [2, 4], opp: '=>' },
            button6: { num: 2, opp: '²' },
            button7: { msg: 'N/A' },
            button8: {},
            button9: {},
            start: 20,
            goal: 40,
            moves: 2
        },
    ]
}