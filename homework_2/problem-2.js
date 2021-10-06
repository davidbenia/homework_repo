var application = {
    alertBox: function (value) {
      alert(value);
      console.log(this);
    },

    initialize: function () {
      setTimeout(function () {this.alertBox("hello world");}.bind(this), 2000);
    },
};

/* ეს მეთოდი გამოიძახება global კონტექსტიდან, მაგრამ bind(this)-ის დროს ვიმყოფებოდით application ობიექტში,
სადაც this წარმოადგენდა ამ ობიექტს, this.alertBox მიუთითებს ამ ობიექტის მეთოდს და არა window.alertBox რაც არ არსებობს. */
application.initialize();

/*
ამ შემთხვევაში ვიყენებთ arrow function-ს. ის მემკვიდრეობით იღებს კონტექსტს იმ ობიექტისგან, სადაც ეს ფუნქცია
იყო გამოცხადებული. აქედან გამომდინარე, იმის მაგივრად, რომ this აღიქვას როგორც global კონტექსტი (რადგან initialize() არის გამოძახებული global კონტექსტში),
this მიუთითებს application ობიექტს, რადგან ამ ობიექტის მეთოდში ვაცხადებთ ამ arrow ფუნქციას.
*/
application.initialize = 
function () {setTimeout(() => this.alertBox('hello world'), 2000)};
application.initialize();