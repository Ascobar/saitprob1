function isWerewolf(target) {
    let reverse = '';
    let reReverse = '';

    for(let i = target.length -1; i >= 0; i--){
//        if(target[i] = ' ') {
//        reverse[i] = '';
//        reReverse[i] = '';
//        target[i] = '';
//    }
// if(reverse[i] === ' ') reverse[i] += '';
      reverse += target[i];
      reReverse += reverse[i];
    }
    for(let c = 0; c < target.length; c++){
        if(reverse[c] = ' '){
        reverse[c] += '';
    }
    }
//  console.log(reReverse);
    console.log(target);
    console.log(reverse);
    console.log(reverse.toLowerCase() === target.toLowerCase());
    return reverse.toLowerCase === target.toLowerCase;
  }
isWerewolf('red rum sir is murder')