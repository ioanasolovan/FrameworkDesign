import './components/json-to-table.js'

const template = document.createElement('template');

template.innerHTML = `
  
  <link rel="stylesheet" type="text/css" href="my-style.css">
  <div>
    <h1>Web Component for FrameworkDesign (json-to-table)</h1>
    <div>
    <h2>Present data from json as a HTML table</h2>
    <h3>Sample 1 - Persons</h3>
    <xmp>
    Json:
    {
      "headers": ["Name", "Age", "CNP"],
      "rows": 
      [
        ["Ioana Solovan", 23, "2234567891234"],
        ["Paul Boca", 65, "1234567891234"],
        ["Silviu Pop", 34, "2021085526789"]
      ]
    }
    </xmp>
    <json-to-table src="sample1.json"></json-to-table>
    </div>
    
    <div><h3>Sample 2 - Books</h3>
    <xmp>
    Json:
    {
      "headers": ["Title", "Author(s)", "Nr of pages"],
      "rows": 
      [
        ["Framework Design Guidelines: Conventions, Idioms, and Patterns for Reusable .NET Libraries", "Krzysztof Cwalina", 480],
        ["NET Framework Standard Library Annotated Reference", "Brad Abrams", 528],
        ["Design Patterns: Elements of Reusable Object-Oriented Software", "Erich Gamma, John Vlissides, Richard Helm, Ralph Johnson", 395],
        ["Experience Design: A Framework for Integrating Brand, Experience, and Value", "Patrick Newbery, Kevin Farnham", 240],
        ["Practical API design", "Jaroslav Tulach", 387]
      ]
    }
    </xmp>
    <json-to-table src="sample2.json"></json-to-table>
    </div>
  </div>
`;

class App extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('my-app', App);
