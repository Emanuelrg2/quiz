// isso aqui deveria estar no json-server (database.json)
// criar um arquivo question-service.js / arquivo que devera conter as requisicoes


export default [
    {
        question: { title: "Qual é a capital da Nigéria?", flag: 'bandeira' },
        answers: [
            { option: "Abuja", correct: true },
            { option: "Cidade do Cabo", correct: false },
            { option: "Luanda", correct: false },
        ],

    },
    {
        question: {title: "Qual é o país mais populoso do mundo?",flag: 'bandeira' },
        answers: [
            { option: "China", correct: false },
            { option: "Indía", correct: true },
            { option: "Paquistão", correct: false },
        ],
    },
    {
        question: {title: "Quantos continentes existem?", flag: 'bandeira'},
         answers: [
            { option: "5", correct: false },
            { option: "6", correct: true },
            { option: "4", correct: false },
        ],
    },
    {
        question: {title: "Qual é o idioma oficiial da Suíça?", flag: 'bandeira'},
        answers: [
            { option: "Alemão, Francês, Italiano e Suíço", correct: false },
            { option: "Alemão, Francês e Suíço", correct: false },
            { option: "Alemão, Francês, Italiano e Romanche", correct: true },
        ],
    },
];
