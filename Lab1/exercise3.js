
document.addEventListener('DOMContentLoaded', () => {

    var rows = [];
    const ROWCOUNT = 50;
    const COLCOUNT = 101;
    const CELLSIZE = 8;

    for(let i = 0; i < ROWCOUNT; i++)
    {
        rows[i] = new Array();

        for(let j = 0; j < COLCOUNT; j++){
            if(i === 0){
                rows[i][j] = Math.random() < 0.5 ? true : false;
            }
            else{
                if(j === 0) {
                    rows[i][j] = checkAncestors(i-1,j,j+100,j+1);
                }
                else if (j === 100){
                    rows[i][j] = checkAncestors(i-1,j,j-1,j-100);
                }
                else{
                    rows[i][j] = checkAncestors(i-1,j,j-1,j+1);
                }
            }

            console.log(rows[i][j]);
        }
    }

    let block = document.createElement("div");
    block.style.width = `${COLCOUNT * CELLSIZE}px`;
    block.style.height = `${ROWCOUNT * CELLSIZE}px`;

    for(let i = 0; i < ROWCOUNT; i++ ){
        for(let j = 0; j < COLCOUNT; j++){
            let blockChild = document.createElement("div");
            blockChild.style.width = `${CELLSIZE}px`;
            blockChild.style.height = `${CELLSIZE}px`;
            blockChild.style.float = "left";
            blockChild.style.background = rows[i][j] ? "black" : "white";
            block.appendChild(blockChild);
        }
    }

    document.body.appendChild(block);

    function checkAncestors(row, ancestor, left, right){
        if(rows[row][ancestor] === false &&
            rows[row][left] === false &&
            rows[row][right]=== false){
            return false;
        }
        else if(rows[row][ancestor]=== true &&
            rows[row][left]=== true &&
            rows[row][right]=== false){
            return false;
        }
        else if(rows[row][ancestor]=== true &&
            rows[row][left]=== false &&
            rows[row][right]=== true){
            return false;
        }
        else{
            return true;
        }
    }
});

