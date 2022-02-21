import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  PointLight,
  VrButton,
  StyleSheet,
} from "react-vr";
import DiscriptionBox from "./src/components/DiscriptionBox";
import { PLANET, OVERALL } from "./planet_coef";
export default class solar_system extends React.Component {
  constructor() {
    super();
    this.state = {
      lastTime: null,
      rotation: 0,
      antiRotation: 360,
      angle1: PLANET.MERCURY.START_ANGLE,
      angle2: PLANET.VENUS.START_ANGLE,
      angle3: PLANET.EARTH.START_ANGLE,
      angle4: PLANET.MARS.START_ANGLE,
      angle5: PLANET.JUPITER.START_ANGLE,
      angle6: PLANET.SATURN.START_ANGLE,
      angle7: PLANET.URANUS.START_ANGLE,
      angle8: PLANET.NEPTUNE.START_ANGLE,
      transformZ: -280,
    };
    this.rotate = this.rotate.bind(this);
  }
  rotate(time) {
    if (this.state.lastTime == null) {
      this.setState({ lastTime: time });
      requestAnimationFrame(this.rotate);
      return;
    }
    const delta = time - this.state.lastTime;
    this.setState({
      rotation: this.state.rotation + delta * OVERALL.ROTATE_SPEED,
      antiRotation: this.state.antiRotation - delta * OVERALL.ROTATE_SPEED,
      angle1: this.state.angle1 + delta * PLANET.MERCURY.CIRCLE_SPEED,
      angle2: this.state.angle2 + delta * PLANET.VENUS.CIRCLE_SPEED,
      angle3: this.state.angle3 + delta * PLANET.EARTH.CIRCLE_SPEED,
      angle4: this.state.angle4 + delta * PLANET.MARS.CIRCLE_SPEED,
      angle5: this.state.angle5 + delta * PLANET.JUPITER.CIRCLE_SPEED,
      angle6: this.state.angle6 + delta * PLANET.SATURN.CIRCLE_SPEED,
      angle7: this.state.angle7 + delta * PLANET.URANUS.CIRCLE_SPEED,
      angle8: this.state.angle8 + delta * PLANET.NEPTUNE.CIRCLE_SPEED,
    });
    if (this.state.rotation > 360) {
      this.setState({ rotation: 1 });
    }
    if (this.state.antiRotation < 1) {
      this.setState({ antiRotation: 360 });
    }
    if (this.state.angle1 > 360) {
      this.setState({ angle1: 1 });
    }
    if (this.state.angle2 > 360) {
      this.setState({ angle2: 1 });
    }
    if (this.state.angle3 > 360) {
      this.setState({ angle3: 1 });
    }
    if (this.state.angle4 > 360) {
      this.setState({ angle4: 1 });
    }
    if (this.state.angle5 > 360) {
      this.setState({ angle5: 1 });
    }
    if (this.state.angle6 > 360) {
      this.setState({ angle6: 1 });
    }
    if (this.state.angle7 > 360) {
      this.setState({ angle7: 1 });
    }
    if (this.state.angle8 > 360) {
      this.setState({ angle8: 1 });
    }

    this.setState({ lastTime: time });

    requestAnimationFrame(this.rotate);
  }

  handleZoom(mode) {
    if (mode === "in") {
      if (this.state.transformZ + 20 <= -160) {
        this.setState({ transformZ: this.state.transformZ + 20 });
      }
    } else if (mode === "out") {
      if (this.state.transformZ - 20 > -360) {
        this.setState({ transformZ: this.state.transformZ - 20 });
      }
    }
  }
  componentDidMount() {
    this.rotate();
  }

  render() {
    const styles = StyleSheet.create({
      zoomView: {
        transform: [{ translate: [-2.2, -0.8, -2] }, { rotateX: 0 }],
        flexDirection: "column",
        height: 0.3,
        justifyContent: "space-between",
      },
      zoomText: {
        backgroundColor: "#13946d",
        textAlign: "center",
        width: 0.8,
      },
    });
    return (
      <View>
        <Pano source={asset("space.jpg")} />
        <View
          style={{
            transform: [
              { translate: [-20, 0, this.state.transformZ] },
              { rotateX: 70 },
              { rotateY: 0 },
            ],
          }}
        >
          <PointLight
            insinity={15}
            style={{
              color: "white",
              transform: [{ translate: [-50, 0, 0] }],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("sun.jpg")}
            style={{
              transform: [
                { translate: [-50, 0, 0] },
                { scale: [8, 8, 8] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("mercury.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.MERCURY.DISTANCE_SCALE_X *
                      Math.cos(this.state.angle1),
                    0,
                    PLANET.MERCURY.DISTANCE_SCALE_Z *
                      Math.sin(this.state.angle1),
                  ],
                },
                { scale: [0.7, 0.7, 0.7] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("venus.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.VENUS.DISTANCE_SCALE_X * Math.cos(this.state.angle2),
                    0,
                    PLANET.VENUS.DISTANCE_SCALE_Z * Math.sin(this.state.angle2),
                  ],
                },
                { scale: [0.95, 0.95, 0.95] },
                { rotateY: this.state.antiRotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("earth.png")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.EARTH.DISTANCE_SCALE_X * Math.cos(this.state.angle3),
                    0,
                    PLANET.EARTH.DISTANCE_SCALE_Z * Math.sin(this.state.angle3),
                  ],
                },
                { scale: [1, 1, 1] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("mars.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.MARS.DISTANCE_SCALE_X * Math.cos(this.state.angle4),
                    0,
                    PLANET.MARS.DISTANCE_SCALE_Z * Math.sin(this.state.angle4),
                  ],
                },
                { scale: [0.8, 0.8, 0.8] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("jupiter.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.JUPITER.DISTANCE_SCALE_X *
                      Math.cos(this.state.angle5),
                    0,
                    PLANET.JUPITER.DISTANCE_SCALE_Z *
                      Math.sin(this.state.angle5),
                  ],
                },
                { scale: [6, 6, 6] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("Saturn.obj") }}
            texture={asset("saturn.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.SATURN.DISTANCE_SCALE_X *
                      Math.cos(this.state.angle6),
                    0,
                    PLANET.SATURN.DISTANCE_SCALE_Z *
                      Math.sin(this.state.angle6),
                  ],
                },
                { scale: [11, 11, 11] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("uranus.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.URANUS.DISTANCE_SCALE_X *
                      Math.cos(this.state.angle7),
                    0,
                    PLANET.URANUS.DISTANCE_SCALE_Z *
                      Math.sin(this.state.angle7),
                  ],
                },
                { scale: [2, 2, 2] },
                { rotateZ: this.state.antiRotation },
              ],
            }}
          />
          <Model
            source={{ obj: asset("sphere.obj") }}
            texture={asset("neptune.jpg")}
            lit
            style={{
              transform: [
                {
                  translate: [
                    PLANET.NEPTUNE.DISTANCE_SCALE_X *
                      Math.cos(this.state.angle8),
                    0,
                    PLANET.NEPTUNE.DISTANCE_SCALE_Z *
                      Math.sin(this.state.angle8),
                  ],
                },
                { scale: [1.9, 1.9, 1.9] },
                { rotateY: this.state.rotation },
              ],
            }}
          />
        </View>
        <View style={styles.zoomView}>
          <VrButton onClick={() => this.handleZoom("in")}>
            <Text style={styles.zoomText}>zoom in</Text>
          </VrButton>
          <VrButton onClick={() => this.handleZoom("out")}>
            <Text style={styles.zoomText}>zoom out</Text>
          </VrButton>
        </View>

        <DiscriptionBox />
      </View>
    );
  }
}

AppRegistry.registerComponent("solar_system", () => solar_system);
