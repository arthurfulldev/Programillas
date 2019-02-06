let cont = 0;

var svgNS="http://www.w3.org/2000/svg";
var xlinkNS="http://www.w3.org/1999/xlink";
var miSvgNew = document.createElementNS( svgNS,"svg");

svg(400);

function sierpinsky ( rec, position, size ) {
    A=[], B=[], C=[];
    A = position;
    B = [ position[0] + size, position[1] ];
    C = [ position[0] + (size/2), position[1] - size ];
    
    // draw svg
    drawLineSvg(A,B);
    drawLineSvg(B,C);
    drawLineSvg(C,A);

    B = [ position[0] + (size), position[1] ];
    C = [ position[0], position[1] - size ];
   
    if ( rec > 0 ){
        sierpinsky( rec -1, A, (size/2) );
        sierpinsky( rec -1, B, (size/2) );
        sierpinsky( rec -1, C, (size/2) );
    }
}

function drawLineSvg( x, y){
    let svg = document.getElementById("svg-triangulo-sierpinsky-" + cont );
    node = document.createElement('polyline');
    points = document.createAttribute('points');
    points.value = x[0] + ',' + x[1] + ' ' + y[0] + ',' + y[1];
    node.setAttributeNode( points )
    svg.appendChild(node);
}


function svg( size ){
    
    miSvgNew.setAttributeNS( xlinkNS,"ns:xlink",xlinkNS);

    miSvgNew.setAttribute("version", "1.0");
    miSvgNew.setAttribute("width",   size +"px");
    miSvgNew.setAttribute("height",  size +"px");
    miSvgNew.setAttribute("id",      "svg-triangulo-sierpinsky-" + cont + "");
    miSvgNew.setAttribute("class",   "svg-triangulo-sierpinsky");

    body = document.getElementById('svg');
    body.appendChild(miSvgNew);

}

sierpinsky( 1, [0,400], 400 );
