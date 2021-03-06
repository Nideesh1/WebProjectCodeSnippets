var center = 0;
var cy =  cytoscape({

  container: document.getElementById('cy'),

  elements: [
    { // node n1
      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
      // NB the group field can be automatically inferred for you but specifying it
      // gives you nice debug messages if you mis-init elements


      data: { // element data (put json serialisable dev data here)
        id: 'n1', // mandatory (string or number) id for each element, assigned automatically on undefined
        parent: 'nparent', // indicates the compound node parent id; not defined => no parent
        name: 'Click Me'
      },


      position: { // the model position of the node (optional on init, mandatory after)
        x: 150,
        y: 200
      },

      selected: false, // whether the element is selected (default false)

      selectable: true, // whether the selection state is mutable (default true)

      locked: true, // when locked a node's position is immutable (default false)

      grabbable: true, // whether the node can be grabbed and moved by the user

      "style":{
                'background-image':'https://vignette.wikia.nocookie.net/nation/images/f/fc/Star_full.png/revision/latest?cb=20130407014646',
                'height': 200,
        'width': 200,
        "font-size":50
      }

    },

    { // node n2
      data: { id: 'n2' , name: 'MBA'},
      position: { x: -250, y: -100 } ,
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "left",
            "font-size":50,
                            'height': 200,
        'width': 200,
        'opacity':0.01
      },


    },

    { // node n3
      data: { id: 'n3' , name: 'Photgrapher'},
      position: { x: 550, y: -100 },
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "right",
      "font-size":50,
                      'height': 200,
        'width': 200,
        'opacity':0.01
      }
    },

    { // node n3
      data: { id: 'n4' , name: 'LifeStyle Coach'},
      position: { x: -250, y: 500 },
      locked: true, 
      "style": {
      "text-valign": "bottom",
      "text-halign": "left",
            "font-size":50,
                            'height': 200,
        'width': 200,
        'opacity':0.01
      }
    },

    { // node n3
      data: { id: 'n5' , name: 'Fitness Instructor'},
      position: { x: 550, y: 500 },
      locked: true, 
      "style": {
      "text-valign": "bottom",
      "text-halign": "right",
            "font-size":50,
                            'height': 200,
        'width': 200,
        'opacity':0.01
      }
    },

        { // node n21
      data: { id: 'n21' , name: 'UCSD Rady'},
      position: { x: -350, y: -400 },
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity':0.01
      }
    },

     { // node n22
      data: { id: 'n22' , name: 'Consultant'},
      position: { x: -400, y: 100 },
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity':0.01
      }
    },

      { // node n31
      data: { id: 'n31' , name: 'Nature'},
      position: { x: 550, y: -400 },
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity':0.01
      }
    },

     { // node n32
      data: { id: 'n32' , name: 'Portrait'},
      position: { x: 900, y: 100 },
      locked: true, 
      "style": {
      "text-valign": "bottom",
      "text-halign": "right",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity': 0.01
      }
    },

      { // node n41
      data: { id: 'n41' , name: 'Dating'},
      position: { x: -650, y: 400 },
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity': 0.01
      }
    },

     { // node n42
      data: { id: 'n42' , name: 'Communication'},
      position: { x: -450, y: 900 },
      locked: true, 
      "style": {
      "text-valign": "bottom",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity': 0.01
      }
    },

          { // node n51
      data: { id: 'n51' , name: 'Certified'},
      position: { x: 850, y: 400 },
      locked: true, 
      "style": {
      "text-valign": "top",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity': 0.01
      }
    },

     { // node n52
      data: { id: 'n52' , name: 'NASM'},
      position: { x: 450, y: 900 },
      locked: true, 
      "style": {
      "text-valign": "bottom",
      "text-halign": "left",
        "font-size":50,
        'height': 100,
        'width': 100,
        'opacity': 0.01
      }
    },



    { // edge e1
      data: {
        id: 'e1',
        // inferred as an edge because `source` and `target` are specified:
        source: 'n1', // the source node id (edge comes from this node)
        target: 'n2'  // the target node id (edge goes to this node)
      },
       selectable: false,
       locked: true,
        "style": {
          "curve-style": "unbundled-bezier",
          "control-point-distances": -30,
          "control-point-weights": 0.5,
                  'opacity':0.01
        }

    },
    { // edge e1
      data: {
        id: 'e2',
        // inferred as an edge because `source` and `target` are specified:
        source: 'n1', // the source node id (edge comes from this node)
        target: 'n3'  // the target node id (edge goes to this node)
      },
       selectable: false,
       locked: true,
        "style": {
          "curve-style": "unbundled-bezier",
          "control-point-distances": 30,
          "control-point-weights": 0.5,
                  'opacity':0.01
        }

    },
    { // edge e1
      data: {
        id: 'e3',
        // inferred as an edge because `source` and `target` are specified:
        source: 'n1', // the source node id (edge comes from this node)
        target: 'n4'  // the target node id (edge goes to this node)
      },
       selectable: false,
       locked: true,
        "style": {
          "curve-style": "unbundled-bezier",
          "control-point-distances": 30,
          "control-point-weights": 0.5,
                  'opacity':0.01
        }

    },
    { // edge e1
      data: {
        id: 'e4',
        // inferred as an edge because `source` and `target` are specified:
        source: 'n1', // the source node id (edge comes from this node)
        target: 'n5'  // the target node id (edge goes to this node)
      },
       selectable: false,
       locked: true,
        "style": {
          "curve-style": "unbundled-bezier",
          "control-point-distances": -30,
          "control-point-weights": 0.5,
                  'opacity':0.01
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
        'content': 'data(name)'
      }
    }
  ]

});


function First4Nodes(){


  var n2Ani = cy.$('#n2').animation({
    style: {

      'opacity':1
    },
    duration: 1000
  });

  var n3Ani = cy.$('#n3').animation({
    style: {

      'opacity':1
    },
    duration: 1000
  });

  var n4Ani = cy.$('#n4').animation({
    style: {

      'opacity':1
    },
    duration: 1000
  });

  var n5Ani = cy.$('#n5').animation({
    style: {

      'opacity':1
    },
    duration: 1000
  });

  n2Ani.play();
    n3Ani.play();
    n4Ani.play();
    n5Ani.play();

}

function First4Edges(){
  center += 1;
  var e1Ani = cy.$('#e1').animation({
    style: {

      'opacity':1
    },
    duration: 3000
  });

  var e2Ani = cy.$('#e2').animation({
    style: {

      'opacity':1
    },
    duration: 3000
  });

  var e3Ani = cy.$('#e3').animation({
    style: {

      'opacity':1
    },
    duration: 3000
  });

  var e4Ani = cy.$('#e4').animation({
    style: {

      'opacity':1
    },
    duration: 3000
  });

  e1Ani.play();
  e2Ani.play();
  e3Ani.play();
  e4Ani.play();

}

function upperLeftNodes(){
  var n21Ani = cy.$('#n21').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  var n22Ani = cy.$('#n22').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  n21Ani.play();
  n22Ani.play();
}
function upperRightNodes(){
  var n21Ani = cy.$('#n31').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  var n22Ani = cy.$('#n32').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  n21Ani.play();
  n22Ani.play();
}
function lowerLeftNodes(){
  var n21Ani = cy.$('#n41').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  var n22Ani = cy.$('#n42').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  n21Ani.play();
  n22Ani.play();
}
function lowerRightNodes(){
  var n21Ani = cy.$('#n51').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  var n22Ani = cy.$('#n52').animation({
    style: {
      'opacity':1
    },
    duration: 1000
  });
  n21Ani.play();
  n22Ani.play();
}



function zoomIn(element){


if(center > 0){
  var j = cy.$(element);
        cy.animate({
      fit: {
        eles: j,
        padding: 150
      }
    }, {
      duration: 500
    });

}

}