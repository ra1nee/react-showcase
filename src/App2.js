import './App.css';


const Person = (props) => {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Last Name: {props.lastName}</h2>
            <h2>Age: {props.Age}</h2>
        </>
    )
}
const App = () => {
    return (
        <div className="App">
            <Person
                name={'John'}
                lastName={'Doe'}
                Age={'30'} />
            <Person
                name='Mary' />
        </div>
    );
}

export default App;
