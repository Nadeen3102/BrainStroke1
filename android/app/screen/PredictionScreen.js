// PredictionComponent.js
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class PredictionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      prediction: null,
      error: null,
    };
  }

  componentDidMount() {
    this.makePrediction();
  }

  makePrediction = async () => {
    
    
    // Assuming other parameters are constant or you collect them similarly
    const otherParameters = {
      gender:1,
      hypertension:0,
      heart:1,
      age:24,
      married: 1,
      work: 2,
      residence: 1,
      avg_glucose_level: 85.6,
      bmi: 24.5,
      smoking: 2,
    };

    const requestBody = {
    
      otherParameters,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.setState({ prediction: data.prediction_text, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { loading, prediction, error } = this.state;

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {prediction && <Text style={styles.resultText}>Prediction: {prediction}</Text>}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
  errorText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default PredictionScreen;
