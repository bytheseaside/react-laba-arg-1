import PhotoContainer from "./PhotoContainer";
import React, { Component } from "react";
import fetchPhotos from "../fetchPhotos";
import ErrorBoundary from "./ErrorBoundary";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      refreshList: this.refreshList,
      error: false,
      errorMessage: "",
    };
  }

  //fetch from api, receives quantity, returns array
  getPhotos = async (quantity) => {
    const response = await fetchPhotos(quantity);
    if (response.status !== 200) {
      this.setState(() => ({
        error: true,
        errorMessage: `STATUS ${response.status}, ${response.statusText}`,
      }));
    } else {
      const json = await response.json();
      return json.map((photo) => {
        return {
          id: photo.first_name + photo.id,
          url: photo.url,
          name: `${photo.first_name} ${photo.last_name}`,
        };
      });
    }
  };

  //Set length from array, call getPhoto with same quantity
  refreshList = async () => {
    const statePhotosLength = this.state.photos.length;
    if (statePhotosLength) {
      const newPhotos = await this.getPhotos(statePhotosLength);
      this.setState({ photos: newPhotos });
    }
  };

  //Push single photo to array
  addPhoto = async () => {
    const quantity = 1;
    const photo = await this.getPhotos(quantity);
    if (photo) {
      this.setState((state) => ({ photos: [...state.photos, ...photo] }));
    }
  };

  //Returns array of one Photocontainer from object in array
  displayPhotos = () =>
    this.state.photos.map((photo) => {
      return (
        <ErrorBoundary key={photo.name + photo.id}>
          <PhotoContainer url={photo.url} name={photo.name} id={photo.id} />
        </ErrorBoundary>
      );
    });

  render() {
    if (this.state.error) {
      throw new Error(this.state.errorMessage);
    }
    return <>{this.displayPhotos()}</>;
  }
}

export default PhotoList;
