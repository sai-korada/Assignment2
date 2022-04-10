let n = 8;
let m = 8;
 

function findPossibleMoves(mat, p, q)
{
    let allPossibleMoves = [];

    let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
    let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

    let count = 0;


    for (let i = 0; i < 8; i++) {

        // Position of knight after move
        let x = p + X[i];
        let y = q + Y[i];

        // count valid moves
        if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
            allPossibleMoves.push(new Array(x,y))
    }

    // Return number of possible moves
    return allPossibleMoves;
}
 
let mat = [ [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
          ];

let p = 2, q = 2;

console.log(findPossibleMoves(mat, p, q))