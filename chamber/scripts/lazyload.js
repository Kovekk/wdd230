function loadImages (picture) {
    const imgs = picture.children;
    console.log(picture.children);


    Array.from(imgs).forEach((img) => {
        console.log("please?");
    });



    // switch (type) {
    //     case "img":
    //         image.setAttribute("src", image.getAttribute("data-src"));
    //         image.onload = () => {
    //             image.removeAttribute("data-src");
    //         };
    //             break;
    //     case "source":
    //         image.setAttribute("srcset", image.getAttribute("data-srcset"));
    //         image.onload = () => {
    //             image.removeAttribute("data-srcset");
    //         };
    //         break;
    // }
}
    
    
// let images = document.querySelectorAll("img[data-src]");
// let sources = document.querySelectorAll("source[data-srcset]");
let pictures = document.querySelectorAll("main picture");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    pictures.forEach((picture) => {
        observer.observe(picture);
    });
} else {
    sources.forEach(loadImages);
    console.log("not running previous code.")
}