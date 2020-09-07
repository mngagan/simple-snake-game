export default ({move, position, increase, bounds}) => {
    let value = 10
    if(position.length > 1){
        if(move == 'right'){
            let first = {...position[0]}
            first.x = first.x + value
            if(first.x > bounds.w){
                first.x = 0
            }
            position.unshift(first)
            if(!increase) position.pop()
        }
        else if(move == 'up'){
            let first = {...position[0]}
            first.y = first.y - value
            if(first.y < 0){
                first.y = bounds.h
            }
            position.unshift(first)
            if(!increase) position.pop()
        }
        else if(move == 'left'){
            let first = {...position[0]}
            first.x = first.x - value
            if(first.x < 0){
                first.x = bounds.w
            }
            position.unshift(first)
            if(!increase) position.pop()
        }
        else if(move == 'down'){
            let first = {...position[0]}
            first.y = first.y + value
            if(first.y > bounds.h){
                first.y = 0
            }
            position.unshift(first)
            if(!increase) position.pop()
        }
        

        return {position}
    }

    
}