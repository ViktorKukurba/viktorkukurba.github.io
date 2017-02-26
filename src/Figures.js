import React, {Component} from 'react'

class Figures extends Component {
  constructor() {
    super();
    this.state = {
      images: [{
        rotate: {
          x: 0, y: 0, z: 0, a: 0
        }
      }, {
        rotate: {
          x: 0, y: 0, z: 0, a: 0
        }},
        {
          rotate: {
            x: 0, y: 0, z: 0, a: 0
          }
        },{
          rotate: {
            x: 0, y: 0, z: 0, a: 0
          }
        }, {
          rotate: {
            x: 0, y: 0, z: 0, a: 0
          }
        }, {
          rotate: {
            x: 0, y: 0, z: 0, a: 0
          }}]
    };
  }

  componentDidMount() {
    setInterval(() => {
      let arr = this.state.images;
      let index = Math.floor(Math.random() * 5);
      arr[index].rotate = {
        x: Math.random() * 20,
        y: Math.random() * 20,
        z: Math.random() * 20,
        a: Math.random() * 30
      };

      this.setState({
        images: arr
      })
    }, 1e3);
  }

  getFigures() {
    return this.state.images.map((figure, i) => {
      let transformVal = {
        "transform": `rotate3d(${figure.rotate.x}, ${figure.rotate.y}, ${figure.rotate.z}, ${figure.rotate.a}deg)` +
        ' translate(-50%, -50%)'
      };
      return (
          <div className="figure-box col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={i}>
          <img alt="figure" style={transformVal} src={'images/figures/' + this.props.shape + '_' + i + '.png'}/>
          </div>
      )
    });
  }

  render() {
    return (
        <div className={"figures-wrapper " + this.props.shape }>
        {this.getFigures()}
            </div>
        )
  }
}

Figures.defaultProps = {
  shape: 'triangle'
};

export default Figures