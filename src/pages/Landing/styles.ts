import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    resizeMode: "center"
  },

  container: {
    flex: 1,
    backgroundColor: '#2d6da1',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 16,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#3584c4',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonSecondary: {
    backgroundColor: '#02ad4f',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#83b0d4',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 160,
    marginTop: 40,
  }
});

export default styles;