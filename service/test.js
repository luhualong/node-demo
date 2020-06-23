/**
 * 
 * @param {arr=[
 * {a,b,c,children:[{a,b,c,children}]}
 * ]} arr 
 */
function flatten(arr) {
    let flattend = [];
    (function flat(arr) {
        arr.forEach(element => {
            flattend.push(element)
            if (element.children && element.children.length > 0) {
                flat(element.children)
            }
        });
    })(arr);
    console.log(flattend);
    return flattend;
}

function selectIds(arr, id) {
    let a = [];
    function getNode(node) {
        a.push(node.id);
        if (node.id === id) {
            return;
        }
        if (node.children && node.children.length > 0) {
            const ol = a.length;
            for (let citem of node.children) {

                getNode(citem);
                if (a.length > 0 && a[a.length - 1] === id) {
                    return;
                }
            };
        } else {
            console.log(node.id, a)
            if (a[a.length - 1] !== id) {
                a.splice(a.length - 1, 1);
            }
        }
    }
    for (let item of arr) {
        getNode(item);
        if (a.length > 0 && a[a.length - 1] === id) {
            return a;
        } else {
            a.splice(1, a.length);
        }
    }

    return a;
}

const arr = [
    {
        id: 1,
        a: '1',
        b: '2',
        children: [
            {
                a: '2',
                b: 2,
                id: 5,
                children: [{
                    a: '3',
                    b: 4,
                    id: 4
                }]
            }
        ]
    },
    {
        id: 2,
        a: '1',
        b: '2',
        children: [
            {
                a: '2',
                b: 2,
                id: 6,
                children: [{
                    a: '3',
                    b: 4,
                    id: 7,
                }, {
                    a: '3',
                    b: 4,
                    id: 9,
                    children: [{
                        a: '3',
                        b: 4,
                        id: 10,
                    }, {
                        a: '3',
                        b: 4,
                        id: 11,
                    }]
                }]
            }
        ]
    },{
        id:99
    }
];
console.log(selectIds(arr, 2));