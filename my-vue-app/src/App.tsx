import './App.css'
import { DateFiledComponent } from './components/DateFiled/DateFileComponent'
import { NumberFiledComponent } from './components/NumberFiled/NumberFiled'
import { SelectFiledComponent } from './components/SelectFiled/SelectFiledComponent'
import { TextFiledComponent } from './components/TextFiled/TextFiledComponent'

function App() {

  return (
    <>
    <div className='form'>
      <header className='header'>Drivers License Creation Form!</header><br />
      <form>
        <TextFiledComponent filedName='First Name' /><br /><br />
        <TextFiledComponent filedName='Last Name' /><br /><br />
        <DateFiledComponent filedName='Birthdate' /><br /><br />
        <NumberFiledComponent filedName='Id' /><br /><br />
        <NumberFiledComponent filedName='License Number' /><br /><br />
        <SelectFiledComponent filedName='Car Kind' /><br /><br />
        <DateFiledComponent filedName='Creation Date' /><br /><br />
      </form>
    </div>
    </>
  )
}

export default App
