$(document).ready(function () {

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
// array of data input

    let arr = [
        { temperature: "28 F",
        wind: "30 mph",
        directiondegree: "114",
        name: "TENUTA TOSCANA",
        name2: "Tuscany, Italy",
        location: "20.847787° N / -12.589811° W",
        img: "https://www.datocms-assets.com/128889/1742426220-horseback.jpg?fit=max&h=1200&w=1000"
           
        },
        {
            temperature: "34 F",
            wind: "20 mph",
            directiondegree: "316",
            name: "MONCAYO GOLF & OCEAN CLUB",
            name2: "Fajardo, Puerto Rico",
            location: "45.847787° N / -172.589811° W",
            img: "https://www.datocms-assets.com/128889/1726232913-paesaggio_tappainer_2022-copy.jpeg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "35 F",
            wind: "10 mph",
            directiondegree: "218",
            name: "TERRITORY 1889 GOLF & LAKE CLUB",
            name2: "Flathead Lake, Montana",
            location: "30.847787° N / 62.589811° W",
            img: "https://www.datocms-assets.com/128889/1749834672-binyan_hhc3121_wardvillageblocke_s020_ext_superman_final5000.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "29 F",
            wind: "17 mph",
            directiondegree: "314",
            name: "The Hamptons, New York",
            name2: "The Hills",
            location: "40.847787° N / -72.589811° W",
            img: "https://www.datocms-assets.com/128889/1745433311-25718_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"  
        },
        {
            temperature: "38 F",
            wind: "70 mph",
            directiondegree: "144",
            name: "MOHALA",
            name2: "Honolulu, Hawaii",
            location: "40.847787° N / -72.589811° W",
            img: "https://www.datocms-assets.com/128889/1721142462-15507_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
        }
    ];

    let i = 0;
    function updateUI() {
        $("#temp").text(arr[i].temperature);
        $("#title1").text(arr[i].name);
        $("#title").text(arr[i].name2);
        $("#wind").text(arr[i].wind);
        $("#direction").text(arr[i].directiondegree + "°");
        $("#location").text(arr[i].location);
        $("#mainImg").attr("src", arr[i].img);
    }

    /* initial load */
    updateUI();


    $("#nextBtn").on("click", function () {
        i = (i + 1) % arr.length;
        updateUI();
    });

    $("#prevBtn").on("click", function () {
        i = (i - 1 + arr.length) % arr.length;
        updateUI();
    });


    $("#h").on("click", function () {
        $("html, body").animate(
            { scrollTop: window.innerHeight },
            600
        );
    });

});