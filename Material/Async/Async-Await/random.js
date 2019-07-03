async function f() {
    return 1;
}

f().then(function (op) {
    console.log(op)
}); // 1


async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait till the promise resolves (*)

    alert(result); // "done!"
}

f();


async function f() {

    try {
        let response = await fetch('http://no-such-url');
    } catch (err) {
        alert(console.log); // TypeError: failed to fetch
    }
}

f();

async function f() {
    let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(console.log); // TypeError: failed to fetch // (*)


