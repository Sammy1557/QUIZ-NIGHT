const questions = [
    {
        question: 'Which tag creates a link in HTML?',
        options: ['<link>', '<a>', '<href>', '<url>']
    }

    ,
    {
        question: 'Which tag is used for interactivity on the web page?',
        options: ['<link>', '<a class="button">', '<dialog>', '<button>']
    }
]

let questionNumber = 1;

const h2question = document.querySelector('.question-box h2');
const optionList = document.querySelector('.options-box');
const btnOptions = document.querySelectorAll('option');
const progress = document.querySelector('.progress');
const footerQuiz = document.querySelector('.footer');

function showContent() {
    progress.textContent = "Question" + questionNumber + 'of' + question.length
    
    let current = questions[questionNumber];
    h2question.textContent = Questions[0].question;


    for (let i = 0; i < btnOptions.length; i++) {
  btnOptions[i].textContent = current.options[i];
    }

    
  


}

  btnOptions[0].addEventListener ('click', () => { 
            footerQuiz.classList.toggle('hidden');
        
})

showContent();














