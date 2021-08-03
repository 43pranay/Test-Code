import { Button } from 'react-bootstrap';
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { NewsTicker } from "react-announcement-ticker";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal1: false
    }
  }
  handleModal() {
    if (this.state.modal1) {
      this.setState({ modal1: false });
    } else {
      this.setState({ modal1: true });
    }
  }

  render() {
    const ActualPageMarkup = (
      <div>
        {isCustomerLogin &&
          <Button className="fealty-sticky-btn fealty-btn">
            <NewsTicker
              newsList={[
                {
                  text: "Your rewards balance $200",
                  link: ''
                },
                {
                  text: "Content1",
                  link: ''
                },
                {
                  text: "Content2",
                  link: ''
                },
                {
                  text: "Content3",
                  link: ''
                }
              ]}
            />
          </Button>
        }
        {!isCustomerLogin &&
          <div>
            {this.state.modal1 &&
              <div className="fealty-sticky-modal fealty-modal"><h3 className="store-name">Store Front</h3></div>
            }
            <Button onClick={() => this.handleModal()} className="fealty-sticky-btn fealty-btn">
              <NewsTicker
                newsList={[
                  {
                    text: "Join our rewards program!",
                    link: ''
                  },
                  {
                    text: "Content1",
                    link: ''
                  },
                  {
                    text: "Content2",
                    link: ''
                  },
                  {
                    text: "Content3",
                    link: ''
                  }
                ]}
              />
            </Button>
          </div>
        }
      </div>

    );
    return (
      <div>{ActualPageMarkup}</div>
    );
  }
}

export default hot(module)(App);