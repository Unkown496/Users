export const objectMap = <T extends Object>(object: T, callback: (val: any, prop: string, obj: T) => T) => {
    let resultObject = object;

    for(let prop in resultObject) {
        const result = callback(object[prop], prop, resultObject);

        Reflect.set(resultObject, prop, result);
    };

    return resultObject;
};

export const filterObject = <T extends Object>(object: T, callback: (val: any, prop: string, obj: T) => boolean) => {
    let resultObject = object;

    for(let prop in resultObject) {
        const result = callback(object[prop], prop, resultObject);

        if(!result) Reflect.deleteProperty(resultObject, prop); 
    };

    return resultObject;
};
