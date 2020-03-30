function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class Slider extends React.Component {
    constructor(props) {
        super(props);
        _defineProperty(this, "goToPrevSlide",
            () => {
                if (this.state.currentIndex === 0)
                    return;

                this.setState(prevState => ({
                    currentIndex: prevState.currentIndex - 1,
                    translateValue: prevState.translateValue + this.slideWidth()
                }));

            });
        _defineProperty(this, "goToNextSlide",

            () => {
                // Exiting the method early if we are at the end of the images array.
                // We also want to reset currentIndex and translateValue, so we return
                // to the first image in the array.
                if (this.state.currentIndex === this.state.images.length - 1) {
                    return this.setState({
                        currentIndex: 0,
                        translateValue: 0
                    });

                }

                // This will not run if we met the if condition above
                this.setState(prevState => ({
                    currentIndex: prevState.currentIndex + 1,
                    translateValue: prevState.translateValue + -this.slideWidth()
                }));

            });
        _defineProperty(this, "slideWidth",

            () => {
                return document.querySelector('.slide').clientWidth;
            });
        this.state = {
            images: ["https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg", "https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1551445523-324a0fdab051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"],
            currentIndex: 0,
            translateValue: 0
        };
    }

    render() {
        return (
            React.createElement("div", {
                    className: "slider"
                },

                React.createElement("div", {
                        className: "slider-wrapper",
                        style: {
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                        }
                    },


                    this.state.images.map((image, i) =>
                        React.createElement(Slide, {
                            key: i,
                            image: image
                        }))),




                React.createElement(LeftArrow, {
                    goToPrevSlide: this.goToPrevSlide
                }),


                React.createElement(RightArrow, {
                    goToNextSlide: this.goToNextSlide
                })));



    }
}



const Slide = ({
    image
}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    };

    return React.createElement("div", {
        className: "slide",
        style: styles
    });
};


const LeftArrow = props => {
    return (
        React.createElement("div", {
                className: "backArrow arrow",
                onClick: props.goToPrevSlide
            },
            React.createElement("i", {
                className: "fa fa-arrow-left fa-2x",
                "aria-hidden": "true"
            })));


};


const RightArrow = props => {
    return (
        React.createElement("div", {
                className: "nextArrow arrow",
                onClick: props.goToNextSlide
            },
            React.createElement("i", {
                className: "fa fa-arrow-right fa-2x",
                "aria-hidden": "true"
            })));


};

ReactDOM.render(
    React.createElement(Slider, null),
    document.querySelector('.image-slider'));
