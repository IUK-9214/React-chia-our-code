function Notes() {
  return (
    <>
      <div>
        <h1>Files for Understanding in Public Folder</h1>
        <ul>
          <li>
            <h3>index.html</h3>
            <p>
              In the public folder, the most important file is <strong>index.html</strong>, which is considered the main page in a Single Page Application (SPA).
              <br />
              It contains a <code>&lt;div id="root"&gt;</code>, where React injects and controls the entire DOM content dynamically.
            </p>
          </li>
        </ul>

        <h1>Files for Understanding in SRC Folder</h1>
        <ul>
          <li>
            <h3>index.js</h3>
            <p>
              <strong>document.getElementById('root')</strong>: Finds the HTML element with the ID <code>root</code>.<br />
              <strong>ReactDOM.createRoot(...)</strong>: Creates a React rendering root used in React 18+.<br />
              <strong>.render(&lt;App /&gt;)</strong>: Renders the App component inside the root element.
            </p>
          </li>

          <li>
            <h3>App.js</h3>
            <p>
              <strong>function App()</strong>: Defines a React component where we write HTML using JSX inside a JavaScript function.<br />
              <strong>return</strong>: Returns a single root element which can include multiple nested elements.<br />
              <strong>export default</strong>: Exports the component so it can be imported and used in other files of the React project.
            </p>
          </li>
        </ul>

        <h1>Mistakes to Avoid</h1>
        <ul>
          <li>
            <h3>Component Naming & Structure</h3>
            <p>
              <strong>Uppercase Naming:</strong> Always start component names with an uppercase letter. React treats lowercase names as HTML tags.<br />
              <strong>Import:</strong> Always import the component before using it elsewhere.<br />
              <strong>Using Vite:</strong> Use `.js` files for regular components or `.jsx` for JSX syntax. File extensions must match the content type.<br />
              <strong>Fragment Tags:</strong> Use React Fragments (`&lt;&gt;...&lt;/&gt;`) when returning multiple sibling elements to avoid errors like “JSX must have one parent element”.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Notes;
