# სავარჯიშო 2

ამოცანა შეეხება ასინქრონულ ფუნქციებს

## დაწერეთ ასინქრონული ფუნქცია რომელიც დაელოდება 2 სხვადასხვა მონაცემს, დაამუშავებს მათ და დაბეჭდავს შედეგს, სინქრონული კოდის შეფერხების გარეშე.

- დაამატეთ თქვენს კოდს შემდეგი სინქრონული ნაწილი:

```
console.log("\n---Program started---\n");
console.log("\n...Generating UI");
console.log("\n...Loading Data");

// asynchronous code goes here...

console.log("\n...Wrapping up")
console.log("\n---Done---")
```

> - დაამატეთ database ობიექტი, რომელსაც ექნება 2 თვისება და 2 მეთოდი:
>   > data_1 = [56, 44, 37, 12, 64, 9, 26]
>   > data_2 = "$126"
>   > getData_1 აბრუნებს promise-ს, რომელიც იყენებს setTimeout ფუნქციას და callback ფუნქცია აბრუნებს data_1-ს. დრო რანდომულად გენერირდება 0-10 წამამდე.
>   > getData_2 აბრუნებს promise-ს, რომელიც იყენებს setTimeout ფუნქციას და callback ფუნქცია აბრუნებს data_2-ს. დრო რანდომულად გენერირდება 0-10 წამამდე.

> - შექმენით ასინქრონული ფუნქცია რომელიც მიიღებს 2 არგუმენტს
>   data_1, data_2;
>   დაბეჭდავს data_1-ის მაქსიმუმს;
>   დაბეჭდავს data_2-ის კვადრატს;
