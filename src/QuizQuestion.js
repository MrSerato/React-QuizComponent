import React, {Component} from 'react'

class QuizQuestion extends Component{
  render(){
    return(
  <main>
    <section>
      <p>// instruction text goes here</p>
    </section>
      <p>{this.props.quiz_question.instruction_text}</p>
    <section className="buttons">
      <ul>
        <li>{this.props.quiz_question.answer_options[0]}</li>
      </ul>
    </section>
  </main>
    )
  }
}

export default QuizQuestion
