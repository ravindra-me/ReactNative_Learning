import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard title={'Flexbox & Layout 1'} />
        <FancyCard title={'Flexbox & Layout 2'} />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
