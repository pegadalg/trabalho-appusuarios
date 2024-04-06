import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    flex: 1,
    // color: '#363F5F',
    color: '#000',
    fontSize: 13,
    marginLeft: 5,
    fontWeight: 'bold',
    
  },
  button: {
    width: 56,
    backgroundColor: '#D92534',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  middle: {
    backgroundColor: '#F0F2F5',
    flex: 1,
    marginRight: 2,
    height: 80,
    width: 100
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  }
})

