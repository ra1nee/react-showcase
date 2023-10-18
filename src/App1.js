import './App.css';

const App = () => {
    const name = 'Jane';
    const isNameShowing = true;
    return (
        <div className="App">
            <h1>Hello {isNameShowing ? name : 'someone'} </h1>
            {/* if isNameShowing is true, name will show as name above 
      if isNameShowing is false, name will show as someone */}
            {/* inject JS code into html */}
            {name ? (
                <h1>{name}</h1>
            ) : (
                // to put text like this have to wrap them in a react fragment <>
                <>
                    <h1>test</h1>
                    <h2>there is no name</h2>
                </>
            )}
        </div>
    );
}

export default App;
