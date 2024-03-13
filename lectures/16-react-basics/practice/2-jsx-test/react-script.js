// const element = React.createElement('h1', {id: 'element-id', children: "Heloo guys!"});
const Heading = () => {
    const name = "Misha";
    return <h1 id="test-id">Hello from jsx {name}</h1>
};

const domContainer = document.querySelector('#root_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Heading />);