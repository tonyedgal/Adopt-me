import { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (windows.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {/* 
            {(themeHook) => (
                <button style={{ backgroundColor: themeHook[0]}}>Adopt {name}</button>
            )}; 
            this returns an array, so you take the first index or pass in theme array as 
            the argument below
            */}
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <ThemeContext.Consumer>
                  {([theme]) => (
                    <div className="buttons">
                      <button
                        onClick={this.adopt}
                        style={{ backgroundColor: theme }}
                      >
                        Yes
                      </button>
                      <button
                        onClick={this.toggleModal}
                        style={{ backgroundColor: theme }}
                      >
                        No
                      </button>
                    </div>
                  )}
                </ThemeContext.Consumer>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
