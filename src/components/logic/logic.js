export const calculateWinner = (updatedSquares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (updatedSquares[a] && updatedSquares[a] === updatedSquares[b] && updatedSquares[a] === updatedSquares[c]) {
        return updatedSquares[a];
        }
    }
    return null;
}