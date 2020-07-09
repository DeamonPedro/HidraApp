import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  buttons: {
    flex: 1,
    width: '70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textButtonAdd: {
    color: '#519918',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  textButtonClose: {
    color: 'white',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  textButtonSave: {
    color: 'white',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
  buttonCancel: {
    backgroundColor: '#D10E29',
    height: 50,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
  buttonAdd: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#519918',
    flexDirection: 'row',
  },
  buttonSave: {
    backgroundColor: '#519918',
    height: 50,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
  modalContainer: {
    backgroundColor: '#ffffff75',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 70,
  },
  textTitle: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  Input: {
    backgroundColor: '#EDF6FF',
    width: '80%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60%',
    alignSelf: 'center',
  },
  textSubTitle: {
    textAlign: 'center',
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  textWarning: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  contactEnabled: {
    margin: 10,
    alignSelf: 'center',
    borderColor: '#519918',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  contactContainer: {
    aspectRatio: 10 / 2,
    width: '80%',
    height: undefined,
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10%',
  },
  textContactEnabled: {
    padding: 10,
    paddingHorizontal: 20,
    color: '#519918',
  },
  iconView: {
    backgroundColor: 'red',
    alignSelf: 'center',
    flexDirection: 'column',
    width: '20%',
    aspectRatio: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 0,
  },
});