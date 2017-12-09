const OBJECT = {
    name: "Kurt",
    lastname: {},
    bio: {
        place: "Tampa",
        state: "",
        date: "23.01.1987",
        post: {
            a: "aaa",
            b: ""
        }
    },
    else: []
};

const skipKey = "lastname";

console.log(countEmptyKeys(OBJECT, skipKey))


function countEmptyKeys(object, skip) {

    let count = 0;

    search(object, skip);


    function search(obj, skip) {
        for (let key in obj) {
            if (skip && skip === key) {
                continue;
            } else {
                if (obj.hasOwnProperty(key)){
                    if ( checkDeep(obj[key]) ) {
                        search(obj[key], skip)
                    } else if ( checkVoid(obj[key]) ) {
                        count ++;
                    }
                }
            }
        }
        return count;
    }

    function checkDeep(value) {
        return typeof value === 'object' && Object.keys(value).length !== 0;
    }

    function checkVoid(value) {
        return typeof value === 'object' && Object.keys(value).length === 0 ||
            typeof value === 'string' && Object.keys(value).length === 0
    }

    return count;
}