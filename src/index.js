module.exports = function check(str, bracketsConfig) {
    console.log(bracketsConfig.length);
    
    let OPEN_BRACKETS = [];
    let CLOSE_BRACKETS = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
      OPEN_BRACKETS.push(bracketsConfig[i][0]);
      CLOSE_BRACKETS[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    console.log(OPEN_BRACKETS);
    console.log(CLOSE_BRACKETS);
    
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (stack.length > 0 && stack[stack.length - 1] === str[i] && str[i] === CLOSE_BRACKETS[str[i]]) {
          stack.pop();
      } else if (OPEN_BRACKETS.includes(str[i])) {
        stack.push(str[i]);
      } else {
          if (stack.length === 0) {
          return false;
        }
  
        if (stack[stack.length - 1] === CLOSE_BRACKETS[str[i]]) {
          stack.pop();
        }
          else {
            return false;
          }
      }
     
      
    }
    
    return stack.length === 0;
    
    
  }


