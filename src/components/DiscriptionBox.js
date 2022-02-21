import React, { Component } from "react";
import { asset, Text, View, VrButton, Model, StyleSheet } from "react-vr";
import { PLANET, PLANET_ORDER } from "../../planet_coef";

export default class DiscriptionBox extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlanet: PLANET["EARTH"],
      lastTime: null,
      rotation: 0,
      antiRotation: 360,
    };
    this.rotate = this.rotate.bind(this);
    this.changePlanet = this.changePlanet.bind(this);
  }
  componentDidMount() {
    this.rotate();
  }
  rotate(time) {
    if (this.state.lastTime == null) {
      this.setState({ lastTime: time });
      requestAnimationFrame(this.rotate);
      return;
    }
    const delta = time - this.state.lastTime;
    this.setState({
      rotation:
        this.state.rotation + delta * this.state.selectedPlanet.ROTATE_SPEED,
      antiRotation:
        this.state.antiRotation -
        delta * this.state.selectedPlanet.ROTATE_SPEED,
    });
    if (this.state.rotation > 360) {
      this.setState({ rotation: 1 });
    }
    if (this.state.antiRotation < 1) {
      this.setState({ antiRotation: 360 });
    }
    this.setState({ lastTime: time });
    requestAnimationFrame(this.rotate);
  }

  changePlanet(index) {
    const planetName = PLANET_ORDER[index];
    this.setState({ selectedPlanet: PLANET[planetName] });
  }

  render() {
    const styles = StyleSheet.create({
      buttonText: {
        margin: 0,
        fontSize: 0.5,
        textAlign: "center",
        backgroundColor: "#f56c1d",
      },
    });
    return (
      <View
        style={{
          transform: [
            { translate: [-1, -10, -2] },
            { rotateX: 280 },
            { rotateY: 0 },
            { rotateZ: 0 },
          ],
          flexDirection: "row",
        }}
      >
        <View>
          <Model
            source={{ obj: asset(this.state.selectedPlanet.MODEL) }}
            texture={asset(this.state.selectedPlanet.TEXTURE)}
            style={{
              transform: [
                { translate: [-5, -2, 0] },
                { scale: this.state.selectedPlanet.SCALE },
                { rotateX: this.state.selectedPlanet.ROTATE_X },
                {
                  rotateY:
                    this.state.selectedPlanet.NAME === "Venus"
                      ? this.state.antiRotation
                      : this.state.selectedPlanet.NAME !== "Uranus"
                      ? this.state.rotation
                      : 0,
                },
                {
                  rotateZ:
                    this.state.selectedPlanet.NAME === "Uranus"
                      ? this.state.antiRotation
                      : this.state.selectedPlanet.NAME === "Saturn"
                      ? 10
                      : 0,
                },
              ],
            }}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 0.8,
            }}
          >
            {this.state.selectedPlanet.NAME}
          </Text>
          <Text
            style={{
              width: 8,
              fontSize: 0.5,
              textAlign: "center",
            }}
          >
            {this.state.selectedPlanet.DESC}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            height: 7,
            justifyContent: "space-between",
            transform: [{ translate: [1, 0, 0] }],
          }}
        >
          {PLANET_ORDER.map((name, index) => (
            <VrButton key={index} onClick={() => this.changePlanet(index)}>
              <Text style={styles.buttonText}>{name}</Text>
            </VrButton>
          ))}
        </View>
      </View>
    );
  }
}
