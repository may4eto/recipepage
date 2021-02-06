import React from 'react';
import './App.css';
import ingredients from './ingredients.js'
import instructions from './instructions.js'
import cardRows from './cardRows.js'

function Header () {
  return (
    <div className="container">
      <header className="row mb-5">
        <div className="col-12 header mt-5">
              <h1 className="mb-3">Classic Cheesecake Recipe</h1>
              <div className="header-text d-flex mb-4">
                <span className="mr-2">
                  <img src="6dots.svg" alt="" />
                </span>
                <p>
                  Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
                </p>
              </div>
              <img className="hero img-fluid" src="photo1.png" alt="" />
        </div>
      </header>
    </div>
  );
}

class Ingredient extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-check mb-2">
        <input class="form-check-input mr-2" type="checkbox" value="" id="defaultCheck1" />
        <label class="" for="defaultCheck1">{this.props.label}</label>
     </div>
    );
  }
}

class Instruction extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="d-flex">
          <span className="badge d-block text-center">{this.props.number}</span>
          <p>{this.props.text}</p>
      </div>
    );
  }
}

class CardRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="d-flex align-items-center mb-3 mb-md-5 col-4 col-md-12">
          <img src={`${this.props.img}`} className="mr-3" />
          <div>
            <span className="d-block text-uppercase">{this.props.label}</span>
            <span>{this.props.text}</span>
          </div>
      </div>
    );
  }
}

function Main () {
  return (
    <div className="container">
      <main className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="col-12 col-md-8 col-lg-6">
          <article className="ingredients">
              <h2 class="mb-5">Ingredients</h2>
              <h3 class="mb-4">Graham Cracker Crust</h3>
              {ingredients.slice(0,3).map(ingredient => <Ingredient {...ingredient} />)}
              <h3 class="my-4">Cheesecake</h3>
              {ingredients.slice(3).map(ingredient => <Ingredient {...ingredient} />)}
          </article>
          <article className="instructions">
              <h2 className="my-4">Instructions</h2>
              {instructions.map(instruction => <Instruction {...instruction} />)}
          </article>
        </div>
        <div className="sidebar col-12 col-md-4 col-lg-3">
          <aside className="card px-sm-0 pt-sm-0 px-md-4 pt-md-4 pt-lg-5">
            <div class="">
              {cardRows.slice(0,1).map(cardRow => <CardRow {...cardRow} />)}
            </div>
            <div class="d-flex d-md-block justify-content-between">
              {cardRows.slice(1).map(cardRow => <CardRow {...cardRow} />)}
            </div>
          </aside>
        </div>
      </main> 
      <p className="link mb-5">Source: https://sallysbakingaddiction.com/classic-cheesecake/ </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer className="col-12 text-center mb-4">
        Maya Mircheva @ DevChallenges.io
      </footer>
    </div>
  );
}

export default App;

