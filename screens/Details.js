import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      imagePath: "",
      url: `http://localhost:5000/planet?name=${this.props.navigation.getParam(
        "planet_name"
      )}`
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setDetails(response.data.data);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  setDetails = planetDetails => {
    const planetType = planetDetails.planet_type;
    let imagePath = "";
    switch (planetType) {
      
    }

    this.setState({
      details: planetDetails,
      imagePath: imagePath
    });
  };

  render() {
    const { details, imagePath } = this.state;
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});
