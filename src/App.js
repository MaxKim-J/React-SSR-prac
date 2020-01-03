import React from 'react';
import Home from './views/home'
import About from './views/about'
import styled from 'styled-components'
import Seulgi from '../public/seulgi.jpg'

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;
const ImgContainer = styled.img`
  width:500px;
  height:auto;
`

class App extends React.Component {
  state = {
    page: this.props.page,
  };
  componentDidMount() {
    window.onpopstate = event => {
      this.setState({ page: event.state });
    };
  }
  onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, '', `/${page}`);
    this.setState({ page });
  }
  render() {
    const { page } = this.state;
    const PageComponent = page === 'home' ? Home : About;
    return (
      <Container>
        <div className="container">
          <button data-page="home" onClick={this.onChangePage}>
            Home
        </button>
          <button data-page="about" onClick={this.onChangePage}>
            About
        </button>
          <PageComponent />
          <div>
            <div>
              슬기 사진이나 보시죠
            </div>
            <img src={Seulgi} alt="슬기" style={{ width: 500 + 'px' }} />
          </div>
        </div>
      </Container >
    )
  }
}

export default App;
