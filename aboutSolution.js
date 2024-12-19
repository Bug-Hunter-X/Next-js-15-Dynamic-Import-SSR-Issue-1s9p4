```javascript
// pages/aboutSolution.js
import dynamic from 'next/dynamic';

export default function About() {
  const Component = dynamic(() => import('./dynamic-component'), {
    ssr: false, // Prevents the dynamic import from running on the server
    loading: () => <p>Loading...</p>, // Optional: display a loading message
  });

  return (
    <div>
      <h1>About Page</h1>
      <Component />
    </div>
  );
}
```
```javascript
//pages/dynamic-component.js

export default function DynamicComponent(){
    return(
        <div>Dynamic Component</div>
    );
}
```