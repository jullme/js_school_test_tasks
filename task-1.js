const createMatrix = (n) => {
    let matrix= [];
    let max_num = n*n;
    let x_index = 0;
    let y_index = 0;
    let limit = 0;

    for(let i = 0; i < n; i++) {
        let row = [];
        for(let j = 0; j < n; j++) {
            row.push(0);
        }
        matrix.push(row);
    }

    for(let i = 0; i < max_num;){
        while(y_index + limit < n){
            i++;
            matrix[x_index][y_index]=i;
            y_index++;
        }
        y_index--;
        x_index++;

        while(x_index + limit < n){
            i++;
            matrix[x_index][y_index]=i;
            x_index++;
        }
        x_index--;
        y_index--;

        while(y_index >= limit){
            i++;
            matrix[x_index][y_index]=i;
            y_index--;
        }
        y_index++;
        x_index--;
        limit++;

        while(x_index >= limit){
            i++;
            matrix[x_index][y_index]=i;
            x_index--;
        }
        x_index++;
        y_index++;
    }
    return matrix;
}

createMatrix(5);