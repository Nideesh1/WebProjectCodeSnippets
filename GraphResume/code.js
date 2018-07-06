/*var cy = cytoscape({

  container: document.getElementById('cy'),

  elements: [
    { // node n1
      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
      // NB the group field can be automatically inferred for you but specifying it
      // gives you nice debug messages if you mis-init elements


      data: { // element data (put json serialisable dev data here)
        id: 'Connor', // mandatory (string or number) id for each element, assigned automatically on undefined
        parent: 'nparent', // indicates the compound node parent id; not defined => no parent
      },

      // scratchpad data (usually temp or nonserialisable data)
      scratch: {
        _foo: 'bar' // app fields prefixed by underscore; extension fields unprefixed
      },

      position: { // the model position of the node (optional on init, mandatory after)
        x: 100,
        y: 100
      },

      selected: false, // whether the element is selected (default false)

      selectable: true, // whether the selection state is mutable (default true)

      locked: true, // when locked a node's position is immutable (default false)

      grabbable: false, // whether the node can be grabbed and moved by the user

      classes: 'foo bar' // a space separated list of class names that the element has
    },

    { // node n2
      data: { id: 'Photographer' , parent: 'nparent'},
      renderedPosition: { x: 200, y: 150 }, // can alternatively specify position in rendered on-screen pixels
      locked: true, // when locked a node's position is immutable (default false)
    },

    { // node n3
      data: { id: 'MBA', parent: 'nparent' },
      position: { x: 123, y: 234 },
      locked: true, // when locked a node's position is immutable (default false)
    },



    { // edge e1
      data: {
        id: 'e1',
        // inferred as an edge because `source` and `target` are specified:
        source: 'Connor', // the source node id (edge comes from this node)
        target: 'Photographer'  // the target node id (edge goes to this node)
      }
    },
    { // edge e1
      data: {
        id: 'e2',
        // inferred as an edge because `source` and `target` are specified:
        source: 'Connor', // the source node id (edge comes from this node)
        target: 'MBA'  // the target node id (edge goes to this node)
      }
    }
  ],

  layout: {
    name: 'preset'
  },

  // so we can see the ids
  style: [
    {
      selector: 'node',
      style: {
        'content': 'data(id)'
      }
    }
  ]

});

*/

 var center = 0;

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in




  elements: [ // list of graph elements to start with
    { // node a
      data: { id: 'Connor', name: 'Connor'}
    },
    { // node b
      data: { id: 'Photographer', name: 'Photographer' , position: { x: 200, y: 10 }}
    },
    { // edge ab
      data: { id: 'ab', source: 'Connor', target: 'Photographer' }
    }
  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': 'white',
        'label': 'data(name)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 2,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
      }
    },

    {
      selector:'#Connor',
      style:{
        'background-image':'https://farm8.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg',
                'height': 80,
        'width': 80,
        'background-fit': 'cover',
      }
    },
    {
      selector:'#Photographer',
      style:{
       
                'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'opacity':0.01
      }
    },
        {
      selector:'#ab',
      style:{
       

        'opacity':0.01
      }
    }

  ],

  layout: {
    name: 'grid',
    rows: 1
  },


   zoomingEnabled: true,
   minZoom: 0.5,
  maxZoom: 2,

});

cy.autolock( true );
cy.autoungrabify( false );

cy.$('#ib').lock();


function appearNodes(){

  center += 1;

  var eles = cy.add([
    { group: "nodes", data: { id: "MBA", name: 'MBA'   , position: { x: 200, y: 200 }} },
    { group: "edges", data: { id: "e0", source: "Connor", target: "MBA" } }
  ]);

  var jAni = cy.$('#Photographer').animation({
    style: {

      'opacity':1
    },
    duration: 1000
  });

  var kAni = cy.$('#ab').animation({
    style: {

      'opacity':1
    },
    duration: 1000
  });

  jAni.play();
  kAni.play();
}

function zoomTo(element){
var j = cy.$('#Photographer');

console.log('clicked ' + element.id());
console.log(center);

    if(center > 0){
      cy.animate({
      fit: {
        eles: j,
        padding: 100
      }
    }, {
      duration: 500
    });

    }

}