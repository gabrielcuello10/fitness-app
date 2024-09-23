import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, XStack } from 'tamagui';

interface ScreenProps {
    isLoading: boolean;
    children?: React.ReactNode;
  }

const Screen: React.FC<ScreenProps> = ({ isLoading, children }) => {
  return (
    <XStack style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        children
      )}
    </XStack>
  );
};

export default Screen;
