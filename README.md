# json-to-table

json-to-table is a web component to present data from a JSON file as a HTML table

## Usage
#### Attributes
*	src - load an external JSON file with 2 attributes (headers and rows)

Json format:
```sh
{
	“headers”: [“header1”, “header2”, … , “headerN”],
	“rows”:
    [
        [“data11”, “data12”, … , “data1N”],
        …,
        [“dataM1”, “dataM2”, … , “dataMN”]
    ]
}
```

#### Basic Usage
```sh
<json-to-table src="sample.json"></json-to-table>
```

## Styling
By default, `<json-to-table>` contains an un-styled `<table>` element in the lightDOM. That means, it will inherit any global CSS styles present on the site and can be styled directly using CSS.

### Installation for project WebComponent(json-to-table)

WebComponent(json-to-table) requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and start the server.

```sh
$ cd WebComponent(json-to-table)
$ npm install
$ npm start
```
