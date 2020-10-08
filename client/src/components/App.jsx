import React from 'react';
import fetch from 'node-fetch'
import PhotoList from './PhotoList.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import classes from '../style/App.module.css';
import Modal from './modal/Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageBanner: [],
      imageList: [],
      currentImage: null,
      showModal: false,
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.incrementModalImage = this.incrementModalImage.bind(this);
    this.decrementModalImage = this.decrementModalImage.bind(this);
    this.toggleModalPic = this.toggleModalPic.bind(this);
    this.setCurrentPic = this.setCurrentPic.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('/photos/4')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data[0],
          pageBanner: data[0].imageList.slice(0,4),
          currentImage: data[0].imageList[0],
          imageList: data[0].imageList,
          reference: React.createRef(),
        });
      });
  }

  incrementModalImage() {
    this.setState((state) => {
      const temp = state.imageList.slice();
      let currentImageIndex = temp.indexOf(this.state.currentImage);
      if (currentImageIndex === temp.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex += 1;
      }

      return {
        currentImage: temp[currentImageIndex],
      };
    }
    );
  }

  decrementModalImage() {
    this.setState((state) => {
      const temp = state.imageList.slice();
      let currentImageIndex = temp.indexOf(this.state.currentImage);
      if (currentImageIndex === 0) {
        currentImageIndex = temp.length - 1;
      } else {
        currentImageIndex -= 1;
      }

      return {
        currentImage: temp[currentImageIndex],
      };
    });
  }

  toggleModal() {
    this.setState((state) => {
      const temp = state.showModal;
      return {
        showModal: !temp,
      };
    });
  }

  toggleModalPic(evt) {
    evt.persist()
    // if (evt.target.localname === 'image') {
    //   return;
    // }
    this.setState((state) => {
      const temp = state.showModal;
      return {
        showModal: !temp,
      };
    });
  }

  setCurrentPic(evt) {
    evt.persist();
    console.log('working!', evt);
    this.setState({
      currentImage: evt.target.currentSrc,
    });
  }

  render() {
    const { pageBanner, data, currentImage, showModal } = this.state;

    return (
      <div>
      <div>
        <div>
          <Header />
          <PhotoList
          setPic={this.setCurrentPic}
          data={this.state}
          setCurrentPic={this.setCurrentPic}
          toggleModal={this.toggleModalPic}
          photos={pageBanner} />
          <Body />
        </div>

      </div>
        {
          showModal
            ? (
              <Modal
                data={data}
                next={this.incrementModalImage}
                prev={this.decrementModalImage}
                className={classes.modal}
                currentImage={currentImage}
                imageList={this.state.imageList}
                toggleModal={this.toggleModal}
              />
            )
            : ''
        }

      </div>
    );
  }
}

export default App;