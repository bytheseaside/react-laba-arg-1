import React, { PureComponent } from "react";
import fetchPhotos from "../fetchPhotos";

class PhotoContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      name: props.name,
      id: props.id,
      error: false,
      errorMessage: "",
      isReloading: false,
    };
  }

  // reload new data for this single container
  reload = async () => {
    this.setState(() => ({
      isReloading: true,
    }));
    try {
      const quantity = 1;
      const response = await fetchPhotos(quantity);
      const [photo] = await response.json();
      this.setState(() => ({
        id: photo.first_name + photo.id,
        url: photo.url,
        name: `${photo.first_name} ${photo.last_name}`,
      }));
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    } finally {
      this.setState({ isReloading: false });
    }
  };

  render() {
    if (this.state.error) {
      throw new Error(this.state.errorMessage);
    }
    return (
      <div className="container" onClick={() => this.reload()}>
        <img
          className="container__profile_image"
          src={this.state.url}
          alt={this.state.name}
        />
        <div
          className={
            this.state.isReloading
              ? "container__image_box container__image_box--animate"
              : "container__image_box"
          }
        />
      </div>
    );
  }
}

export default PhotoContainer;
