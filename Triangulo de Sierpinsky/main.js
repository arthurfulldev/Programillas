function sierpinsky ( rec, position, size ) {
    A=[], B=[], C=[];

    A = position;
    B = [ position[0] + size, position[1] ];
    C = [ position[0] + (size/2), position[1] - size ];
    
    drawLine(A, B);
    drawLine(B, C);
    drawLine(C, A);
    B=[], C=[];
    B = [ position[0] + (size), position[1] ];
    C = [ position[0] - size/2, position[1] - ( size ) ];
    console.log( position, "A: " + A, size );
    //console.log( position, "B: " + B, size );
    //console.log( position, "C: " + C, size );
    
    if ( rec > 0 ){
        sierpinsky( rec -1, A, (size/2) );
        sierpinsky( rec -1, B, (size/2) );
        sierpinsky( rec -1, C, (size/2) );
    }
}

function drawLine( x, y){
    var c = document.getElementById("trienagulo_sierpinsky");
    var ctx = c.getContext("2d");
    ctx.moveTo( x[0], x[1] );
    ctx.lineTo( y[0], y[1] )
    ctx.stroke();
}

sierpinsky( 6, [0,1000], 1000 );
