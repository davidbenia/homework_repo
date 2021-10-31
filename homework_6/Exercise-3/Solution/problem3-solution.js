function func_1()
{
    return new Promise(resolve => setTimeout(() => resolve(Math.random() * 100000), Math.random() * 10000));
}

function func_2(num)
{
    return Math.pow(num, 3);
}

async function higherOrderFunc(fn1, fn2)
{
    let time = new Date().getSeconds();
    let val = await fn1();
    console.log(`result: ${fn2(val)}`);
    console.log(`\nTook ${new Date().getSeconds() - time} seconds.`)
}

higherOrderFunc(func_1, func_2);