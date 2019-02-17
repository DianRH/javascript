function ClearBoard(){
  for(i=0; i<4; i++){ //posiciones para recorrer las filas(horizontal)
    for (j=0; j<4; j++) { //posiciones para recorrer las columnas(vertical)
            board[i][j] = 0;
            
    }
  }
}
