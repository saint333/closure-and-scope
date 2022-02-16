let scope = "i am global"

const func = () => {
    let scope = "i am just local"
    const anotherFunc = () => {
        return scope
    }
    console.log(anotherFunc());
}

func()
console.log(scope);