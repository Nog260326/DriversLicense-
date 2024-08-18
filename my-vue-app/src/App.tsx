import './App.css'
import { DateFiledComponent } from './components/DateFiled/DateFileComponent'
import { NumberFiledComponent } from './components/NumberFiled/NumberFiled'
import { SelectFiledComponent } from './components/SelectFiled/SelectFiledComponent'
import { TextFiledComponent } from './components/TextFiled/TextFiledComponent'

function App() {
  var creationDate: string = '';
  var carKind: string = '';
  var firstName: string = '';
  var lastName: string = '';
  var adress: string = '';
  var birthdate: string = '';
  var id: string = '';
  var licenseNumber: string = '';
  var expirationDate: string = '';

  function CarKindCallBack(childData: string){
    carKind = childData;
  }

  function FirstNameCallBack(childData: string){
    firstName = childData;
  }

  function LastNameCallBack(childData: string){
    lastName = childData;
  }

  function adressCallBack(childData: string){
    adress = childData;
  }

  function IdCallBack(childData: number){
    id = childData.toString();
    if(childData > 100000000 && childData < 999999999){
      return(
        <p>valid Id</p>
      )
    }
    return(
      <p>the id you typed is not valid</p>
    )
  }

  function LicenseNumberCallBack(childData: number){
    licenseNumber = childData.toString();
    if(childData > 100000000 && childData < 999999999){
      return(
        <p>valid license number</p>
      )
    }
    return(
      <p>the license number you typed is not valid</p>
    )
  }

  function BirthdateCallBack(childData: string){
    birthdate = childData;
    const year: number = parseInt(childData[0])*1000 + parseInt(childData[1])*100 + parseInt(childData[2])*10 + parseInt(childData[3]);
    if(year > 1924 && year < 2008){
      return(
        <p>valid birthdate</p>
      )
    }
    return(
      <p>the birthdate you typed is not valid, too young</p>
    )
  }

  
  function CreationDateCallBack(childData: string){
    creationDate = childData;
  }

  function ExpirationDateCallBack(childData: string){
    expirationDate = childData;
    parseInt(creationDate[0])*1000 + parseInt(creationDate[1])*100 + parseInt(creationDate[2])*10 + parseInt(creationDate[3]) + 6;
    const newYear = parseInt(creationDate[0])*1000 + parseInt(creationDate[1])*100 + parseInt(creationDate[2])*10 + parseInt(creationDate[3]) + 6;
    const lastYear = parseInt(creationDate[0])*1000 + parseInt(creationDate[1])*100 + parseInt(creationDate[2])*10 + parseInt(creationDate[3]);
    
    console.log(childData);
    console.log(creationDate);
    
    if(newYear - 6 == lastYear){
      return(
        <p>the expiration date you typed is valid</p>
    )}
    return(
      <p>the expiration date you typed is not valid</p>
    )
  }
  
  const submitHandle = () => {
    alert("Te Information We Got Is: \n" + "first name: " + firstName + "\n" + "last name: " + lastName + 
        "\n" + "birthdate: " + birthdate + "\n" + "id: " + id + "\n" + "adress: " +adress + "\n"
      + "license number: " + licenseNumber + "\n" + "car kind: " + carKind + "\n" + "creation date: " + 
      creationDate + "\n" + "expiration date" + expirationDate
    )
  }

  return (
    <>
    <div className='form' onSubmit={submitHandle}>
      <header className='header'>Drivers License Creation Form!</header><br />
      <form>
        <TextFiledComponent filedName='First Name' handleCallback={FirstNameCallBack} /><br />
        <TextFiledComponent filedName='Last Name' handleCallback={LastNameCallBack}/><br />
        <DateFiledComponent filedName='Birthdate' handleCallback={BirthdateCallBack}/>
        <NumberFiledComponent filedName='Id' handleCallback={IdCallBack} />
        <TextFiledComponent filedName='Adress' handleCallback={adressCallBack}/><br />
        <NumberFiledComponent filedName='License Number' handleCallback={LicenseNumberCallBack}/>
        <SelectFiledComponent filedName='Car Kind' handleCallback={CarKindCallBack}/><br />
        <DateFiledComponent filedName='Creation Date' handleCallback={CreationDateCallBack}/><br />
        <DateFiledComponent filedName='Expiration Date' handleCallback={ExpirationDateCallBack}/><br />
        <input type="submit" value="submit" onSubmit={submitHandle}/><br />
        <p>''</p>
      </form>
    </div>
    </>
  )
}


export default App
