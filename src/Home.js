const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }
    const handleClickAgain = (name) => {
        console.log("hello, " + name);
    };
    const handleClickAgainObj = (name, e) => {
        console.log("hello, " + name, e.target);
    };

    return (
    <div className="home">
    <h2>Homepage</h2>
    {/* this will fire automatically */}
    {/* <button onClick={handleClick()}>Click me</button> */}
    
    {/* by reference, so don't fire automatically */}
    <button onClick={handleClick}>Click me</button>
    
    {/* anonymous reference for name */}
    <button onClick={() => handleClickAgain("mario")}>Click me again</button>
    
    {/* anonymous reference for dynamic referencing name */}
    <button onClick={(e) => handleClickAgainObj("mario", e)}>Click me again object</button>
    </div>
    );
}

export default Home;