function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
 export function generateRandomName() {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Harry','Anderson', 'Brown', 'Clark', 'Davis', 'Evans', 'Fisher', 'Green', 'Hill'];
  
    const randomFirstName = getRandomElement(firstNames);
  
    return `${randomFirstName}`;
}

export function generateRandomText() {
    const text = ["g87t8787ty","45678ijhhj","0965tyuj","xcvbnm,","09876543wsxdcvbghj","987654esdfghj","esdfgh","65redfghj","daiugiayf","safy9843","iuiydoi","fiywwyio","r67uyhguh","gre65r76","mjigyxdrse","7ujn5rf3ed3e","87654edghjmn","ryhvi78689","pojhgfdszx","6tgb8uj","9ikjnbd2wd","8754ehjkl","edrftgyhujkm","jhgfds","qwerftghb","wertgyu","mnbfds","fghjkltred","jfhjbgvn","hdghdfhbxvb","affsfsagwrhagd",];
    const randomText = getRandomElement(text);

    return `${randomText}`;
}