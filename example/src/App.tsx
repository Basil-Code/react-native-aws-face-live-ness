import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AwsFaceLiveNessView } from 'react-native-aws-face-live-ness';

export default function App() {
  return (
    <View style={styles.container}>
      <AwsFaceLiveNessView sessionId="#32a852"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
