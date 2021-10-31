console.log("\n---Program started---\n");
console.log("\n...Generating UI");
console.log("\n...Loading Data");

const database =
{
    data_1: [56, 44, 37, 12, 64, 9, 26],
    data_2: "$126",

    getData_1()
    {
        return new Promise(resolve => setTimeout(() => resolve(this.data_1), (Math.random() * 10000)));
    },

    getData_2()
    {
        return new Promise(resolve => setTimeout(() => resolve(this.data_2), (Math.random() * 10000)));
    }
}

console.log("\n...Starting calculations")
async function calc_func()
{
    let start_time = new Date().getSeconds();
    let data_1 = await database.getData_1();
    let res_1 = Math.max(...data_1);
    console.log(`\nresult 1: ${res_1}. Took ${(new Date().getSeconds()) - start_time} seconds.`);
    
    start_time = new Date().getSeconds();
    let data_2 = await database.getData_2();
    data_2 = parseInt(data_2.slice(1));
    let res_2 = Math.pow(data_2, 2);
    console.log(`\nresult 2: ${res_2}. Took ${(new Date().getSeconds()) - start_time} seconds.`);
}
calc_func()

console.log("\n...Wrapping up")
console.log("\n---Done---")