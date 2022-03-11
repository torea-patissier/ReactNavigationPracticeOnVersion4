import { StyleSheet } from 'react-native';
import StackNav from './routes/HomeStackNav';
export default function App() {
  
  return (
    <StackNav
    color = {styles.textScreen}
    />
  );
}

const styles = StyleSheet.create({
  textScreen: {
    fontSize:100,
  },
});
