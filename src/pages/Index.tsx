import React from 'react';
import { WebNav } from './components/WebNav';

function Index() {
    const [count, setCount] = React.useState<number>(0);
    return (
        <div>
            <WebNav />
            <h1>Index</h1>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>Count</button><br />
        </div>
    )
}

export default Index;
