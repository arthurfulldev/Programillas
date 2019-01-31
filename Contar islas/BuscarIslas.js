function BuscarIslas ( string, id ) {
    this.mapa;
    this.id = id;
    this.constructor = () => {
        this.mapa = ( string.split('\n').map( (row) => row.split("")));        
        islas = 0;
        itera = this.mapa.map( (row, i) => row.map( (column, j )  => { if ( column == 0 ) { islas++; this.countIslas( i, j, islas ) } } )  );
        l =  document.getElementById("label_" + this.id ).innerHTML = "Se encontraron: " + islas + ' islas en el mapa que ingresate.';
        this.makeMap();
    }
    
    this.countIslas = ( rowIndex, columnIndex, isla ) => {
        let m = this.mapa.length;
        let n = this.mapa[0].length;

        if( rowIndex < 0 || rowIndex >= m || columnIndex < 0 || columnIndex >= n || this.mapa[rowIndex][columnIndex] != 0){
            return;
        }
        this.mapa[rowIndex][columnIndex] = isla;
        this.countIslas( rowIndex+1, columnIndex, isla ) //abajo
        this.countIslas( rowIndex-1, columnIndex, isla ) //arriba
        this.countIslas( rowIndex, columnIndex+1, isla ) //derecha
        this.countIslas( rowIndex, columnIndex-1, isla ) //izquieda
    }

    this.makeMap = () => {
        agua = "#0087A0";
        tierra = "#955F20";

        let m = this.mapa.length;
        let n = this.mapa[0].length;

        var c = document.getElementById("canvas_" + this.id);
        c.setAttribute("height", (m*22) )
        c.setAttribute("width", (n*22) )
        var ctx = c.getContext("2d");
        ctx.beginPath();

        for( i = 0; i < m; i++){
            for( j = 0; j < n; j++){
                ctx.fillStyle = ( this.mapa[i][j] == '.' ) ? agua: tierra;
                ctx.fillRect( 1*(j*22), 1*(i*22), 21, 21 );
            }
        }
        ctx.stroke();
    }
    this.init = () => {
        this.constructor();
    }
}